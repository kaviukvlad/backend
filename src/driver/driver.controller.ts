import {
	BadRequestException,
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	HttpStatus,
	Param,
	Patch,
	Post,
	UploadedFile,
	UploadedFiles,
	UseInterceptors
} from '@nestjs/common'
import {
	FileFieldsInterceptor,
	FileInterceptor
} from '@nestjs/platform-express'
import {
	ApiBearerAuth,
	ApiBody,
	ApiConsumes,
	ApiOperation,
	ApiParam,
	ApiResponse,
	ApiTags
} from '@nestjs/swagger'
import { UserRole, type DriverProfile } from '@prisma/client'
import { diskStorage } from 'multer'
import { extname } from 'path'
import { Auth } from 'src/auth/decorators/auth.decorators'
import { CurrentDriver } from 'src/auth/decorators/driver.decorators'
import { CreateCarDto } from 'src/car/dto/create-car.dto'
import { UpdateCarDto } from 'src/car/dto/update-car.dto'
import { DriverService } from './driver.service'
import { UpdateDriverDto } from './dto/update-driver.dto'

export const multerStorageOptions = (folder: string) =>
	diskStorage({
		destination: `./uploads/${folder}`,
		filename: (req, file, cb) => {
			const randomName = Array(32)
				.fill(null)
				.map(() => Math.round(Math.random() * 16).toString(16))
				.join('')

			cb(null, `${randomName}${extname(file.originalname)}`)
		}
	})

export const imageFileFilter = (req, file, callback) => {
	if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
		return callback(
			new BadRequestException('Only image files are allowed!'),
			false
		)
	}
	callback(null, true)
}

export const mediaFileFilter = (req, file, callback) => {
	if (!file.originalname.match(/\.(jpg|jpeg|png|gif|mp4|mov|avi)$/)) {
		return callback(
			new BadRequestException('Only image and video files are allowed!'),
			false
		)
	}
	callback(null, true)
}

@ApiTags('Driver')
@ApiBearerAuth()
@Controller('driver')
@Auth(UserRole.DRIVER)
export class DriverController {
	constructor(private readonly driverService: DriverService) {}

	@Get('profile')
	@ApiOperation({ summary: 'Get current driver profile' })
	@Auth()
	@ApiResponse({
		status: 200,
		description: 'Driver profile',
		schema: {
			example: {
				id: 'clwtrjfuq000411a9f1a2g8f1',
				userId: 'clwtrjfuq000311a9f1a2g8f1',
				name: 'Jean Pierre',
				regionId: 'clwtrjfuq000111a9f1a2g8f1',
				rating: 5.0,
				status: 1,
				commissionPercent: '15.00',
				region: { id: 'clwtrjfuq000111a9f1a2g8f1', name: 'Paris' /* ... */ },
				cars: [{ id: 'car_id_1', brand: 'Mercedes-Benz', model: 'E-Class' }]
			}
		}
	})
	@ApiResponse({
		status: 404,
		description: 'Profile not found (unlikely with this decorator)',
		schema: {
			example: {
				statusCode: 404,
				message: 'Driver profile not found.',
				error: 'Not Found'
			}
		}
	})
	async getProfile(@CurrentDriver('id') id: string) {
		return this.driverService.getById(id)
	}

	@Patch('profile')
	@ApiOperation({ summary: 'Update current driver profile' })
	@Auth()
	@HttpCode(HttpStatus.OK)
	async updateMyProfile(
		@CurrentDriver('id') driverId: string,
		@Body() dto: UpdateDriverDto
	) {
		return this.driverService.updateProfile(driverId, dto)
	}

	@Delete('profile')
	@ApiOperation({ summary: 'Delete current driver profile' })
	@Auth()
	@HttpCode(HttpStatus.NO_CONTENT)
	async deleteMyProfile(@CurrentDriver('id') driverId: string) {
		return this.driverService.deleteMyProfile(driverId)
	}

	@Get('cars')
	@ApiOperation({ summary: 'Get a list of your cars' })
	@Auth()
	@ApiResponse({
		status: 200,
		description: "List of driver's cars",
		schema: {
			example: [
				{
					id: 'clwtrjfuq000411a9f1a2g8f1',
					driverId: 'clwtrjfuq000311a9f1a2g8f1',
					vehicle_type_id: 'clwtrgq5n000011a9d7z7f9c3',
					brand: 'Mercedes-Benz',
					model: 'E-Class',
					year: 2022,
					color: 'Black',
					license_plate: 'FR-123-AB',
					verification_status: 'APPROVED'
				}
			]
		}
	})
	async getMyCars(@CurrentDriver() driver: DriverProfile) {
		return this.driverService.getCarsByDriverID(driver.id)
	}

	@Post('cars')
	@HttpCode(201)
	@ApiOperation({ summary: 'Add new car' })
	@Auth()
	async addMyCar(
		@CurrentDriver() driver: DriverProfile,
		@Body() dto: CreateCarDto
	) {
		return this.driverService.addCar(driver.id, dto)
	}

	@Patch('cars/:id')
	@HttpCode(200)
	@ApiOperation({ summary: 'Update your car information' })
	@ApiParam({ name: 'id', description: 'Car ID' })
	@Auth()
	async updateMyCar(
		@CurrentDriver() driver: DriverProfile,
		@Param('id') carId: string,
		@Body() dto: UpdateCarDto
	) {
		return this.driverService.updateCar(driver.id, carId, dto)
	}

	@Delete('cars/:id')
	@ApiOperation({ summary: 'Delete your car' })
	@HttpCode(HttpStatus.NO_CONTENT)
	@ApiParam({ name: 'id', description: 'Car ID' })
	@Auth()
	async deleteMyCar(
		@CurrentDriver() driver: DriverProfile,
		@Param('id') carId: string
	) {
		return this.driverService.deleteCar(driver.id, carId)
	}

	@Post('cars/:id/media')
	@Auth()
	@ApiOperation({ summary: 'Upload photo/video for car verification' })
	@ApiConsumes('multipart/form-data')
	@ApiBody({
		schema: {
			type: 'object',
			properties: {
				photos: { type: 'array', items: { type: 'string', format: 'binary' } },
				video: { type: 'string', format: 'binary' }
			}
		}
	})
	@UseInterceptors(
		FileFieldsInterceptor(
			[
				{ name: 'photos', maxCount: 6 },
				{ name: 'video', maxCount: 1 }
			],
			{
				storage: multerStorageOptions('vehicles'),
				fileFilter: mediaFileFilter
			}
		)
	)
	async uploadCarMedia(
		@CurrentDriver() driver: DriverProfile,
		@Param('id') cardId: string,
		@UploadedFiles()
		files: { photos?: Express.Multer.File[]; video?: Express.Multer.File[] }
	) {
		return this.driverService.uploadCarMedia(driver.id, cardId, files)
	}

	@Post('documents/verification')
	@Auth()
	@ApiOperation({ summary: 'Upload driver verification documents' })
	@ApiConsumes('multipart/form-data')
	@ApiBody({
		schema: {
			type: 'object',
			properties: {
				driversLicense: { type: 'string', format: 'binary' },
				vehicleRegistration: { type: 'string', format: 'binary' },
				selfieWithLicense: { type: 'string', format: 'binary' }
			}
		}
	})
	@UseInterceptors(
		FileFieldsInterceptor(
			[
				{ name: 'driversLicense', maxCount: 1 },
				{ name: 'vehicleRegistration', maxCount: 1 },
				{ name: 'selfieWithLicense', maxCount: 1 }
			],
			{
				storage: multerStorageOptions('documents'),
				fileFilter: imageFileFilter
			}
		)
	)
	async uploadVerificationDocuments(
		@CurrentDriver('id') driverId: string,
		@UploadedFiles()
		files: {
			driversLicense?: Express.Multer.File[]
			vehicleRegistration?: Express.Multer.File[]
			selfieWithLicense?: Express.Multer.File[]
		}
	) {
		if (
			!files ||
			!files.driversLicense ||
			!files.vehicleRegistration ||
			!files.selfieWithLicense
		) {
			throw new BadRequestException('All three document type are requires.')
		}
		return this.driverService.uploadVerificationDocuments(driverId, files)
	}

	@Get('orders/available')
	@Auth()
	@ApiOperation({ summary: 'Get list of available orders' })
	@HttpCode(HttpStatus.OK)
	@ApiResponse({
		status: 200,
		description: 'Successfully retrieved the list of available orders.',
		schema: {
			example: [
				{
					id: 'clwvoqj5o000211a9g74h3z7r',
					clientId: 'clwvopxid000111a9h3e4b3y4',
					regionId: 'clwtrjfuq000411a9f1a2g8f1',
					vehicleTypeId: 'clwtrgq5n000011a9d7z7f9c3',
					status: 'NEW',
					price: 65.0,
					trip_datetime: '2025-11-05T10:00:00.000Z',
					passenger_count: 2,
					routeWaypoints: [
						{ lat: 49.8015, lng: 23.956, address: 'Lviv Airport (LWO)' },
						{ lat: 49.842, lng: 24.032, address: 'Rynok Square, Lviv' }
					],
					priceForDriver: 52.0
				}
			]
		}
	})
	@ApiResponse({
		status: 403,
		description: 'Access denied (profile not approved OR no approved cars)',
		schema: {
			example: {
				statusCode: 403,
				message: 'Your profile has not yet been approved by the administrator.',
				error: 'Forbidden'
			}
		}
	})
	async getAvailableOrders(@CurrentDriver('id') driverId: string) {
		return this.driverService.getAvailableOrders(driverId)
	}

	@Patch('orders/:id/accept')
	@Auth()
	@ApiOperation({ summary: 'Accept order' })
	@ApiParam({ name: 'id', description: 'Order ID' })
	@HttpCode(HttpStatus.OK)
	@ApiResponse({
		status: 200,
		description: 'Order successfully accepted',
		schema: {
			example: { id: 'clwvoqj5o000211a9g74h3z7r', status: 'ACCEPTED' /* ... */ }
		}
	})
	@ApiResponse({
		status: 403,
		description: 'Denied (profile not approved OR no approved cars)',
		schema: {
			example: {
				statusCode: 403,
				message: 'You have no approved cars.',
				error: 'Forbidden'
			}
		}
	})
	@ApiResponse({
		status: 400,
		description: 'Order is no longer available (e.g., already accepted)',
		schema: {
			example: {
				statusCode: 400,
				message: 'Order is not available.',
				error: 'Bad Request'
			}
		}
	})
	async acceptOrder(
		@CurrentDriver('id') driverId: string,
		@Param('id') orderId: string
	) {
		return this.driverService.acceptOrder(driverId, orderId)
	}

	@Get('orders/current')
	@Auth()
	@ApiOperation({ summary: 'Get your current (active) orders' })
	@HttpCode(HttpStatus.OK)
	@ApiResponse({
		status: 200,
		description: 'List of active orders (ACCEPTED, ON_THE_WAY, ARRIVED)',
		schema: {
			example: [
				{
					id: 'clwvoqj5o000211a9g74h3z7r',
					status: 'ACCEPTED',
					price: 95.0,
					trip_datetime: '2025-11-04T16:00:00.000Z',
					priceForDriver: 76.0
				}
			]
		}
	})
	@ApiResponse({
		status: 403,
		description: 'Profile not approved (see /available example)'
	})
	async getMyCurrentOrders(@CurrentDriver('id') driverId: string) {
		return this.driverService.getMyCurrentOrders(driverId)
	}

	@Get('orders/completed')
	@Auth()
	@ApiOperation({ summary: 'Get the history of your completed orders' })
	@HttpCode(HttpStatus.OK)
	@ApiResponse({
		status: 200,
		description: 'List of completed orders (COMPLETED)',
		schema: {
			example: [
				{
					id: 'clwvoqj5o000211a9g74h3z7r',
					status: 'COMPLETED',
					price: 120.5,
					trip_datetime: '2025-10-30T14:30:00.000Z',
					priceForDriver: 102.42
				}
			]
		}
	})
	@ApiResponse({
		status: 403,
		description: 'Profile not approved (see /available example)'
	})
	async getMyCompletedOrders(@CurrentDriver('id') driverId: string) {
		return this.driverService.getMyCompletedOrders(driverId)
	}

	@Patch('orders/:id/start')
	@Auth()
	@ApiOperation({ summary: 'Start order execution' })
	@ApiParam({ name: 'id', description: 'Order ID' })
	@HttpCode(HttpStatus.OK)
	async startOrder(
		@CurrentDriver('id') driverId: string,
		@Param('id') orderId: string
	) {
		return this.driverService.startOrder(driverId, orderId)
	}

	@Patch('orders/:id/complete')
	@Auth()
	@ApiOperation({ summary: 'Finish order' })
	@ApiParam({ name: 'id', description: 'Order ID' })
	@HttpCode(HttpStatus.OK)
	async completeOrder(
		@CurrentDriver('id') driverId: string,
		@Param('id') orderId: string
	) {
		return this.driverService.completeOrder(driverId, orderId)
	}

	@Get('earnings')
	@Auth()
	@ApiOperation({ summary: 'Get statistics of your earnings' })
	@HttpCode(HttpStatus.OK)
	@ApiResponse({
		status: 200,
		description: 'Overall earnings statistics',
		schema: {
			example: {
				totalEarnings: 102.42,
				completedOrdersCount: 1
			}
		}
	})
	@ApiResponse({
		status: 403,
		description: 'Profile not approved (see /available example)'
	})
	async getMyEarnings(@CurrentDriver('id') driverId: string) {
		return this.driverService.getMyEarnings(driverId)
	}

	@Patch('orders/:id/on-the-way')
	@ApiOperation({ summary: 'Mark that you are on the way to the client' })
	async setOnTheWay(
		@CurrentDriver('id') driverId: string,
		@Param('id') orderId: string
	) {
		return this.driverService.updateOrderStatus(driverId, orderId, 'ON_THE_WAY')
	}

	@Patch('orders/:id/arrived')
	@ApiOperation({
		summary: 'Mark that you have arrived at the pickup location'
	})
	async setArrived(
		@CurrentDriver('id') driverId: string,
		@Param('id') orderId: string
	) {
		return this.driverService.updateOrderStatus(driverId, orderId, 'ARRIVED')
	}

	@Post('orders/:id/no-show')
	@UseInterceptors(
		FileInterceptor('photo', {
			storage: multerStorageOptions('proofs'),
			fileFilter: imageFileFilter,
			limits: { fileSize: 1024 * 1024 * 5 }
		})
	)
	@ApiOperation({ summary: 'Report that the client did not show up' })
	async reportClientNoShow(
		@CurrentDriver('id') driverId: string,
		@Param('id') orderId: string,
		@UploadedFile() photo: Express.Multer.File
	) {
		if (!photo) {
			throw new BadRequestException('A photo proof is required.')
		}

		return this.driverService.reportClientNoShow(driverId, orderId, photo.path)
	}
}
