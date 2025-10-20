import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { EmailModule } from 'src/email/email.module'
import { OrdersModule } from 'src/orders/orders.module'
import { PdfModule } from 'src/pdf/pdf.module'
import { PrismaService } from 'src/prisma.service'
import { B2bController } from './b2b.controller'
import { ApiKeyGuard } from './guard/api-key.guard'
import { ApiLoggingMiddleware } from './middleware/api-logging.middleware'
import { PartnerController } from './partner.controller'
import { PartnerService } from './partner.service'

@Module({
	imports: [OrdersModule, PdfModule, EmailModule],
	controllers: [PartnerController, B2bController],
	providers: [PartnerService, PrismaService, ApiKeyGuard],
	exports: [PartnerService]
})
export class PartnerModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(ApiLoggingMiddleware).forRoutes('b2b')
	}
}
