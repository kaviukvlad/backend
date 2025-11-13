import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'

export class CancelOrderDriverDto {
	@ApiProperty({
		description: 'Reason for order cancellation',
		example: 'Client asked to cancel, wrong time.'
	})
	@IsString()
	@IsNotEmpty()
	reason: string
}
