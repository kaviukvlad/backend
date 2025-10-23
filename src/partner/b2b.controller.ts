import {
	BadRequestException,
	Body,
	Controller,
	Post,
	Request,
	ValidationPipe
} from '@nestjs/common'
import {
	ApiOperation,
	ApiResponse,
	ApiSecurity,
	ApiTags
} from '@nestjs/swagger'
import { Locale } from 'src/auth/decorators/locale.decorator'
import { EmailService } from 'src/email/email.service'
import { CreateOrderDto } from 'src/orders/dto/create-order.dto'
import { OrdersService } from 'src/orders/orders.service'
import { PdfService } from 'src/pdf/pdf.service'

@ApiTags('B2B')
@Controller('b2b')
export class B2bController {
	constructor(
		private readonly ordersService: OrdersService,
		private readonly pdfService: PdfService,
		private readonly emailService: EmailService
	) {}

	@Post('orders')
	@ApiOperation({ summary: 'Create order from B2B partner' })
	@ApiSecurity('ApiKeyAuth')
	@ApiResponse({ status: 201, description: 'Order successfully created.' })
	@ApiResponse({ status: 401, description: 'Invalid or inactive API key.' })
	async createOrder(
		@Body(new ValidationPipe()) createOrderDto: CreateOrderDto,
		@Request() req,
		@Locale() locale: string
	) {
		if (!createOrderDto.customerEmail) {
			throw new BadRequestException('customerEmail is required for B2B orders.')
		}

		const partner = req.partner

		const newOrder = await this.ordersService.create(
			createOrderDto,
			undefined,
			partner
		)

		const pdfBuffer = await this.pdfService.generateVoucher(newOrder, locale)

		await this.emailService.sendVoucher(
			createOrderDto.customerEmail,
			newOrder,
			pdfBuffer
		)

		return newOrder
	}
}
