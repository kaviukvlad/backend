import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator'

export class CreateOperatorDto {
	@IsEmail()
	email: string

	@IsString()
	@MinLength(8, { message: 'Password must be at least 8 characters long' })
	password: string

	@IsString()
	@IsNotEmpty()
	name: string
}
