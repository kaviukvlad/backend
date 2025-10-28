import { Module } from '@nestjs/common'
import { NotificationsModule } from 'src/notifications/notifications.module'
import { PricingModule } from 'src/pricing/pricing.module'
import { PrismaService } from 'src/prisma.service'
import { DriverController } from './driver.controller'
import { DriverService } from './driver.service'

@Module({
	imports: [PricingModule, NotificationsModule],
	controllers: [DriverController],
	providers: [DriverService, PrismaService],
	exports: [DriverService]
})
export class DriverModule {}
