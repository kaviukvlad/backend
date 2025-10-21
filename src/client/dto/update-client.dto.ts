import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class UpdateClientDto {
	@ApiProperty({
		description: 'New client name',
		example: 'Name',
		required: false
	})
	@IsOptional()
	@IsString()
	@IsNotEmpty()
	name?: string

	@ApiProperty({
		description: 'New client phone number',
		example: '+380501112233',
		required: false
	})
	@IsOptional()
	@IsString()
	@IsNotEmpty()
	phone?: string
}
