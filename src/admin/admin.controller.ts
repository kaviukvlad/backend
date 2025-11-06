import {
	Body,
	Controller,
	Delete,
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
import { UserRole } from '@prisma/client'
import { Auth } from 'src/auth/decorators/auth.decorators'
import { AdminService } from './admin.service'
import { CreateBreakpointDto } from './dto/create-breakpoint.dto'
import { CreateOperatorDto } from './dto/create-operator.dto'
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
		description: 'User list successfully retrieved.',
		schema: {
			example: [
				{
					id: 'clwtrjfuq000311a9f1a2g8f1',
					email: 'driver.paris@test.com',
					role: 'DRIVER',
					createdAt: '2025-11-03T14:30:00.000Z',
					driverProfile: {
						id: 'driver_profile_id_1',
						name: 'Jean Pierre',
						status: 1
					}
				},
				{
					id: 'clwtrjfuq000511a9f1a2g8f1',
					email: 'client1@test.com',
					role: 'USER',
					createdAt: '2025-11-03T14:30:00.000Z',
					clientProfile: {
						id: 'client_profile_id_1',
						name: 'Client Anton'
					}
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
	@Auth(UserRole.ADMIN, UserRole.OPERATOR)
	async getAllUser() {
		return this.adminService.getAllUsers()
	}

	@Get('users/:id')
	@ApiOperation({ summary: 'Get single user details by ID' })
	@ApiParam({ name: 'id', description: 'User ID' })
	@ApiResponse({
		status: 200,
		description: 'User details received.',
		schema: {
			example: {
				id: 'clwtrjfuq000311a9f1a2g8f1',
				email: 'driver.paris@test.com',
				role: 'DRIVER',
				createdAt: '2025-11-03T14:30:00.000Z',
				driverProfile: {
					id: 'driver_profile_id_1',
					name: 'Jean Pierre',
					status: 1,
					documents: [
						{
							id: 'doc_id_1',
							type: 'DRIVERS_LICENSE',
							file_url: '/uploads/documents/demo_license.jpg',
							status: 'PENDING'
						}
					],
					region: { id: 'region_id_1', name: 'Paris' },
					cars: [
						{
							id: 'car_id_1',
							brand: 'Mercedes-Benz',
							model: 'E-Class',
							media: [
								{
									id: 'media_id_1',
									url: '/uploads/vehicles/demo_photo.jpg',
									type: 'PHOTO'
								}
							]
						}
					]
				}
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
	@ApiResponse({
		status: 404,
		description: 'User not found.',
		schema: {
			example: {
				statusCode: 404,
				message: 'User not found',
				error: 'Not Found'
			}
		}
	})
	@Auth(UserRole.ADMIN)
	async getUserById(@Param('id') id: string) {
		return this.adminService.getUserById(id)
	}

	@Get('drivers/pending')
	@ApiOperation({ summary: 'Get drivers awaiting approval' })
	@ApiResponse({
		status: 200,
		description: 'List of drivers for verification.',
		schema: {
			example: [
				{
					id: 'clwtrjfuq000711a9f1a2g8f1',
					userId: 'clwtrjfuq000611a9f1a2g8f1',
					name: 'Олег Новий',
					status: 0,
					user: { email: 'driver.pending@test.com' },
					documents: [
						{
							id: 'doc_id_1',
							type: 'DRIVERS_LICENSE',
							file_url: '/uploads/documents/demo_license.jpg',
							status: 'PENDING'
						}
					],
					cars: [{ id: 'car_id_1', brand: 'Renault', model: 'Megane' }]
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
	@Auth(UserRole.ADMIN, UserRole.OPERATOR)
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
	@Auth(UserRole.ADMIN, UserRole.OPERATOR)
	async approveDriver(@Param('id') driverId: string) {
		return this.adminService.updateDriverStatus(driverId, 1)
	}

	@Get('cars/pending')
	@ApiOperation({ summary: 'Get cars awaiting verification' })
	@ApiResponse({
		status: 200,
		description: 'List of cars for verification.',
		schema: {
			example: [
				{
					id: 'clwtrjfuq000811a9f1a2g8f1',
					brand: 'Renault',
					model: 'Megane',
					verification_status: 'PENDING',
					media: [
						{
							id: 'media_id_1',
							url: '/uploads/vehicles/demo_photo.jpg',
							type: 'PHOTO'
						}
					],
					driver: {
						id: 'driver_profile_id_2',
						name: 'Олег Новий',
						user: { email: 'driver.pending@test.com' }
					}
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
	@Auth(UserRole.ADMIN, UserRole.OPERATOR)
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
	@Auth(UserRole.ADMIN, UserRole.OPERATOR)
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
	@ApiResponse({
		status: 200,
		description: 'List of documents for review.',
		schema: {
			example: [
				{
					id: 'clwtrjfuq000911a9f1a2g8f1',
					driverId: 'clwtrjfuq000711a9f1a2g8f1',
					type: 'DRIVERS_LICENSE',
					file_url: '/uploads/documents/demo_license.jpg',
					status: 'PENDING',
					driver: {
						id: 'driver_profile_id_2',
						name: 'Олег Новий',
						user: { email: 'driver.pending@test.com' }
					}
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
	@Auth(UserRole.ADMIN, UserRole.OPERATOR)
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
	@ApiOperation({ summary: 'Update driver commission' })
	@Auth(UserRole.ADMIN)
	updateDriverCommission(
		@Param('id') id: string,
		@Body() dto: UpdateDriverCommissionDto
	) {
		return this.adminService.updateDriverCommission(id, dto)
	}

	@Patch('drivers/:id/vehicle-types')
	@ApiOperation({ summary: "Update driver's allowed vehicle types" })
	@Auth(UserRole.ADMIN)
	updateDriverAllowedVehicleTypes(
		@Param('id') driverId: string,
		@Body() dto: UpdateDriverVehicleTypesDto
	) {
		return this.adminService.updateDriverAllowedVehicleTypes(driverId, dto)
	}

	@Post('operators')
	@ApiOperation({ summary: 'Create a new operator user' })
	@Auth(UserRole.ADMIN)
	createOperator(@Body() dto: CreateOperatorDto) {
		return this.adminService.createOperator(dto)
	}

	@Get('regions/:regionId/breakpoints')
	@ApiOperation({ summary: 'Get all breakpoints for the region' })
	@ApiResponse({
		status: 200,
		description: 'List of distance breakpoints for a specific region.',
		schema: {
			example: [
				{
					id: 'bp_id_1',
					regionId: 'clwtrjfuq000111a9f1a2g8f1',
					distanceKm: 10,
					coefficient: '1.00'
				},
				{
					id: 'bp_id_2',
					regionId: 'clwtrjfuq000111a9f1a2g8f1',
					distanceKm: 25,
					coefficient: '1.50'
				}
			]
		}
	})
	getBreakpoints(@Param('regionId') regionId: string) {
		return this.adminService.getBreakpoints(regionId)
	}

	@Post('regions/:regionId/breakpoints')
	@ApiOperation({ summary: 'Create new breakpoint (passworded)' })
	@Auth(UserRole.ADMIN)
	createBreakpoint(
		@Param('regionId') regionId: string,
		@Body() dto: CreateBreakpointDto
	) {
		return this.adminService.createBreakpoint(regionId, dto)
	}

	@Delete('breakpoints/:id')
	@ApiOperation({ summary: 'Delete breakpoint (passworded)' })
	@Auth(UserRole.ADMIN)
	deleteBreakpoint(@Param('id') id: string) {
		return this.adminService.deleteBreakpoint(id)
	}
}
