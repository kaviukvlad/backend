import { ApiProperty } from '@nestjs/swagger'
import {
	IsNotEmpty,
	IsNumber,
	IsOptional,
	IsPositive,
	IsString
} from 'class-validator'

export class CreateOrderOptionDto {
	@ApiProperty({
		description: 'Unique option code (in Latin, no spaces)',
		example: 'CHILD_SEAT_9_18'
	})
	@IsString()
	@IsNotEmpty()
	code: string

	@ApiProperty({
		description: 'Full option name to display to the client',
		example: 'Child seat (9-18 kg)'
	})
	@IsString()
	@IsNotEmpty()
	name: string

	@ApiProperty({
		description: 'Additional service description (optional)',
		required: false
	})
	@IsString()
	@IsOptional()
	description?: string

	@ApiProperty({
		description: 'Additional option cost',
		example: 150
	})
	@IsNumber()
	@IsPositive()
	price: number
}
