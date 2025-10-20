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
import { UserRole } from 'prisma/generated/client'
import { Auth } from 'src/auth/decorators/auth.decorators'
import { CreatePartnerDto } from './dto/create-partner.dto'
import { UpdatePartnerDto } from './dto/update-partner.dto'
import { PartnerService } from './partner.service'

@Controller('admin/partners')
@Auth(UserRole.ADMIN, UserRole.SUPERADMIN)
export class PartnerController {
	constructor(private readonly partnerService: PartnerService) {}

	@Post()
	@UsePipes(new ValidationPipe())
	create(@Body() createPartnerDto: CreatePartnerDto) {
		return this.partnerService.create(createPartnerDto)
	}

	@Get()
	findAll() {
		return this.partnerService.findAll()
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.partnerService.findOne(id)
	}

	@Patch(':id')
	@UsePipes(new ValidationPipe())
	update(@Param('id') id: string, @Body() updatePartnerDto: UpdatePartnerDto) {
		return this.partnerService.update(id, updatePartnerDto)
	}

	@HttpCode(204)
	@Delete(':id')
	deactivate(@Param('id') id: string) {
		return this.partnerService.deactivate(id)
	}

	@Get(':id/logs')
	findLogsForPartner(@Param('id') id: string) {
		return this.partnerService.findLogs(id)
	}
}
