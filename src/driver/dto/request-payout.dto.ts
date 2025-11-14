import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsNumber, Min } from 'class-validator'

export class RequestPayoutDto {
	@ApiProperty({ description: 'Amount to withdraw', example: 150.5 })
	@Type(() => Number)
	@IsNumber()
	@Min(1)
	amount: number
}
