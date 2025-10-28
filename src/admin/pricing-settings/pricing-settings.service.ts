import {
	ConflictException,
	Injectable,
	NotFoundException
} from '@nestjs/common'
import { PricingService } from 'src/pricing/pricing.service'
import { PrismaService } from 'src/prisma.service'
import { CreatePricingSettingDto } from './dto/create-pricing-setting.dto'
import { UpdatePricingSettingDto } from './dto/update-setting.dto'

@Injectable()
export class PricingSettingsService {
	constructor(
		private prisma: PrismaService,
		private pricingService: PricingService
	) {}

	async findAll() {
		return this.prisma.pricingSetting.findMany()
	}

	async update(key: string, dto: UpdatePricingSettingDto) {
		try {
			const updatedSetting = await this.prisma.pricingSetting.update({
				where: { key },
				data: {
					value: dto.value,
					description: dto.description
				}
			})

			await this.pricingService.loadPricingSettings()

			return updatedSetting
		} catch (error) {
			throw new NotFoundException(`Setting with key "${key}" not found.`)
		}
	}

	async create(dto: CreatePricingSettingDto) {
		const existingSetting = await this.prisma.pricingSetting.findUnique({
			where: { key: dto.key }
		})

		if (existingSetting) {
			throw new ConflictException(
				`Setting with key "${dto.key}" already exists.`
			)
		}

		const newSetting = await this.prisma.pricingSetting.create({
			data: {
				key: dto.key,
				value: dto.value,
				description: dto.description
			}
		})

		await this.pricingService.loadPricingSettings()

		return newSetting
	}
}
