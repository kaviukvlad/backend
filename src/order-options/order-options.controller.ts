import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	UsePipes,
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
import { CreateOrderOptionDto } from './dto/create-option.dto'
import { OrderOptionsService } from './order-options.service'

@ApiTags('Order Options')
@ApiBearerAuth()
@Controller('order-options')
export class OrderOptionsController {
	constructor(private readonly orderOptionsService: OrderOptionsService) {}

	@Get()
	@ApiOperation({ summary: 'Get a list of all active add-ons' })
	@ApiResponse({
		status: 200,
		description: 'List of options successfully received.'
	})
	@Auth()
	findAllActive() {
		return this.orderOptionsService.findAllActive()
	}

	@Post()
	@ApiOperation({ summary: 'Create new add. option (for admins)' })
	@ApiResponse({ status: 201, description: 'Option created successfully.' })
	@ApiResponse({ status: 400, description: 'Invalid input.' })
	@ApiResponse({ status: 403, description: 'Access denied (non-admin).' })
	@Auth(UserRole.ADMIN, UserRole.SUPERADMIN)
	@UsePipes(new ValidationPipe())
	create(@Body() dto: CreateOrderOptionDto) {
		return this.orderOptionsService.create(dto)
	}

	@Delete(':id')
	@ApiOperation({ summary: 'Deactivate additional option (for admins)' })
	@ApiParam({ name: 'id', description: 'ID of the option to be deactivated' })
	@ApiResponse({ status: 200, description: 'Option successfully deactivated.' })
	@ApiResponse({ status: 404, description: 'Option with such ID not found.' })
	@Auth(UserRole.ADMIN, UserRole.SUPERADMIN)
	deactivate(@Param('id') id: string) {
		return this.orderOptionsService.deactivate(id)
	}
}
