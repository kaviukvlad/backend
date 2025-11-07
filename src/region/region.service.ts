import { Injectable, NotFoundException } from '@nestjs/common'
import { Prisma, RegionType } from '@prisma/client'
import { PrismaService } from 'src/prisma.service'
import { CreateRegionDto } from './dto/create-region.dto'
import { UpdateRegionDto } from './dto/update-region.dto'

type RegionPayload = Prisma.RegionGetPayload<{
	select: {
		id: true
		name: true
		type: true
		latitude: true
		longitude: true
	}
}>

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

	async updata(id: string, dto: UpdateRegionDto) {
		await this.prisma.region.findUniqueOrThrow({ where: { id } })
		return this.prisma.region.update({
			where: { id },
			data: dto
		})
	}

	async findByCoordinates(lat: number, lng: number) {
		const allRegions: RegionPayload[] = await this.prisma.region.findMany({
			select: {
				id: true,
				name: true,
				type: true,
				latitude: true,
				longitude: true
			},
			where: {
				type: RegionType.CITY,
				latitude: { not: null },
				longitude: { not: null }
			}
		})

		if (allRegions.length === 0) {
			throw new NotFoundException('No regions configured in the system.')
		}

		let closestRegion: RegionPayload | null = null
		let minDistance = Infinity

		for (const region of allRegions) {
			if (region.latitude === null || region.longitude === null) continue

			const R = 6371
			const dLat = (lat - region.latitude) * (Math.PI / 180)
			const dLon = (lng - region.longitude) * (Math.PI / 180)
			const a =
				Math.sin(dLat / 2) * Math.sin(dLat / 2) +
				Math.cos(region.latitude * (Math.PI / 180)) *
					Math.cos(lat * (Math.PI / 180)) *
					Math.sin(dLon / 2) *
					Math.sin(dLon / 2)
			const distance = R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

			if (distance < minDistance) {
				minDistance = distance
				closestRegion = region
			}
		}

		if (!closestRegion) {
			throw new NotFoundException(
				'Could not determine the closest region for the given coordinates.'
			)
		}

		return {
			id: closestRegion.id,
			name: closestRegion.name,
			distanceKm: minDistance
		}
	}
}
