import { Body, Controller, Param, Post } from '@nestjs/common'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import type { User } from 'prisma/generated/client'
import { UserRole } from 'prisma/generated/client'
import { Auth } from 'src/auth/decorators/auth.decorators'
import { CurrentUser } from 'src/auth/decorators/user.decorators'
import { AssignOrderDto } from './dto/assign-order.dto'
import { RefundOrderDto } from './dto/refund-order.dto'
import { OperatorService } from './operator.service'

@Controller('operator')
@ApiTags('Operator Panel')
@ApiBearerAuth()
@Controller('admin')
@Auth(UserRole.ADMIN, UserRole.OPERATOR)
export class OperatorController {
	constructor(private readonly operatorService: OperatorService) {}

	@Post('orders/:id/assign')
	assignOrder(@Param('id') orderId: string, @Body() dto: AssignOrderDto) {
		return this.operatorService.assignOrder(orderId, dto)
	}

	@Post('orders/:id/refund')
	refundOrder(
		@Param('id') orderId: string,
		@Body() dto: RefundOrderDto,
		@CurrentUser() operator: User
	) {
		return this.operatorService.refundOrder(orderId, dto, operator)
	}
}
