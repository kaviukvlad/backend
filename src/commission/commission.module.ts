import { Module } from '@nestjs/common'
import { PricingModule } from 'src/pricing/pricing.module'
import { PrismaService } from 'src/prisma.service'
import { CommissionController } from './commission.controller'
import { CommissionService } from './commission.service'

@Module({
	imports: [PricingModule],
	controllers: [CommissionController],
	providers: [CommissionService, PrismaService],
	exports: [CommissionService]
})
export class CommissionModule {}
