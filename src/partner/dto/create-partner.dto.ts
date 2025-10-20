import {
	IsEmail,
	IsNotEmpty,
	IsNumber,
	IsOptional,
	IsString,
	Min
} from 'class-validator'

export class CreatePartnerDto {
	@IsString()
	@IsNotEmpty({ message: 'Partner name cannot be empty' })
	name: string

	@IsEmail()
	@IsOptional()
	contactEmail?: string

	@IsNumber()
	@Min(0)
	@IsOptional()
	markupPercent?: number
}
