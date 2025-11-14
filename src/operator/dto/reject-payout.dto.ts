import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'

export class RejectPayoutDto {
	@ApiProperty({
		description: 'Reason for rejection',
		example: 'Invalid bank details.'
	})
	@IsString()
	@IsNotEmpty()
	reason: string
}
