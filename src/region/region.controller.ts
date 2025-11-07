import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	ParseFloatPipe,
	Patch,
	Post,
	Query
} from '@nestjs/common'
import {
	ApiBearerAuth,
	ApiExtraModels,
	ApiOperation,
	ApiParam,
	ApiQuery,
	ApiResponse,
	ApiTags,
	getSchemaPath
} from '@nestjs/swagger'
import { UserRole } from '@prisma/client'
import { Auth } from 'src/auth/decorators/auth.decorators'
import { CreateRegionDto } from './dto/create-region.dto'
import { RegionResponseDto } from './dto/region-response.dto'
import { UpdateRegionDto } from './dto/update-region.dto'
import { RegionService } from './region.service'

@ApiTags('Regions')
@Controller('regions')
@ApiExtraModels(RegionResponseDto)
export class RegionController {
	constructor(private readonly regionService: RegionService) {}

	@Get()
	@ApiOperation({ summary: 'Get all regions tree' })
	@ApiResponse({
		status: 200,
		description: 'Region tree successfully retrieved.',
		schema: {
			type: 'array',
			items: { $ref: getSchemaPath(RegionResponseDto) },
			example: [
				{
					id: 'clwtrjfuq000111a9f1a2g8f1',
					parent_id: null,
					name: 'Paris',
					type: 'CITY',
					latitude: 48.8566,
					longitude: 2.3522,
					radiusKm: 100,
					translations: [{ id: 'trans_id_1', name: 'Paris' }],
					children: [
						{
							id: 'clwtrjfuq000211a9f1a2g8f1',
							parent_id: 'clwtrjfuq000111a9f1a2g8f1',
							name: 'Charles de Gaulle Airport (CDG)',
							type: 'AIRPORT',
							latitude: 49.0097,
							longitude: 2.5479,
							radiusKm: null,
							children: [],
							translations: []
						}
					]
				},
				{
					id: 'clwtrjfuq000311a9f1a2g8f1',
					parent_id: null,
					name: 'Lviv',
					type: 'CITY',
					latitude: 49.8397,
					longitude: 24.0297,
					radiusKm: 60,
					children: [],
					translations: []
				}
			]
		}
	})
	async findAll() {
		return this.regionService.findAll()
	}

	@Post()
	@ApiOperation({ summary: 'Create new region (for admins)' })
	@ApiBearerAuth()
	@ApiResponse({ status: 201, description: 'Region created successfully.' })
	@ApiResponse({ status: 400, description: 'Invalid input.' })
	@Auth(UserRole.ADMIN)
	async create(@Body() dto: CreateRegionDto) {
		return this.regionService.create(dto)
	}

	@Delete(':id')
	@HttpCode(204)
	@ApiOperation({ summary: 'Delete region (for admin)' })
	@ApiBearerAuth()
	@ApiParam({ name: 'id', description: 'ID of the region to delete' })
	@ApiResponse({ status: 204, description: 'Region successfully deleted.' })
	@ApiResponse({ status: 404, description: 'Region not found.' })
	@Auth(UserRole.ADMIN)
	async remove(@Param('id') id: string) {
		return this.regionService.remove(id)
	}

	@Patch(':id')
	@ApiOperation({ summary: 'Update region details (for admin)' })
	@ApiBearerAuth()
	@Auth(UserRole.ADMIN)
	@ApiParam({ name: 'id', description: 'ID of the region to update' })
	@ApiResponse({
		status: 200,
		description: 'Region updated successfully.'
	})
	@ApiResponse({ status: 404, description: 'Region not found.' })
	update(@Param('id') id: string, @Body() updateRegionDto: UpdateRegionDto) {
		console.log(`Trying to update region with ID: ${id}`)
		return this.regionService.updata(id, updateRegionDto)
	}

	@Get('find-by-coords')
	@ApiOperation({ summary: 'Find the closest region based on coordinates' })
	@ApiQuery({ name: 'lat', required: true, type: Number, example: 48.8566 })
	@ApiQuery({ name: 'lng', required: true, type: Number, example: 2.3522 })
	@ApiResponse({
		status: 200,
		description: 'Returns the closest matching region.',
		schema: {
			example: {
				id: 'clxtest...abc',
				name: 'Paris',
				distanceKm: 5.2
			}
		}
	})
	async findRegion(
		@Query('lat', ParseFloatPipe) lat: number,
		@Query('lng', ParseFloatPipe) lng: number
	) {
		return this.regionService.findByCoordinates(lat, lng)
	}
}
