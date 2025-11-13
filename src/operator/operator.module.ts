import { Module } from '@nestjs/common'
import { DriverModule } from 'src/driver/driver.module'
import { EmailModule } from 'src/email/email.module'
import { PaymentModule } from 'src/payment/payment.module'
import { PdfModule } from 'src/pdf/pdf.module'
import { PrismaService } from 'src/prisma.service'
import { OperatorController } from './operator.controller'
import { OperatorService } from './operator.service'

@Module({
	imports: [PaymentModule, DriverModule, PdfModule, EmailModule],
	controllers: [OperatorController],
	providers: [OperatorService, PrismaService]
})
export class OperatorModule {}
