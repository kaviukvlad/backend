import { Injectable } from '@nestjs/common'
import { Order } from 'prisma/generated/client'
import * as puppeteer from 'puppeteer'

@Injectable()
export class PdfService {
	async generateVoucher(order: Order): Promise<Buffer> {
		const browser = await puppeteer.launch({
			headless: true,
			args: ['--no-sandbox', '--disable-setuid-sandbox']
		})
		const page = await browser.newPage()

		const htmlContent = this.getVoucherHtml(order)

		await page.setContent(htmlContent, { waitUntil: 'networkidle0' })

		const pdfBuffer = await page.pdf({
			format: 'A4',
			printBackground: true
		})

		await browser.close()

		return Buffer.from(pdfBuffer)
	}

	private getVoucherHtml(order: Order): string {
		const tripDate = new Date(order.trip_datetime).toLocaleString('uk-UA', {
			day: '2-digit',
			month: 'long',
			year: 'numeric',
			hour: '2-digit',
			minute: '2-digit'
		})

		return `
      <!DOCTYPE html>
      <html lang="uk">
      <head>
        <meta charset="UTF-8">
        <title>Ваучер на трансфер №${order.id.substring(0, 8)}</title>
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
          <h1>Ваучер на трансфер</h1>
          <p><strong>Номер бронювання:</strong> ${order.id.toUpperCase()}</p>
          <hr>
          <div class="details-grid">
            <strong>Дата та час:</strong>      <span>${tripDate}</span>
            <strong>Звідки:</strong>          <span>${order.from_address}</span>
            <strong>Куди:</strong>            <span>${order.to_address}</span>
            <strong>Кількість пасажирів:</strong> <span>${order.passenger_count}</span>
            ${order.flight_number ? `<strong>Номер рейсу:</strong> <span>${order.flight_number}</span>` : ''}
            ${order.notes ? `<strong>Примітка:</strong> <span>${order.notes}</span>` : ''}
          </div>
          <hr>
          <p style="font-size: 12px; color: #777;">Дякуємо, що обрали наш сервіс! Будь ласка, майте цей ваучер при собі.</p>
        </div>
      </body>
      </html>
    `
	}
}
