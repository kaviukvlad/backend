import { BadRequestException, Injectable, OnModuleInit } from '@nestjs/common'
import { Partner } from 'prisma/generated/client'
import { GeoService } from 'src/geo/geo.service'
import { CreateOrderDto } from 'src/orders/dto/create-order.dto'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class PricingService implements OnModuleInit {
	private settings: Map<string, number> = new Map()

	constructor(
		private prisma: PrismaService,
		private geoService: GeoService
	) {}

	async onModuleInit() {
		await this.loadPricingSettings()
		console.log('✅ Pricing settings loaded successfully.')
	}

	async loadPricingSettings(): Promise<void> {
		const settingsFromDb = await this.prisma.pricingSetting.findMany()
		this.settings = new Map(
			settingsFromDb.map(setting => [setting.key, setting.value.toNumber()])
		)
	}

	async calculateFinalPrice(
		dto: CreateOrderDto,
		partner?: Partner
	): Promise<number> {
		const basePrice = await this.calculateBasePrice(dto)

		const optionsPrice = await this.calculateOptionsPrice(dto.selectedOptions)

		let finalPrice = basePrice + optionsPrice

		if (partner && partner?.markupPercent?.toNumber() > 0) {
			const markup = partner.markupPercent.toNumber()
			finalPrice *= 1 + markup / 100
		}

		return parseFloat(finalPrice.toFixed(2))
	}

	private async calculateBasePrice(dto: CreateOrderDto): Promise<number> {
		const tariff = await this.prisma.tariff.findUnique({
			where: {
				regionId_vehicleTypeId: {
					regionId: dto.regionId,
					vehicleTypeId: dto.vehicleTypeId
				}
			}
		})

		if (!tariff || !tariff.isActive) {
			throw new BadRequestException(
				'Fares for this route and car type are not available.'
			)
		}

		const { distanceInKm, durationInMinutes } =
			await this.geoService.getDistanceAndDuration(dto.waypoints)

		const priceFromDistance = Number(tariff.pricePerKm) * distanceInKm
		const priceFromDuration = Number(tariff.pricePerMinute) * durationInMinutes

		let calculatedPrice =
			Number(tariff.baseFare) + priceFromDistance + priceFromDuration

		const nightSurchargeMultiplier =
			this.settings.get('NIGHT_SURCHARGE_MULTIPLIER') || 1.0
		const tripHour = new Date(dto.trip_datetime).getHours()
		if ((tripHour >= 22 || tripHour < 6) && nightSurchargeMultiplier > 1) {
			calculatedPrice *= nightSurchargeMultiplier
		}

		const peakHourFee = this.settings.get('PEAK_HOUR_FEE') || 0
		const isPeakHour =
			(tripHour >= 8 && tripHour <= 10) || (tripHour >= 17 && tripHour <= 19)
		if (isPeakHour && peakHourFee > 0) {
			calculatedPrice += peakHourFee
		}

		if (calculatedPrice < Number(tariff.minimumFare)) {
			calculatedPrice = Number(tariff.minimumFare)
		}

		return calculatedPrice
	}

	private async calculateOptionsPrice(
		selectedOptions?: { optionId: string; quantity?: number }[]
	): Promise<number> {
		if (!selectedOptions?.length) {
			return 0
		}

		const optionIds = selectedOptions.map(opt => opt.optionId)
		const optionsFromDb = await this.prisma.orderOption.findMany({
			where: {
				id: {
					in: optionIds
				},
				isActive: true
			},
			select: {
				id: true,
				price: true,
				code: true
			}
		})

		if (optionsFromDb.length !== optionIds.length) {
			throw new BadRequestException(
				'One or more of the selected options are invalid or inactive.'
			)
		}

		return selectedOptions.reduce((sum, selectedOpt) => {
			const dbOption = optionsFromDb.find(
				opt => opt.id === selectedOpt.optionId
			)!

			if (dbOption.code.startsWith('CHILD_')) {
				return sum
			}

			const quantity = selectedOpt.quantity || 1
			return sum + Number(dbOption.price) * quantity
		}, 0)
	}

	getSetting(key: string): number | undefined {
		return this.settings.get(key)
	}
}
