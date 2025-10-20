import {
	Body,
	Controller,
	Post,
	Request,
	UseGuards,
	ValidationPipe
} from '@nestjs/common'
import { EmailService } from 'src/email/email.service'
import { CreateOrderDto } from 'src/orders/dto/create-order.dto'
import { OrdersService } from 'src/orders/orders.service'
import { PdfService } from 'src/pdf/pdf.service'
import { ApiKeyGuard } from './guard/api-key.guard'

@Controller('b2b')
export class B2bController {
	constructor(
		private readonly ordersService: OrdersService,
		private readonly pdfService: PdfService,
		private readonly emailService: EmailService
	) {}

	@Post('orders')
	@UseGuards(ApiKeyGuard)
	async createOrder(
		@Body(new ValidationPipe()) createOrderDto: CreateOrderDto,
		@Request() req
	) {
		const partner = req.partner

		const newOrder = await this.ordersService.create(
			createOrderDto,
			undefined,
			partner
		)

		const pdfBuffer = await this.pdfService.generateVoucher(newOrder)

		await this.emailService.sendVoucher(
			createOrderDto.customerEmail,
			newOrder,
			pdfBuffer
		)

		return newOrder
	}
}
