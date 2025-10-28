import { Module } from '@nestjs/common'
import { EmailModule } from 'src/email/email.module'
import { NotificationsModule } from 'src/notifications/notifications.module'
import { PrismaService } from 'src/prisma.service'
import { TasksController } from './tasks.controller'
import { TasksService } from './tasks.service'

@Module({
	imports: [NotificationsModule, EmailModule],
	controllers: [TasksController],
	providers: [TasksService, PrismaService]
})
export class TasksModule {}
