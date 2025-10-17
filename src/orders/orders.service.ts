import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { CreateOrderDto } from './dto/create-order.dto'
import { UpdateOrderDto } from './dto/update-order.dto'

@Injectable()
export class OrdersService {
	constructor(private prisma: PrismaService) {}
	async create(dto: CreateOrderDto, createId: string) {
		const regionExists = await this.prisma.region.findUnique({
			where: { id: dto.regionId }
		})
		if (!regionExists) {
			throw new NotFoundException(`Region with ID ${dto.regionId} not found.`)
		}

		const newOrder = await this.prisma.order.create({
			data: {
				...dto,
				trip_datetime: new Date(dto.trip_datetime),
				status: 'NEW'
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
			throw new Error('Order is not cancelled and cannot be restored.')
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
