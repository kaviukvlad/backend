import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Post,
	UseGuards
} from '@nestjs/common'
import { UserRole } from 'prisma/generated/client'
import { Auth } from 'src/auth/decorators/auth.decorators'
import { Roles } from 'src/auth/decorators/roles.decorator'
import { RolesGuard } from 'src/auth/guard/roles.guard'
import { CreateRegionDto } from './dto/create-region.dto'
import { RegionService } from './region.service'

@Controller('regions')
export class RegionController {
	constructor(private readonly regionService: RegionService) {}

	@Get()
	async findAll() {
		return this.regionService.findAll()
	}

	@Post()
	@Roles(UserRole.ADMIN, UserRole.SUPERADMIN)
	@UseGuards(RolesGuard)
	@Auth()
	async create(@Body() dto: CreateRegionDto) {
		return this.regionService.create(dto)
	}

	@Delete(':id')
	@HttpCode(204)
	@Roles(UserRole.SUPERADMIN)
	@UseGuards(RolesGuard)
	@Auth()
	async remove(@Param('id') id: string) {
		return this.regionService.remove(id)
	}
}
