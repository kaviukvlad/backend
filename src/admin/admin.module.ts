import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { AdminController } from './admin.controller'
import { AdminService } from './admin.service'
import { PricingSettingsModule } from './pricing-settings/pricing-settings.module';

@Module({
	controllers: [AdminController],
	providers: [AdminService, PrismaService],
	exports: [AdminService],
	imports: [PricingSettingsModule]
})
export class AdminModule {}
