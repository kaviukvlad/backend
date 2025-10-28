import { Injectable, InternalServerErrorException } from '@nestjs/common'
import { PricingService } from 'src/pricing/pricing.service'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class CommissionService {
	constructor(
		private prisma: PrismaService,
		private pricingService: PricingService
	) {}

	async calculateDriverEarnings(
		orderPrice: number,
		driverId: string
	): Promise<number> {
		const driverProfile = await this.prisma.driverProfile.findUnique({
			where: { id: driverId },
			select: { commissionPercent: true }
		})

		if (!driverProfile) {
			throw new InternalServerErrorException(
				`Driver profile for ID ${driverId} not found.`
			)
		}

		let commissionToApply: number

		if (driverProfile.commissionPercent !== null) {
			commissionToApply = driverProfile.commissionPercent.toNumber()
		} else {
			const globalCommission = this.pricingService.getSetting(
				'DEFAULT_DRIVER_COMMISSION_PERCENT'
			)

			if (globalCommission === undefined) {
				throw new InternalServerErrorException(
					'Default driver commission is not set in PricingSettings.'
				)
			}
			commissionToApply = globalCommission
		}

		const earnings = orderPrice * (1 - commissionToApply / 100)

		return parseFloat(earnings.toFixed(2))
	}
}
