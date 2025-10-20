import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import * as nodemailer from 'nodemailer'
import { Order } from 'prisma/generated/client'

@Injectable()
export class EmailService {
	private transporter: nodemailer.Transporter

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
}
