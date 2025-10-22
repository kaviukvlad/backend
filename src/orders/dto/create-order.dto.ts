import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import {
	IsArray,
	IsDateString,
	IsEmail,
	IsInt,
	IsNotEmpty,
	IsNumber,
	IsOptional,
	IsPositive,
	IsString,
	MaxLength,
	Min,
	ValidateNested
} from 'class-validator'

class SelectedOptionDto {
	@ApiProperty({ description: 'ID of selected additional option' })
	@IsString()
	@IsNotEmpty()
	optionId: string

	@ApiProperty({
		description: 'Number of units of the option (default 1)',
		required: false,
		default: 1
	})
	@IsInt()
	@Min(1)
	@IsOptional()
	quantity?: number
}

class WaypointDto {
	@ApiProperty({
		description: 'Full address of the waypoint',
		example: '1 Rynok Square, Lviv, Lviv Region, 79008'
	})
	@IsString()
	@IsNotEmpty()
	address: string

	@ApiProperty({ description: 'Latitude', example: 49.841909 })
	@IsNumber()
	lat: number

	@ApiProperty({ description: 'Longitude', example: 24.031592 })
	@IsNumber()
	lng: number
}

export class CreateOrderDto {
	@ApiProperty({
		description: 'Array of waypoints (minimum two: point A and point B)',
		type: [WaypointDto]
	})
	@IsArray()
	@ValidateNested({ each: true })
	@Type(() => WaypointDto)
	waypoints: WaypointDto[]

	@ApiProperty({
		description: 'Array of selected additional options (optional)',
		type: [SelectedOptionDto],
		required: false
	})
	@IsArray()
	@ValidateNested({ each: true })
	@Type(() => SelectedOptionDto)
	@IsOptional()
	selectedOptions?: SelectedOptionDto[]

	@ApiProperty({ description: 'Customer Email', example: 'client@example.com' })
	@IsEmail()
	@IsNotEmpty()
	customerEmail: string

	@ApiProperty({
		description: 'Date and time of the trip in ISO 8601 format',
		example: '2025-12-01T15:30:00.000Z'
	})
	@IsDateString()
	trip_datetime: string

	@ApiProperty({ description: 'Number of passengers', example: 2 })
	@IsInt()
	@Min(1)
	passenger_count: number

	@ApiProperty({ description: 'Region ID to which the order belongs' })
	@IsString()
	@IsNotEmpty()
	regionId: string

	@ApiProperty({ description: 'Vehicle type ID' })
	@IsString()
	@IsNotEmpty()
	vehicleTypeId: string

	@ApiProperty({
		description: 'Base trip cost (excluding additional options)',
		example: 350.5
	})
	@IsNumber()
	@IsPositive()
	price: number

	@ApiProperty({
		description: 'Flight number (for airports)',
		required: false,
		example: 'PS715'
	})
	@IsString()
	@IsOptional()
	@MaxLength(10)
	flight_number?: string

	@ApiProperty({
		description: 'Order note',
		required: false,
		example: "Plate with the inscription 'Mr. Smith'"
	})
	@IsString()
	@IsOptional()
	@MaxLength(500)
	notes?: string

	@ApiProperty({
		description: 'Standard baggage quantity',
		required: false,
		example: 2
	})
	@IsOptional()
	@IsInt()
	@Min(0)
	luggage_standard?: number

	@ApiProperty({
		description: 'Small baggage quantity (hand luggage)',
		required: false,
		example: 1
	})
	@IsOptional()
	@IsInt()
	@Min(0)
	luggage_small?: number
}
