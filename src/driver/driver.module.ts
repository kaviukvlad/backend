import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { DriverController } from './driver.controller'
import { DriverService } from './driver.service'

@Module({
	controllers: [DriverController],
	providers: [DriverService, PrismaService],
	exports: [DriverService]
})
export class DriverModule {}
