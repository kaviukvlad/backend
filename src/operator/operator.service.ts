import {
	BadRequestException,
	Injectable,
	NotFoundException,
	UnauthorizedException
} from '@nestjs/common'
import { User } from '@prisma/client'
import { verify } from 'argon2'
import { DriverService } from 'src/driver/driver.service'
import { PaymentService } from 'src/payment/payment.service'
import { PrismaService } from 'src/prisma.service'
import { AssignOrderDto } from './dto/assign-order.dto'
import { RefundOrderDto } from './dto/refund-order.dto'

@Injectable()
export class OperatorService {
	constructor(
		private prisma: PrismaService,
		private paymentService: PaymentService,
		private driverService: DriverService
	) {}

	async getDriversWithEarnings() {
		const driversProfile = await this.prisma.driverProfile.findMany({
			include: {
				user: {
					select: {
						email: true,
						phone: true,
						role: true
					}
				},
				region: {
					select: {
						name: true
					}
				}
			}
		})

		const driversWithEarnings = await Promise.all(
			driversProfile.map(async driver => {
				const earnings = await this.driverService.getMyEarnings(driver.id)

				return {
					...driver,
					totalEarnings: earnings.totalEarnings,
					completedOrdersCount: earnings.completedOrdersCount
				}
			})
		)
		return driversWithEarnings
	}

	async assignOrder(orderId: string, dto: AssignOrderDto) {
		const order = await this.prisma.order.findUnique({ where: { id: orderId } })
		if (
			!order ||
			!['NEW', 'PENDING_MANUAL_CONFIRMATION', 'ACCEPTED'].includes(order.status)
		) {
			throw new NotFoundException('Order not found or cannot be assigned.')
		}

		const driver = await this.prisma.driverProfile.findUnique({
			where: { id: dto.driverId },
			include: {
				cars: {
					where: {
						verification_status: 'APPROVED'
					}
				},

				allowedVehicleTypes: {
					select: { id: true }
				},
				user: {
					select: { role: true }
				}
			}
		})

		if (!driver || driver.status !== 1) {
			throw new BadRequestException('Driver not found or not approved.')
		}

		const isOperatorDriver = driver.user.role === 'OPERATOR'

		const allowedTypeIds = driver.allowedVehicleTypes.map(vt => vt.id)

		if (!isOperatorDriver && !allowedTypeIds.includes(order.vehicleTypeId)) {
			throw new BadRequestException(
				'Driver is not allowed to take orders of this vehicle class.'
			)
		}

		let carToAssignId: string | null = null

		if (driver.cars.length > 0) {
			const exactMatchCar = driver.cars.find(
				c => c.vehicle_type_id === order.vehicleTypeId
			)

			if (exactMatchCar) {
				carToAssignId = exactMatchCar.id
			} else {
				carToAssignId = driver.cars[0].id
			}
		} else if (!isOperatorDriver) {
			throw new BadRequestException('Driver has no approved cars.')
		}

		return this.prisma.order.update({
			where: { id: orderId },
			data: {
				driverId: dto.driverId,

				car_id: carToAssignId,
				status: 'ACCEPTED'
			}
		})
	}

	async refundOrder(orderId: string, dto: RefundOrderDto, operator: User) {
		const operatorWithPassword = await this.prisma.user.findUnique({
			where: { id: operator.id }
		})

		if (!operatorWithPassword) {
			throw new UnauthorizedException('Operator user not found.')
		}

		const isPasswordValid = await verify(
			operatorWithPassword.password,
			dto.password
		)

		if (!isPasswordValid) {
			throw new UnauthorizedException(
				'Invalid password for refund confirmation.'
			)
		}

		const order = await this.prisma.order.findUnique({ where: { id: orderId } })
		if (!order) {
			throw new NotFoundException('Order not found.')
		}
		if (!order.paymentIntentId) {
			throw new BadRequestException(
				'This order cannot be refunded automatically as it has no payment ID.'
			)
		}

		await this.paymentService.createRefund(order.paymentIntentId)

		return this.prisma.order.update({
			where: { id: orderId },
			data: { status: 'CANCELLED' }
		})
	}
}
