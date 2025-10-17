import { IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class UpdateClientDto {
	@IsOptional()
	@IsString()
	@IsNotEmpty()
	name?: string

	@IsOptional()
	@IsString()
	@IsNotEmpty()
	phone?: string
}
