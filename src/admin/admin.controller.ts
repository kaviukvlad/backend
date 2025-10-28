import {
	Body,
	Controller,
	Get,
	Param,
	Patch,
	Post,
	Request
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
import { AdminService } from './admin.service'
import { CreateOperatorDto } from './dto/create-operator.dto'
import { CreateTariffDto } from './dto/create-tariff.dto'
import { UpdateCarStatusDto } from './dto/update-car-status.dto'
import { UpdateDocumentStatusDto } from './dto/update-document-status.dto'
import { UpdateDriverCommissionDto } from './dto/update-driver-commission.dto'
import { UpdateDriverVehicleTypesDto } from './dto/update-driver-vehicle-types.dto'

@ApiTags('Admin Panel')
@ApiBearerAuth()
@Controller('admin')
export class AdminController {
	constructor(private readonly adminService: AdminService) {}

	@Get('users')
	@ApiOperation({ summary: 'Get list of all users' })
	@ApiResponse({
		status: 200,
		description: 'User list successfully retrieved.'
	})
	@ApiResponse({ status: 403, description: 'Access denied.' })
	@Auth(UserRole.ADMIN)
	async getAllUser() {
		return this.adminService.getAllUsers()
	}

	@Get('users/:id')
	@ApiOperation({ summary: 'Get single user details by ID' })
	@ApiParam({ name: 'id', description: 'User ID' })
	@ApiResponse({ status: 200, description: 'User details received.' })
	@ApiResponse({ status: 404, description: 'User not found.' })
	@Auth(UserRole.ADMIN)
	async getUserById(@Param('id') id: string) {
		return this.adminService.getUserById(id)
	}

	@Get('drivers/pending')
	@ApiOperation({ summary: 'Get drivers awaiting approval' })
	@ApiResponse({
		status: 200,
		description: 'List of drivers for verification.'
	})
	@Auth(UserRole.ADMIN)
	async getPendingDrivers() {
		return this.adminService.getPendingDrivers()
	}

	@Patch('drivers/:id/approve')
	@ApiOperation({ summary: 'Approve driver profile' })
	@ApiParam({ name: 'id', description: 'Driver profile ID' })
	@ApiResponse({
		status: 200,
		description: 'Driver status successfully updated.'
	})
	@ApiResponse({ status: 404, description: 'Driver profile not found.' })
	@Auth(UserRole.ADMIN)
	async approveDriver(@Param('id') driverId: string) {
		return this.adminService.updateDriverStatus(driverId, 1)
	}

	@Get('cars/pending')
	@ApiOperation({ summary: 'Get cars awaiting verification' })
	@ApiResponse({ status: 200, description: 'List of cars for verification.' })
	@Auth(UserRole.ADMIN)
	async getPendingCars() {
		return this.adminService.getPendingCars()
	}

	@Patch('cars/:id/verify')
	@ApiOperation({ summary: 'Change vehicle verification status' })
	@ApiParam({ name: 'id', description: 'Vehicle ID' })
	@ApiResponse({
		status: 200,
		description: 'Vehicle status successfully updated.'
	})
	@ApiResponse({ status: 404, description: 'Vehicle not found.' })
	@Auth(UserRole.ADMIN)
	async verifyCar(
		@Param('id') carId: string,
		@Body() dto: UpdateCarStatusDto,
		@Request() req
	) {
		const adminUserId = req.user.id
		return this.adminService.updateCarStatus(carId, dto.status, adminUserId)
	}

	@Get('documents/pending')
	@ApiOperation({ summary: 'Get documents pending review' })
	@ApiResponse({ status: 200, description: 'List of documents for review.' })
	@Auth(UserRole.ADMIN)
	async getPendingDocuments() {
		return this.adminService.getPendingDocuments()
	}

	@Patch('documents/:id/status')
	@ApiOperation({ summary: 'Change document review status' })
	@ApiParam({ name: 'id', description: 'Document ID' })
	@ApiResponse({
		status: 200,
		description: 'Document status updated successfully.'
	})
	@ApiResponse({ status: 404, description: 'Document not found.' })
	@Auth(UserRole.ADMIN)
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

	@Patch('drivers/:id/commission')
	updateDriverCommission(
		@Param('id') id: string,
		@Body() dto: UpdateDriverCommissionDto
	) {
		return this.adminService.updateDriverCommission(id, dto)
	}

	@Patch('drivers/:id/vehicle-types')
	updateDriverAllowedVehicleTypes(
		@Param('id') driverId: string,
		@Body() dto: UpdateDriverVehicleTypesDto
	) {
		return this.adminService.updateDriverAllowedVehicleTypes(driverId, dto)
	}

	@Post('tariffs')
	createTariff(@Body() dto: CreateTariffDto) {
		return this.adminService.createTariff(dto)
	}

	@Post('operators')
	@ApiOperation({ summary: 'Create a new operator user' })
	createOperator(@Body() dto: CreateOperatorDto) {
		return this.adminService.createOperator(dto)
	}
}
