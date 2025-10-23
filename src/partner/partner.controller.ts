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
import { UserRole } from 'prisma/generated/client'
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
	findAll() {
		return this.partnerService.findAll()
	}

	@Get(':id')
	@ApiOperation({ summary: 'Get details of one partner' })
	@ApiParam({ name: 'id', description: 'Partner ID' })
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
	findLogsForPartner(@Param('id') id: string) {
		return this.partnerService.findLogs(id)
	}
}
