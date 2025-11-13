import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'

export class ChangeRequestDto {
	@ApiProperty({
		description: 'Driver comment about the requested change',
		example: 'Client wants to add a drop-off point at...'
	})
	@IsString()
	@IsNotEmpty()
	comment: string
}
