import { ApiProperty } from '@nestjs/swagger'
import { DocumentStatus } from '@prisma/client'
import { IsEnum, IsNotEmpty } from 'class-validator'

export class UpdateDocumentStatusDto {
	@ApiProperty({
		description: 'New document review status',
		enum: DocumentStatus,
		example: DocumentStatus.REJECTED
	})
	@IsEnum(DocumentStatus)
	@IsNotEmpty()
	status: DocumentStatus
}
