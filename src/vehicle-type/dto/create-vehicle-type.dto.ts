import { IsInt, IsNotEmpty, IsString } from 'class-validator'

export class CreateVehicleTypeDto {
	@IsString()
	@IsNotEmpty()
	name: string

	@IsInt()
	@IsNotEmpty()
	max_passengers: number

	@IsInt()
	@IsNotEmpty()
	max_luggage_standard: number

	@IsInt()
	@IsNotEmpty()
	max_luggage_small: number
}
