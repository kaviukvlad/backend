import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty } from 'class-validator'
import { DocumentStatus } from 'prisma/generated/client'

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
