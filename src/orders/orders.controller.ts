import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
	Query,
	Req,
	UseGuards,
	ValidationPipe
} from '@nestjs/common'
import {
	ApiBearerAuth,
	ApiOperation,
	ApiResponse,
	ApiTags
} from '@nestjs/swagger'
import { UserRole } from '@prisma/client'
import { Auth } from 'src/auth/decorators/auth.decorators'
import { CurrentClient } from 'src/auth/decorators/client.decorators'
import { JwtAuthOptionalGuard } from 'src/auth/guard/jwt-auth-optional.guard'
import { PricingService } from 'src/pricing/pricing.service'
import { CalculatePriceDto } from './dto/calculate-price.dto'
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
	@ApiOperation({ summary: 'Create a new order (public or as a client)' })
	@UseGuards(JwtAuthOptionalGuard)
	async createMyOrder(
		@Body(new ValidationPipe()) createOrderDto: CreateOrderDto,
		@Req() req
	) {
		const user = req.user as any
		const clientId = user?.clientProfile?.id

		return this.ordersService.create(createOrderDto, { clientId })
	}
	@Get('my')
	@ApiOperation({ summary: 'Get my order history' })
	@ApiResponse({
		status: 200,
		description: 'A list of the current client_s orders.',
		schema: {
			example: [
				{
					id: 'clwvoqj5o000211a9g74h3z7r',
					status: 'COMPLETED',
					price: '120.50',
					trip_datetime: '2025-10-30T14:30:00.000Z',
					driver: {
						name: 'Jean Pierre',
						user: { phone: '+38000000005' }
					},
					car: {
						brand: 'Mercedes-Benz',
						model: 'E-Class',
						license_plate: 'FR-123-AB'
					}
				},
				{
					id: 'clwvoqj5o000311a9g74h3z7r',
					status: 'NEW',
					price: '65.00',
					trip_datetime: '2025-11-05T10:00:00.000Z',
					driver: null,
					car: null
				}
			]
		}
	})
	@ApiResponse({
		status: 401,
		description: 'Unauthorized access.',
		schema: { example: { statusCode: 401, message: 'Unauthorized' } }
	})
	@Auth(UserRole.USER)
	async getMyOrders(@CurrentClient('id') clientId: string) {
		return this.ordersService.findMyOrders(clientId)
	}

	@Get('my/:id')
	@ApiOperation({ summary: 'Get details of a specific one of my orders' })
	@ApiResponse({
		status: 200,
		description: 'Detailed information for a single order.',
		schema: {
			example: {
				id: 'clwvoqj5o000211a9g74h3z7r',
				status: 'COMPLETED',
				price: '120.50',
				trip_datetime: '2025-10-30T14:30:00.000Z',
				passenger_count: 1,
				notes: 'Please be on time, important meeting.',
				selectedOptions: [],
				driver: {
					name: 'Jean Pierre',
					user: { phone: '+38000000005' }
				},
				car: {
					brand: 'Mercedes-Benz',
					model: 'E-Class',
					color: 'Black',
					license_plate: 'FR-123-AB'
				}
			}
		}
	})
	@ApiResponse({
		status: 401,
		description: 'Unauthorized access.',
		schema: { example: { statusCode: 401, message: 'Unauthorized' } }
	})
	@ApiResponse({
		status: 403,
		description: 'Forbidden. Client does not own this order.',
		schema: {
			example: {
				statusCode: 403,
				message: 'You do not have access to this order.',
				error: 'Forbidden'
			}
		}
	})
	@ApiResponse({
		status: 404,
		description: 'Order not found.',
		schema: {
			example: {
				statusCode: 404,
				message: 'Order with ID ... not found.',
				error: 'Not Found'
			}
		}
	})
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
	@ApiResponse({
		status: 200,
		description: 'Order list received.',
		schema: {
			example: [
				{
					id: 'clwvoqj5o000211a9g74h3z7r',
					status: 'NEW',
					price: '65.00',
					trip_datetime: '2025-11-05T10:00:00.000Z',
					customerEmail: 'client1@test.com',
					driver: null,
					region: { id: 'region_id_lviv', name: 'Lviv' },
					selectedOptions: [{}]
				},
				{
					id: 'clwvoqj5o000311a9g74h3z7r',
					status: 'PENDING_MANUAL_CONFIRMATION',
					price: '0.00',
					trip_datetime: '2025-11-08T12:00:00.000Z',
					customerEmail: 'client1@test.com',
					driver: null,
					region: { id: 'region_id_paris', name: 'Paris' },
					selectedOptions: []
				}
			]
		}
	})
	@ApiResponse({
		status: 403,
		description: 'Access denied.',
		schema: {
			example: {
				statusCode: 403,
				message: 'Forbidden resource',
				error: 'Forbidden'
			}
		}
	})
	@Auth(UserRole.ADMIN, UserRole.OPERATOR)
	async findAll(@Query() dto: SearchOrderDto) {
		return this.ordersService.findAll(dto)
	}

	@Get(':id')
	@ApiOperation({ summary: 'Get single order details by ID' })
	@ApiResponse({
		status: 200,
		description: 'Detailed information for a single order.',
		schema: {
			example: {
				id: 'clwvoqj5o000311a9g74h3z7r',
				status: 'PENDING_MANUAL_CONFIRMATION',
				price: '0.00',
				trip_datetime: '2025-11-08T12:00:00.000Z',
				passenger_count: 15,
				luggage_standard: 15,
				notes: 'Corporate group transfer to Disneyland.',
				selectedOptions: [],
				driver: null,
				car: null
			}
		}
	})
	@ApiResponse({
		status: 403,
		description: 'Access denied.',
		schema: {
			example: {
				statusCode: 403,
				message: 'Forbidden resource',
				error: 'Forbidden'
			}
		}
	})
	@ApiResponse({
		status: 404,
		description: 'Order not found.',
		schema: {
			example: {
				statusCode: 404,
				message: 'Order with ID ... not found.',
				error: 'Not Found'
			}
		}
	})
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
	@ApiOperation({ summary: 'Calculate price range for all vehicle types' })
	@ApiResponse({
		status: 200,
		description: 'Price range calculated successfully.',
		schema: {
			example: [
				{
					id: 'clx...',
					code: 'STANDARD',
					name: 'Standard',
					price: 55.0,
					multiplier: 1.0
				},
				{
					id: 'clx...',
					code: 'BUSINESS',
					name: 'Business',
					price: 90.0,
					multiplier: 1.3
				},
				{
					id: 'clx...',
					code: 'MINIVAN',
					name: 'Minivan',
					price: 75.0,
					multiplier: 1.1
				}
			]
		}
	})
	@ApiResponse({
		status: 400,
		description:
			'Bad request (e.g., region not found, pricing settings missing).',
		schema: {
			example: {
				statusCode: 400,
				message:
					'Global pricing settings (GLOBAL_PRICE_PER_KM or GLOBAL_MINIMUM_FARE) are missing.',
				error: 'Bad Request'
			}
		}
	})
	async calculatePrice(@Body(new ValidationPipe()) dto: CalculatePriceDto) {
		return this.pricingService.calculatePriceRange(dto)
	}
}
