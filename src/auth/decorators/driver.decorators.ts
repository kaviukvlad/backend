import type { DriverProfile, User } from '@/../prisma/generated/client'
import { createParamDecorator, ExecutionContext } from '@nestjs/common'

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
