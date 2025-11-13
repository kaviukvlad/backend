import { PartialType } from '@nestjs/mapped-types'
import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsInt, IsOptional, Min } from 'class-validator'
import { CreateCarDto } from './create-car.dto'

export class UpdateCarDto extends PartialType(CreateCarDto) {
	@ApiProperty({
		description: 'Max passenger capacity',
		example: 4,
		minimum: 1,
		required: false
	})
	@IsOptional()
	@Type(() => Number)
	@IsInt()
	@Min(1)
	max_passengers?: number

	@ApiProperty({
		description: 'Max standard luggage',
		example: 2,
		minimum: 0,
		required: false
	})
	@IsOptional()
	@Type(() => Number)
	@IsInt()
	@Min(0)
	max_luggage_standard?: number
}
