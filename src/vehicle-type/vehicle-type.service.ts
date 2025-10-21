import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { CreateVehicleTypeDto } from './dto/create-vehicle-type.dto'

@Injectable()
export class VehicleTypeService {
	constructor(private prisma: PrismaService) {}

	async create(dto: CreateVehicleTypeDto) {
		const { translations, ...vehicleData } = dto

		return this.prisma.vehicleType.create({
			data: {
				...vehicleData,
				translations: {
					createMany: {
						data: translations
					}
				}
			}
		})
	}

	async findAll(locale: string) {
		const fallbackLocale = 'en'
		const vehicleTypes = await this.prisma.vehicleType.findMany({
			include: {
				translations: {
					where: {
						locale: { in: [locale, fallbackLocale] }
					}
				}
			}
		})

		return vehicleTypes.map(vt => {
			const translations =
				vt.translations.find(t => t.locale === locale) || vt.translations[0]

			return {
				id: vt.id,
				code: vt.code,
				name: translations?.name || vt.code,
				max_passengers: vt.max_passengers,
				max_luggage_standard: vt.max_luggage_standard,
				max_luggage_small: vt.max_luggage_small
			}
		})
	}
}
