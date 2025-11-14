import {
	BadRequestException,
	ForbiddenException,
	Injectable,
	NotFoundException
} from '@nestjs/common'

import { DocumentType, MediaType, OrderStatus, Prisma } from '@prisma/client'
import { CreateCarDto } from 'src/car/dto/create-car.dto'
import { UpdateCarDto } from 'src/car/dto/update-car.dto'
import { NotificationsService } from 'src/notifications/notifications.service'
import { PricingService } from 'src/pricing/pricing.service'
import { PrismaService } from 'src/prisma.service'
import { GeoCoordinatesDto } from './dto/geo-coordinates.dto'
import { SetCarOptionsDto } from './dto/set-car-options.dto'
import { UpdateDriverDto } from './dto/update-driver.dto'

type CarWithAvailableOptions = Prisma.CarGetPayload<{
	include: {
		availableOptions: true
	}
}>

type OrderWithSelectedOptions = Prisma.OrderGetPayload<{
	include: {
		selectedOptions: true
	}
}>

@Injectable()
export class DriverService {
	constructor(
		private prisma: PrismaService,
		private pricingService: PricingService,
		private notificationsService: NotificationsService
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

	private async calculateDriverEarnings(
		orderPrice: number,
		driverId: string
	): Promise<number> {
		const driverProfile = await this.prisma.driverProfile.findUnique({
			where: { id: driverId },
			select: { commissionPercent: true }
		})

		let commissionToApply: number

		if (
			driverProfile?.commissionPercent !== null &&
			driverProfile?.commissionPercent !== undefined
		) {
			commissionToApply = driverProfile.commissionPercent.toNumber()
		} else {
			const globalCommission = this.pricingService.getSetting(
				'DEFAULT_DRIVER_COMMISSION_PERCENT'
			)
			if (globalCommission === undefined) {
				console.error('DEFAULT_DRIVER_COMMISSION_PERCENT is not set!')

				commissionToApply = 20
			} else {
				commissionToApply = globalCommission
			}
		}

		const earnings = orderPrice * (1 - commissionToApply / 100)
		return parseFloat(earnings.toFixed(2))
	}

	getById(id: string) {
		return this.prisma.driverProfile.findUnique({
			where: {
				id
			},
			include: {
				region: true,
				cars: true
			}
		})
	}

	async updateProfile(id: string, dto: UpdateDriverDto) {
		return this.prisma.driverProfile.update({
			where: { id },
			data: {
				name: dto.name,
				region: dto.regionId ? { connect: { id: dto.regionId } } : undefined
			}
		})
	}

	async deleteMyProfile(driverId: string) {
		const driverProfile = await this.prisma.driverProfile.findUnique({
			where: { id: driverId },
			select: { userId: true }
		})

		if (!driverProfile) {
			throw new NotFoundException('Driver profile not found.')
		}

		await this.prisma.user.delete({
			where: { id: driverProfile.userId }
		})
		return null
	}

	async getCarsByDriverID(driverId: string) {
		return this.prisma.car.findMany({
			where: { driverId }
		})
	}

	async addCar(driverId: string, dto: CreateCarDto) {
		const { ...rest } = dto

		try {
			const newCar = await this.prisma.car.create({
				data: {
					...rest,
					driver: {
						connect: { id: driverId }
					}
				}
			})
			return newCar
		} catch (error) {
			if (
				error instanceof Prisma.PrismaClientKnownRequestError &&
				error.code === 'P2002'
			) {
				throw new BadRequestException(
					'A car with this license plate already exists.'
				)
			}

			throw error
		}
	}

	async updateCar(driverId: string, carId: string, dto: UpdateCarDto) {
		const car = await this.prisma.car.findUnique({ where: { id: carId } })
		if (!car || car.driverId !== driverId) {
			throw new ForbiddenException('You do not own this car')
		}

		const { ...restOfDto } = dto

		const dataToUpdate: Prisma.CarUpdateInput = {
			...restOfDto
		}

		return this.prisma.car.update({
			where: { id: carId },
			data: dataToUpdate
		})
	}

	async deleteCar(driverId: string, carId: string) {
		const car = await this.prisma.car.findUnique({ where: { id: carId } })
		if (!car || car.driverId !== driverId) {
			throw new ForbiddenException('You do not own this car')
		}

		return this.prisma.car.delete({
			where: { id: carId }
		})
	}

	async uploadCarMedia(
		driverId: string,
		carId: string,
		files: { photos?: Express.Multer.File[]; video?: Express.Multer.File[] }
	) {
		await this.verifyCarOwnership(driverId, carId)

		const mediaToCreate: Prisma.VehicleMediaCreateManyInput[] = []

		if (files.photos) {
			files.photos.forEach(photo => {
				mediaToCreate.push({
					carId: carId,
					url: `/uploads/vehicles/${photo.filename}`,
					type: MediaType.PHOTO
				})
			})
		}

		if (files.video && files.video[0]) {
			const video = files.video[0]
			mediaToCreate.push({
				carId: carId,
				url: `/uploads/vehicles/${video.filename}`,
				type: MediaType.VIDEO
			})
		}

		await this.prisma.$transaction([
			this.prisma.vehicleMedia.deleteMany({ where: { carId } }),
			this.prisma.vehicleMedia.createMany({ data: mediaToCreate }),
			this.prisma.car.update({
				where: { id: carId },
				data: { verification_status: 'PENDING' }
			})
		])
		return {
			message: 'Media uploaded successfully and waiting for verification.'
		}
	}

	private async verifyCarOwnership(driverId: string, carId: string) {
		const car = await this.prisma.car.findUnique({ where: { id: carId } })

		if (!car || car.driverId !== driverId) {
			throw new ForbiddenException('You do not have permission for this car')
		}

		return car
	}

	async acceptOrder(driverId: string, orderId: string) {
		return this.prisma.$transaction(async tx => {
			const driverProfile = await tx.driverProfile.findUnique({
				where: { id: driverId },
				include: {
					cars: true,
					user: {
						select: {
							role: true
						}
					}
				}
			})

			if (!driverProfile || driverProfile.status !== 1) {
				throw new ForbiddenException('Your profile is not approved.')
			}

			if (driverProfile.isBlocked) {
				throw new ForbiddenException('Your account has been blocked.')
			}
			if (driverProfile.status !== 1) {
				throw new ForbiddenException('Your profile is not approved.')
			}

			const isOperator = driverProfile.user.role === 'OPERATOR'
			let carToAssignId: string | null = null

			if (!isOperator) {
				const approvedCar = driverProfile.cars.find(
					car => car.verification_status === 'APPROVED'
				)
				if (!approvedCar) {
					throw new ForbiddenException('You have no approved cars.')
				}
				carToAssignId = approvedCar.id
			}

			const order = await tx.order.findUnique({
				where: { id: orderId }
			})
			if (!order || order.status !== 'NEW') {
				throw new BadRequestException('Order is not available.')
			}

			return tx.order.update({
				where: { id: orderId },
				data: {
					status: 'ACCEPTED',
					driver: { connect: { id: driverId } },
					car: carToAssignId ? { connect: { id: carToAssignId } } : undefined
				}
			})
		})
	}

	async uploadVerificationDocuments(
		driverId: string,
		files: {
			driversLicense?: Express.Multer.File[]
			vehicleRegistration?: Express.Multer.File[]
			selfieWithLicense?: Express.Multer.File[]
		}
	) {
		if (
			!files.driversLicense?.[0] ||
			!files.vehicleRegistration?.[0] ||
			!files.selfieWithLicense?.[0]
		) {
			throw new BadRequestException(
				'All three document files are required in service.'
			)
		}

		const documentToProcess = [
			{
				type: DocumentType.DRIVERS_LICENSE,
				file: files.driversLicense[0]
			},
			{
				type: DocumentType.VEHICLE_REGISTRATION,
				file: files.vehicleRegistration[0]
			},
			{
				type: DocumentType.SELFIE_WITH_LICENSE,
				file: files.selfieWithLicense[0]
			}
		]

		const transactionPromises = documentToProcess.map(doc =>
			this.prisma.document.upsert({
				where: {
					driverId_type: {
						driverId: driverId,
						type: doc.type
					}
				},
				update: {
					file_url: `/uploads/documents/${doc.file.filename}`,
					status: 'PENDING'
				},
				create: {
					driverId: driverId,
					type: doc.type,
					file_url: `/uploads/documents/${doc.file.filename}`,
					status: 'PENDING'
				}
			})
		)

		await this.prisma.$transaction(transactionPromises)
		return { message: 'Verification documents uploaded successfully.' }
	}

	async getAvailableOrders(driverId: string) {
		// --- ДОДАНО ЛОГУВАННЯ ---
		console.log(
			`[Filter] getAvailableOrders викликано для Водія ID: ${driverId.substring(0, 8)}...`
		)

		const driverProfile = await this.prisma.driverProfile.findUnique({
			where: { id: driverId },
			include: {
				user: {
					select: {
						role: true
					}
				},
				cars: {
					where: {
						verification_status: 'APPROVED'
					},
					include: {
						vehicle_type: true,
						availableOptions: true
					}
				},
				allowedVehicleTypes: {
					select: {
						id: true
					}
				}
			}
		})

		if (!driverProfile) {
			throw new NotFoundException('Driver profile not found.')
		}

		if (driverProfile.isBlocked) {
			throw new ForbiddenException('Your account has been blocked.')
		}

		if (driverProfile.status !== 1) {
			throw new ForbiddenException(
				'Your profile has not yet been approved by the administrator.'
			)
		}

		const isOperator = driverProfile.user.role === 'OPERATOR'

		// --- ДОДАНО ЛОГУВАННЯ ---
		console.log(
			`[Filter] Водій: ${driverProfile.name} (Оператор: ${isOperator}), Регіон: ${driverProfile.regionId}`
		)

		if (driverProfile.cars.length === 0 && !isOperator) {
			throw new ForbiddenException(
				'You have no approved cars to accept orders.'
			)
		}
		if (!driverProfile.regionId) {
			throw new BadRequestException(
				'Your profile does not have a region assigned. Please contact the administrator.'
			)
		}

		const ordersInRegion = await this.prisma.order.findMany({
			where: {
				status: 'NEW',
				regionId: driverProfile.regionId
			},
			orderBy: {
				trip_datetime: 'asc'
			},
			include: {
				vehicleType: { select: { code: true } },
				selectedOptions: true
			}
		})

		// --- ДОДАНО ЛОГУВАННЯ ---
		console.log(
			`[Filter] Знайдено ${ordersInRegion.length} замовлень зі статусом 'NEW' в регіоні. Початок фільтрації...`
		)
		if (ordersInRegion.length === 0) {
			return []
		}

		const suitableOrders = ordersInRegion.filter(
			(order: OrderWithSelectedOptions) => {
				// --- ДОДАНО ДЕТАЛЬНЕ ЛОГУВАННЯ ФІЛЬТРУ ---
				const orderIdShort = order.id.substring(0, 8)
				console.log(`[Filter] === Перевірка Замовлення ${orderIdShort} ===`)

				const carCapacityFits =
					driverProfile.cars.some((car: CarWithAvailableOptions) => {
						const capacityOk =
							car.max_passengers >= order.passenger_count &&
							car.max_luggage_standard >= (order.luggage_standard || 0)

						if (!capacityOk) return false

						const requiredOptions = order.selectedOptions
						if (requiredOptions.length === 0) return true

						const carOptionsMap = new Map(
							car.availableOptions.map(opt => [opt.optionId, opt.quantity])
						)

						return requiredOptions.every(reqOpt => {
							const carHasQuantity = carOptionsMap.get(reqOpt.optionId) || 0
							return carHasQuantity >= reqOpt.quantity
						})
					}) || isOperator

				if (!carCapacityFits && !isOperator) {
					console.log(
						`[Filter] Замовлення ${orderIdShort} ВІДХИЛЕНО: Жодне авто не підійшло (місткість або опції).`
					)
					return false
				}
				if (isOperator && !carCapacityFits) {
					console.log(
						`[Filter] Замовлення ${orderIdShort}: Перевірка місткості пропущена (Оператор).`
					)
				}

				if (order.isAvailableToAll) {
					console.log(
						`[Filter] Замовлення ${orderIdShort} ПРИЙНЯТО: isAvailableToAll = true.`
					)
					return true
				}

				if (isOperator) {
					console.log(
						`[Filter] Замовлення ${orderIdShort} ПРИЙНЯТО: Користувач є Оператором.`
					)
					return true
				}

				const allowedVehicleTypeIds = driverProfile.allowedVehicleTypes.map(
					vt => vt.id
				)
				const isClassAllowed = allowedVehicleTypeIds.includes(
					order.vehicleTypeId
				)

				if (!isClassAllowed) {
					console.log(
						`[Filter] Замовлення ${orderIdShort} ВІДХІЛЕНО: Клас ${order.vehicleTypeId} не дозволений водію.`
					)
					return false
				}

				console.log(
					`[Filter] Замовлення ${orderIdShort} ПРИЙНЯТО: Всі перевірки пройдені.`
				)
				return true
				// --- КІНЕЦЬ ДЕТАЛЬНОГО ЛОГУВАННЯ ---
			}
		)

		// --- ДОДАНО ЛОГУВАННЯ ---
		console.log(
			`[Filter] Фільтрацію завершено. Кількість підходящих замовлень: ${suitableOrders.length}`
		)

		const ordersWithEarnings = await Promise.all(
			suitableOrders.map(async order => {
				const priceForDriver = await this.calculateDriverEarnings(
					order.price.toNumber(),
					driverId
				)

				const { price, ...restOfOrder } = order
				return { ...restOfOrder, priceForDriver }
			})
		)

		return ordersWithEarnings
	}

	private async verifyOrderOwnership(driverId: string, orderId: string) {
		const order = await this.prisma.order.findUnique({ where: { id: orderId } })

		if (!order) {
			throw new NotFoundException('Order not found.')
		}

		if (order.driverId !== driverId) {
			throw new ForbiddenException('You do not have permission for this order.')
		}
		return order
	}

	async getMyCurrentOrders(driverId: string) {
		const order = await this.prisma.order.findMany({
			where: {
				driverId,
				status: {
					in: ['ACCEPTED', 'IN_PROGRESS', 'ON_THE_WAY', 'ARRIVED']
				}
			},
			orderBy: {
				trip_datetime: 'asc'
			}
		})

		return Promise.all(
			order.map(async order => {
				const priceForDriver = await this.calculateDriverEarnings(
					order.price.toNumber(),
					driverId
				)

				const { price, ...restOfOrder } = order
				return { ...restOfOrder, priceForDriver }
			})
		)
	}

	async getMyCompletedOrders(driverId: string) {
		const orders = await this.prisma.order.findMany({
			where: {
				driverId,
				status: { in: ['COMPLETED', 'CLIENT_NO_SHOW'] }
			},
			orderBy: {
				trip_datetime: 'desc'
			}
		})

		return Promise.all(
			orders.map(async order => ({
				...order,
				priceForDriver: await this.calculateDriverEarnings(
					order.price.toNumber(),
					driverId
				)
			}))
		)
	}

	async startOrder(driverId: string, orderId: string) {
		const order = await this.verifyOrderOwnership(driverId, orderId)

		if (order.status !== 'ARRIVED') {
			throw new BadRequestException(
				"You can only start a trip after arriving ('ARRIVED'). Use 'on-the-way' and 'arrived' first."
			)
		}

		return this.prisma.order.update({
			where: { id: orderId },
			data: { status: 'IN_PROGRESS' }
		})
	}

	async completeOrder(
		driverId: string,
		orderId: string,
		dto: GeoCoordinatesDto
	) {
		const order = await this.verifyOrderOwnership(driverId, orderId)

		const waypoints = order.routeWaypoints as any[]
		const pointB = waypoints[waypoints.length - 1]
		const distance = this.calculateDistance(
			dto.lat,
			dto.lng,
			pointB.lat,
			pointB.lng
		)

		if (distance > 1) {
			if (!dto.force) {
				throw new BadRequestException(
					`You are ${distance.toFixed(1)}km away from the dropoff point. Please get closer or use 'force' confirmation.`
				)
			} else {
				const driver = await this.prisma.driverProfile.findUnique({
					where: { id: driverId },
					select: { name: true }
				})
				await this.notificationsService.sendDriverGeoMismatchAlert(
					order,
					driver?.name || 'Unknown Driver',
					distance,
					'dropoff'
				)
			}
		}

		if (order.status !== 'IN_PROGRESS') {
			throw new BadRequestException(
				'You can only complete an order that is in progress.'
			)
		}

		const earning = await this.calculateDriverEarnings(
			order.price.toNumber(),
			driverId
		)

		const [updatedOrder] = await this.prisma.$transaction([
			this.prisma.order.update({
				where: { id: orderId },
				data: { status: 'COMPLETED' }
			}),

			this.prisma.driverProfile.update({
				where: { id: driverId },
				data: {
					balance: {
						increment: earning
					}
				}
			})
		])

		return updatedOrder
	}

	async getMyEarnings(driverId: string) {
		const completedOrder = await this.prisma.order.findMany({
			where: {
				driverId,
				status: 'COMPLETED'
			},
			select: { price: true }
		})

		if (completedOrder.length === 0) {
			return {
				totalEarnings: 0,
				completedOrdersCount: 0
			}
		}

		const totalEarnings = await completedOrder.reduce(
			async (sumPromise, order) => {
				const sum = await sumPromise
				const earning = await this.calculateDriverEarnings(
					order.price.toNumber(),
					driverId
				)
				return sum + earning
			},
			Promise.resolve(0)
		)

		return {
			totalEarnings: parseFloat(totalEarnings.toFixed(2)),
			completedOrdersCount: completedOrder.length
		}
	}

	async updateOrderStatus(
		driverId: string,
		orderId: string,
		status: OrderStatus,
		dto?: GeoCoordinatesDto
	) {
		const order = await this.verifyOrderOwnership(driverId, orderId)

		if (status === 'ARRIVED') {
			if (!dto) {
				throw new BadRequestException(
					'Geo coordinates are required for this status.'
				)
			}

			const timeToTripMs = new Date(order.trip_datetime).getTime() - Date.now()
			const thirtyMinsMs = 30 * 60 * 1000

			if (timeToTripMs > thirtyMinsMs) {
				throw new BadRequestException(
					'You can mark arrival no earlier than 30 minutes before the trip.'
				)
			}

			const waypoints = order.routeWaypoints as any[]
			const pointA = waypoints[0]
			const distance = this.calculateDistance(
				dto?.lat,
				dto?.lng,
				pointA.lat,
				pointA.lng
			)
			if (distance > 1) {
				if (!dto.force) {
					throw new BadRequestException(
						`You are ${distance.toFixed(1)}km away from the pickup point. Please get closer or use 'force' confirmation.`
					)
				} else {
					const driver = await this.prisma.driverProfile.findUnique({
						where: { id: driverId },
						select: { name: true }
					})
					await this.notificationsService.sendDriverGeoMismatchAlert(
						order,
						driver?.name || 'Unknown Driver',
						distance,
						'pickup'
					)
				}
			}
		}

		const allowedTransitions = {
			ACCEPTED: ['ON_THE_WAY'],
			ON_THE_WAY: ['ARRIVED'],
			ARRIVED: ['IN_PROGRESS']
		}

		if (!allowedTransitions[order.status]?.includes(status)) {
			throw new BadRequestException(
				`Cannot change status from ${order.status} to ${status}.`
			)
		}

		return this.prisma.order.update({
			where: { id: orderId },
			data: { status }
		})
	}

	async reportClientNoShow(
		driverId: string,
		orderId: string,
		photoPath: string,
		dto: GeoCoordinatesDto
	) {
		const order = await this.verifyOrderOwnership(driverId, orderId)

		if (order.status !== 'ARRIVED') {
			throw new BadRequestException(
				'You can only report a no-show after arriving at the pickup location.'
			)
		}

		return this.prisma.$transaction(async tx => {
			const updatedOrder = await tx.order.update({
				where: { id: orderId },
				data: { status: 'CLIENT_NO_SHOW' },

				include: {
					client: {
						select: {
							user: {
								select: {
									phone: true
								}
							}
						}
					}
				}
			})

			await tx.orderNoShowProof.create({
				data: {
					orderId: orderId,
					imageUrl: photoPath
				}
			})

			await this.notificationsService.sendClientNoShowProof(
				updatedOrder,
				photoPath
			)

			return updatedOrder
		})
	}

	async cancelOrder(
		driverId: string,
		orderId: string,
		reason: string,
		photoPath?: string
	) {
		const order = await this.verifyOrderOwnership(driverId, orderId)

		const hoursUntilTrip =
			(new Date(order.trip_datetime).getTime() - Date.now()) / (1000 * 60 * 60)

		if (hoursUntilTrip < 48) {
			throw new BadRequestException(
				'You can only cancel an order at least 48 hours in advance.'
			)
		}

		const driver = await this.prisma.driverProfile.findUnique({
			where: { id: driverId },
			select: { name: true }
		})

		const updatedOrder = await this.prisma.order.update({
			where: { id: orderId },
			data: {
				status: 'NEW',
				driverId: null,
				car_id: null
			}
		})

		await this.notificationsService.sendDriverCancellationAlert(
			updatedOrder,
			driver?.name || 'Driver ' + driverId.substring(0, 5),
			reason,
			photoPath
		)

		return updatedOrder
	}

	async requestChange(driverId: string, orderId: string, comment: string) {
		const order = await this.verifyOrderOwnership(driverId, orderId)

		const driver = await this.prisma.driverProfile.findUnique({
			where: { id: driverId },
			select: { name: true }
		})

		const updatedOrder = await this.prisma.order.update({
			where: { id: orderId },
			data: {
				changeRequestComment: comment,
				status: 'PENDING_MANUAL_CONFIRMATION'
			}
		})

		await this.notificationsService.sendDriverChangeRequestAlert(
			updatedOrder,
			driver?.name || 'Driver ' + driverId.substring(0, 5),
			comment
		)

		return { message: 'Change request submitted. Operator will contact you.' }
	}

	async getCarOptions(driverId: string, carId: string) {
		await this.verifyCarOwnership(driverId, carId)

		return this.prisma.carOption.findMany({
			where: { carId: carId },
			include: {
				option: true
			}
		})
	}

	async setCarOptions(driverId: string, carId: string, dto: SetCarOptionsDto) {
		await this.verifyCarOwnership(driverId, carId)

		const optionsToCreate = dto.options.map(opt => ({
			carId: carId,
			optionId: opt.optionId,
			quantity: opt.quantity
		}))

		await this.prisma.$transaction(async tx => {
			await tx.carOption.deleteMany({
				where: { carId: carId }
			})

			if (optionsToCreate.length > 0) {
				await tx.carOption.createMany({
					data: optionsToCreate
				})
			}
		})

		return this.getCarOptions(driverId, carId)
	}
}
