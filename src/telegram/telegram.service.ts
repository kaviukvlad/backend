import { Injectable, OnModuleInit } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import TelegramBot from 'node-telegram-bot-api'

@Injectable()
export class TelegramService implements OnModuleInit {
	private readonly bot: TelegramBot

	constructor(private readonly configService: ConfigService) {
		const token = this.configService.get<string>('TELEGRAM_BOT_TOKEN')
		if (!token) {
			throw new Error(
				'TELEGRAM_BOT_TOKEN is not defined in the environment variables.'
			)
		}
		this.bot = new TelegramBot(token, { polling: true })
	}

	onModuleInit() {
		this.bot.on('message', msg => {
			const chatId = msg.chat.id
			console.log(`Received message from chat ID: ${chatId}`)
		})

		console.log('🤖 Telegram bot started and listening for messages...')
	}

	async sendMessage(chatId: string, text: string) {
		try {
			await this.bot.sendMessage(chatId, text, { parse_mode: 'HTML' })
		} catch (error) {
			console.error('Error sending Telegram message:', error.message)
		}
	}

	async sendPhoto(chatId: string, photoPath: string, caption: string) {
		try {
			await this.bot.sendPhoto(chatId, photoPath, { caption })
		} catch (error) {
			console.error('Error sending Telegram photo:', error.message)
		}
	}
}
