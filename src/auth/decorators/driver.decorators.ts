import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import type { DriverProfile, User } from '@prisma/client'

type UserWithDriverProfile = User & { driverProfile: DriverProfile }

export const CurrentDriver = createParamDecorator(
	(data: keyof DriverProfile, ctx: ExecutionContext) => {
		const request = ctx.switchToHttp().getRequest()
		const user = request.user as UserWithDriverProfile

		if (!user || !user.driverProfile) return null

		const driverProfile = user.driverProfile

		return data ? driverProfile[data] : driverProfile
	}
)
