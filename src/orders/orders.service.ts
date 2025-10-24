import {
	BadRequestException,
	ForbiddenException,
	Injectable,
	NotFoundException
} from '@nestjs/common'
import { OrderOption, Partner } from 'prisma/generated/client'
import { GeoService } from 'src/geo/geo.service'
import { PaymentService } from 'src/payment/payment.service'
import { PricingService } from 'src/pricing/pricing.service'
import { PrismaService } from 'src/prisma.service'
import { CreateOrderDto } from './dto/create-order.dto'
import { UpdateOrderDto } from './dto/update-order.dto'

@Injectable()
export class OrdersService {
	constructor(
		private prisma: PrismaService,
		private geoService: GeoService,
		private pricingService: PricingService,
		private paymentService: PaymentService
	) {}

	async create(
		dto: CreateOrderDto,
		options: {
			createId?: string
			clientId?: string
			partner?: Partner
			paymentIntentId?: string
		} = {}
	) {
		const { clientId, paymentIntentId, partner } = options
		const regionExists = await this.prisma.region.findUnique({
			where: { id: dto.regionId }
		})
		if (!regionExists) {
			throw new NotFoundException(`Region with ID ${dto.regionId} not found.`)
		}

		const { distanceInKm, durationInMinutes } =
			await this.geoService.getDistanceAndDuration(dto.waypoints)

		const finalPrice = await this.pricingService.calculateFinalPrice(
			dto,
			partner
		)

		const optionsFromDb = dto.selectedOptions?.length
			? await this.prisma.orderOption.findMany({
					where: {
						id: {
							in: dto.selectedOptions.map(o => o.optionId)
						}
					}
				})
			: []

		const newOrder = await this.prisma.order.create({
			data: {
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
				price: finalPrice,
				status: 'NEW',
				clientId: clientId ? clientId : null,
				paymentIntentId: paymentIntentId ? paymentIntentId : null,
				partnerId: partner ? partner.id : null,
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
		return newOrder
	}

	async findAll() {
		return this.prisma.order.findMany({
			include: {
				selectedOptions: {
					include: {
						option: true
					}
				}
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

		// 1. Спочатку робимо повернення коштів, якщо є платіж
		if (order.paymentIntentId) {
			await this.paymentService.createRefund(order.paymentIntentId)
		}

		// 2. Тільки після успішного повернення оновлюємо статус в нашій БД
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
