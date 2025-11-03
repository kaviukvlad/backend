import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Patch,
	Post,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import {
	ApiBearerAuth,
	ApiOperation,
	ApiParam,
	ApiResponse,
	ApiTags
} from '@nestjs/swagger'
import { UserRole } from '@prisma/client'
import { Auth } from 'src/auth/decorators/auth.decorators'
import { CreatePartnerDto } from './dto/create-partner.dto'
import { UpdatePartnerDto } from './dto/update-partner.dto'
import { PartnerService } from './partner.service'

@ApiTags('Admin Panel - Partners')
@ApiBearerAuth()
@Controller('admin/partners')
@Auth(UserRole.ADMIN)
export class PartnerController {
	constructor(private readonly partnerService: PartnerService) {}

	@Post()
	@ApiOperation({ summary: 'Create new B2B partner' })
	@ApiResponse({
		status: 201,
		description:
			'Partner created successfully. An API key will be generated in the response.'
	})
	@UsePipes(new ValidationPipe())
	create(@Body() createPartnerDto: CreatePartnerDto) {
		return this.partnerService.create(createPartnerDto)
	}

	@Get()
	@ApiOperation({ summary: 'Get a list of all partners' })
	@ApiResponse({
		status: 200,
		description: 'A list of all B2B partners.',
		schema: {
			example: [
				{
					id: 'clwtrjfuq000c11a9f1a2g8f1',
					name: 'Partner A (e.g., Hotel Chain)',
					apiKey: 'xkeysib-abc...xyz',
					isActive: true,
					markupPercent: '10.00',
					contactEmail: 'contact@partnerA.com',
					createdAt: '2025-11-01T10:00:00.000Z'
				},
				{
					id: 'clwtrjfuq000d11a9f1a2g8f1',
					name: 'Partner B (e.g., Travel Agency)',
					apiKey: 'xkeysib-123...456',
					isActive: false,
					markupPercent: '15.00',
					contactEmail: 'api@partnerB.com',
					createdAt: '2025-11-02T12:00:00.000Z'
				}
			]
		}
	})
	@ApiResponse({
		status: 403,
		description: 'Access denied.',
		schema: {
			example: {
				statusCode: 403,
				message: 'Forbidden resource',
				error: 'Forbidden'
			}
		}
	})
	findAll() {
		return this.partnerService.findAll()
	}

	@Get(':id')
	@ApiOperation({ summary: 'Get details of one partner' })
	@ApiParam({ name: 'id', description: 'Partner ID' })
	@ApiResponse({
		status: 200,
		description: 'Details for a single partner.',
		schema: {
			example: {
				id: 'clwtrjfuq000c11a9f1a2g8f1',
				name: 'Partner A (e.g., Hotel Chain)',
				apiKey: 'xkeysib-abc...xyz',
				isActive: true,
				markupPercent: '10.00',
				contactEmail: 'contact@partnerA.com',
				createdAt: '2025-11-01T10:00:00.000Z',
				updatedAt: '2025-11-01T10:00:00.000Z'
			}
		}
	})
	@ApiResponse({
		status: 404,
		description: 'Partner not found.',
		schema: {
			example: {
				statusCode: 404,
				message: 'Partner with ID ... not found.',
				error: 'Not Found'
			}
		}
	})
	@ApiResponse({
		status: 403,
		description: 'Access denied.',
		schema: {
			example: {
				statusCode: 403,
				message: 'Forbidden resource',
				error: 'Forbidden'
			}
		}
	})
	findOne(@Param('id') id: string) {
		return this.partnerService.findOne(id)
	}

	@Patch(':id')
	@ApiOperation({ summary: 'Update partner data' })
	@ApiParam({ name: 'id', description: 'Partner ID' })
	@UsePipes(new ValidationPipe())
	update(@Param('id') id: string, @Body() updatePartnerDto: UpdatePartnerDto) {
		return this.partnerService.update(id, updatePartnerDto)
	}

	@HttpCode(204)
	@ApiOperation({ summary: 'Deactivate partner' })
	@ApiParam({ name: 'id', description: 'Partner ID' })
	@Delete(':id')
	deactivate(@Param('id') id: string) {
		return this.partnerService.deactivate(id)
	}

	@Get(':id/logs')
	@ApiOperation({ summary: 'Get API request log for partner' })
	@ApiParam({ name: 'id', description: 'Partner ID' })
	@ApiResponse({
		status: 200,
		description: 'A list of the latest 100 API logs for the partner.',
		schema: {
			example: [
				{
					id: 'log_id_1',
					partnerId: 'clwtrjfuq000c11a9f1a2g8f1',
					requestTimestamp: '2025-11-03T15:00:00.000Z',
					requestMethod: 'POST',
					requestUrl: '/api/b2b/orders',
					requestBody: { customerEmail: 'test@example.com' },
					responseStatusCode: 201,
					responseBody: { id: 'order_id_1', status: 'NEW' },
					ipAddress: '123.45.67.89'
				},
				{
					id: 'log_id_2',
					partnerId: 'clwtrjfuq000c11a9f1a2g8f1',
					requestTimestamp: '2025-11-03T14:59:00.000Z',
					requestMethod: 'POST',
					requestUrl: '/api/b2b/orders',
					requestBody: { customerEmail: null },
					responseStatusCode: 400,
					responseBody: {
						message: 'customerEmail is required for B2B orders.'
					},
					ipAddress: '123.45.67.89'
				}
			]
		}
	})
	@ApiResponse({
		status: 404,
		description: 'Partner not found.',
		schema: {
			example: {
				statusCode: 404,
				message: 'Partner with ID ... not found.',
				error: 'Not Found'
			}
		}
	})
	@ApiResponse({
		status: 403,
		description: 'Access denied.',
		schema: {
			example: {
				statusCode: 403,
				message: 'Forbidden resource',
				error: 'Forbidden'
			}
		}
	})
	findLogsForPartner(@Param('id') id: string) {
		return this.partnerService.findLogs(id)
	}
}
