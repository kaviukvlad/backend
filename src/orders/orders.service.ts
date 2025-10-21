import {
	BadRequestException,
	Injectable,
	NotFoundException
} from '@nestjs/common'
import { OrderOption, Partner } from 'prisma/generated/client'
import { GeoService } from 'src/geo/geo.service'
import { PrismaService } from 'src/prisma.service'
import { CreateOrderDto } from './dto/create-order.dto'
import { UpdateOrderDto } from './dto/update-order.dto'

@Injectable()
export class OrdersService {
	constructor(
		private prisma: PrismaService,
		private geoService: GeoService
	) {}

	async create(dto: CreateOrderDto, createId?: string, partner?: Partner) {
		const regionExists = await this.prisma.region.findUnique({
			where: { id: dto.regionId }
		})
		if (!regionExists) {
			throw new NotFoundException(`Region with ID ${dto.regionId} not found.`)
		}

		const { distanceInKm, durationInMinutes } =
			await this.geoService.getDistanceAndDuration(dto.waypoints)

		let totalOptionsPrice = 0
		let optionsFromDb: OrderOption[] = []

		if (dto.selectedOptions?.length) {
			const optionIds = dto.selectedOptions.map(opt => opt.optionId)
			optionsFromDb = await this.prisma.orderOption.findMany({
				where: { id: { in: optionIds }, isActive: true }
			})

			if (optionsFromDb.length !== optionIds.length) {
				throw new BadRequestException(
					'One or more of the selected options are invalid or inactive.'
				)
			}

			totalOptionsPrice = dto.selectedOptions.reduce((sum, selectedOpt) => {
				const dbOption = optionsFromDb.find(
					opt => opt.id === selectedOpt.optionId
				)!
				const quantity = selectedOpt.quantity || 1
				return sum + Number(dbOption.price) * quantity
			}, 0)
		}

		let finalPrice = dto.price + totalOptionsPrice

		if (partner && partner?.markupPercent?.toNumber() > 0) {
			const markup = Number(partner.markupPercent)
			finalPrice = finalPrice * (1 + markup / 100)
		}
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
				price: finalPrice,
				status: 'NEW',
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

		const { selectedOptions, waypoints, price, ...restDto } = dto

		let totalOptionsPrice = 0
		let optionsFromDb: OrderOption[] = []
		let finalPrice = order.price.toNumber()

		if (selectedOptions) {
			if (selectedOptions.length > 0) {
				const optionIds = selectedOptions.map(opt => opt.optionId)
				optionsFromDb = await this.prisma.orderOption.findMany({
					where: { id: { in: optionIds }, isActive: true }
				})

				if (optionsFromDb.length !== optionIds.length) {
					throw new BadRequestException(
						'One or more of the selected options are invalid or inactive.'
					)
				}

				totalOptionsPrice = selectedOptions.reduce((sum, selectedOpt) => {
					const dbOption = optionsFromDb.find(
						opt => opt.id === selectedOpt.optionId
					)!
					const quantity = selectedOpt.quantity || 1
					return sum + Number(dbOption.price) * quantity
				}, 0)
			}

			const oldOptionsPrice = order.selectedOptions.reduce((sum, opt) => {
				return sum + Number(opt.priceAtTimeOfOrder) * opt.quantity
			}, 0)

			const basePrice = order.price.toNumber() - oldOptionsPrice
			finalPrice = basePrice + totalOptionsPrice
		}

		return this.prisma.$transaction(async tx => {
			if (selectedOptions) {
				await tx.orderToOption.deleteMany({
					where: { orderId: id }
				})
			}

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
						create: selectedOptions?.map(opt => {
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
}
