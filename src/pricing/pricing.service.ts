import { BadRequestException, Injectable, OnModuleInit } from '@nestjs/common'
import { DistanceBreakpoint, Partner } from '@prisma/client'
import { GeoService } from 'src/geo/geo.service'
import { CreateOrderDto } from 'src/orders/dto/create-order.dto'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class PricingService implements OnModuleInit {
	private settings: Map<string, number> = new Map()

	private calculateDistance(
		lat1: number,
		lon1: number,
		lat2: number,
		lon2: number
	): number {
		const R = 6371
		const dLat = (lat2 - lat1) * (Math.PI / 180)
		const dLon = (lon2 - lon1) * (Math.PI / 180)
		const a =
			Math.sin(dLat / 2) * Math.sin(dLat / 2) +
			Math.cos(lat1 * (Math.PI / 180)) *
				Math.cos(lat2 * (Math.PI / 180)) *
				Math.sin(dLon / 2) *
				Math.sin(dLon / 2)
		const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
		return R * c
	}

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
		const [tariff, region] = await Promise.all([
			this.prisma.tariff.findUnique({
				where: {
					regionId_vehicleTypeId: {
						regionId: dto.regionId,
						vehicleTypeId: dto.vehicleTypeId
					}
				}
			}),
			this.prisma.region.findUnique({
				where: { id: dto.regionId },
				include: {
					breakpoints: {
						orderBy: {
							distanceKm: 'asc'
						}
					}
				}
			})
		])

		if (!tariff || !tariff.isActive) {
			throw new BadRequestException(
				'Fares for this route and car type are not available.'
			)
		}
		if (!region || !region.latitude || !region.longitude) {
			throw new BadRequestException('Region center coordinates are not set.')
		}

		const { distanceInKm } = await this.geoService.getDistanceAndDuration(
			dto.waypoints
		)
		const pricePerKm = Number(tariff.pricePerKm)

		const pickupPoint = dto.waypoints[0]
		const dropoffPoint = dto.waypoints[dto.waypoints.length - 1]

		const distanceFromCenterToA = this.calculateDistance(
			region.latitude,
			region.longitude,
			pickupPoint.lat,
			pickupPoint.lng
		)
		const distanceFromCenterToB = this.calculateDistance(
			region.latitude,
			region.longitude,
			dropoffPoint.lat,
			dropoffPoint.lng
		)

		const maxDistanceFromCenter = Math.max(
			distanceFromCenterToA,
			distanceFromCenterToB
		)

		const coefficient = this.getCoefficient(
			maxDistanceFromCenter,
			region.breakpoints
		)

		let calculatedPrice = distanceInKm * pricePerKm * coefficient

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

		const minimumFare = this.settings.get('GLOBAL_MINIMUM_FARE') || 50.0
		if (calculatedPrice < minimumFare) {
			calculatedPrice = minimumFare
		}

		return calculatedPrice
	}

	private getCoefficient(
		distance: number,
		breakpoints: DistanceBreakpoint[]
	): number {
		if (!breakpoints.length) {
			return 1.0
		}

		for (const bp of breakpoints) {
			if (distance <= bp.distanceKm) {
				return bp.coefficient.toNumber()
			}
		}

		return breakpoints[breakpoints.length - 1].coefficient.toNumber()
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
