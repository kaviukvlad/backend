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
	UploadedFiles,
	UseInterceptors
} from '@nestjs/common'
import { FileFieldsInterceptor } from '@nestjs/platform-express'
import { diskStorage } from 'multer'
import type { DriverProfile } from 'prisma/generated/client'
import { Auth } from 'src/auth/decorators/auth.decorators'
import { CurrentDriver } from 'src/auth/decorators/driver.decorators'
import { CreateCarDto } from 'src/car/dto/create-car.dto'
import { UpdateCarDto } from 'src/car/dto/update-car.dto'
import { DriverService } from './driver.service'

@Controller('driver')
export class DriverController {
	constructor(private readonly driverService: DriverService) {}

	@Get('profile')
	@Auth()
	async getProfile(@CurrentDriver('id') id: string) {
		return this.driverService.getById(id)
	}

	@Get('cars')
	@Auth()
	async getMyCars(@CurrentDriver() driver: DriverProfile) {
		return this.driverService.getCarsByDriverID(driver.id)
	}

	@Post('cars')
	@HttpCode(201)
	@Auth()
	async addMyCar(
		@CurrentDriver() driver: DriverProfile,
		@Body() dto: CreateCarDto
	) {
		return this.driverService.addCar(driver.id, dto)
	}

	@Patch('cars/:id')
	@HttpCode(200)
	@Auth()
	async updateMyCar(
		@CurrentDriver() driver: DriverProfile,
		@Param('id') carId: string,
		@Body() dto: UpdateCarDto
	) {
		return this.driverService.updateCar(driver.id, carId, dto)
	}

	@Delete('cars/:id')
	@HttpCode(204)
	@Auth()
	async deleteMyCar(
		@CurrentDriver() driver: DriverProfile,
		@Param('id') carId: string
	) {
		return this.driverService.deleteCar(driver.id, carId)
	}

	@Post('cars/:id/media')
	@Auth()
	@UseInterceptors(
		FileFieldsInterceptor(
			[
				{ name: 'photos', maxCount: 6 },
				{ name: 'video', maxCount: 1 }
			],
			{
				storage: diskStorage({
					destination: './uploads/vehicles',
					filename: (req, file, cb) => {
						const uniqueSuffix =
							Date.now() + '-' + Math.round(Math.random() * 1e9)
						const extension = file.originalname.split('.').pop()
						cb(null, `${file.filename}-${uniqueSuffix}.${extension}`)
					}
				})
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
	@UseInterceptors(
		FileFieldsInterceptor(
			[
				{ name: 'driversLicense', maxCount: 1 },
				{ name: 'vehicleRegistration', maxCount: 1 },
				{ name: 'selfieWithLicense', maxCount: 1 }
			],
			{
				storage: diskStorage({
					destination: './uploads/documents',
					filename: (req, file, cb) => {
						const uniqueSuffix =
							Date.now() + '-' + Math.round(Math.random() * 1e9)
						const extension = file.originalname.split('.').pop()
						cb(null, `${file.fieldname}-${uniqueSuffix}.${extension}`)
					}
				})
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
	@HttpCode(HttpStatus.OK)
	async getAvailableOrders(@CurrentDriver('id') driverId: string) {
		return this.driverService.getAvailableOrders(driverId)
	}

	@Patch('orders/:id/accept')
	@Auth()
	@HttpCode(HttpStatus.OK)
	async acceptOrder(
		@CurrentDriver('id') driverId: string,
		@Param('id') orderId: string
	) {
		return this.driverService.acceptOrder(driverId, orderId)
	}
}
