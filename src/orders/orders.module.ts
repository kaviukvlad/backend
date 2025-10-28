import { forwardRef, Module } from '@nestjs/common'
import { GeoModule } from 'src/geo/geo.module'
import { NotificationsModule } from 'src/notifications/notifications.module'
import { PaymentModule } from 'src/payment/payment.module'
import { PricingModule } from 'src/pricing/pricing.module'
import { PrismaService } from 'src/prisma.service'
import { OrdersController } from './orders.controller'
import { OrdersService } from './orders.service'

@Module({
	imports: [
		GeoModule,
		NotificationsModule,
		PricingModule,
		forwardRef(() => PaymentModule)
	],
	controllers: [OrdersController],
	providers: [OrdersService, PrismaService, PrismaService],
	exports: [OrdersService]
})
export class OrdersModule {}
