import { IsBoolean, IsDecimal, IsNotEmpty, IsString } from 'class-validator'

export class CreateTariffDto {
	@IsString()
	@IsNotEmpty()
	regionId: string

	@IsString()
	@IsNotEmpty()
	vehicleTypeId: string

	@IsDecimal()
	@IsNotEmpty()
	baseFare: string

	@IsDecimal()
	@IsNotEmpty()
	pricePerKm: string

	@IsDecimal()
	@IsNotEmpty()
	pricePerMinute: string

	@IsDecimal()
	@IsNotEmpty()
	minimumFare: string

	@IsBoolean()
	isActive: boolean
}
