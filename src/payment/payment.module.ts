import { forwardRef, Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { OrdersModule } from 'src/orders/orders.module'
import { PaymentController } from './payment.controller'
import { PaymentService } from './payment.service'

@Module({
	imports: [ConfigModule, forwardRef(() => OrdersModule)],
	controllers: [PaymentController],
	providers: [PaymentService],
	exports: [PaymentService]
})
export class PaymentModule {}
