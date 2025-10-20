import { Injectable, NotFoundException } from '@nestjs/common'
import * as crypto from 'crypto'
import { PrismaService } from 'src/prisma.service'
import { CreatePartnerDto } from './dto/create-partner.dto'
import { UpdatePartnerDto } from './dto/update-partner.dto'

@Injectable()
export class PartnerService {
	constructor(private prisma: PrismaService) {}

	async create(dto: CreatePartnerDto) {
		const apiKey = crypto.randomBytes(32).toString('hex')

		return this.prisma.partner.create({
			data: {
				name: dto.name,
				contactEmail: dto.contactEmail,
				markupPercent: dto.markupPercent,
				apiKey: apiKey
			}
		})
	}

	async findAll() {
		return this.prisma.partner.findMany({
			orderBy: { createdAt: 'desc' }
		})
	}

	async findOne(id: string) {
		const partner = await this.prisma.partner.findUnique({ where: { id } })
		if (!partner) {
			throw new NotFoundException(`Partner with ID ${id} not found.`)
		}
		return partner
	}

	async update(id: string, dto: UpdatePartnerDto) {
		await this.findOne(id)
		return this.prisma.partner.update({
			where: { id },
			data: dto
		})
	}

	async deactivate(id: string) {
		await this.findOne(id)
		return this.prisma.partner.update({
			where: { id },
			data: { isActive: false }
		})
	}

	async findLogs(partnerId: string) {
		await this.findOne(partnerId)

		return this.prisma.apiLog.findMany({
			where: { partnerId: partnerId },
			orderBy: { requestTimestamp: 'desc' },
			take: 100
		})
	}
}
