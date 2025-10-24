import { BullModule } from '@nestjs/bull'
import { forwardRef, Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { EmailModule } from 'src/email/email.module'
import { OrdersModule } from 'src/orders/orders.module'
import { PdfModule } from 'src/pdf/pdf.module'
import { PAYMENT_QUEUE } from './constants'
import { PaymentController } from './payment.controller'
import { PaymentProcessor } from './payment.processor'
import { PaymentService } from './payment.service'

@Module({
	imports: [
		BullModule.registerQueue({
			name: PAYMENT_QUEUE
		}),
		ConfigModule,
		forwardRef(() => OrdersModule),
		EmailModule,
		PdfModule
	],
	controllers: [PaymentController],
	providers: [PaymentService, PaymentProcessor],
	exports: [PaymentService, BullModule]
})
export class PaymentModule {}
