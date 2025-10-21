import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString, Length } from 'class-validator'

export class CreateTranslationDto {
	@ApiProperty({ description: 'Language code (ISO 639-1)', example: 'uk' })
	@IsString()
	@Length(2, 2)
	locale: string

	@ApiProperty({
		description: 'Translated name of the car type',
		example: 'Standard'
	})
	@IsString()
	@IsNotEmpty()
	name: string
}
