import { ApiProperty } from '@nestjs/swagger'
import {
	IsEmail,
	IsInt,
	IsOptional,
	IsPhoneNumber,
	IsString,
	Max,
	Min
} from 'class-validator'

export class UpdateDriverByAdminDto {
	@ApiProperty({ description: "Driver's full name", example: 'full name' })
	@IsString()
	@IsOptional()
	name?: string

	@ApiProperty({
		description: "Driver's email",
		example: 'driver@test.com'
	})
	@IsEmail()
	@IsOptional()
	email?: string

	@ApiProperty({
		description: "Driver's phone number",
		example: '+38000000006'
	})
	@IsPhoneNumber()
	@IsOptional()
	phone?: string

	@ApiProperty({
		description: 'ID of the region to assign the driver',
		example: 'clwtrjfuq000311a9f1a2g8f1'
	})
	@IsString()
	@IsOptional()
	regionId?: string

	@ApiProperty({
		description: 'Status: 0 = Pending, 1 = Active',
		example: 1
	})
	@IsInt()
	@Min(0)
	@Max(1)
	@IsOptional()
	status?: number
}
