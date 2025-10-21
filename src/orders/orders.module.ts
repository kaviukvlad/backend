import { Module } from '@nestjs/common'
import { GeoModule } from 'src/geo/geo.module'
import { PrismaService } from 'src/prisma.service'
import { OrdersController } from './orders.controller'
import { OrdersService } from './orders.service'

@Module({
	imports: [GeoModule],
	controllers: [OrdersController],
	providers: [OrdersService, PrismaService],
	exports: [OrdersService]
})
export class OrdersModule {}
