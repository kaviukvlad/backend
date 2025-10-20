import {
	BadRequestException,
	Injectable,
	NotFoundException
} from '@nestjs/common'
import { Partner } from 'prisma/generated/client'
import { PrismaService } from 'src/prisma.service'
import { CreateOrderDto } from './dto/create-order.dto'
import { UpdateOrderDto } from './dto/update-order.dto'

@Injectable()
export class OrdersService {
	constructor(private prisma: PrismaService) {}

	async create(dto: CreateOrderDto, createId?: string, partner?: Partner) {
		const regionExists = await this.prisma.region.findUnique({
			where: { id: dto.regionId }
		})
		if (!regionExists) {
			throw new NotFoundException(`Region with ID ${dto.regionId} not found.`)
		}

		let finalPrice = dto.price

		if (partner && partner.markupPercent.toNumber() > 0) {
			const markup = Number(partner.markupPercent.toNumber())
			const initialPrice = Number(dto.price)
			finalPrice = initialPrice * (1 + markup / 100)
		}

		const { customerEmail, ...orderData } = dto

		const newOrder = await this.prisma.order.create({
			data: {
				...orderData,
				customerEmail: customerEmail,
				price: finalPrice,
				trip_datetime: new Date(dto.trip_datetime),
				status: 'NEW',
				partnerId: partner ? partner.id : null
			}
		})
		return newOrder
	}

	async findAll() {
		return this.prisma.order.findMany()
	}

	async findOne(id: string) {
		const order = await this.prisma.order.findUnique({ where: { id } })
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
			...orderData
		} = originalOrder

		return this.prisma.order.create({
			data: {
				...orderData,
				status: 'NEW'
			}
		})
	}

	async update(id: string, dto: UpdateOrderDto) {
		await this.findOne(id)
		return this.prisma.order.update({
			where: { id },
			data: {
				...dto,
				...(dto.trip_datetime && { trip_datetime: new Date(dto.trip_datetime) })
			}
		})
	}
}
