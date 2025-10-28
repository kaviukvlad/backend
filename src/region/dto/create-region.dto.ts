import { ApiProperty } from '@nestjs/swagger'
import {
	IsEnum,
	IsNotEmpty,
	IsNumber,
	IsOptional,
	IsString,
	Min
} from 'class-validator'
import { RegionType } from 'prisma/generated/client'

export class CreateRegionDto {
	@ApiProperty({
		description: 'Name of region, city or airport',
		example: 'Lviv'
	})
	@IsString()
	@IsNotEmpty()
	name: string

	@ApiProperty({
		description: 'Type of region',
		enum: RegionType,
		example: RegionType.CITY
	})
	@IsEnum(RegionType)
	@IsNotEmpty()
	type: RegionType

	@ApiProperty({
		description:
			'ID of parent region (for example, for city specify country ID)',
		required: false
	})
	@IsOptional()
	@IsString()
	parentId?: string

	@IsOptional()
	@IsNumber()
	latitude?: number

	@IsOptional()
	@IsNumber()
	longitude?: number

	@IsOptional()
	@IsNumber()
	@Min(1)
	radiusKm?: number
}
