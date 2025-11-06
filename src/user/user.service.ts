import { BadRequestException, Injectable } from '@nestjs/common'
import { Prisma, UserRole } from '@prisma/client'
import { hash } from 'argon2'
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
		try {
			const user = {
				email: dto.email,
				password: await hash(dto.password),
				phone: dto.phone,
				role: dto.role
			}

			return await this.prisma.user.create({
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
						dto.role === UserRole.ADMIN
							? { create: { name: dto.name } }
							: undefined,
					clientProfile:
						dto.role === UserRole.USER
							? {
									create: {
										name: dto.name,
										isSubscribedToNewsletter:
											dto.isSubscribedToNewsletter ?? false
									}
								}
							: undefined
				}
			})
		} catch (error) {
			if (
				error instanceof Prisma.PrismaClientKnownRequestError &&
				error.code === 'P2002'
			) {
				const target = error.meta?.target as string[]
				if (target && target.includes('phone')) {
					throw new BadRequestException(
						'User with this phone number already exists.'
					)
				}

				if (target && target.includes('email')) {
					throw new BadRequestException('User with this email already exists.')
				}
			}

			throw error
		}
	}
}
