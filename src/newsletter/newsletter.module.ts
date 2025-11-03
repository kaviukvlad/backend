import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { NewsletterController } from './newsletter.controller'
import { NewsletterService } from './newsletter.service'

@Module({
	imports: [
		HttpModule.register({
			timeout: 5000,
			maxRedirects: 5
		})
	],
	controllers: [NewsletterController],
	providers: [NewsletterService],
	exports: [NewsletterService]
})
export class NewsletterModule {}
