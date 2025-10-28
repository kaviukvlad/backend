import { IsArray, IsString } from 'class-validator'

export class UpdateDriverVehicleTypesDto {
	@IsArray()
	@IsString({ each: true })
	vehicleTypeIds: string[]
}
