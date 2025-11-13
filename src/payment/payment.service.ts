import {
	BadRequestException,
	Injectable,
	InternalServerErrorException
} from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import Stripe from 'stripe'

@Injectable()
export class PaymentService {
	private stripe: Stripe
	private webhookSecret: string

	constructor(private configService: ConfigService) {
		const secretKey = this.configService.get('STRIPE_SECRET_KEY')
		const webhookSecretFromEnv = this.configService.get('STRIPE_WEBHOOK_SECRET')

		if (!secretKey || !webhookSecretFromEnv) {
			throw new InternalServerErrorException(
				'Stripe secret key is not defined in .env file'
			)
		}

		this.webhookSecret = webhookSecretFromEnv

		this.stripe = new Stripe(secretKey, {
			apiVersion: '2025-09-30.clover'
		})
	}

	constructWebhookEvent(payload: Buffer, signature: string) {
		return this.stripe.webhooks.constructEvent(
			payload,
			signature,
			this.webhookSecret
		)
	}

	async createPaymentIntent(
		amount: number,
		currency: string,
		orderDetails: any,
		clientId: string
	) {
		const amountInCents = Math.round(amount * 100)

		const orderJson = JSON.stringify(orderDetails)
		const metadata: Stripe.MetadataParam = {
			client_id: clientId
		}

		const CHUNK_SIZE = 500
		const chunkCount = Math.ceil(orderJson.length / CHUNK_SIZE)

		if (chunkCount > 10) {
			throw new InternalServerErrorException(
				'Order data is too large for Stripe metadata.'
			)
		}

		metadata['order_details_count'] = String(chunkCount)
		for (let i = 0; i < chunkCount; i++) {
			metadata[`order_details_${i + 1}`] = orderJson.substring(
				i * CHUNK_SIZE,
				(i + 1) * CHUNK_SIZE
			)
		}

		const paymentIntent = await this.stripe.paymentIntents.create({
			amount: amountInCents,
			currency: currency.toLowerCase(),
			automatic_payment_methods: {
				enabled: true,
				allow_redirects: 'never'
			},
			metadata: metadata
		})

		return {
			clientSecret: paymentIntent.client_secret
		}
	}

	async createRefund(paymentIntentId: string, amountInCents?: number) {
		try {
			const paymentIntent =
				await this.stripe.paymentIntents.retrieve(paymentIntentId)

			if (!paymentIntent.latest_charge) {
				throw new Error('No chargeback found for this payment.')
			}

			const refundOptions: Stripe.RefundCreateParams = {
				charge: paymentIntent.latest_charge as string
			}

			if (amountInCents !== undefined && amountInCents !== null) {
				if (amountInCents < 0) {
					throw new BadRequestException('Refund amount cannot be negative.')
				}

				if (amountInCents > paymentIntent.amount) {
					console.warn(
						`Refund amount ${amountInCents} exceeds charge ${paymentIntent.amount}. Clamping to max.`
					)
					refundOptions.amount = paymentIntent.amount
				} else if (amountInCents > 0) {
					refundOptions.amount = amountInCents
				} else {
					console.log(
						`Refund amount is 0 for ${paymentIntentId}. Skipping refund creation.`
					)
					return null
				}
			}

			const refund = await this.stripe.refunds.create(refundOptions)

			console.log(`Successfully created refund: ${refund.id}`)
			return refund
		} catch (error) {
			console.error(
				`Failed to create refund for PaymentIntent ${paymentIntentId}`,
				error
			)
			throw new BadRequestException(`Unable to refund: ${error.message}`)
		}
	}
}
