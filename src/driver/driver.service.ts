import {
	BadRequestException,
	ForbiddenException,
	Injectable,
	NotFoundException
} from '@nestjs/common'

import {
	DocumentType,
	MediaType,
	OrderStatus,
	Prisma
} from 'prisma/generated/client'
import { CreateCarDto } from 'src/car/dto/create-car.dto'
import { UpdateCarDto } from 'src/car/dto/update-car.dto'
import { NotificationsService } from 'src/notifications/notifications.service'
import { PricingService } from 'src/pricing/pricing.service'
import { PrismaService } from 'src/prisma.service'
import { UpdateDriverDto } from './dto/update-driver.dto'

@Injectable()
export class DriverService {
	constructor(
		private prisma: PrismaService,
		private pricingService: PricingService,
		private notificationsService: NotificationsService
	) {}

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
		const { vehicle_type_id, ...rest } = dto

		return this.prisma.car.create({
			data: {
				...rest,

				driver: {
					connect: { id: driverId }
				},
				vehicle_type: {
					connect: { id: vehicle_type_id }
				}
			}
		})
	}

	async updateCar(driverId: string, carId: string, dto: UpdateCarDto) {
		const car = await this.prisma.car.findUnique({ where: { id: carId } })
		if (!car || car.driverId !== driverId) {
			throw new ForbiddenException('You do not own this car')
		}

		return this.prisma.car.update({
			where: { id: carId },
			data: dto
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
				include: { cars: true }
			})

			if (!driverProfile || driverProfile.status !== 1) {
				throw new ForbiddenException('Your profile is not approved.')
			}

			const approvedCar = driverProfile.cars.find(
				car => car.verification_status === 'APPROVED'
			)
			if (!approvedCar) {
				throw new ForbiddenException('You have no approved cars.')
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
					car: { connect: { id: approvedCar.id } }
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
						vehicle_type: true
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
		if (driverProfile.status !== 1) {
			throw new ForbiddenException(
				'Your profile has not yet been approved by the administrator.'
			)
		}
		if (driverProfile.cars.length === 0) {
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
			}
		})

		const isOperator = driverProfile.user.role === 'OPERATOR'

		const suitableOrders = ordersInRegion.filter(order => {
			const luggageFits = driverProfile.cars.some(
				car =>
					car.vehicle_type.max_luggage_standard >=
						(order.luggage_standard || 0) &&
					car.vehicle_type.max_luggage_small >= (order.luggage_small || 0)
			)
			if (!luggageFits) return false

			if (isOperator) {
				return true
			}

			const allowedVehicleTypeIds = driverProfile.allowedVehicleTypes.map.call(
				vt => vt.id
			)
			return allowedVehicleTypeIds.include(order.vehicleTypeId)
		})

		const ordersWithEarnings = await Promise.all(
			suitableOrders.map(async order => {
				const priceForDriver = await this.calculateDriverEarnings(
					order.price.toNumber(),
					driverId
				)
				return { ...order, priceForDriver }
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
					in: ['ACCEPTED', 'IN_PROGRESS']
				}
			},
			orderBy: {
				trip_datetime: 'asc'
			}
		})

		return Promise.all(
			order.map(async order => ({
				...order,
				priceForDriver: await this.calculateDriverEarnings(
					order.price.toNumber(),
					driverId
				)
			}))
		)
	}

	async getMyCompletedOrders(driverId: string) {
		const orders = await this.prisma.order.findMany({
			where: {
				driverId,
				status: 'COMPLETED'
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

		if (order.status !== 'ACCEPTED') {
			throw new BadRequestException('You can only start an accepted order.')
		}

		return this.prisma.order.update({
			where: { id: orderId },
			data: { status: 'IN_PROGRESS' }
		})
	}

	async completeOrder(driverId: string, orderId: string) {
		const order = await this.verifyOrderOwnership(driverId, orderId)

		if (order.status !== 'IN_PROGRESS') {
			throw new BadRequestException(
				'You can only complete an order that is in progress.'
			)
		}

		return this.prisma.order.update({
			where: { id: orderId },
			data: { status: 'COMPLETED' }
		})
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
		status: OrderStatus
	) {
		const order = await this.verifyOrderOwnership(driverId, orderId)

		const allowedTransitions = {
			ACCEPTED: ['ON_THE_WAY'],
			ON_THE_WAY: ['ARRIVED']
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
		photoPath: string
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
}
