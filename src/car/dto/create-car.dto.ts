import { ApiProperty } from '@nestjs/swagger'
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
		description: 'Vehicle type ID (e.g. "Standard", "Business")',
		example: 'clqj9v1p20000umc0a1b2c3d4'
	})
	@IsString()
	@IsNotEmpty()
	vehicle_type_id: string
}
