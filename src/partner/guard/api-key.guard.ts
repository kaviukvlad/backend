import {
	CanActivate,
	ExecutionContext,
	Injectable,
	UnauthorizedException
} from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class ApiKeyGuard implements CanActivate {
	constructor(private prisma: PrismaService) {}

	async canActivate(context: ExecutionContext): Promise<boolean> {
		const request = context.switchToHttp().getRequest()
		const apiKey = request.headers['x-api-key']

		if (!apiKey) {
			throw new UnauthorizedException('API key is missing.')
		}

		const partner = await this.prisma.partner.findUnique({
			where: { apiKey: apiKey as string }
		})

		if (!partner || !partner.isActive) {
			throw new UnauthorizedException('Invalid or inactive API key.')
		}

		request.partner = partner

		return true
	}
}
