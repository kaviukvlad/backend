import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Post
} from '@nestjs/common'
import {
	ApiBearerAuth,
	ApiExtraModels,
	ApiOperation,
	ApiParam,
	ApiResponse,
	ApiTags,
	getSchemaPath
} from '@nestjs/swagger'
import { UserRole } from 'prisma/generated/client'
import { Auth } from 'src/auth/decorators/auth.decorators'
import { CreateRegionDto } from './dto/create-region.dto'
import { RegionResponseDto } from './dto/region-response.dto'
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
			items: { $ref: getSchemaPath(RegionResponseDto) }
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
	@Auth(UserRole.ADMIN, UserRole.SUPERADMIN)
	async create(@Body() dto: CreateRegionDto) {
		return this.regionService.create(dto)
	}

	@Delete(':id')
	@HttpCode(204)
	@ApiOperation({ summary: 'Delete region (for superadmin)' })
	@ApiBearerAuth()
	@ApiParam({ name: 'id', description: 'ID of the region to delete' })
	@ApiResponse({ status: 204, description: 'Region successfully deleted.' })
	@ApiResponse({ status: 404, description: 'Region not found.' })
	@Auth(UserRole.SUPERADMIN)
	async remove(@Param('id') id: string) {
		return this.regionService.remove(id)
	}
}
