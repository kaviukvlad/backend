import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsBoolean, IsLatitude, IsLongitude, IsOptional } from 'class-validator'

export class GeoCoordinatesDto {
	@ApiProperty({
		description: 'Current driver latitude',
		example: 49.8397
	})
	@Type(() => Number)
	@IsLatitude()
	lat: number

	@ApiProperty({
		description: 'Current driver longitude',
		example: 24.0297
	})
	@Type(() => Number)
	@IsLongitude()
	lng: number

	@ApiProperty({
		description: 'Set to true to proceed if geo-check fails (distance > 1km)',
		example: false,
		required: false
	})
	@IsOptional()
	@IsBoolean()
	force?: boolean = false
}
