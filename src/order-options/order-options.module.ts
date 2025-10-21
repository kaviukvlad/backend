import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { OrderOptionsController } from './order-options.controller'
import { OrderOptionsService } from './order-options.service'

@Module({
	controllers: [OrderOptionsController],
	providers: [OrderOptionsService, PrismaService]
})
export class OrderOptionsModule {}
