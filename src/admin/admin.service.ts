import {
	ConflictException,
	Injectable,
	NotFoundException
} from '@nestjs/common'
import { hash } from 'argon2'
import {
	DocumentStatus,
	VehicleVerificationStatus
} from 'prisma/generated/client'
import { PrismaService } from 'src/prisma.service'
import { CreateOperatorDto } from './dto/create-operator.dto'
import { CreateTariffDto } from './dto/create-tariff.dto'
import { UpdateDriverCommissionDto } from './dto/update-driver-commission.dto'
import { UpdateDriverVehicleTypesDto } from './dto/update-driver-vehicle-types.dto'

@Injectable()
export class AdminService {
	constructor(private prisma: PrismaService) {}

	async getAllUsers() {
		return this.prisma.user.findMany({
			select: {
				id: true,
				email: true,
				role: true,
				createdAt: true,
				driverProfile: true,
				clientProfile: true,
				adminProfile: true
			}
		})
	}

	async getUserById(id: string) {
		const user = await this.prisma.user.findUnique({
			where: { id },
			select: {
				id: true,
				email: true,
				role: true,
				createdAt: true,
				driverProfile: {
					include: {
						documents: true,
						region: true,
						cars: {
							include: {
								media: true
							}
						}
					}
				},
				clientProfile: true,
				adminProfile: true
			}
		})

		if (!user) {
			throw new NotFoundException('User not found')
		}

		return user
	}

	async getPendingDrivers() {
		return this.prisma.driverProfile.findMany({
			where: { status: 0 },
			include: { user: true, documents: true, cars: true }
		})
	}

	async updateDriverStatus(driverId: string, status: number) {
		return this.prisma.driverProfile.update({
			where: { id: driverId },
			data: { status }
		})
	}

	async updateCarStatus(
		carId: string,
		status: VehicleVerificationStatus,
		adminUserId: string
	) {
		const adminProfile = await this.findAdminProfile(adminUserId)

		const updatedCar = await this.prisma.car.update({
			where: { id: carId },
			data: { verification_status: status }
		})

		await this.prisma.auditLog.create({
			data: {
				adminId: adminProfile.id,
				action: `Car verification status changed to ${status}`,
				target_entity: 'Car',
				target_id: carId
			}
		})
		return updatedCar
	}

	async updateDocumentStatus(
		documentId: string,
		status: DocumentStatus,
		adminUserId: string
	) {
		const adminProfile = await this.findAdminProfile(adminUserId)

		const updatedDocument = await this.prisma.document.update({
			where: { id: documentId },
			data: { status }
		})

		await this.prisma.auditLog.create({
			data: {
				adminId: adminProfile.id,
				action: `Document status changed to ${status}`,
				target_entity: `Document`,
				target_id: documentId
			}
		})
		return updatedDocument
	}

	private async findAdminProfile(userId: string) {
		const adminProfile = await this.prisma.adminProfile.findUnique({
			where: { userId }
		})
		if (!adminProfile) {
			throw new NotFoundException(
				`Admin profile for user ID ${userId} not found.`
			)
		}
		return adminProfile
	}

	async getPendingCars() {
		return this.prisma.car.findMany({
			where: {
				verification_status: 'PENDING'
			},
			include: {
				media: true,
				driver: {
					select: {
						id: true,
						name: true,
						user: {
							select: {
								email: true
							}
						}
					}
				}
			}
		})
	}

	async getPendingDocuments() {
		return this.prisma.document.findMany({
			where: {
				status: 'PENDING'
			},
			include: {
				driver: {
					select: {
						id: true,
						name: true,
						user: {
							select: {
								email: true
							}
						}
					}
				}
			}
		})
	}

	async updateDriverCommission(
		driverId: string,
		dto: UpdateDriverCommissionDto
	) {
		return this.prisma.driverProfile.update({
			where: { id: driverId },
			data: {
				commissionPercent: dto.commissionPercent
			},
			select: { id: true, name: true, commissionPercent: true }
		})
	}

	async updateDriverAllowedVehicleTypes(
		driverId: string,
		dto: UpdateDriverVehicleTypesDto
	) {
		return this.prisma.driverProfile.update({
			where: { id: driverId },
			data: {
				allowedVehicleTypes: {
					set: dto.vehicleTypeIds.map(id => ({ id }))
				}
			},
			include: {
				allowedVehicleTypes: true
			}
		})
	}

	async createTariff(dto: CreateTariffDto) {
		const existingTariff = await this.prisma.tariff.findUnique({
			where: {
				regionId_vehicleTypeId: {
					regionId: dto.regionId,
					vehicleTypeId: dto.vehicleTypeId
				}
			}
		})

		if (existingTariff) {
			throw new ConflictException(
				'Tariff for this region and vehicle type already exists.'
			)
		}

		return this.prisma.tariff.create({
			data: {
				regionId: dto.regionId,
				vehicleTypeId: dto.vehicleTypeId,
				baseFare: dto.baseFare,
				pricePerKm: dto.pricePerKm,
				pricePerMinute: dto.pricePerMinute,
				minimumFare: dto.minimumFare,
				isActive: dto.isActive
			}
		})
	}

	async createOperator(dto: CreateOperatorDto) {
		const existingUser = await this.prisma.user.findUnique({
			where: { email: dto.email }
		})
		if (existingUser) {
			throw new ConflictException('User with this email already exists.')
		}

		const hashedPassword = await hash(dto.password)

		return this.prisma.$transaction(async tx => {
			const newUser = await tx.user.create({
				data: {
					email: dto.email,
					password: hashedPassword,
					role: 'OPERATOR'
				}
			})

			await tx.operatorProfile.create({
				data: {
					userId: newUser.id,
					name: dto.name
				}
			})

			const driverProfile = await tx.driverProfile.create({
				data: {
					userId: newUser.id,
					name: dto.name,
					status: 1
				}
			})

			const { password, ...userResult } = newUser

			return { user: userResult, driverProfileId: driverProfile.id }
		})
	}
}
