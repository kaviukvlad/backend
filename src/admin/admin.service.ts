import { Injectable, NotFoundException } from '@nestjs/common'
import {
	DocumentStatus,
	VehicleVerificationStatus
} from 'prisma/generated/client'
import { PrismaService } from 'src/prisma.service'

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
		const adminProfile = await this.prisma.adminProfile.findUnique({
			where: { userId: adminUserId }
		})

		if (!adminProfile) {
			throw new NotFoundException(
				`Admin profile for user ID ${adminUserId} not found.`
			)
		}

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
		const adminProfile = await this.prisma.adminProfile.findUnique({
			where: { userId: adminUserId }
		})

		if (!adminProfile) {
			throw new NotFoundException(
				`Admin profile for user ID ${adminUserId} not found.`
			)
		}

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
}
