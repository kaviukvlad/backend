import {
	Body,
	Controller,
	Get,
	Param,
	Patch,
	Request,
	UseGuards
} from '@nestjs/common'
import { UserRole } from 'prisma/generated/client'
import { Auth } from 'src/auth/decorators/auth.decorators'
import { Roles } from 'src/auth/decorators/roles.decorator'
import { RolesGuard } from 'src/auth/guard/roles.guard'
import { AdminService } from './admin.service'
import { UpdateCarStatusDto } from './dto/update-car-status.dto'
import { UpdateDocumentStatusDto } from './dto/update-document-status.dto'

@Controller('admin')
export class AdminController {
	constructor(private readonly adminService: AdminService) {}

	@Get('users')
	@Roles(UserRole.ADMIN, UserRole.SUPERADMIN)
	@UseGuards(RolesGuard)
	@Auth()
	async getAllUser() {
		return this.adminService.getAllUsers()
	}
	@Get('users/:id')
	@Roles(UserRole.ADMIN, UserRole.SUPERADMIN)
	@UseGuards(RolesGuard)
	@Auth()
	async getUserById(@Param('id') id: string) {
		return this.adminService.getUserById(id)
	}

	@Get('drivers/pending')
	@Roles(UserRole.ADMIN, UserRole.SUPERADMIN)
	@UseGuards(RolesGuard)
	@Auth()
	async getPendingDrivers() {
		return this.adminService.getPendingDrivers()
	}

	@Patch('drivers/:id/approve')
	@Roles(UserRole.ADMIN, UserRole.SUPERADMIN)
	@UseGuards(RolesGuard)
	@Auth()
	async approveDriver(@Param('id') driverId: string) {
		return this.adminService.updateDriverStatus(driverId, 1)
	}

	@Get('cars/pending')
	@Roles(UserRole.ADMIN, UserRole.SUPERADMIN)
	@UseGuards(RolesGuard)
	@Auth()
	async getPendingCars() {
		return this.adminService.getPendingCars()
	}

	@Patch('cars/:id/verify')
	@Roles(UserRole.ADMIN, UserRole.SUPERADMIN)
	@UseGuards(RolesGuard)
	@Auth()
	async verifyCar(
		@Param('id') carId: string,
		@Body() dto: UpdateCarStatusDto,
		@Request() req
	) {
		const adminUserId = req.user.id
		return this.adminService.updateCarStatus(carId, dto.status, adminUserId)
	}

	@Get('documents/pending')
	@Roles(UserRole.ADMIN, UserRole.SUPERADMIN)
	@UseGuards(RolesGuard)
	@Auth()
	async getPendingDocuments() {
		return this.adminService.getPendingDocuments()
	}

	@Patch('documents/:id/status')
	@Roles(UserRole.ADMIN, UserRole.SUPERADMIN)
	@UseGuards(RolesGuard)
	@Auth()
	async verifyDocument(
		@Param('id') documentId: string,
		@Body() dto: UpdateDocumentStatusDto,
		@Request() req
	) {
		const adminUserId = req.user.id
		return this.adminService.updateDocumentStatus(
			documentId,
			dto.status,
			adminUserId
		)
	}
}
