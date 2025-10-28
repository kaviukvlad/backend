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
	ApiTags
} from '@nestjs/swagger'
import { diskStorage } from 'multer'
import { extname } from 'path'
import { UserRole, type DriverProfile } from 'prisma/generated/client'
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
	@ApiParam({ name: 'id', description: 'Vehicle ID' })
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
		if (!files.photos || !files.video) {
			throw new BadRequestException('Photos and video are required.')
		}
		return this.driverService.uploadCarMedia(driver.id, cardId, files)
	}

	@Post('documents/verification')
	@Auth()
	@Post('documents/verification')
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
	async getAvailableOrders(@CurrentDriver('id') driverId: string) {
		return this.driverService.getAvailableOrders(driverId)
	}

	@Patch('orders/:id/accept')
	@Auth()
	@ApiOperation({ summary: 'Accept order' })
	@ApiParam({ name: 'id', description: 'Order ID' })
	@HttpCode(HttpStatus.OK)
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
	async getMyCurrentOrders(@CurrentDriver('id') driverId: string) {
		return this.driverService.getMyCurrentOrders(driverId)
	}

	@Get('orders/completed')
	@Auth()
	@ApiOperation({ summary: 'Get the history of your completed orders' })
	@HttpCode(HttpStatus.OK)
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
