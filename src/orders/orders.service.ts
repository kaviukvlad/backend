import { Cache, CACHE_MANAGER } from '@nestjs/cache-manager' // 👈 ВИПРАВЛЕНО
import {
	BadRequestException,
	ForbiddenException,
	Inject,
	Injectable,
	InternalServerErrorException,
	NotFoundException
} from '@nestjs/common'
import { OrderOption, Partner, Prisma } from '@prisma/client'
import { randomUUID } from 'crypto'
import { GeoService } from 'src/geo/geo.service'
import { NotificationsService } from 'src/notifications/notifications.service'
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
		//@InjectQueue(PAYMENT_QUEUE) private paymentQueue: Queue
		@Inject(CACHE_MANAGER) private cacheManager: Cache
	) {}

	async create(
		dto: CreateOrderDto,
		options: {
			clientId?: string
			partner?: Partner
			paymentIntentId?: string
		} = {}
	) {
		const { clientId, paymentIntentId, partner } = options

		const tripTime = new Date(dto.trip_datetime)
		const now = new Date()
		const twentyFourHoursInMs = 24 * 60 * 60 * 1000

		if (tripTime.getTime() - now.getTime() < twentyFourHoursInMs) {
			throw new BadRequestException(
				'Trip date and time must be at least 24 hours in the future.'
			)
		}

		if (dto.return_trip_datetime) {
			const returnTripTime = new Date(dto.return_trip_datetime)
			if (returnTripTime.getTime() - now.getTime() < twentyFourHoursInMs) {
				throw new BadRequestException(
					'Return trip date must also be 24 hours in the future.'
				)
			}
			if (returnTripTime.getTime() <= tripTime.getTime()) {
				throw new BadRequestException(
					'Return trip must be after the outbound trip.'
				)
			}
		}

		const region = await this.prisma.region.findUnique({
			where: { id: dto.regionId }
		})
		if (!region) {
			throw new NotFoundException(`Region with ID ${dto.regionId} not found.`)
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

		if (vehicleType.code === 'BUS') {
			const { distanceInKm, durationInMinutes } =
				await this.geoService.getDistanceAndDuration(dto.waypoints)

			const optionsFromDb = dto.selectedOptions?.length
				? await this.prisma.orderOption.findMany({
						where: {
							id: { in: dto.selectedOptions.map(o => o.optionId) }
						}
					})
				: []

			const busOrder = await this.prisma.order.create({
				data: {
					routeWaypoints: dto.waypoints as any,
					customerEmail: dto.customerEmail,
					trip_datetime: tripTime,
					passenger_count: dto.passenger_count,
					regionId: dto.regionId,
					flight_number: dto.flight_number,
					notes: dto.notes,
					luggage_standard: dto.luggage_standard || 0,
					luggage_small: dto.luggage_small || 0,
					distanceInKm,
					durationInMinutes,
					vehicleTypeId: dto.vehicleTypeId,
					clientId: clientId || null,
					partnerId: partner?.id || null,
					isAvailableToAll: false,
					price: 0,
					status: 'PENDING_MANUAL_CONFIRMATION',
					paymentIntentId: null,
					bookingCode: randomUUID(),
					selectedOptions: {
						create: dto.selectedOptions?.map(opt => {
							const dbOption = optionsFromDb.find(o => o.id === opt.optionId)!
							return {
								quantity: opt.quantity || 1,
								priceAtTimeOfOrder: dbOption.price,
								option: { connect: { id: opt.optionId } }
							}
						})
					}
				}
			})
			await this.notificationsService.sendBusOrderNotification(busOrder)
			return busOrder
		}

		if (paymentIntentId) {
			const optionsPrice = await this.pricingService['calculateOptionsPrice'](
				dto.selectedOptions
			)

			const baseOutboundPrice = await this.pricingService['calculateBasePrice'](
				dto,
				dto.isAvailableToAll
			)
			const finalOutboundPrice = baseOutboundPrice + optionsPrice

			const { distanceInKm, durationInMinutes } =
				await this.geoService.getDistanceAndDuration(dto.waypoints)

			const bookingCode = randomUUID()
			const optionsFromDb = dto.selectedOptions?.length
				? await this.prisma.orderOption.findMany({
						where: {
							id: { in: dto.selectedOptions.map(o => o.optionId) }
						}
					})
				: []

			const outboundOrder = await this.prisma.order.create({
				data: {
					clientId: clientId || null,
					paymentIntentId: paymentIntentId,
					customerEmail: dto.customerEmail,
					regionId: dto.regionId,
					vehicleTypeId: dto.vehicleTypeId,
					isAvailableToAll: dto.isAvailableToAll ?? false,
					routeWaypoints: dto.waypoints as any,
					distanceInKm,
					durationInMinutes,
					price: finalOutboundPrice,
					status: 'NEW',
					trip_datetime: tripTime,
					notes: dto.notes,
					passenger_count: dto.passenger_count,
					flight_number: dto.flight_number,
					luggage_standard: dto.luggage_standard || 0,
					luggage_small: dto.luggage_small || 0,
					bookingCode: bookingCode,
					selectedOptions: {
						create: dto.selectedOptions?.map(opt => {
							const dbOption = optionsFromDb.find(o => o.id === opt.optionId)!
							return {
								quantity: opt.quantity || 1,
								priceAtTimeOfOrder: dbOption.price,
								option: { connect: { id: opt.optionId } }
							}
						})
					}
				}
			})

			if (dto.return_waypoints && dto.return_trip_datetime) {
				const returnDto = {
					...dto,
					waypoints: dto.return_waypoints,
					trip_datetime: dto.return_trip_datetime
				}
				const baseReturnPrice = await this.pricingService['calculateBasePrice'](
					returnDto,
					dto.isAvailableToAll
				)
				const finalReturnPrice = baseReturnPrice + optionsPrice

				const { distanceInKm: returnDist, durationInMinutes: returnDur } =
					await this.geoService.getDistanceAndDuration(dto.return_waypoints)

				await this.prisma.order.create({
					data: {
						clientId: clientId || null,
						paymentIntentId: `${paymentIntentId}_return`,
						customerEmail: dto.customerEmail,
						regionId: dto.regionId,
						vehicleTypeId: dto.vehicleTypeId,
						isAvailableToAll: dto.isAvailableToAll ?? false,
						routeWaypoints: dto.return_waypoints as any,
						distanceInKm: returnDist,
						durationInMinutes: returnDur,
						price: finalReturnPrice,
						status: 'NEW',
						trip_datetime: new Date(dto.return_trip_datetime),
						notes: dto.notes,
						passenger_count: dto.passenger_count,
						flight_number: dto.return_flight_number,
						luggage_standard: dto.luggage_standard || 0,
						luggage_small: dto.luggage_small || 0,
						bookingCode: bookingCode,
						selectedOptions: {
							create: dto.selectedOptions?.map(opt => {
								const dbOption = optionsFromDb.find(o => o.id === opt.optionId)!
								return {
									quantity: opt.quantity || 1,
									priceAtTimeOfOrder: dbOption.price,
									option: { connect: { id: opt.optionId } }
								}
							})
						}
					}
				})
			}

			return outboundOrder
		}

		const finalPrice = await this.pricingService.calculateFinalPrice(
			dto,
			partner ?? undefined,
			dto.isAvailableToAll ?? false
		)

		// ... (в кінці методу create)
		const clientJobId = randomUUID() // Ми все ще генеруємо ID

		try {
			// === ПРЯМИЙ ВИКЛИК СЕРВІСУ ПЛАТЕЖІВ ===
			const paymentIntent = await this.paymentService.createPaymentIntent(
				finalPrice,
				'EUR',
				dto,
				clientId || '' // 👈 ВИПРАВЛЕНО
			)

			// Ми зберігаємо результат у кеш (який тепер у пам'яті),
			// на випадок, якщо фронтенд все ж перевіряє ендпоінт /payment/job/:jobId
			const cacheKey = `payment_job_${clientJobId}`
			const cacheValue = {
				status: 'completed',
				clientSecret: paymentIntent.clientSecret,
				amount: finalPrice
			}
			await this.cacheManager.set(cacheKey, cacheValue, 3600) // (кеш на 1 годину)

			// Повертаємо clientSecret негайно фронтенду
			return {
				jobId: clientJobId,
				...cacheValue
			}
		} catch (error) {
			console.error('Failed to create payment intent synchronously:', error)

			// Повідомляємо фронтенду про помилку через кеш
			const cacheKey = `payment_job_${clientJobId}`
			await this.cacheManager.set(
				cacheKey,
				{ status: 'failed', error: error?.message ?? String(error) },
				3600
			)

			// Кидаємо помилку, щоб користувач отримав 500
			throw new InternalServerErrorException(
				`Failed to create payment intent: ${error.message}`
			)
		}
	}
	// ...

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

		if (dto.selectedOptions || dto.vehicleTypeId) {
			const dataForPricing: CreateOrderDto = {
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
				partner ?? undefined,
				dto.isAvailableToAll ?? order.isAvailableToAll
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
