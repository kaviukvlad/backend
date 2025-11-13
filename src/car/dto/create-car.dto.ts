import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import {
	IsInt,
	IsNotEmpty,
	IsOptional,
	IsString,
	Max,
	Min
} from 'class-validator'

export class CreateCarDto {
	@ApiProperty({
		description: 'Car brand',
		example: 'Toyota'
	})
	@IsString()
	@IsNotEmpty()
	brand: string

	@ApiProperty({
		description: 'Car model',
		example: 'Camry'
	})
	@IsString()
	@IsNotEmpty()
	model: string

	@ApiProperty({
		description: 'Car year',
		example: 2021,
		minimum: 1990
	})
	@Type(() => Number)
	@IsInt()
	@Min(1990)
	@Max(new Date().getFullYear())
	year: number

	@ApiProperty({
		description: 'Car color',
		example: 'Black',
		required: false
	})
	@IsOptional()
	@IsString()
	color?: string

	@ApiProperty({
		description: 'License plate',
		example: 'BC1234AB'
	})
	@IsString()
	@IsNotEmpty()
	license_plate: string

	@ApiProperty({
		description: 'Max passenger capacity',
		example: 4,
		minimum: 1
	})
	@Type(() => Number)
	@IsInt()
	@Min(1)
	max_passengers: number

	@ApiProperty({ description: 'Max standard luggage', example: 2, minimum: 0 })
	@Type(() => Number)
	@IsInt()
	@Min(0)
	max_luggage_standard: number
}
