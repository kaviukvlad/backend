import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Order } from 'prisma/generated/client'
import { TelegramService } from 'src/telegram/telegram.service'

@Injectable()
export class NotificationsService {
	private readonly operatorChatId: string

	constructor(
		private readonly telegramService: TelegramService,
		private readonly configService: ConfigService
	) {
		const chatId = this.configService.get<string>('TELEGRAM_OPERATOR_CHAT_ID')
		if (!chatId) {
			throw new Error(
				'TELEGRAM_OPERATOR_CHAT_ID is not defined in the environment variables.'
			)
		}
		this.operatorChatId = chatId
	}

	async sendBusOrderNotification(order: Order): Promise<void> {
		const message = `
 <b>автобус</b>
<b>ID:</b> <code>${order.id}</code>
<b>Email:</b> ${order.customerEmail || 'Не вказано'}
<b>Дата:</b> ${new Date(order.trip_datetime).toLocaleString('uk-UA')}
<b>Нотатки:</b> ${order.notes || 'Немає'}
    `
		await this.telegramService.sendMessage(this.operatorChatId, message)
	}

	async sendDriverNotStartedAlert(order: Order): Promise<void> {
		const message = ` <b>Водій не виїхав!</b>\nЗамовлення <code>${order.id}</code> починається менш ніж за 30 хв.`
		await this.telegramService.sendMessage(this.operatorChatId, message)
	}

	async sendHangingOrderAlert(order: Order): Promise<void> {
		const message = ` <b>Зависле замовлення!</b>\nЗамовлення <code>${order.id}</code> у статусі NEW більше 24 годин.`
		await this.telegramService.sendMessage(this.operatorChatId, message)
	}

	async sendClientNoShowProof(order: Order, photoPath: string): Promise<void> {
		const caption = `
 <b>Клієнт не з'явився!</b>
<b>Замовлення:</b> <code>${order.id}</code>
<b>Email клієнта:</b> ${order.customerEmail || 'Не вказано'}
    `

		await this.telegramService.sendPhoto(
			this.operatorChatId,
			photoPath,
			caption
		)
	}
}
