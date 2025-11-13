import { PartialType } from '@nestjs/mapped-types'
import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsNumber, IsOptional, Min } from 'class-validator'
import { CreateOrderDto } from './create-order.dto'

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
	@ApiProperty({
		description:
			'Manually set a new price for the order (overrides auto-calculation)',
		example: 99.5,
		required: false
	})
	@IsOptional()
	@Type(() => Number)
	@IsNumber()
	@Min(0)
	price?: number
}
