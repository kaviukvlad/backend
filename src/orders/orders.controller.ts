import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
	ValidationPipe
} from '@nestjs/common'
import {
	ApiBearerAuth,
	ApiOperation,
	ApiParam,
	ApiResponse,
	ApiTags
} from '@nestjs/swagger'
import { UserRole } from 'prisma/generated/client'
import { Auth } from 'src/auth/decorators/auth.decorators'
import { CurrentClient } from 'src/auth/decorators/client.decorators'

import { InjectQueue } from '@nestjs/bull'
import type { Queue } from 'bull'
import { randomUUID } from 'crypto'
import { CREATE_PAYMENT_JOB, PAYMENT_QUEUE } from 'src/payment/constants'
import { PaymentService } from 'src/payment/payment.service'
import { PricingService } from 'src/pricing/pricing.service'
import { CreateOrderDto } from './dto/create-order.dto'
import { UpdateOrderDto } from './dto/update-order.dto'
import { OrdersService } from './orders.service'

@ApiTags('Orders')
@ApiBearerAuth()
@Controller('orders')
export class OrdersController {
	constructor(
		private readonly ordersService: OrdersService,
		private readonly paymentService: PaymentService,
		private readonly pricingService: PricingService,
		@InjectQueue(PAYMENT_QUEUE) private paymentQueue: Queue
	) {}

	@Post()
	@ApiOperation({ summary: 'Create new order (For Admins)' })
	@ApiResponse({ status: 201, description: 'Order successfully created.' })
	@ApiResponse({ status: 400, description: 'Invalid input.' })
	@Auth(UserRole.ADMIN)
	async create(@Body(new ValidationPipe()) createOrderDto: CreateOrderDto) {
		return this.ordersService.create(createOrderDto)
	}

	@Get()
	@ApiOperation({ summary: 'Get a list of all orders' })
	@ApiResponse({ status: 200, description: 'Order list received.' })
	@Auth(UserRole.ADMIN)
	async findAll() {
		return this.ordersService.findAll()
	}

	@Get('my')
	@ApiOperation({ summary: 'Get my order history' })
	@Auth(UserRole.USER)
	async getMyOrders(@CurrentClient('id') clientId: string) {
		return this.ordersService.findForClient(clientId)
	}

	@Get('my/:id')
	@ApiOperation({ summary: 'Get details of a specific one of my orders' })
	@Auth(UserRole.USER)
	async getMyOrderById(
		@Param('id') orderId: string,
		@CurrentClient('id') clientId: string
	) {
		return this.ordersService.findMyOrderById(orderId, clientId)
	}

	@Patch('my/:id/cancel')
	@ApiOperation({ summary: 'Cancel my order' })
	@ApiParam({ name: 'id', description: 'Order ID to cancel' })
	@Auth(UserRole.USER)
	async cancelMyOrder(
		@Param('id') orderId: string,
		@CurrentClient('id') clientId: string
	) {
		const updatedOrder = await this.ordersService.cancelMyOrder(
			orderId,
			clientId
		)
		return {
			message: 'Order successfully cancelled.',
			order: updatedOrder
		}
	}

	@Post('my/create-payment-intent')
	@ApiOperation({ summary: 'Create a job to prepare a payment intent' })
	@ApiResponse({ status: 202, description: 'Job accepted for processing.' })
	@Auth(UserRole.USER)
	async createPaymentIntent(
		@Body(new ValidationPipe()) createOrderDto: CreateOrderDto,
		@CurrentClient('id') clientId: string
	) {
		const finalPrice =
			await this.pricingService.calculateFinalPrice(createOrderDto)

		const clientJobId = randomUUID()

		await this.paymentQueue.add(
			CREATE_PAYMENT_JOB,
			{
				amount: finalPrice,
				currency: 'EUR',
				orderDetails: createOrderDto,
				clientId: clientId
			},
			{
				jobId: clientJobId
			}
		)

		return {
			jobId: clientJobId,
			message: 'Payment creation has been queued.'
		}
	}

	@Get(':id')
	@ApiOperation({ summary: 'Get single order details by ID' })
	@ApiParam({ name: 'id', description: 'Order ID' })
	@ApiResponse({ status: 200, description: 'Order data received.' })
	@ApiResponse({ status: 404, description: 'Order not found.' })
	@Auth(UserRole.ADMIN)
	async findOne(@Param('id') id: string) {
		return this.ordersService.findOne(id)
	}

	@Patch(':id')
	@ApiOperation({ summary: 'Update existing order' })
	@ApiParam({ name: 'id', description: 'Order ID' })
	@ApiResponse({ status: 200, description: 'Order successfully updated.' })
	@ApiResponse({ status: 404, description: 'Order not found.' })
	@Auth(UserRole.ADMIN)
	async update(
		@Param('id') id: string,
		@Body(new ValidationPipe()) dto: UpdateOrderDto
	) {
		return this.ordersService.update(id, dto)
	}

	@Delete(':id')
	@ApiOperation({ summary: 'Cancel order (soft delete)' })
	@ApiParam({ name: 'id', description: 'Order ID' })
	@ApiResponse({ status: 200, description: 'Order successfully canceled.' })
	@Auth(UserRole.ADMIN)
	async remove(@Param('id') id: string) {
		return this.ordersService.remove(id)
	}

	@Patch(':id/restore')
	@ApiOperation({ summary: 'Restore canceled order' })
	@ApiParam({ name: 'id', description: 'Order ID' })
	@ApiResponse({ status: 200, description: 'Order successfully restored.' })
	@Auth(UserRole.ADMIN)
	async restore(@Param('id') id: string) {
		return this.ordersService.restore(id)
	}

	@Post(':id/copy')
	@ApiOperation({ summary: 'Create a copy of an existing order' })
	@ApiParam({ name: 'id', description: 'Order ID to copy' })
	@ApiResponse({
		status: 201,
		description: 'A copy of the order was successfully created.'
	})
	@Auth(UserRole.ADMIN)
	async copy(@Param('id') id: string) {
		return this.ordersService.copy(id)
	}
}
