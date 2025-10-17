import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common'
import { UserRole } from 'prisma/generated/client'
import { Auth } from 'src/auth/decorators/auth.decorators'
import { Roles } from 'src/auth/decorators/roles.decorator'
import { RolesGuard } from 'src/auth/guard/roles.guard'
import { CreateVehicleTypeDto } from './dto/create-vehicle-type.dto'
import { VehicleTypeService } from './vehicle-type.service'

@Controller('vehicle-type')
export class VehicleTypeController {
	constructor(private readonly vehicleTypeService: VehicleTypeService) {}

	@Get()
	async findAll() {
		return this.vehicleTypeService.findAll()
	}

	@Post()
	@Roles(UserRole.ADMIN, UserRole.SUPERADMIN)
	@UseGuards(RolesGuard)
	@Auth()
	async create(@Body() dto: CreateVehicleTypeDto) {
		return this.vehicleTypeService.create(dto)
	}
}
