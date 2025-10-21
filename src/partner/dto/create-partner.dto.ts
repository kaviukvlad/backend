import { ApiProperty } from '@nestjs/swagger'
import {
	IsEmail,
	IsNotEmpty,
	IsNumber,
	IsOptional,
	IsString,
	Min
} from 'class-validator'

export class CreatePartnerDto {
	@ApiProperty({
		description: 'Partner company name',
		example: "Travel Agency 'Voyage'"
	})
	@IsString()
	@IsNotEmpty({ message: 'Partner name cannot be empty' })
	name: string

	@ApiProperty({
		description: 'Partner contact email',
		example: 'contact@voyage-agency.com',
		required: false
	})
	@IsEmail()
	@IsOptional()
	contactEmail?: string

	@ApiProperty({
		description: 'Partner order markup percentage (e.g. 10.5)',
		example: 10.5,
		required: false,
		default: 0
	})
	@IsNumber()
	@Min(0)
	@IsOptional()
	markupPercent?: number
}
