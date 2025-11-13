import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { UserRole } from '@prisma/client'
import { Auth } from 'src/auth/decorators/auth.decorators'
import { CreatePricingSettingDto } from './dto/create-pricing-setting.dto'
import { UpdatePricingSettingDto } from './dto/update-setting.dto'
import { PricingSettingsService } from './pricing-settings.service'

@ApiTags('Admin Panel - Pricing Settings')
@ApiBearerAuth()
@Controller('admin/pricing-settings')
export class PricingSettingsController {
	constructor(private readonly settingsService: PricingSettingsService) {}

	@Post()
	@Auth(UserRole.ADMIN)
	create(@Body() dto: CreatePricingSettingDto) {
		return this.settingsService.create(dto)
	}
	@Get()
	@Auth(UserRole.ADMIN)
	findAll() {
		return this.settingsService.findAll()
	}

	@Patch(':key')
	@Auth(UserRole.ADMIN)
	update(@Param('key') key: string, @Body() dto: UpdatePricingSettingDto) {
		return this.settingsService.update(key, dto)
	}
}
