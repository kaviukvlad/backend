import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class UpdateDriverDto {
	@ApiProperty({
		description: 'New driver name to display',
		example: 'Name Driver',
		required: false
	})
	@IsOptional()
	@IsString()
	@IsNotEmpty()
	name?: string

	@ApiProperty({
		description: 'New region ID where the driver works',
		required: false
	})
	@IsOptional()
	@IsString()
	@IsNotEmpty()
	regionId?: string
}
