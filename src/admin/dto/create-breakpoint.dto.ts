import { IsDecimal, IsInt, IsPositive } from 'class-validator'

export class CreateBreakpointDto {
	@IsInt()
	@IsPositive()
	distanceKm: number

	@IsDecimal()
	coefficient: string
}
