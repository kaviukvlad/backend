import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager'
import { Inject, Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PassportStrategy } from '@nestjs/passport'

import { ExtractJwt, Strategy } from 'passport-jwt'
import { UserService } from 'src/user/user.service'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor(
		private configService: ConfigService,
		private userSerrvice: UserService,
		@Inject(CACHE_MANAGER) private cacheManager: Cache
	) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false,
			secretOrKey: configService.get('JWT_SECRET')
		})
	}

	async validate({ id }: { id: string }) {
		console.log('JwtStrategy.validate id =', id)
		const cacheKey = `user_${id}`

		const cachedUser = await this.cacheManager.get(cacheKey)
		if (cachedUser) {
			return cachedUser
		}
		console.log('cachedUser =', cachedUser)

		const user = await this.userSerrvice.getById(id)
		console.log('user from db =', user)
		await this.cacheManager.set(cacheKey, user, 900)

		return user
	}
}
