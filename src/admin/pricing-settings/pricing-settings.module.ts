import { Module } from '@nestjs/common'
import { PricingModule } from 'src/pricing/pricing.module'
import { PrismaService } from 'src/prisma.service'
import { PricingSettingsController } from './pricing-settings.controller'
import { PricingSettingsService } from './pricing-settings.service'

@Module({
	imports: [PricingModule],
	controllers: [PricingSettingsController],
	providers: [PricingSettingsService, PrismaService]
})
export class PricingSettingsModule {}
