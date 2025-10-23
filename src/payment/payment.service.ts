import { Injectable, InternalServerErrorException } from '@nestjs/common'
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
		metadata: Stripe.MetadataParam
	) {
		const amountInCents = Math.round(amount * 100)

		const paymentIntent = await this.stripe.paymentIntents.create({
			amount: amountInCents,
			currency: currency.toLowerCase(),
			automatic_payment_methods: {
				enabled: true
			},
			metadata: metadata
		})

		return {
			clientSecret: paymentIntent.client_secret
		}
	}
}
