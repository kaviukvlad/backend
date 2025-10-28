import { BadRequestException, Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class RatingService {
	constructor(private prisma: PrismaService) {}

	async rateByToken(token: string, score: number) {
		const ratingToken = await this.prisma.ratingToken.findUnique({
			where: { token },
			include: { order: true }
		})

		if (
			!ratingToken ||
			ratingToken.isUsed ||
			ratingToken.expiresAt < new Date()
		) {
			throw new BadRequestException('Invalid or expired rating token.')
		}

		if (!ratingToken.order.driverId || !ratingToken.order.clientId) {
			throw new BadRequestException('Order cannot be rated.')
		}

		return this.prisma.$transaction(async tx => {
			const newRating = await tx.rating.create({
				data: {
					order_id: ratingToken.orderId,
					driverId: ratingToken.order.driverId!,
					clientId: ratingToken.order.clientId!,
					score: score
				}
			})

			await tx.ratingToken.update({
				where: { id: ratingToken.id },
				data: { isUsed: true }
			})

			const driverId = ratingToken.order.driverId!

			const allRatings = await tx.rating.findMany({
				where: { driverId: driverId },
				select: { score: true }
			})

			const totalScore = allRatings.reduce(
				(sum, rating) => sum + rating.score,
				0
			)
			const averageRating = totalScore / allRatings.length

			await tx.driverProfile.update({
				where: { id: driverId },
				data: {
					rating: parseFloat(averageRating.toFixed(2))
				}
			})

			return newRating
		})
	}
}
