import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	HttpStatus,
	Patch,
	UseGuards
} from '@nestjs/common'
import { UserRole } from 'prisma/generated/client'
import { Auth } from 'src/auth/decorators/auth.decorators'

import { CurrentClient } from 'src/auth/decorators/client.decorators'
import { Roles } from 'src/auth/decorators/roles.decorator'
import { RolesGuard } from 'src/auth/guard/roles.guard'
import { ClientService } from './client.service'
import { UpdateClientDto } from './dto/update-client.dto'

@Controller('client')
export class ClientController {
	constructor(private readonly clientService: ClientService) {}

	@Get('profile')
	@Auth(UserRole.USER)
	@HttpCode(HttpStatus.OK)
	async getMyProfile(@CurrentClient('id') clientId: string) {
		return this.clientService.getProfile(clientId)
	}

	@Patch('profile')
	@Roles(UserRole.USER)
	@UseGuards(RolesGuard)
	@Auth()
	@HttpCode(HttpStatus.OK)
	async updateMyProfile(
		@CurrentClient('id') clientId: string,
		@Body() dto: UpdateClientDto
	) {
		return this.clientService.updateProfile(clientId, dto)
	}

	@Delete('profile')
	@Roles(UserRole.USER)
	@UseGuards(RolesGuard)
	@Auth()
	@HttpCode(HttpStatus.NO_CONTENT)
	async deleteMyProfile(@CurrentClient('id') clientId: string) {
		return this.clientService.deleteProfile(clientId)
	}
}
