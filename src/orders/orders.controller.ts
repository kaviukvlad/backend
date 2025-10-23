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
		private readonly pricingService: PricingService
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

	/*@Post('my')
	@ApiOperation({ summary: 'Create a new order for the current client' })
	@Auth(UserRole.USER)
	async createMyOrder(
		@Body(new ValidationPipe()) createOrderDto: CreateOrderDto,
		@CurrentClient('id') clientId: string
	) {
		const order = await this.ordersService.create(createOrderDto, clientId)

		return {
			message: 'Order created successfully. We are searching for a driver.',
			orderId: order.id
		}
	}*/

	@Get('my')
	@ApiOperation({ summary: 'Get my order history' })
	@Auth(UserRole.USER)
	async getMyOrders(@CurrentClient('id') clientId: string) {
		return this.ordersService.findForClient(clientId)
	}

	@Post('my/create-payment-intent')
	@ApiOperation({ summary: 'Create a payment intent for a new order' })
	@Auth(UserRole.USER)
	async createPaymentIntent(
		@Body(new ValidationPipe()) createOrderDto: CreateOrderDto,
		@CurrentClient('id') clientId: string
	) {
		const finalPrice =
			await this.pricingService.calculateFinalPrice(createOrderDto)

		const paymentIntent = await this.paymentService.createPaymentIntent(
			finalPrice,
			'EUR',
			{
				order_details: JSON.stringify(createOrderDto),
				client_id: clientId
			}
		)

		return {
			...paymentIntent,
			amount: finalPrice
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
