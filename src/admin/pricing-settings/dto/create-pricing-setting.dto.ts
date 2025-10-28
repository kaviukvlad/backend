import {
	IsDecimal,
	IsNotEmpty,
	IsOptional,
	IsString,
	Matches
} from 'class-validator'

export class CreatePricingSettingDto {
	@IsString()
	@IsNotEmpty()
	@Matches(/^[A-Z0-9_]+$/, {
		message: 'Key must be in uppercase snake_case format (e.g., MY_KEY)'
	})
	key: string

	@IsDecimal()
	@IsNotEmpty()
	value: string

	@IsString()
	@IsOptional()
	description?: string
}
