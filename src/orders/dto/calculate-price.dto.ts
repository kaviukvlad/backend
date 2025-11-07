import { Type } from 'class-transformer'
import { IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator'

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
}
