import { ApiProperty } from '@nestjs/swagger'
import { OrderStatus } from '@prisma/client'
import { Transform } from 'class-transformer'
import {
	IsArray,
	IsDateString,
	IsEnum,
	IsOptional,
	IsString
} from 'class-validator'

const transformToArray = ({
	value
}: {
	value: any
}): OrderStatus[] | undefined => {
	if (!value) return undefined
	if (typeof value === 'string') {
		return value.split(',') as OrderStatus[]
	}
	if (Array.isArray(value)) {
		return value as OrderStatus[]
	}
	return [value] as OrderStatus[]
}

export class SearchOrderDto {
	@ApiProperty({
		description: 'Search term for ID, email, flight, or notes',
		required: false,
		example: 'client@test.com'
	})
	@IsOptional()
	@IsString()
	search?: string

	@ApiProperty({
		description: 'Filter by one or more statuses (comma-separated)',
		required: false,
		enum: OrderStatus,
		isArray: true,
		example: ['NEW', 'PENDING_MANUAL_CONFIRMATION']
	})
	@IsOptional()
	@IsArray()
	@IsEnum(OrderStatus, { each: true })
	@Transform(transformToArray)
	status?: OrderStatus[]

	@ApiProperty({
		description: 'Filter by Region ID',
		required: false,
		example: 'cmhyqz4yg000jjinppqkk597y'
	})
	@IsOptional()
	@IsString()
	regionId?: string

	@ApiProperty({
		description: 'Filter by Driver ID',
		required: false,
		example: 'cmhyqz542000zjinpvzvq08rd'
	})
	@IsOptional()
	@IsString()
	driverId?: string

	@ApiProperty({
		description: 'Start date (ISO 8601)',
		required: false,
		example: '2025-11-20T00:00:00.000Z'
	})
	@IsOptional()
	@IsDateString()
	startDate?: string

	@ApiProperty({
		description: 'End date (ISO 8601)',
		required: false,
		example: '2025-11-25T23:59:59.000Z'
	})
	@IsOptional()
	@IsDateString()
	endDate?: string
}
