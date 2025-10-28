import { IsNotEmpty, IsString } from 'class-validator'

export class RefundOrderDto {
	@IsString()
	@IsNotEmpty()
	password
}
