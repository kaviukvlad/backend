import { applyDecorators, UseGuards } from '@nestjs/common'
import { UserRole } from 'prisma/generated/client'
import { JwtAuthGuard } from '../guard/jwt.guard'
import { RolesGuard } from '../guard/roles.guard'
import { Roles } from './roles.decorator'

export const Auth = (...roles: UserRole[]) => {
	return applyDecorators(Roles(...roles), UseGuards(JwtAuthGuard, RolesGuard))
}
