import { Process, Processor } from '@nestjs/bull'
import { Cache, CACHE_MANAGER } from '@nestjs/cache-manager'
import { Inject } from '@nestjs/common'
import type { Job } from 'bull'
import { CREATE_PAYMENT_JOB, PAYMENT_QUEUE } from './constants'
import { PaymentService } from './payment.service'

@Processor(PAYMENT_QUEUE)
export class PaymentProcessor {
	constructor(
		private readonly paymentService: PaymentService,
		@Inject(CACHE_MANAGER) private cacheManager: Cache
	) {}

	@Process(CREATE_PAYMENT_JOB)
	async handleCreatePaymentIntent(job: Job) {
		const jobId =
			job.data && job.data.jobId
				? String(job.data.jobId)
				: String(job.id ?? 'unknown')
		const { amount, currency, orderDetails, clientId } = job.data

		try {
			const paymentIntent = await this.paymentService.createPaymentIntent(
				amount,
				currency,
				orderDetails,
				clientId
			)

			const cacheKey = `payment_job_${jobId}`
			const cacheValue = {
				status: 'completed',
				clientSecret: paymentIntent.clientSecret,
				amount: amount
			}
			await this.cacheManager.set(cacheKey, cacheValue, 3600)

			return cacheValue
		} catch (error) {
			console.error(`[Job ${jobId}] Failed to process payment intent.`, error)

			const cacheKey = `payment_job_${jobId}`
			await this.cacheManager.set(
				cacheKey,
				{ status: 'failed', error: error?.message ?? String(error) },
				3600
			)
			throw error
		}
	}
}
