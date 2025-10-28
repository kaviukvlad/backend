import {
	BadRequestException,
	Injectable,
	NotFoundException,
	UnauthorizedException
} from '@nestjs/common'
import { verify } from 'argon2'
import { User } from 'prisma/generated/client'
import { PaymentService } from 'src/payment/payment.service'
import { PrismaService } from 'src/prisma.service'
import { AssignOrderDto } from './dto/assign-order.dto'
import { RefundOrderDto } from './dto/refund-order.dto'

@Injectable()
export class OperatorService {
	constructor(
		private prisma: PrismaService,
		private paymentService: PaymentService
	) {}

	async assignOrder(orderId: string, dto: AssignOrderDto) {
		const order = await this.prisma.order.findUnique({ where: { id: orderId } })
		if (
			!order ||
			!['NEW', 'PENDING_MANUAL_CONFIRMATION'].includes(order.status)
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
				}
			}
		})
		if (!driver || driver.status !== 1) {
			throw new BadRequestException('Driver not found or not approved.')
		}

		const car = driver.cars.find(c => c.vehicle_type_id === order.vehicleTypeId)
		if (!car) {
			throw new BadRequestException(
				'Driver does not have a suitable approved car for this order.'
			)
		}

		return this.prisma.order.update({
			where: { id: orderId },
			data: {
				driverId: dto.driverId,
				car_id: car.id,
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
