import { Injectable } from '@nestjs/common'
import { I18nService } from 'nestjs-i18n'
import { Order } from 'prisma/generated/client'
import * as puppeteer from 'puppeteer'

@Injectable()
export class PdfService {
	constructor(private readonly i18n: I18nService) {}

	async generateVoucher(order: Order, locale: string): Promise<Buffer> {
		const browser = await puppeteer.launch({
			headless: true,
			args: ['--no-sandbox', '--disable-setuid-sandbox']
		})
		const page = await browser.newPage()

		const htmlContent = await this.getVoucherHtml(order, locale)

		await page.setContent(htmlContent, { waitUntil: 'networkidle0' })

		const pdfBuffer = await page.pdf({
			format: 'A4',
			printBackground: true
		})

		await browser.close()

		return Buffer.from(pdfBuffer)
	}

	private async getVoucherHtml(order: Order, locale: string): Promise<string> {
		const tripDate = new Date(order.trip_datetime).toLocaleString(locale, {
			day: '2-digit',
			month: 'long',
			year: 'numeric',
			hour: '2-digit',
			minute: '2-digit'
		})

		let from_address = 'Not specified'
		let to_address = 'Not specified'

		if (
			Array.isArray(order.routeWaypoints) &&
			order.routeWaypoints.length > 0
		) {
			const waypoints = order.routeWaypoints as any[]
			from_address = waypoints[0]?.address || from_address
			to_address = waypoints[waypoints.length - 1]?.address || to_address
		}

		const title = await this.i18n.t('voucher.title', {
			lang: locale,
			args: {
				id: order.id.substring(0, 8)
			}
		})

		const langAttr = locale.split('-')[0]

		return `
      <!DOCTYPE html>
      <html lang="${langAttr}">
      <head>
        <meta charset="UTF-8">
        <title>${title}</title>
        <style>
          body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333; margin: 40px; }
          .container { border: 1px solid #eee; padding: 20px; box-shadow: 0 0 10px rgba(0,0,0,0.05); }
          h1 { color: #0056b3; border-bottom: 2px solid #0056b3; padding-bottom: 10px; }
          .details-grid { display: grid; grid-template-columns: 150px 1fr; gap: 10px 20px; margin-top: 20px; }
          .details-grid strong { color: #555; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>${await this.i18n.t('voucher.heading', { lang: locale })}</h1>
          <p><strong>${await this.i18n.t('voucher.booking_number', { lang: locale })}</strong> ${order.id.toUpperCase()}</p>
          <hr>
          <div class="details-grid">
           <strong>${await this.i18n.t('voucher.date_time', { lang: locale })}</strong>   <span>${tripDate}</span>
            <strong>${await this.i18n.t('voucher.from', { lang: locale })}</strong>        <span>${from_address}</span>
            <strong>${await this.i18n.t('voucher.to', { lang: locale })}</strong>          <span>${to_address}</span>
            <strong>${await this.i18n.t('voucher.passengers', { lang: locale })}</strong> <span>${order.passenger_count}</span>
            ${order.flight_number ? `<strong>${await this.i18n.t('voucher.flight_number', { lang: locale })}</strong> <span>${order.flight_number}</span>` : ''}
            ${order.notes ? `<strong>${await this.i18n.t('voucher.notes', { lang: locale })}</strong> <span>${order.notes}</span>` : ''}
          </div>
          <hr>
         <p style="font-size: 12px; color: #777;">${await this.i18n.t('voucher.thank_you', { lang: locale })}</p>
        </div>
      </body>
      </html>
    `
	}
}
