import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { VehicleTypeController } from './vehicle-type.controller'
import { VehicleTypeService } from './vehicle-type.service'

@Module({
	controllers: [VehicleTypeController],
	providers: [VehicleTypeService, PrismaService],
	exports: [VehicleTypeService]
})
export class VehicleTypeModule {}
