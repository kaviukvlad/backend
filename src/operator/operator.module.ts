import { Module } from '@nestjs/common'
import { DriverModule } from 'src/driver/driver.module'
import { PaymentModule } from 'src/payment/payment.module'
import { PrismaService } from 'src/prisma.service'
import { OperatorController } from './operator.controller'
import { OperatorService } from './operator.service'

@Module({
	imports: [PaymentModule, DriverModule],
	controllers: [OperatorController],
	providers: [OperatorService, PrismaService]
})
export class OperatorModule {}
