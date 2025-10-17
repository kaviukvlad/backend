import {
	BadRequestException,
	ForbiddenException,
	Injectable,
	NotFoundException
} from '@nestjs/common'

import { DocumentType, MediaType, Prisma } from 'prisma/generated/client'
import { CreateCarDto } from 'src/car/dto/create-car.dto'
import { UpdateCarDto } from 'src/car/dto/update-car.dto'
import { PrismaService } from 'src/prisma.service'
import { UpdateDriverDto } from './dto/update-driver.dto'

@Injectable()
export class DriverService {
	constructor(private prisma: PrismaService) {}

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
		const driverProfile = await this.prisma.driverProfile.findUnique({
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

		const order = await this.prisma.order.findUnique({ where: { id: orderId } })
		if (!order || order.status !== 'NEW') {
			throw new BadRequestException('Order is not available.')
		}

		return this.prisma.order.update({
			where: { id: orderId },
			data: {
				status: 'ACCEPTED',
				driver: { connect: { id: driverId } },
				car: { connect: { id: approvedCar.id } }
			}
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
				cars: {
					where: { verification_status: 'APPROVED' }
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

		return this.prisma.order.findMany({
			where: {
				status: 'NEW',
				regionId: driverProfile.regionId
			},
			select: {
				id: true,
				from_address: true,
				to_address: true,
				price: true,
				trip_datetime: true,
				passenger_count: true,
				notes: true,
				flight_number: true
			},
			orderBy: {
				trip_datetime: 'asc'
			}
		})
	}
}
