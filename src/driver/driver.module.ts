import { forwardRef, Module } from '@nestjs/common'
import { MulterModule } from '@nestjs/platform-express'
import { AuthModule } from 'src/auth/auth.module'
import { NotificationsModule } from 'src/notifications/notifications.module'
import { PricingModule } from 'src/pricing/pricing.module'
import { PrismaService } from 'src/prisma.service'
import { DriverController } from './driver.controller'
import { DriverService } from './driver.service'

@Module({
	imports: [
		forwardRef(() => AuthModule),
		PricingModule,
		NotificationsModule,
		MulterModule.register({
			dest: './uploads'
		})
	],
	controllers: [DriverController],
	providers: [DriverService, PrismaService],
	exports: [DriverService]
})
export class DriverModule {}
