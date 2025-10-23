import { forwardRef, Module } from '@nestjs/common'
import { GeoModule } from 'src/geo/geo.module'
import { PaymentModule } from 'src/payment/payment.module'
import { PricingModule } from 'src/pricing/pricing.module'
import { PrismaService } from 'src/prisma.service'
import { OrdersController } from './orders.controller'
import { OrdersService } from './orders.service'

@Module({
	imports: [GeoModule, PricingModule, forwardRef(() => PaymentModule)],
	controllers: [OrdersController],
	providers: [OrdersService, PrismaService],
	exports: [OrdersService]
})
export class OrdersModule {}
