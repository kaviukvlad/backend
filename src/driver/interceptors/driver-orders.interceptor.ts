import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager'
import {
	CallHandler,
	ExecutionContext,
	Inject,
	Injectable,
	NestInterceptor
} from '@nestjs/common'
import { Observable, of, tap } from 'rxjs'

@Injectable()
export class DriverOrdersInterceptor implements NestInterceptor {
	constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

	async intercept(
		context: ExecutionContext,
		next: CallHandler
	): Promise<Observable<any>> {
		const request = context.switchToHttp().getRequest()

		const driverProfileId = request.user?.driverProfile?.id

		if (!driverProfileId) {
			return next.handle()
		}

		const cacheKey = `available_orders_${driverProfileId}`

		const cachedData = await this.cacheManager.get(cacheKey)
		if (cachedData) {
			return of(cachedData)
		}

		return next.handle().pipe(
			tap(data => {
				this.cacheManager.set(cacheKey, data, 15000)
			})
		)
	}
}
