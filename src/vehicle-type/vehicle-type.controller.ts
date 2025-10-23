import { Body, Controller, Get, Post } from '@nestjs/common'
import {
	ApiBearerAuth,
	ApiHeader,
	ApiOperation,
	ApiResponse,
	ApiTags
} from '@nestjs/swagger'
import { UserRole } from 'prisma/generated/client'
import { Auth } from 'src/auth/decorators/auth.decorators'
import { Locale } from 'src/auth/decorators/locale.decorator'
import { CreateVehicleTypeDto } from './dto/create-vehicle-type.dto'
import { VehicleTypeService } from './vehicle-type.service'

@ApiTags('Vehicle Types')
@Controller('vehicle-type')
export class VehicleTypeController {
	constructor(private readonly vehicleTypeService: VehicleTypeService) {}

	@Get()
	@ApiOperation({ summary: 'Get a list of all car types' })
	@ApiHeader({
		name: 'Accept-Language',
		description: 'Language to get names (e.g. "uk", "en")',
		required: false
	})
	@ApiResponse({
		status: 200,
		description: 'List of car types successfully received.'
	})
	async findAll(@Locale() locale: string) {
		return this.vehicleTypeService.findAll(locale)
	}

	@Post()
	@ApiOperation({ summary: 'Create new car type (for admins)' })
	@ApiBearerAuth()
	@ApiResponse({ status: 201, description: 'Car type successfully created.' })
	@ApiResponse({ status: 400, description: 'Invalid input.' })
	@Auth(UserRole.ADMIN)
	async create(@Body() dto: CreateVehicleTypeDto) {
		return this.vehicleTypeService.create(dto)
	}
}
