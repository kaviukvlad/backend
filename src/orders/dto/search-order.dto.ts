// file: src/orders/dto/search-order.dto.ts

import { Transform } from 'class-transformer'
import {
	IsArray,
	IsDateString,
	IsEnum,
	IsOptional,
	IsString
} from 'class-validator'
import { OrderStatus } from 'prisma/generated/client'

export class SearchOrderDto {
	@IsOptional()
	@IsString()
	search?: string

	@IsOptional()
	@IsEnum(OrderStatus, { each: true })
	@IsArray()
	@Transform(({ value }) =>
		typeof value === 'string' ? value.split(',') : value
	)
	status?: OrderStatus[]

	@IsOptional()
	@IsString()
	regionId?: string

	@IsOptional()
	@IsString()
	driverId?: string

	@IsOptional()
	@IsDateString()
	startDate?: string

	@IsOptional()
	@IsDateString()
	endDate?: string
}
