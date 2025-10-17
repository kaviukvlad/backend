import { Injectable } from '@nestjs/common'
import { hash } from 'argon2'
import { UserRole } from 'prisma/generated/client'
import { RegisterDto } from 'src/auth/dto/register.dto'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class UserService {
	constructor(private prisma: PrismaService) {}

	getById(id: string) {
		return this.prisma.user.findUnique({
			where: {
				id
			},
			include: { driverProfile: true, adminProfile: true, clientProfile: true }
		})
	}

	getByEmail(email: string) {
		return this.prisma.user.findUnique({
			where: {
				email
			},
			include: { driverProfile: true, adminProfile: true, clientProfile: true }
		})
	}

	async create(dto: RegisterDto) {
		const user = {
			email: dto.email,
			password: await hash(dto.password),
			phone: dto.phone,
			role: dto.role
		}

		return this.prisma.user.create({
			data: {
				...user,
				driverProfile:
					dto.role === UserRole.DRIVER
						? {
								create: {
									name: dto.name,
									regionId: dto.regionId
								}
							}
						: undefined,
				adminProfile:
					dto.role === UserRole.ADMIN || dto.role === UserRole.SUPERADMIN
						? { create: { name: dto.name } }
						: undefined,
				clientProfile:
					dto.role === UserRole.USER
						? { create: { name: dto.name } }
						: undefined
			}
		})
	}
}
