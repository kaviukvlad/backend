import { BadRequestException, Injectable } from '@nestjs/common'
import { Partner } from 'prisma/generated/client'
import { GeoService } from 'src/geo/geo.service'
import { CreateOrderDto } from 'src/orders/dto/create-order.dto'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class PricingService {
	constructor(
		private prisma: PrismaService,
		private geoService: GeoService
	) {}

	async calculateFinalPrice(
		dto: CreateOrderDto,
		partner?: Partner
	): Promise<number> {
		const basePrice = dto.price

		const optionsPrice = await this.calculateOptionsPrice(dto.selectedOptions)

		let finalPrice = basePrice + optionsPrice

		if (partner && partner?.markupPercent?.toNumber() > 0) {
			const markup = partner?.markupPercent.toNumber()
			finalPrice = finalPrice * (1 + markup / 100)
		}

		return parseFloat(finalPrice.toFixed(2))
	}

	/*private async calculateBasePrice(dto: CreateOrderDto): Promise<number> {
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

		if (calculatedPrice < Number(tariff.minimumFare)) {
			calculatedPrice = Number(tariff.minimumFare)
		}

		return calculatedPrice
	}*/

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
			const quantity = selectedOpt.quantity || 1
			return sum + Number(dbOption.price) * quantity
		}, 0)
	}
}
