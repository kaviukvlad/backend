import type { RawBodyRequest } from '@nestjs/common'
import {
	BadRequestException,
	Controller,
	Headers,
	Post,
	Req
} from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import type { Request } from 'express'
import { CreateOrderDto } from 'src/orders/dto/create-order.dto'
import { OrdersService } from 'src/orders/orders.service'
import Stripe from 'stripe'
import { PaymentService } from './payment.service'

@ApiTags('Payment')
@Controller('payment')
export class PaymentController {
	constructor(
		private readonly paymentService: PaymentService,
		private readonly ordersService: OrdersService
	) {}

	@Post('webhook')
	@ApiOperation({ summary: 'Handle Stripe webhooks' })
	async handleWebhook(
		@Headers('stripe-signature') signature: string,
		@Req() req: RawBodyRequest<Request>
	) {
		if (!signature) {
			throw new BadRequestException('Missing stripe-signature header')
		}

		if (!req.rawBody) {
			throw new BadRequestException('Request body is missing rawBody')
		}

		try {
			const event = this.paymentService.constructWebhookEvent(
				req.rawBody,
				signature
			)

			switch (event.type) {
				case 'payment_intent.succeeded':
					const paymentIntent = event.data.object as Stripe.PaymentIntent

					console.log('PaymentIntent was successful!', paymentIntent.id)

					const orderDetailsDto = JSON.parse(
						paymentIntent.metadata.order_details
					) as CreateOrderDto
					const clientId = paymentIntent.metadata.client_id

					await this.ordersService.create(orderDetailsDto, clientId)

					break

				default:
					console.log(`Unhandled event type ${event.type}`)
			}
			return { received: true }
		} catch (err) {
			throw new BadRequestException(`Webhook Error: ${err.message}`)
		}
	}
}
