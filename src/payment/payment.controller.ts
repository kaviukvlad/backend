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
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import type { Request } from 'express'
import { EmailService } from 'src/email/email.service'
import { CreateOrderDto } from 'src/orders/dto/create-order.dto'
import { OrdersService } from 'src/orders/orders.service'
import { PdfService } from 'src/pdf/pdf.service'
import Stripe from 'stripe'
import { PaymentService } from './payment.service'

import { SkipThrottle } from '@nestjs/throttler'

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
	@ApiResponse({
		status: 200,
		description: 'Returns the status of the payment job from cache (instant).',
		schema: {
			example: {
				cache: {
					status: 'completed',
					clientSecret: 'pi_3..._secret_...',
					amount: 120.5
				},
				queue: null
			}
		}
	})
	@ApiResponse({
		status: 404,
		description: 'Job ID not found in cache.',
		schema: {
			example: {
				cache: null,
				queue: null
			}
		}
	})
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

		if (event.type === 'payment_intent.succeeded') {
			const paymentIntent = event.data.object as Stripe.PaymentIntent

			const metadata = paymentIntent.metadata
			const clientId = metadata?.client_id
			const chunkCount = metadata?.order_details_count
				? parseInt(metadata.order_details_count, 10)
				: 0

			if (!chunkCount) {
				console.warn(
					`Missing order_details_count in metadata for PI: ${paymentIntent.id}`
				)
				return { received: true }
			}

			let orderDetailsRaw = ''
			for (let i = 0; i < chunkCount; i++) {
				const chunk = metadata[`order_details_${i + 1}`]
				if (!chunk) {
					console.error(
						`Missing metadata chunk order_details_${i + 1} for PI: ${paymentIntent.id}`
					)
					return { received: true }
				}
				orderDetailsRaw += chunk
			}

			let orderDetailsDto: CreateOrderDto
			try {
				orderDetailsDto = JSON.parse(orderDetailsRaw) as CreateOrderDto
			} catch (err) {
				console.error(
					`Failed to parse order_details for PI: ${paymentIntent.id}`,
					err
				)
				return { received: true }
			}

			try {
				const newOrder = await this.ordersService.create(orderDetailsDto, {
					clientId: clientId || undefined,
					paymentIntentId: paymentIntent.id
				})

				if ('id' in newOrder) {
					console.log(
						`Successfully created order in DB (ID: ${newOrder.id}) for PI: ${paymentIntent.id}`
					)

				console.log(
            `Voucher generation is temporarily disabled for order ${newOrder.id}.`
          )
				/*	try {
						const pdfBuffer = await this.pdfService.generateVoucher(
							newOrder,
							'en'
						)
						await this.emailService.sendVoucher(
							newOrder.customerEmail!,
							newOrder,
							pdfBuffer
						)
						console.log(
							`Successfully sent voucher to ${newOrder.customerEmail}`
						)
					} catch (emailError) {
						console.error(
							`FAILED TO SEND VOUCHER for order ${newOrder.id}`,
							emailError
						)
					}*/
				} else {
					console.error(
						`Order creation for PI ${paymentIntent.id} returned a job ID instead of an order object.`,
						newOrder
					)
				}
			} catch (error) {
				console.error(
					`ERROR creating order from webhook for PI: ${paymentIntent.id}`,
					error
				)

				throw error
			}
		} else {
			console.log(` Unhandled Stripe event type: ${event.type}`)
		}

		return { received: true }
	}
}
