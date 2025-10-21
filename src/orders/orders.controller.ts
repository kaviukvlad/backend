import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
	Request,
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
import { CreateOrderDto } from './dto/create-order.dto'
import { UpdateOrderDto } from './dto/update-order.dto'
import { OrdersService } from './orders.service'

@ApiTags('Orders')
@ApiBearerAuth()
@Controller('orders')
export class OrdersController {
	constructor(private readonly ordersService: OrdersService) {}

	@Post()
	@ApiOperation({ summary: 'Create new order' })
	@ApiResponse({ status: 201, description: 'Order successfully created.' })
	@ApiResponse({ status: 400, description: 'Invalid input.' })
	@Auth(UserRole.ADMIN, UserRole.SUPERADMIN)
	async create(
		@Body(new ValidationPipe()) createOrderDto: CreateOrderDto,
		@Request() req
	) {
		const createId = req.user.id
		return this.ordersService.create(createOrderDto, createId)
	}

	@Get()
	@ApiOperation({ summary: 'Get a list of all orders' })
	@ApiResponse({ status: 200, description: 'Order list received.' })
	@Auth(UserRole.ADMIN, UserRole.SUPERADMIN)
	async findAll() {
		return this.ordersService.findAll()
	}

	@Get(':id')
	@ApiOperation({ summary: 'Get single order details by ID' })
	@ApiParam({ name: 'id', description: 'Order ID' })
	@ApiResponse({ status: 200, description: 'Order data received.' })
	@ApiResponse({ status: 404, description: 'Order not found.' })
	@Auth(UserRole.ADMIN, UserRole.SUPERADMIN)
	async findOne(@Param('id') id: string) {
		return this.ordersService.findOne(id)
	}

	@Patch(':id')
	@ApiOperation({ summary: 'Update existing order' })
	@ApiParam({ name: 'id', description: 'Order ID' })
	@ApiResponse({ status: 200, description: 'Order successfully updated.' })
	@ApiResponse({ status: 404, description: 'Order not found.' })
	@Auth(UserRole.ADMIN, UserRole.SUPERADMIN)
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
	@Auth(UserRole.ADMIN, UserRole.SUPERADMIN)
	async remove(@Param('id') id: string) {
		return this.ordersService.remove(id)
	}

	@Patch(':id/restore')
	@ApiOperation({ summary: 'Restore canceled order' })
	@ApiParam({ name: 'id', description: 'Order ID' })
	@ApiResponse({ status: 200, description: 'Order successfully restored.' })
	@Auth(UserRole.ADMIN, UserRole.SUPERADMIN)
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
	@Auth(UserRole.ADMIN, UserRole.SUPERADMIN)
	async copy(@Param('id') id: string) {
		return this.ordersService.copy(id)
	}
}
