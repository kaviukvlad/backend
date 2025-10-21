import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { CreateOrderOptionDto } from './dto/create-option.dto'

@Injectable()
export class OrderOptionsService {
	constructor(private prisma: PrismaService) {}

	create(dto: CreateOrderOptionDto) {
		return this.prisma.orderOption.create({ data: dto })
	}

	findAllActive() {
		return this.prisma.orderOption.findMany({ where: { isActive: true } })
	}

	deactivate(id: string) {
		return this.prisma.orderOption.update({
			where: { id },
			data: { isActive: false }
		})
	}
}
