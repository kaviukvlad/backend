import {
	IsInt,
	IsNotEmpty,
	IsOptional,
	IsString,
	Max,
	Min
} from 'class-validator'

export class CreateCarDto {
	@IsString()
	@IsNotEmpty()
	brand: string

	@IsString()
	@IsNotEmpty()
	model: string

	@IsInt()
	@Min(1990)
	@Max(new Date().getFullYear())
	year: number

	@IsOptional()
	@IsString()
	color?: string

	@IsString()
	@IsNotEmpty()
	license_plate: string

	@IsString()
	@IsNotEmpty()
	vehicle_type_id: string
}
