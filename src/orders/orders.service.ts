import { InjectQueue } from '@nestjs/bull'
import {
	BadRequestException,
	ForbiddenException,
	Injectable,
	NotFoundException
} from '@nestjs/common'
import type { Queue } from 'bull'
import { randomUUID } from 'crypto'
import { OrderOption, Partner, Prisma } from 'prisma/generated/client'
import { GeoService } from 'src/geo/geo.service'
import { NotificationsService } from 'src/notifications/notifications.service'
import { CREATE_PAYMENT_JOB, PAYMENT_QUEUE } from 'src/payment/constants'
import { PaymentService } from 'src/payment/payment.service'
import { PricingService } from 'src/pricing/pricing.service'
import { PrismaService } from 'src/prisma.service'
import { CreateOrderDto } from './dto/create-order.dto'
import { SearchOrderDto } from './dto/search-order.dto'
import { UpdateOrderDto } from './dto/update-order.dto'

@Injectable()
export class OrdersService {
	constructor(
		private prisma: PrismaService,
		private geoService: GeoService,
		private pricingService: PricingService,
		private paymentService: PaymentService,
		private notificationsService: NotificationsService,
		@InjectQueue(PAYMENT_QUEUE) private paymentQueue: Queue
	) {}

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

	async create(
		dto: CreateOrderDto,
		options: {
			clientId?: string
			partner?: Partner
			paymentIntentId?: string
		} = {}
	) {
		const tripTime = new Date(dto.trip_datetime)
		const now = new Date()
		const twentyFourHoursInMs = 24 * 60 * 60 * 1000

		if (tripTime.getTime() - now.getTime() < twentyFourHoursInMs) {
			throw new BadRequestException(
				'Trip date and time must be at least 24 hours in the future.'
			)
		}

		const { clientId, paymentIntentId, partner } = options

		const region = await this.prisma.region.findUnique({
			where: { id: dto.regionId }
		})
		if (!region) {
			throw new NotFoundException(`Region with ID ${dto.regionId} not found.`)
		}

		if (region.latitude && region.longitude && region.radiusKm) {
			const pickupPoint = dto.waypoints[0]
			if (
				!pickupPoint ||
				typeof pickupPoint.lat !== 'number' ||
				typeof pickupPoint.lng !== 'number'
			) {
				throw new BadRequestException('Invalid pickup point coordinates.')
			}
			const distance = this.calculateDistance(
				region.latitude,
				region.longitude,
				pickupPoint.lat,
				pickupPoint.lng
			)
			if (distance > region.radiusKm) {
				throw new BadRequestException(
					`The pickup location is outside our ${region.radiusKm} km service area for this region.`
				)
			}
		}

		const vehicleType = await this.prisma.vehicleType.findUnique({
			where: { id: dto.vehicleTypeId },
			select: { code: true }
		})
		if (!vehicleType) {
			throw new BadRequestException(
				`VehicleType with ID ${dto.vehicleTypeId} not found.`
			)
		}

		const { distanceInKm, durationInMinutes } =
			await this.geoService.getDistanceAndDuration(dto.waypoints)

		const optionsFromDb = dto.selectedOptions?.length
			? await this.prisma.orderOption.findMany({
					where: {
						id: { in: dto.selectedOptions.map(o => o.optionId) }
					}
				})
			: []

		const baseOrderData = {
			routeWaypoints: dto.waypoints as any,
			customerEmail: dto.customerEmail,
			trip_datetime: new Date(dto.trip_datetime),
			passenger_count: dto.passenger_count,
			regionId: dto.regionId,
			flight_number: dto.flight_number,
			notes: dto.notes,
			luggage_standard: dto.luggage_standard,
			luggage_small: dto.luggage_small,
			distanceInKm,
			durationInMinutes,
			vehicleTypeId: dto.vehicleTypeId,
			clientId: clientId || null,
			partnerId: partner?.id || null,
			selectedOptions: {
				create: dto.selectedOptions?.map(opt => {
					const dbOption = optionsFromDb.find(o => o.id === opt.optionId)
					if (!dbOption) {
						throw new BadRequestException(
							`Invalid order option ID: ${opt.optionId}`
						)
					}
					return {
						quantity: opt.quantity || 1,
						priceAtTimeOfOrder: dbOption.price,
						option: { connect: { id: opt.optionId } }
					}
				})
			}
		}

		if (vehicleType.code === 'BUS') {
			const busOrder = await this.prisma.order.create({
				data: {
					...baseOrderData,
					price: 0,
					status: 'PENDING_MANUAL_CONFIRMATION',
					paymentIntentId: null
				}
			})

			await this.notificationsService.sendBusOrderNotification(busOrder)

			return busOrder
		} else {
			if (paymentIntentId) {
				const finalPrice = await this.pricingService.calculateFinalPrice(
					dto,
					partner
				)
				const newOrder = await this.prisma.order.create({
					data: {
						...baseOrderData,
						price: finalPrice,
						status: 'NEW',
						paymentIntentId: paymentIntentId
					}
				})
				return newOrder
			}

			const finalPrice = await this.pricingService.calculateFinalPrice(
				dto,
				partner
			)
			const clientJobId = randomUUID()

			await this.paymentQueue.add(
				CREATE_PAYMENT_JOB,
				{
					amount: finalPrice,
					currency: 'EUR',
					orderDetails: dto,
					clientId: clientId
				},
				{ jobId: clientJobId }
			)

			return {
				jobId: clientJobId,
				message: 'Payment creation has been queued.'
			}
		}
	}

	async findAll(dto: SearchOrderDto) {
		const where: Prisma.OrderWhereInput = {}

		if (dto.search) {
			const searchTerm = dto.search.toLowerCase()
			where.OR = [
				{ id: { contains: searchTerm, mode: 'insensitive' } },
				{ customerEmail: { contains: searchTerm, mode: 'insensitive' } },
				{ flight_number: { contains: searchTerm, mode: 'insensitive' } },
				{ notes: { contains: searchTerm, mode: 'insensitive' } }
			]
		}

		if (dto.status?.length) {
			where.status = { in: dto.status }
		}

		if (dto.regionId) {
			where.regionId = dto.regionId
		}
		if (dto.driverId) {
			where.driverId = dto.driverId
		}

		if (dto.startDate || dto.endDate) {
			where.trip_datetime = {
				gte: dto.startDate ? new Date(dto.startDate) : undefined,
				lte: dto.endDate ? new Date(dto.endDate) : undefined
			}
		}

		return this.prisma.order.findMany({
			where,
			orderBy: {
				createdAt: 'desc'
			},
			include: {
				selectedOptions: {
					include: {
						option: true
					}
				},
				driver: true,
				region: true
			}
		})
	}

	async findOne(id: string) {
		const order = await this.prisma.order.findUnique({
			where: { id },
			include: {
				selectedOptions: {
					include: {
						option: true
					}
				}
			}
		})
		if (!order) {
			throw new NotFoundException(`Order with ID ${id} not found.`)
		}
		return order
	}

	async remove(id: string) {
		await this.findOne(id)
		return this.prisma.order.update({
			where: { id },
			data: { status: 'CANCELLED' }
		})
	}

	async restore(id: string) {
		const order = await this.findOne(id)
		if (order.status !== 'CANCELLED') {
			throw new BadRequestException(
				'Order is not cancelled and cannot be restored.'
			)
		}
		return this.prisma.order.update({
			where: { id },
			data: { status: 'NEW' }
		})
	}

	async copy(id: string) {
		const originalOrder = await this.findOne(id)

		const {
			id: _,
			status,
			createdAt,
			updatedAt,
			driverId,
			selectedOptions,
			...orderData
		} = originalOrder

		return this.prisma.order.create({
			data: {
				...orderData,
				routeWaypoints: originalOrder.routeWaypoints as any,
				status: 'NEW',
				selectedOptions: {
					create: selectedOptions.map(opt => ({
						optionId: opt.optionId,
						quantity: opt.quantity,
						priceAtTimeOfOrder: opt.priceAtTimeOfOrder
					}))
				}
			}
		})
	}

	async update(id: string, dto: UpdateOrderDto) {
		const order = await this.findOne(id)

		const partner = order.partnerId
			? await this.prisma.partner.findUnique({
					where: { id: order.partnerId }
				})
			: undefined

		let finalPrice = order.price.toNumber()
		let optionsFromDb: OrderOption[] = []

		if (dto.price !== undefined || dto.selectedOptions || dto.vehicleTypeId) {
			const dataForPricing: CreateOrderDto = {
				price:
					dto.price ??
					order.price.toNumber() -
						order.selectedOptions.reduce(
							(sum, opt) => sum + Number(opt.priceAtTimeOfOrder) * opt.quantity,
							0
						),
				selectedOptions:
					dto.selectedOptions ??
					order.selectedOptions.map(o => ({
						optionId: o.optionId,
						quantity: o.quantity
					})),
				waypoints: (dto.waypoints || order.routeWaypoints) as any,
				customerEmail: dto.customerEmail || order.customerEmail!,
				trip_datetime: new Date(
					dto.trip_datetime || order.trip_datetime
				).toISOString(),
				passenger_count: dto.passenger_count || order.passenger_count,
				regionId: dto.regionId || order.regionId!,

				vehicleTypeId: dto.vehicleTypeId || order.vehicleTypeId
			}

			finalPrice = await this.pricingService.calculateFinalPrice(
				dataForPricing,
				partner ?? undefined
			)

			if (dto.selectedOptions) {
				optionsFromDb = await this.prisma.orderOption.findMany({
					where: { id: { in: dto.selectedOptions.map(o => o.optionId) } }
				})
			}
		}

		return this.prisma.$transaction(async tx => {
			if (dto.selectedOptions) {
				await tx.orderToOption.deleteMany({
					where: { orderId: id }
				})
			}

			const { selectedOptions, waypoints, ...restDto } = dto

			const updatedOrder = await tx.order.update({
				where: { id },
				data: {
					...restDto,
					price: finalPrice,
					...(waypoints && { routeWaypoints: waypoints as any }),
					...(dto.trip_datetime && {
						trip_datetime: new Date(dto.trip_datetime)
					}),
					selectedOptions: {
						create: dto.selectedOptions?.map(opt => {
							const dbOption = optionsFromDb.find(o => o.id === opt.optionId)!
							return {
								optionId: opt.optionId,
								quantity: opt.quantity || 1,
								priceAtTimeOfOrder: dbOption.price
							}
						})
					}
				}
			})

			return updatedOrder
		})
	}

	async findMyOrders(clientId: string) {
		return this.prisma.order.findMany({
			where: {
				clientId: clientId
			},
			orderBy: {
				trip_datetime: 'desc'
			},
			include: {
				driver: {
					select: {
						name: true,
						user: {
							select: {
								phone: true
							}
						}
					}
				},
				car: {
					select: {
						brand: true,
						model: true,
						license_plate: true
					}
				}
			}
		})
	}

	async findForClient(clientId: string) {
		return this.prisma.order.findMany({
			where: {
				clientId: clientId
			},
			orderBy: {
				createdAt: 'desc'
			},
			include: {
				driver: {
					select: {
						name: true
					}
				},
				car: {
					select: {
						brand: true,
						model: true,
						license_plate: true
					}
				}
			}
		})
	}

	async cancelMyOrder(orderId: string, clientId: string) {
		const order = await this.prisma.order.findUnique({
			where: { id: orderId }
		})

		if (!order) {
			throw new NotFoundException(`Замовлення з ID ${orderId} не знайдено.`)
		}

		if (order.clientId !== clientId) {
			throw new ForbiddenException('Ви не можете скасувати це замовлення.')
		}

		if (['IN_PROGRESS', 'COMPLETED', 'CANCELLED'].includes(order.status)) {
			throw new BadRequestException('Це замовлення вже неможливо скасувати.')
		}

		if (order.paymentIntentId) {
			await this.paymentService.createRefund(order.paymentIntentId)
		}

		return this.prisma.order.update({
			where: { id: orderId },
			data: { status: 'CANCELLED' }
		})
	}

	async findMyOrderById(orderId: string, clientId: string) {
		const order = await this.prisma.order.findUnique({
			where: { id: orderId },
			include: {
				selectedOptions: {
					include: {
						option: true
					}
				},
				driver: {
					select: { name: true, user: { select: { phone: true } } }
				},
				car: {
					select: { brand: true, model: true, color: true, license_plate: true }
				}
			}
		})

		if (!order) {
			throw new NotFoundException(`Order with ID ${orderId} not found.`)
		}

		if (order.clientId !== clientId) {
			throw new ForbiddenException('You do not have access to this order.')
		}

		return order
	}
}
