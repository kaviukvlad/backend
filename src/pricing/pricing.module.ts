import { Module } from '@nestjs/common'
import { PricingService } from './pricing.service'

import { GeoModule } from 'src/geo/geo.module'
import { PrismaService } from 'src/prisma.service'

@Module({
	imports: [GeoModule],
	providers: [PricingService, PrismaService],
	exports: [PricingService]
})
export class PricingModule {}
