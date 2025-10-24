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

		const paymentIntent = await this.stripe.paymentIntents.create({
			amount: amountInCents,
			currency: currency.toLowerCase(),
			automatic_payment_methods: {
				enabled: true,
				allow_redirects: 'never'
			},
			metadata: {
				order_details: JSON.stringify(orderDetails),
				client_id: clientId
			}
		})

		return {
			clientSecret: paymentIntent.client_secret
		}
	}

	async createRefund(paymentIntentId: string) {
		try {
			const paymentIntent =
				await this.stripe.paymentIntents.retrieve(paymentIntentId)

			if (!paymentIntent.latest_charge) {
				throw new Error('No chargeback found for this payment.')
			}

			const refund = await this.stripe.refunds.create({
				charge: paymentIntent.latest_charge as string
			})

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
