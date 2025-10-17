import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { CreateRegionDto } from './dto/create-region.dto'

@Injectable()
export class RegionService {
	constructor(private prisma: PrismaService) {}

	async create(dto: CreateRegionDto) {
		return this.prisma.region.create({
			data: {
				name: dto.name,
				type: dto.type,
				parent: dto.parentId
					? {
							connect: {
								id: dto.parentId
							}
						}
					: undefined
			}
		})
	}

	async findAll() {
		return this.prisma.region.findMany({
			where: {
				parent_id: null
			},
			include: {
				translations: true,
				children: {
					include: {
						children: true
					}
				}
			}
		})
	}

	async remove(id: string) {
		await this.prisma.region.findUniqueOrThrow({ where: { id } })

		return this.prisma.region.delete({ where: { id } })
	}
}
