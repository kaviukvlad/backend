import { IsEnum, IsNotEmpty } from 'class-validator'
import { DocumentStatus } from 'prisma/generated/client'

export class UpdateDocumentStatusDto {
	@IsEnum(DocumentStatus)
	@IsNotEmpty()
	status: DocumentStatus
}
