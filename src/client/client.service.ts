import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { UpdateClientDto } from './dto/update-client.dto'

@Injectable()
export class ClientService {
	constructor(private prisma: PrismaService) {}

	async getProfile(clientId: string) {
		const clientProfile = await this.prisma.clientProfile.findUnique({
			where: { id: clientId },
			include: {
				user: {
					select: {
						email: true,
						phone: true
					}
				}
			}
		})

		if (!clientProfile) {
			throw new NotFoundException('Client profile not found.')
		}
		return clientProfile
	}

	async updateProfile(clientId: string, dto: UpdateClientDto) {
		const clientProfile = await this.getProfile(clientId)

		return this.prisma.$transaction(async tx => {
			const updatedProfile = await tx.clientProfile.update({
				where: { id: clientId },
				data: {
					name: dto.name
				}
			})

			if (dto.phone) {
				await tx.user.update({
					where: { id: clientProfile.userId },
					data: { phone: dto.phone }
				})
			}

			return updatedProfile
		})
	}

	async deleteProfile(clientId: string) {
		const clientProfile = await this.getProfile(clientId)

		await this.prisma.user.delete({
			where: { id: clientProfile.userId }
		})

		return null
	}
}
