import { ApiProperty } from '@nestjs/swagger'
import {
	IsEmail,
	IsNotEmpty,
	IsOptional,
	IsPhoneNumber,
	IsString,
	MinLength
} from 'class-validator'

export class CreateDriverByAdminDto {
	@ApiProperty({
		description: "Driver's email",
		example: 'new.driver@test.com'
	})
	@IsEmail()
	email: string

	@ApiProperty({ description: "Driver's password", example: 'strongPa$$w0rd' })
	@IsString()
	@MinLength(6)
	password: string

	@ApiProperty({
		description: "Driver's full name",
		example: 'Taras Shevchenko'
	})
	@IsString()
	@IsNotEmpty()
	name: string

	@ApiProperty({
		description: "Driver's phone number",
		example: '+380931234567'
	})
	@IsPhoneNumber()
	phone: string

	@ApiProperty({
		description: 'ID of the region to assign the driver',
		example: 'clwtrjfuq000311a9f1a2g8f1'
	})
	@IsString()
	@IsOptional()
	regionId?: string
}
