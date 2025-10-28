// file: src/admin/pricing-settings/pricing-settings.controller.ts

import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common'
import { CreatePricingSettingDto } from './dto/create-pricing-setting.dto'
import { UpdatePricingSettingDto } from './dto/update-setting.dto'
import { PricingSettingsService } from './pricing-settings.service'

@Controller('admin/pricing-settings')
export class PricingSettingsController {
	constructor(private readonly settingsService: PricingSettingsService) {}

	@Post()
	create(@Body() dto: CreatePricingSettingDto) {
		return this.settingsService.create(dto)
	}
	@Get()
	findAll() {
		return this.settingsService.findAll()
	}

	@Patch(':key')
	update(@Param('key') key: string, @Body() dto: UpdatePricingSettingDto) {
		return this.settingsService.update(key, dto)
	}
}
