import { ApiProperty } from '@nestjs/swagger'
import { VehicleVerificationStatus } from '@prisma/client'
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class UpdateCarStatusDto {
	@ApiProperty({
		description: 'New vehicle verification status',
		enum: VehicleVerificationStatus,
		example: VehicleVerificationStatus.APPROVED
	})
	@IsEnum(VehicleVerificationStatus)
	@IsNotEmpty()
	status: VehicleVerificationStatus

	@ApiProperty({
		description: 'Vehicle Type ID (Required when approving)',
		example: 'clqj9v1p20000umc0a1b2c3d4',
		required: false
	})
	@IsOptional()
	@IsString()
	vehicleTypeId?: string
}
