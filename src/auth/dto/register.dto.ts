import {
	IsEmail,
	IsEnum,
	IsNotEmpty,
	IsOptional,
	IsString,
	MinLength
} from 'class-validator'
import { UserRole } from 'prisma/generated/client'

export class RegisterDto {
	@IsEmail()
	email: string

	@MinLength(6, {
		message: 'Password must be at least 6 characters long'
	})
	@IsString()
	password: string

	@IsEnum(UserRole)
	@IsNotEmpty()
	role: UserRole

	@IsOptional()
	@IsString()
	phone?: string

	@IsOptional()
	@IsString()
	@IsNotEmpty()
	name?: string

	@IsOptional()
	@IsString()
	@IsNotEmpty()
	regionId?: string
}
