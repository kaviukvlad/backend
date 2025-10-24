import { InjectQueue } from '@nestjs/bull'
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
import type { Request } from 'express'
import { EmailService } from 'src/email/email.service'
import { CreateOrderDto } from 'src/orders/dto/create-order.dto'
import { OrdersService } from 'src/orders/orders.service'
import { PdfService } from 'src/pdf/pdf.service'
import Stripe from 'stripe'
import { PaymentService } from './payment.service'

import type { Queue } from 'bull'
import { PAYMENT_QUEUE } from './constants'

@ApiTags('Payment')
@Controller('payment')
export class PaymentController {
	constructor(
		private readonly paymentService: PaymentService,
		private readonly ordersService: OrdersService,
		private readonly pdfService: PdfService,
		private readonly emailService: EmailService,
		@Inject(CACHE_MANAGER) private cacheManager: Cache,
		@InjectQueue(PAYMENT_QUEUE) private paymentQueue: Queue
	) {}

	@Get('job/:jobId')
	@ApiOperation({ summary: 'Check status of payment creation task' })
	async inspectJob(@Param('jobId') jobId: string) {
		const cacheKey = `payment_job_${jobId}`
		const cache = await this.cacheManager.get(cacheKey)
		const job = await this.paymentQueue.getJob(jobId)
		if (!job) {
			return { cache, queue: null }
		}
		const state = await job.getState()

		let returnValue = null
		try {
			returnValue = await job.finished()
		} catch (e) {}

		return {
			cache,
			queue: { id: job.id, state, attempts: job.attemptsMade, returnValue }
		}
	}

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

			console.log('PaymentIntent was successful!', paymentIntent.id)
			console.log('--- Metadata from Stripe ---')
			console.log(paymentIntent.metadata)
			console.log('----------------------------')

			const orderDetailsRaw = paymentIntent.metadata?.order_details
			const clientId = paymentIntent.metadata?.client_id

			if (!orderDetailsRaw || !clientId) {
				console.warn(
					`Missing order_details or client_id in metadata for PI: ${paymentIntent.id}`
				)
				return { received: true }
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
					clientId: clientId,
					paymentIntentId: paymentIntent.id
				})

				console.log(
					`Successfully created order in DB (ID: ${newOrder.id}) for PI: ${paymentIntent.id}`
				)

				try {
					const pdfBuffer = await this.pdfService.generateVoucher(
						newOrder,
						'en'
					)
					await this.emailService.sendVoucher(
						newOrder.customerEmail!,
						newOrder,
						pdfBuffer
					)
					console.log(`Successfully sent voucher to ${newOrder.customerEmail}`)
				} catch (emailError) {
					console.error(
						`FAILED TO SEND VOUCHER for order ${newOrder.id}`,
						emailError
					)
				}
			} catch (error) {
				console.error(
					`ERROR creating order from webhook for PI: ${paymentIntent.id}`,
					error
				)
			}
		} else {
			console.log(` Unhandled Stripe event type: ${event.type}`)
		}

		return { received: true }
	}
}
