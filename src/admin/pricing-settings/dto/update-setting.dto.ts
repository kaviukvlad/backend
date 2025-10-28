import { IsDecimal, IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class UpdatePricingSettingDto {
	@IsDecimal()
	@IsNotEmpty()
	value: string

	@IsString()
	@IsOptional()
	description?: string
}
