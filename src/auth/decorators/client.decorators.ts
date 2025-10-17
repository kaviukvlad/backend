import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import type { ClientProfile } from 'prisma/generated/client'

export const CurrentClient = createParamDecorator(
	(data: keyof ClientProfile, ctx: ExecutionContext) => {
		const request = ctx.switchToHttp().getRequest()

		const clientProfile = request.user?.clientProfile

		return data ? clientProfile?.[data] : clientProfile
	}
)
