import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	HttpStatus,
	Patch
} from '@nestjs/common'
import { UserRole } from 'prisma/generated/client'
import { Auth } from 'src/auth/decorators/auth.decorators'

import {
	ApiBearerAuth,
	ApiOperation,
	ApiResponse,
	ApiTags
} from '@nestjs/swagger'
import { CurrentClient } from 'src/auth/decorators/client.decorators'
import { ClientService } from './client.service'
import { UpdateClientDto } from './dto/update-client.dto'

@ApiTags('Client Profile')
@ApiBearerAuth()
@Controller('client')
export class ClientController {
	constructor(private readonly clientService: ClientService) {}

	@Get('profile')
	@ApiOperation({ summary: 'Get current client profile' })
	@ApiResponse({
		status: HttpStatus.OK,
		description: 'Profile successfully retrieved.'
	})
	@ApiResponse({
		status: HttpStatus.UNAUTHORIZED,
		description: 'Unauthorized access.'
	})
	@Auth(UserRole.USER)
	@HttpCode(HttpStatus.OK)
	async getMyProfile(@CurrentClient('id') clientId: string) {
		return this.clientService.getProfile(clientId)
	}

	@Patch('profile')
	@ApiOperation({ summary: 'Update current client profile' })
	@ApiResponse({
		status: HttpStatus.OK,
		description: 'Profile successfully updated.'
	})
	@ApiResponse({
		status: HttpStatus.BAD_REQUEST,
		description: 'Invalid input.'
	})
	@Auth(UserRole.USER)
	@HttpCode(HttpStatus.OK)
	async updateMyProfile(
		@CurrentClient('id') clientId: string,
		@Body() dto: UpdateClientDto
	) {
		return this.clientService.updateProfile(clientId, dto)
	}

	@Delete('profile')
	@ApiOperation({ summary: 'Delete current client profile' })
	@ApiResponse({
		status: HttpStatus.NO_CONTENT,
		description: 'Profile successfully deleted.'
	})
	@Auth(UserRole.USER)
	@HttpCode(HttpStatus.NO_CONTENT)
	async deleteMyProfile(@CurrentClient('id') clientId: string) {
		return this.clientService.deleteProfile(clientId)
	}
}
