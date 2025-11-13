import { ApiProperty } from '@nestjs/swagger'
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class AssignOrderDto {
	@IsString()
	@IsNotEmpty()
	driverId: string

	@ApiProperty({
		description:
			'Assign order even if driver class does not match order class (Assign Anyway)',
		example: false,
		required: false
	})
	@IsOptional()
	@IsBoolean()
	force?: boolean
}
