import { BadRequestException, Injectable, OnModuleInit } from '@nestjs/common'
import { DistanceBreakpoint, Partner } from '@prisma/client'
import { GeoService } from 'src/geo/geo.service'
import { CalculatePriceDto } from 'src/orders/dto/calculate-price.dto'
import { CreateOrderDto } from 'src/orders/dto/create-order.dto'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class PricingService implements OnModuleInit {
	private settings: Map<string, number> = new Map()

	private readonly GLOBAL_MINIMUM_FARE = 50.0

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

	getSetting(key: string): number | undefined {
		return this.settings.get(key)
	}

	async calculatePriceRange(dto: CalculatePriceDto, locale: string = 'en') {
		const fallbackLocale = 'en'

		const [allVehicleTypes, region, geoData, pricePerKm, minimumFare] =
			await Promise.all([
				this.prisma.vehicleType.findMany({
					include: {
						translations: {
							where: { locale: { in: [locale, fallbackLocale] } }
						}
					}
				}),
				this.prisma.region.findUnique({
					where: { id: dto.regionId },
					include: { breakpoints: { orderBy: { distanceKm: 'asc' } } }
				}),
				this.geoService.getDistanceAndDuration(dto.waypoints),
				this.settings.get('GLOBAL_PRICE_PER_KM'),

				this.settings.get('GLOBAL_MINIMUM_FARE') || this.GLOBAL_MINIMUM_FARE
			])

		if (!region || !region.latitude || !region.longitude) {
			throw new BadRequestException(
				'Invalid region or coordinates are not set.'
			)
		}
		if (!pricePerKm || !minimumFare) {
			throw new BadRequestException('Global pricing settings are missing.')
		}

		const pickupPoint = dto.waypoints[0]
		const dropoffPoint = dto.waypoints[dto.waypoints.length - 1]
		const maxDistanceToCenterKm = Math.max(
			this.calculateDistance(
				region.latitude,
				region.longitude,
				pickupPoint.lat,
				pickupPoint.lng
			),
			this.calculateDistance(
				region.latitude,
				region.longitude,
				dropoffPoint.lat,
				dropoffPoint.lng
			)
		)
		const breakpointCoefficient = this.getCoefficient(
			maxDistanceToCenterKm,
			region.breakpoints
		)
		const { distanceInKm } = geoData

		const realTypePrices = allVehicleTypes
			.filter(vt => vt.code !== 'BUS')
			.map(vehicleType => {
				const vehicleMultiplier = vehicleType.priceMultiplier.toNumber()

				let calculatedPrice =
					distanceInKm * pricePerKm * breakpointCoefficient * vehicleMultiplier

				if (calculatedPrice < minimumFare) {
					calculatedPrice = minimumFare
				}

				const translation =
					vehicleType.translations.find(t => t.locale === locale) ||
					vehicleType.translations[0]

				const finalPrice = Math.ceil(calculatedPrice)

				return {
					id: vehicleType.id,
					code: vehicleType.code,
					name: translation?.name || vehicleType.code,
					price: finalPrice,
					multiplier: vehicleMultiplier
				}
			})

		let anyPrice = distanceInKm * pricePerKm
		if (anyPrice < minimumFare) {
			anyPrice = minimumFare
		}
		const finalAnyPrice = Math.ceil(anyPrice)

		const anyPriceObject = {
			id: 'ANY_VIRTUAL_ID',
			code: 'ANY',
			name: locale === 'uk' ? 'Будь-який' : 'Any',
			price: finalAnyPrice
		}

		return [anyPriceObject, ...realTypePrices]
	}

	private async calculateBasePrice(
		dto: CreateOrderDto,
		isAnyClassOrder: boolean = false
	): Promise<number> {
		const [vehicleType, region, geoData, pricePerKm, minimumFare] =
			await Promise.all([
				this.prisma.vehicleType.findUnique({
					where: { id: dto.vehicleTypeId }
				}),
				this.prisma.region.findUnique({
					where: { id: dto.regionId },
					include: { breakpoints: { orderBy: { distanceKm: 'asc' } } }
				}),
				this.geoService.getDistanceAndDuration(dto.waypoints),
				this.settings.get('GLOBAL_PRICE_PER_KM'),
				this.settings.get('GLOBAL_MINIMUM_FARE') || this.GLOBAL_MINIMUM_FARE
			])

		if (
			!vehicleType ||
			!region ||
			!region.latitude ||
			!region.longitude ||
			!pricePerKm ||
			!minimumFare
		) {
			throw new BadRequestException('Invalid data for price calculation.')
		}

		const pickupPoint = dto.waypoints[0]
		const dropoffPoint = dto.waypoints[dto.waypoints.length - 1]
		const maxDistanceToCenterKm = Math.max(
			this.calculateDistance(
				region.latitude,
				region.longitude,
				pickupPoint.lat,
				pickupPoint.lng
			),
			this.calculateDistance(
				region.latitude,
				region.longitude,
				dropoffPoint.lat,
				dropoffPoint.lng
			)
		)

		const breakpointCoeff = this.getCoefficient(
			maxDistanceToCenterKm,
			region.breakpoints
		)
		const vehicleCoeff = vehicleType.priceMultiplier.toNumber()

		const finalBreakpointCoeff = isAnyClassOrder ? 1.0 : breakpointCoeff
		const finalVehicleCoeff = isAnyClassOrder ? 1.0 : vehicleCoeff

		let calculatedPrice =
			geoData.distanceInKm *
			pricePerKm *
			finalBreakpointCoeff *
			finalVehicleCoeff

		if (calculatedPrice < minimumFare) {
			calculatedPrice = minimumFare
		}

		return calculatedPrice
	}

	async calculateFinalPrice(
		dto: CreateOrderDto,
		partner?: Partner,
		isAnyClassOrder: boolean = false
	): Promise<number> {
		const optionsPrice = await this.calculateOptionsPrice(dto.selectedOptions)

		const baseOutboundPrice = await this.calculateBasePrice(
			dto,
			isAnyClassOrder
		)

		let totalPrice = baseOutboundPrice + optionsPrice

		if (dto.return_waypoints && dto.return_trip_datetime) {
			const returnDto = {
				...dto,
				waypoints: dto.return_waypoints,
				trip_datetime: dto.return_trip_datetime
			}

			const baseReturnPrice = await this.calculateBasePrice(
				returnDto,
				isAnyClassOrder
			)

			totalPrice += baseReturnPrice + optionsPrice
		}

		if (partner && partner?.markupPercent?.toNumber() > 0) {
			const markup = partner.markupPercent.toNumber()
			totalPrice *= 1 + markup / 100
		}

		return Math.ceil(totalPrice)
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
				id: { in: optionIds },
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
