import { BadRequestException, Injectable, OnModuleInit } from '@nestjs/common'
import { Partner } from '@prisma/client'
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
		console.log(' Pricing settings loaded successfully.')
	}

	async loadPricingSettings(): Promise<void> {
		const settingsFromDb = await this.prisma.pricingSetting.findMany()
		this.settings = new Map(
			settingsFromDb.map(setting => [setting.key, setting.value.toNumber()])
		)
	}

	getSetting(key: string): number | undefined {
		return this.settings.get(key)
	}

	async getPricingComponents(dto: CreateOrderDto) {
		const pricePerKm = this.settings.get('GLOBAL_PRICE_PER_KM')
		const minimumFare = this.settings.get('GLOBAL_MINIMUM_FARE')

		if (!pricePerKm || !minimumFare) {
			throw new BadRequestException(
				'Global pricing settings (GLOBAL_PRICE_PER_KM or GLOBAL_MINIMUM_FARE) are missing.'
			)
		}

		const [vehicleType, region] = await Promise.all([
			this.prisma.vehicleType.findUnique({
				where: { id: dto.vehicleTypeId }
			}),
			this.prisma.region.findUnique({
				where: { id: dto.regionId },
				include: {
					breakpoints: { orderBy: { distanceKm: 'asc' } }
				}
			})
		])

		if (!vehicleType) {
			throw new BadRequestException('Invalid vehicle type selected.')
		}
		if (!region || !region.latitude || !region.longitude) {
			throw new BadRequestException(
				'Invalid region or coordinates are not set.'
			)
		}

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

		return {
			pricePerKm: pricePerKm,
			vehicleMultiplier: vehicleType.priceMultiplier.toNumber(),
			maxDistanceToCenterKm: parseFloat(maxDistanceFromCenter.toFixed(2)),
			breakpoints: region.breakpoints.map(bp => ({
				distanceKm: bp.distanceKm,
				coefficient: bp.coefficient.toNumber()
			})),
			minimumFare: minimumFare
		}
	}

	private async calculateBasePrice(
		dto: CreateOrderDto,
		isAnyClassOrder: boolean = false
	): Promise<number> {
		const components = await this.getPricingComponents(dto)

		const { distanceInKm } = await this.geoService.getDistanceAndDuration(
			dto.waypoints
		)

		const breakpointCoeff = this.getCoefficient(
			components.maxDistanceToCenterKm,
			components.breakpoints
		)
		const vehicleCoeff = components.vehicleMultiplier

		const finalBreakpointCoeff = isAnyClassOrder ? 1.0 : breakpointCoeff
		const finalVehicleCoeff = isAnyClassOrder ? 1.0 : vehicleCoeff

		let calculatedPrice =
			distanceInKm *
			components.pricePerKm *
			finalBreakpointCoeff *
			finalVehicleCoeff

		if (calculatedPrice < components.minimumFare) {
			calculatedPrice = components.minimumFare
		}

		return calculatedPrice
	}

	async calculateFinalPrice(
		dto: CreateOrderDto,
		partner?: Partner,
		isAnyClassOrder: boolean = false
	): Promise<number> {
		const basePrice = await this.calculateBasePrice(dto, isAnyClassOrder)

		const optionsPrice = await this.calculateOptionsPrice(dto.selectedOptions)

		let finalPrice = basePrice + optionsPrice

		if (partner && partner?.markupPercent?.toNumber() > 0) {
			const markup = partner.markupPercent.toNumber()
			finalPrice *= 1 + markup / 100
		}

		return parseFloat(finalPrice.toFixed(2))
	}

	private getCoefficient(
		distance: number,
		breakpoints: { distanceKm: number; coefficient: number }[]
	): number {
		if (!breakpoints.length) {
			return 1.0
		}

		for (const bp of breakpoints) {
			if (distance <= bp.distanceKm) {
				return bp.coefficient
			}
		}

		return breakpoints[breakpoints.length - 1].coefficient
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
}
