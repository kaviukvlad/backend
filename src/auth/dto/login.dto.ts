import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsString, MinLength } from 'class-validator'

export class LoginDto {
	@ApiProperty({
		description: 'User email',
		example: 'test@example.com'
	})
	@IsEmail()
	email: string

	@ApiProperty({
		description: 'User password (minimum 6 characters)',
		example: '123456'
	})
	@MinLength(6, { message: 'Password must be at least 6 characters long' })
	@IsString()
	password: string
}
