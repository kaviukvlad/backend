import { ApiProperty } from '@nestjs/swagger'
import { VehicleVerificationStatus } from '@prisma/client'
import { IsEnum, IsNotEmpty } from 'class-validator'

export class UpdateCarStatusDto {
	@ApiProperty({
		description: 'New vehicle verification status',
		enum: VehicleVerificationStatus,
		example: VehicleVerificationStatus.APPROVED
	})
	@IsEnum(VehicleVerificationStatus)
	@IsNotEmpty()
	status: VehicleVerificationStatus
}
