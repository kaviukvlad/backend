import {
	CanActivate,
	ExecutionContext,
	ForbiddenException,
	Injectable
} from '@nestjs/common'
import { Reflector } from '@nestjs/core'

import { User } from 'prisma/generated/client'
import { ROLES_KEY } from '../decorators/roles.decorator'

@Injectable()
export class RolesGuard implements CanActivate {
	constructor(private reflector: Reflector) {}

	canActivate(context: ExecutionContext): boolean {
		const requiredRoles = this.reflector.getAllAndOverride<string[]>(
			ROLES_KEY,
			[context.getHandler(), context.getClass()]
		)

		if (!requiredRoles) {
			return false
		}

		const { user } = context.switchToHttp().getRequest<{ user: User }>()

		const hasRole = requiredRoles.some(role => user.role === role)

		if (hasRole) {
			return true
		}

		throw new ForbiddenException(
			'You do not have permission to access this resource.'
		)
	}
}
