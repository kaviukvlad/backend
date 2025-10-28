import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import * as nodemailer from 'nodemailer'
import { Order } from 'prisma/generated/client'

@Injectable()
export class EmailService {
	private transporter: nodemailer.Transporter
	private readonly baseUrl: string

	constructor(private readonly configService: ConfigService) {
		this.transporter = nodemailer.createTransport({
			host: this.configService.get<string>('MAIL_HOST'),
			port: this.configService.get<number>('MAIL_PORT'),
			secure: false,
			auth: {
				user: this.configService.get<string>('MAIL_USER'),
				pass: this.configService.get<string>('MAIL_PASSWORD')
			}
		})
		this.baseUrl =
			this.configService.get<string>('API_BASE_URL') || 'http://localhost:3000'
	}

	async sendVoucher(customerEmail: string, order: Order, pdfBuffer: Buffer) {
		await this.transporter.sendMail({
			from: this.configService.get<string>('MAIL_FROM'),
			to: customerEmail,
			subject: `Ваш ваучер на трансфер №${order.id.toUpperCase()}`,
			html: `
        <h1>Дякуємо за ваше замовлення!</h1>
        <p>Шановний клієнте,</p>
        <p>Ваш трансфер підтверджено. Будь ласка, знайдіть ваш ваучер у вкладенні до цього листа.</p>
        <p><strong>Номер бронювання:</strong> ${order.id.toUpperCase()}</p>
        <p>Бажаємо приємної поїздки!</p>
      `,
			attachments: [
				{
					filename: `voucher-${order.id}.pdf`,
					content: pdfBuffer,
					contentType: 'application/pdf'
				}
			]
		})
	}

	async sendRatingRequest(order: Order, token: string) {
		if (!order.customerEmail) {
			console.warn(
				`Skipping rating request for order ${order.id} because customerEmail is null.`
			)
			return
		}

		const ratingLinks = [1, 2, 3, 4, 5]
			.map(
				score =>
					`<a href="${this.baseUrl}/api/rating/rate?token=${token}&score=${score}" style="margin: 5px; padding: 10px 20px; background: #007bff; color: white; text-decoration: none; border-radius: 5px;">⭐ ${score}</a>`
			)
			.join('')

		await this.transporter.sendMail({
			from: this.configService.get<string>('MAIL_FROM'),
			to: order.customerEmail,
			subject: `Будь ласка, оцініть вашу поїздку №${order.id.substring(0, 8)}`,
			html: `
        <h1>Дякуємо за поїздку!</h1>
        <p>Будь ласка, оцініть якість сервісу, натиснувши на одну з оцінок нижче:</p>
        <div style="margin-top: 20px;">
          ${ratingLinks}
        </div>
        <p>Ваш відгук допоможе нам стати кращими!</p>
      `
		})
	}
}
