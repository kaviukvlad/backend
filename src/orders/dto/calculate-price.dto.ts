import { Type } from 'class-transformer'
import {
	IsArray,
	IsISO8601,
	IsInt,
	IsNotEmpty,
	IsOptional,
	IsString,
	Min,
	ValidateNested
} from 'class-validator'

class WaypointDto {
	@IsNotEmpty()
	address: string

	@IsNotEmpty()
	lat: number

	@IsNotEmpty()
	lng: number
}

export class CalculatePriceDto {
	@IsArray()
	@ValidateNested({ each: true })
	@Type(() => WaypointDto)
	waypoints: WaypointDto[]

	@IsString()
	@IsNotEmpty()
	regionId: string

	@IsISO8601()
	@IsOptional()
	trip_datetime: string

	@IsInt()
	@Min(1)
	@IsOptional()
	passenger_count: number
}
