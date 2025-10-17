import { IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class UpdateDriverDto {
	@IsOptional()
	@IsString()
	@IsNotEmpty()
	name?: string

	@IsOptional()
	@IsString()
	@IsNotEmpty()
	regionId?: string
}
