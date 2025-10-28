import { IsDecimal, IsOptional, Max, Min } from 'class-validator'

export class UpdateDriverCommissionDto {
	@IsDecimal()
	@Min(0)
	@Max(100)
	@IsOptional()
	commissionPercent: string | null
}
