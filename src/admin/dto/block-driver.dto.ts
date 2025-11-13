import { ApiProperty } from '@nestjs/swagger'
import { IsBoolean } from 'class-validator'

export class BlockDriverDto {
	@ApiProperty({
		description: 'Set to true to block the driver, false to unblock',
		example: true
	})
	@IsBoolean()
	isBlocked: boolean
}
