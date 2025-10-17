import {
	IsDateString,
	IsInt,
	IsNotEmpty,
	IsNumber,
	IsOptional,
	IsPositive,
	IsString,
	MaxLength,
	Min
} from 'class-validator'

export class CreateOrderDto {
	@IsString()
	@IsNotEmpty()
	from_address: string

	@IsString()
	@IsNotEmpty()
	to_address: string

	@IsDateString()
	trip_datetime: string

	@IsInt()
	@Min(1)
	passenger_count: number

	@IsString()
	@IsNotEmpty()
	regionId: string

	@IsNumber()
	@IsPositive()
	price: number

	@IsString()
	@IsOptional()
	@MaxLength(10)
	flight_number?: string

	@IsString()
	@IsOptional()
	@MaxLength(500)
	notes?: string
}
