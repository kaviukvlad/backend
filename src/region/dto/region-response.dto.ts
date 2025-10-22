import { ApiProperty, getSchemaPath } from '@nestjs/swagger'
import { RegionType } from 'prisma/generated/client'

export class RegionResponseDto {
	@ApiProperty()
	id: string

	@ApiProperty({ example: 'COUNTRY' })
	name: string

	@ApiProperty({ enum: RegionType, example: RegionType.COUNTRY })
	type: RegionType

	@ApiProperty({
		type: 'array',
		items: { $ref: getSchemaPath(RegionResponseDto) },
		required: false
	})
	children?: RegionResponseDto[]
}
