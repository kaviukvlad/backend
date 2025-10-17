import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { CreateVehicleTypeDto } from './dto/create-vehicle-type.dto'

@Injectable()
export class VehicleTypeService {
	constructor(private prisma: PrismaService) {}

	async create(dto: CreateVehicleTypeDto) {
		return this.prisma.vehicleType.create({
			data: dto
		})
	}

	async findAll() {
		return this.prisma.vehicleType.findMany()
	}
}
