import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty } from 'class-validator'
import { VehicleVerificationStatus } from 'prisma/generated/client'

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
