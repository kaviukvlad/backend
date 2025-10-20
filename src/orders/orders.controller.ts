import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
	Request,
	UseGuards,
	ValidationPipe
} from '@nestjs/common'
import { UserRole } from 'prisma/generated/client'
import { Auth } from 'src/auth/decorators/auth.decorators'
import { Roles } from 'src/auth/decorators/roles.decorator'
import { RolesGuard } from 'src/auth/guard/roles.guard'
import { CreateOrderDto } from './dto/create-order.dto'
import { UpdateOrderDto } from './dto/update-order.dto'
import { OrdersService } from './orders.service'

@Controller('orders')
export class OrdersController {
	constructor(private readonly ordersService: OrdersService) {}

	@Post()
	@Auth(UserRole.ADMIN, UserRole.SUPERADMIN)
	async create(
		@Body(new ValidationPipe()) createOrderDto: CreateOrderDto,
		@Request() req
	) {
		const createId = req.user.id
		return this.ordersService.create(createOrderDto, createId)
	}

	@Get()
	@Roles(UserRole.ADMIN, UserRole.SUPERADMIN)
	@UseGuards(RolesGuard)
	@Auth()
	async findAll() {
		return this.ordersService.findAll()
	}

	@Get(':id')
	@Roles(UserRole.ADMIN, UserRole.SUPERADMIN)
	@UseGuards(RolesGuard)
	@Auth()
	async findOne(@Param('id') id: string) {
		return this.ordersService.findOne(id)
	}

	@Patch(':id')
	@Roles(UserRole.ADMIN, UserRole.SUPERADMIN)
	async update(
		@Param('id') id: string,
		@Body(new ValidationPipe()) dto: UpdateOrderDto
	) {
		return this.ordersService.update(id, dto)
	}

	@Delete(':id')
	@Roles(UserRole.ADMIN, UserRole.SUPERADMIN)
	async remove(@Param('id') id: string) {
		return this.ordersService.remove(id)
	}

	@Patch(':id/restore')
	@Roles(UserRole.ADMIN, UserRole.SUPERADMIN)
	async restore(@Param('id') id: string) {
		return this.ordersService.restore(id)
	}

	@Post(':id/copy')
	@Roles(UserRole.ADMIN, UserRole.SUPERADMIN)
	async copy(@Param('id') id: string) {
		return this.ordersService.copy(id)
	}
}
