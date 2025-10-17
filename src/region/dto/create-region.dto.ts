import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator'
import { RegionType } from 'prisma/generated/client'

export class CreateRegionDto {
	@IsString()
	@IsNotEmpty()
	name: string

	@IsEnum(RegionType)
	@IsNotEmpty()
	type: RegionType

	@IsOptional()
	@IsString()
	parentId?: string
}
