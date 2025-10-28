import { Injectable } from '@nestjs/common'
import { Cron, CronExpression } from '@nestjs/schedule'
import { randomUUID } from 'crypto'
import { EmailService } from 'src/email/email.service'
import { NotificationsService } from 'src/notifications/notifications.service'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class TasksService {
	constructor(
		private prisma: PrismaService,
		private notificationsService: NotificationsService,
		private emailService: EmailService
	) {}

	@Cron(CronExpression.EVERY_10_MINUTES)
	async handleDriverNotStartedAlerts() {
		console.log(
			'Running job: Check for drivers who have not started their trip...'
		)

		const thirtyMinutesFromNow = new Date(Date.now() + 30 * 60 * 1000)
		const now = new Date()

		const upcomingOrders = await this.prisma.order.findMany({
			where: {
				status: 'ACCEPTED',
				trip_datetime: {
					gte: now,
					lte: thirtyMinutesFromNow
				}
			}
		})

		for (const order of upcomingOrders) {
			await this.notificationsService.sendDriverNotStartedAlert(order)
		}
	}

	@Cron(CronExpression.EVERY_HOUR)
	async handleHangingOrdersAlerts() {
		console.log('Running job: Check for hanging new orders...')

		const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000)

		const hangingOrders = await this.prisma.order.findMany({
			where: {
				status: 'NEW',
				createdAt: {
					lt: twentyFourHoursAgo
				}
			}
		})

		for (const order of hangingOrders) {
			await this.notificationsService.sendHangingOrderAlert(order)
		}
	}

	@Cron(CronExpression.EVERY_DAY_AT_3AM)
	async handleRatingRequestEmails() {
		console.log('Running job: Send rating request emails...')

		const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000)
		const twoDaysAgo = new Date(Date.now() - 48 * 60 * 60 * 1000)

		const completedOrders = await this.prisma.order.findMany({
			where: {
				status: 'COMPLETED',
				rating: null,
				ratingToken: null,
				trip_datetime: {
					gte: twoDaysAgo,
					lt: yesterday
				}
			}
		})

		for (const order of completedOrders) {
			const token = randomUUID()
			const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)

			await this.prisma.ratingToken.create({
				data: { orderId: order.id, token, expiresAt }
			})

			await this.emailService.sendRatingRequest(order, token)
		}
	}
}
