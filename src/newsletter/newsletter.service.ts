import { HttpService } from '@nestjs/axios'
import { Injectable, Logger } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { firstValueFrom } from 'rxjs'

@Injectable()
export class NewsletterService {
	private readonly logger = new Logger(NewsletterService.name)
	private readonly brevoApiKey: string
	private readonly brevoListId: number

	constructor(
		private readonly configService: ConfigService,
		private readonly httpService: HttpService
	) {
		this.brevoApiKey = this.configService.get<string>('BREVO_API_KEY')!

		this.brevoListId = +this.configService.get<number>('BREVO_LIST_ID')!
	}

	async subscribe(email: string) {
		if (!this.brevoApiKey || !this.brevoListId) {
			this.logger.warn('Brevo is not configured. Skipping subscription.')
			return
		}

		const url = 'https://api.brevo.com/v3/contacts'

		const data = {
			email: email,

			listIds: [this.brevoListId],

			updateEnabled: true
		}

		const headers = {
			'Content-Type': 'application/json',
			Accept: 'application/json',

			'api-key': this.brevoApiKey
		}

		try {
			await firstValueFrom(this.httpService.post(url, data, { headers }))
			this.logger.log(`Email successfully signed (Brevo): ${email}`)
		} catch (error) {
			this.logger.error(
				`Failed to sign email (Brevo): ${email}`,
				error.response?.data || error.message
			)
		}
	}
}
