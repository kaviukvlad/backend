import { IsNotEmpty, IsString } from 'class-validator'

export class AssignOrderDto {
	@IsString()
	@IsNotEmpty()
	driverId: string
}
