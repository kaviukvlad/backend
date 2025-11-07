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

		const mappedTypes = vehicleTypes.map(vt => {
			const translations =
				vt.translations.find(t => t.locale === locale) || vt.translations[0]

			return {
				id: vt.id,
				code: vt.code,
				name: translations?.name || vt.code,
				priceMultiplier: vt.priceMultiplier.toNumber(),
				max_passengers: vt.max_passengers,
				max_luggage_standard: vt.max_luggage_standard,
				max_luggage_small: vt.max_luggage_small
			}
		})

		const standardType = mappedTypes.find(vt => vt.code === 'STANDARD')

		if (standardType) {
			const anyType = {
				...standardType,
				id: 'ANY_VIRTUAL_ID',
				code: 'ANY',
				name: locale === 'uk' ? 'Будь-який' : 'Any',
				priceMultiplier: 1.0
			}

			return [anyType, ...mappedTypes]
		}

		return mappedTypes
	}
}
