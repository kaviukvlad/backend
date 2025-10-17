import { IsEnum, IsNotEmpty } from 'class-validator'
import { VehicleVerificationStatus } from 'prisma/generated/client'

export class UpdateCarStatusDto {
	@IsEnum(VehicleVerificationStatus)
	@IsNotEmpty()
	status: VehicleVerificationStatus
}
