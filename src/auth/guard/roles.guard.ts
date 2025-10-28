import {
	CanActivate,
	ExecutionContext,
	ForbiddenException,
	Injectable,
	UnauthorizedException
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

		// Якщо ролі не вказані — не обмежуємо доступ цим гардом
		if (!requiredRoles || requiredRoles.length === 0) {
			return true
		}

		const { user } = context.switchToHttp().getRequest<{ user: User }>()

		if (!user) {
			// Аутентифікація повинна бути оброблена JwtAuthGuard; тут можемо кидати 401 або 403.
			// Краще кинути Unauthorized, але залишу Forbidden, якщо хочеш суворішу поведінку:
			throw new UnauthorizedException('User is not authenticated')
		}

		const hasRole = requiredRoles.some(role => user.role === role)

		if (hasRole) {
			return true
		}

		throw new ForbiddenException(
			'You do not have permission to access this resource.'
		)
	}
}
