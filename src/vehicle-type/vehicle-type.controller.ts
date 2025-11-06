import { Body, Controller, Get, Post } from '@nestjs/common'
import {
	ApiBearerAuth,
	ApiHeader,
	ApiOperation,
	ApiResponse,
	ApiTags
} from '@nestjs/swagger'
import { UserRole } from '@prisma/client'
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
		description: 'List of car types successfully received.',
		schema: {
			example: [
				{
					id: 'clwtrgq5n000011a9d7z7f9c3',
					code: 'STANDARD',
					name: 'Standard',
					priceMultiplier: 1.0,
					max_passengers: 3,
					max_luggage_standard: 2,
					max_luggage_small: 1
				},
				{
					id: 'clwtrgq5n000111a9d7z7f9c3',
					code: 'BUSINESS',
					name: 'Business',
					priceMultiplier: 1.0,
					max_passengers: 3,
					max_luggage_standard: 2,
					max_luggage_small: 2
				},
				{
					id: 'clwtrgq5n000211a9d7z7f9c3',
					code: 'MINIVAN',
					name: 'Minivan',
					priceMultiplier: 1.0,
					max_passengers: 7,
					max_luggage_standard: 6,
					max_luggage_small: 2
				},
				{
					id: 'clwtrgq5n000311a9d7z7f9c3',
					code: 'BUS',
					name: 'Bus',
					priceMultiplier: 1.0,
					max_passengers: 16,
					max_luggage_standard: 16,
					max_luggage_small: 16
				}
			]
		}
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
