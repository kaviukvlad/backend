import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
	Query,
	ValidationPipe
} from '@nestjs/common'
import {
	ApiBearerAuth,
	ApiOperation,
	ApiResponse,
	ApiTags
} from '@nestjs/swagger'
import { UserRole } from 'prisma/generated/client'
import { Auth } from 'src/auth/decorators/auth.decorators'
import { CurrentClient } from 'src/auth/decorators/client.decorators'
import { PricingService } from 'src/pricing/pricing.service'
import { CreateOrderDto } from './dto/create-order.dto'
import { SearchOrderDto } from './dto/search-order.dto'
import { UpdateOrderDto } from './dto/update-order.dto'
import { OrdersService } from './orders.service'

@ApiTags('Orders')
@ApiBearerAuth()
@Controller('orders')
export class OrdersController {
	constructor(
		private readonly ordersService: OrdersService,
		private readonly pricingService: PricingService
	) {}

	@Post('my')
	@ApiOperation({ summary: 'Create a new order as a client' })
	@Auth(UserRole.USER)
	async createMyOrder(
		@Body(new ValidationPipe()) createOrderDto: CreateOrderDto,
		@CurrentClient('id') clientId: string
	) {
		return this.ordersService.create(createOrderDto, { clientId })
	}

	@Get('my')
	@ApiOperation({ summary: 'Get my order history' })
	@Auth(UserRole.USER)
	async getMyOrders(@CurrentClient('id') clientId: string) {
		return this.ordersService.findMyOrders(clientId)
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

	@Post()
	@ApiOperation({ summary: 'Create a new order (For Admins)' })
	@Auth(UserRole.ADMIN)
	async createAsAdmin(
		@Body(new ValidationPipe()) createOrderDto: CreateOrderDto
	) {
		return this.ordersService.create(createOrderDto)
	}

	@Get()
	@ApiOperation({ summary: 'Get a list of all orders with filters' })
	@ApiResponse({ status: 200, description: 'Order list received.' })
	@Auth(UserRole.ADMIN, UserRole.OPERATOR)
	async findAll(@Query() dto: SearchOrderDto) {
		return this.ordersService.findAll(dto)
	}

	@Get(':id')
	@ApiOperation({ summary: 'Get single order details by ID' })
	@Auth(UserRole.ADMIN)
	async findOne(@Param('id') id: string) {
		return this.ordersService.findOne(id)
	}

	@Patch(':id')
	@ApiOperation({ summary: 'Update existing order' })
	@Auth(UserRole.ADMIN)
	async update(@Param('id') id: string, @Body() dto: UpdateOrderDto) {
		return this.ordersService.update(id, dto)
	}

	@Delete(':id')
	@ApiOperation({ summary: 'Cancel order (soft delete)' })
	@Auth(UserRole.ADMIN)
	async remove(@Param('id') id: string) {
		return this.ordersService.remove(id)
	}

	@Patch(':id/restore')
	@ApiOperation({ summary: 'Restore canceled order' })
	@Auth(UserRole.ADMIN)
	async restore(@Param('id') id: string) {
		return this.ordersService.restore(id)
	}

	@Post(':id/copy')
	@ApiOperation({ summary: 'Create a copy of an existing order' })
	@Auth(UserRole.ADMIN)
	async copy(@Param('id') id: string) {
		return this.ordersService.copy(id)
	}

	@Post('calculate-price')
	@ApiOperation({ summary: 'Calculate trip price without creating an order' })
	@ApiResponse({ status: 200, description: 'Price calculated successfully.' })
	@Auth(UserRole.USER)
	async calculatePrice(
		@Body(new ValidationPipe()) createOrderDto: CreateOrderDto
	) {
		const finalPrice =
			await this.pricingService.calculateFinalPrice(createOrderDto)
		return { price: finalPrice }
	}
}
