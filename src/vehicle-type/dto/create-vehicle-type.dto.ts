import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import {
	IsArray,
	IsInt,
	IsNotEmpty,
	IsString,
	ValidateNested
} from 'class-validator'
import { CreateTranslationDto } from './create-translation.dto'

export class CreateVehicleTypeDto {
	@ApiProperty({
		description: 'Unique car type code (in Latin)',
		example: 'STANDARD_SEDAN'
	})
	@IsString()
	@IsNotEmpty()
	code: string

	@ApiProperty({
		description: 'Array of name translations for different languages',
		type: [CreateTranslationDto]
	})
	@IsArray()
	@ValidateNested({ each: true })
	@Type(() => CreateTranslationDto)
	translations: CreateTranslationDto[]

	@ApiProperty({
		description: 'Maximum number of passengers',
		example: 4
	})
	@IsInt()
	@IsNotEmpty()
	max_passengers: number

	@ApiProperty({
		description: 'Maximum number of standard luggage (suitcases)',
		example: 2
	})
	@IsInt()
	@IsNotEmpty()
	max_luggage_standard: number

	@ApiProperty({
		description: 'Maximum amount of small luggage (hand luggage)',
		example: 3
	})
	@IsInt()
	@IsNotEmpty()
	max_luggage_small: number
}
