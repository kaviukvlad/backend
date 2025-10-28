import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TelegramModule } from 'src/telegram/telegram.module'
import { NotificationsController } from './notifications.controller'
import { NotificationsService } from './notifications.service'

@Module({
	imports: [TelegramModule, ConfigModule],
	controllers: [NotificationsController],
	providers: [NotificationsService],
	exports: [NotificationsService]
})
export class NotificationsModule {}
