import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager'
import type { RawBodyRequest } from '@nestjs/common'
import {
	BadRequestException,
	Controller,
	Get,
	Headers,
	Inject,
	Param,
	Post,
	Req
} from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { SkipThrottle } from '@nestjs/throttler'
import type { Request } from 'express'
import Stripe from 'stripe'

import { EmailService } from 'src/email/email.service'
import { CreateOrderDto } from 'src/orders/dto/create-order.dto'
import { OrdersService } from 'src/orders/orders.service'
import { PdfService } from 'src/pdf/pdf.service'
import { PaymentService } from './payment.service'

@ApiTags('Payment')
@Controller('payment')
export class PaymentController {
	constructor(
		private readonly paymentService: PaymentService,
		private readonly ordersService: OrdersService,
		private readonly pdfService: PdfService,
		private readonly emailService: EmailService,
		@Inject(CACHE_MANAGER) private cacheManager: Cache
	) {}

	@Get('job/:jobId')
	@ApiOperation({ summary: 'Check status of payment creation task' })
	async inspectJob(@Param('jobId') jobId: string) {
		const cacheKey = `payment_job_${jobId}`
		const cacheResult = await this.cacheManager.get(cacheKey)

		return {
			cache: cacheResult || null,
			queue: null
		}
	}

	@SkipThrottle()
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

		let event: Stripe.Event
		try {
			event = this.paymentService.constructWebhookEvent(req.rawBody, signature)
		} catch (err) {
			throw new BadRequestException(
				`Webhook signature verification failed: ${err.message}`
			)
		}

		console.log(`[Webhook] Received Stripe event: ${event.type}`)

		if (event.type === 'payment_intent.succeeded') {
			const paymentIntent = event.data.object as Stripe.PaymentIntent

			console.log(`[Webhook] Processing PI: ${paymentIntent.id}`)

			const idempotencyKey = `stripe_pi_${paymentIntent.id}_handled`
			const isAlreadyHandled = await this.cacheManager.get(idempotencyKey)
			if (isAlreadyHandled) {
				console.warn(
					`[Webhook] PI ${paymentIntent.id} already processed → SKIPPED`
				)
				return { received: true }
			}

			await this.cacheManager.set(idempotencyKey, true, 60 * 60)

			const metadata = paymentIntent.metadata
			const clientId = metadata?.client_id
			const chunkCount = metadata?.order_details_count
				? parseInt(metadata.order_details_count, 10)
				: 0

			if (!chunkCount) {
				console.warn(
					`[Webhook] No order_details_count for PI: ${paymentIntent.id}`
				)
				return { received: true }
			}

			let rawOrderData = ''
			for (let i = 0; i < chunkCount; i++) {
				const part = metadata[`order_details_${i + 1}`]
				if (!part) {
					console.error(
						`[Webhook] Missing metadata chunk order_details_${i + 1} for PI ${paymentIntent.id}`
					)
					return { received: true }
				}
				rawOrderData += part
			}

			let orderDetailsDto: CreateOrderDto
			try {
				orderDetailsDto = JSON.parse(rawOrderData) as CreateOrderDto
			} catch (err) {
				console.error(
					`[Webhook] Failed to parse order JSON for PI ${paymentIntent.id}`,
					err
				)
				return { received: true }
			}

			let newOrder
			try {
				newOrder = await this.ordersService.create(orderDetailsDto, {
					clientId: clientId || undefined,
					paymentIntentId: paymentIntent.id
				})

				console.log(
					`[Webhook] SUCCESS: Order created (ID ${newOrder.id}) for PI ${paymentIntent.id}`
				)
			} catch (err) {
				console.error(
					`[Webhook] ERROR creating order for PI ${paymentIntent.id}`,
					err
				)
				throw err
			}

			try {
				const voucherHtml = await this.pdfService.getVoucherHtml(newOrder, 'en')

				const recipient =
					newOrder.customerEmail ||
					paymentIntent.receipt_email ||
					(paymentIntent as any).charges?.data?.[0]?.billing_details?.email ||
					paymentIntent.metadata?.customer_email

				if (!recipient) {
					console.error(
						`[Webhook] NO EMAIL FOUND — voucher not sent for order ${newOrder.id}`
					)
				} else {
					await this.emailService.sendVoucher(recipient, newOrder, voucherHtml)
					console.log(`[Webhook] Voucher sent to ${recipient}`)
				}
			} catch (err) {
				console.error(
					`[Webhook] FAILED to send voucher for order ${newOrder.id}`,
					err
				)
			}
		} else {
			console.log(`[Webhook] Ignored event: ${event.type}`)
		}

		return { received: true }
	}
}
