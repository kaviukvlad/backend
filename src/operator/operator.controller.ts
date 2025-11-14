import {
	Body,
	Controller,
	Get,
	Param,
	Patch,
	Post,
	Query
} from '@nestjs/common'
import {
	ApiBearerAuth,
	ApiOperation,
	ApiQuery,
	ApiResponse,
	ApiTags
} from '@nestjs/swagger'
import type { User } from '@prisma/client'
import { PayoutStatus, UserRole } from '@prisma/client'
import { Auth } from 'src/auth/decorators/auth.decorators'
import { CurrentUser } from 'src/auth/decorators/user.decorators'
import { AssignOrderDto } from './dto/assign-order.dto'
import { RefundOrderDto } from './dto/refund-order.dto'
import { RejectPayoutDto } from './dto/reject-payout.dto'
import { OperatorService } from './operator.service'

@Controller('operator')
@ApiTags('Operator Panel')
@ApiBearerAuth()
@Controller('admin')
@Auth(UserRole.ADMIN, UserRole.OPERATOR)
export class OperatorController {
	constructor(private readonly operatorService: OperatorService) {}

	@Get('drivers')
	@ApiOperation({ summary: 'Get list of all drivers with their earnings' })
	@ApiResponse({
		status: 200,
		description: 'List of drivers and amounts owed.',
		schema: {
			example: [
				{
					id: 'cmhlrrgf0001iumnw7d1jxlro',
					userId: 'cmhlrrgez001gumnwt5p9kwgt',
					name: 'Jean Pierre',
					status: 1,
					user: { email: 'driver.paris@test.com' },
					region: { name: 'Paris' },
					totalEarnings: 120.5,
					completedOrdersCount: 1
				}
			]
		}
	})
	getDriversList() {
		return this.operatorService.getDriversWithEarnings()
	}

	@Post('orders/:id/assign')
	@ApiOperation({ summary: 'Assign order to a driver' })
	assignOrder(@Param('id') orderId: string, @Body() dto: AssignOrderDto) {
		return this.operatorService.assignOrder(orderId, dto)
	}

	@Post('orders/:id/refund')
	@ApiOperation({ summary: 'Refund an order (confirms with password)' })
	refundOrder(
		@Param('id') orderId: string,
		@Body() dto: RefundOrderDto,
		@CurrentUser() operator: User
	) {
		return this.operatorService.refundOrder(orderId, dto, operator)
	}

	@Post('orders/:id/reassign')
	@ApiOperation({
		summary: 'Re-assign an order to a new driver (sends new voucher)'
	})
	reassignOrder(@Param('id') orderId: string, @Body() dto: AssignOrderDto) {
		return this.operatorService.reassignOrder(orderId, dto)
	}

	@Get('payout-requests')
	@ApiOperation({ summary: 'Get list of payout requests (default: PENDING)' })
	@ApiQuery({ name: 'status', enum: PayoutStatus, required: false })
	getPayoutRequests(@Query('status') status?: PayoutStatus) {
		return this.operatorService.getPayoutRequests(status)
	}

	@Patch('payout-requests/:id/approve')
	@ApiOperation({ summary: 'Approve a payout request' })
	approvePayout(
		@Param('id') payoutId: string,
		@CurrentUser('id') operatorUserId: string
	) {
		return this.operatorService.approvePayout(payoutId, operatorUserId)
	}

	@Patch('payout-requests/:id/reject')
	@ApiOperation({ summary: 'Reject a payout request' })
	rejectPayout(
		@Param('id') payoutId: string,
		@CurrentUser('id') operatorUserId: string,
		@Body() dto: RejectPayoutDto
	) {
		return this.operatorService.rejectPayout(payoutId, operatorUserId, dto)
	}
}
