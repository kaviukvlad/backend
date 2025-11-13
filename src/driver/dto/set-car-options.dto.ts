import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import {
	IsArray,
	IsInt,
	IsNotEmpty,
	IsString,
	Min,
	ValidateNested
} from 'class-validator'

class CarOptionDto {
	@ApiProperty({
		description: 'ID of the OrderOption (e.g., "Child Seat 0-3")',
		example: 'clwtrjfuq000a11a9f1a2g8f1'
	})
	@IsString()
	@IsNotEmpty()
	optionId: string

	@ApiProperty({
		description: 'Quantity of this option available in the car',
		example: 2,
		minimum: 1
	})
	@IsInt()
	@Min(1)
	quantity: number
}

export class SetCarOptionsDto {
	@ApiProperty({
		description: 'A full list of options for this car. Replaces all existing.',
		type: [CarOptionDto],
		example: [
			{ optionId: 'clwtrjfuq000a11a9f1a2g8f1', quantity: 2 },
			{ optionId: 'clwtrjfuq000b11a9f1a2g8f1', quantity: 1 }
		]
	})
	@IsArray()
	@ValidateNested({ each: true })
	@Type(() => CarOptionDto)
	options: CarOptionDto[]
}
