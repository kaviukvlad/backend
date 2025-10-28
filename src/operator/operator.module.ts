import { Module } from '@nestjs/common'
import { PaymentModule } from 'src/payment/payment.module'
import { PrismaService } from 'src/prisma.service'
import { OperatorController } from './operator.controller'
import { OperatorService } from './operator.service'

@Module({
	imports: [PaymentModule],
	controllers: [OperatorController],
	providers: [OperatorService, PrismaService]
})
export class OperatorModule {}
