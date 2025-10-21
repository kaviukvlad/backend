import { ApiProperty } from '@nestjs/swagger'
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
	@ApiProperty({
		description: 'Email for new user',
		example: 'new.user@example.com'
	})
	@IsEmail()
	email: string

	@ApiProperty({
		description: 'Password for new user (minimum 6 characters)',
		example: 'password123'
	})
	@MinLength(6, { message: 'Password must be at least 6 characters long' })
	@IsString()
	password: string

	@ApiProperty({
		description: 'Role of the new user in the system',
		enum: UserRole,
		example: UserRole.USER
	})
	@IsEnum(UserRole)
	@IsNotEmpty()
	role: UserRole

	@ApiProperty({
		description: 'User phone',
		required: false,
		example: '+380991234567'
	})
	@IsOptional()
	@IsString()
	phone?: string

	@ApiProperty({
		description: 'User name',
		required: false,
		example: 'Name'
	})
	@IsOptional()
	@IsString()
	@IsNotEmpty()
	name?: string

	@ApiProperty({
		description: 'Region ID (for drivers)',
		required: false,
		example: 'For the driver only(string)'
	})
	@IsOptional()
	@IsString()
	@IsNotEmpty()
	regionId?: string
}
