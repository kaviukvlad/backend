import { CacheModule } from '@nestjs/cache-manager'
import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { APP_GUARD } from '@nestjs/core'
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler'
import * as redisStore from 'cache-manager-redis-store'
import { AcceptLanguageResolver, I18nJsonLoader, I18nModule } from 'nestjs-i18n'
import * as path from 'path'
import { AdminModule } from './admin/admin.module'
import { AuthModule } from './auth/auth.module'
import { CarModule } from './car/car.module'
import { ClientModule } from './client/client.module'
import { DriverModule } from './driver/driver.module'
import { EmailModule } from './email/email.module'
import { GeoModule } from './geo/geo.module'
import { OrderOptionsModule } from './order-options/order-options.module'
import { OrdersModule } from './orders/orders.module'
import { PartnerModule } from './partner/partner.module'
import { PaymentModule } from './payment/payment.module'
import { PdfModule } from './pdf/pdf.module'
import { PricingModule } from './pricing/pricing.module'
import { RegionModule } from './region/region.module'
import { UserModule } from './user/user.module'
import { VehicleTypeModule } from './vehicle-type/vehicle-type.module'

@Module({
	imports: [
		CacheModule.registerAsync({
			isGlobal: true,
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: async (configService: ConfigService) => ({
				store: redisStore,
				url: configService.get('REDIS_URL'),
				ttl: 600
			})
		}),
		ThrottlerModule.forRoot([
			{
				ttl: 60000,
				limit: 10
			}
		]),
		I18nModule.forRoot({
			fallbackLanguage: 'en',
			loader: I18nJsonLoader,
			loaderOptions: {
				path: path.join(__dirname, '/i18n/'),
				watch: true
			},
			resolvers: [AcceptLanguageResolver]
		}),
		ConfigModule.forRoot({
			isGlobal: true
		}),
		AuthModule,
		DriverModule,
		UserModule,
		AdminModule,
		RegionModule,
		CarModule,
		VehicleTypeModule,
		OrdersModule,
		ClientModule,
		PartnerModule,
		PdfModule,
		EmailModule,
		GeoModule,
		OrderOptionsModule,
		PricingModule,
		PaymentModule
	],
	providers: [
		{
			provide: APP_GUARD,
			useClass: ThrottlerGuard
		}
	]
})
export class AppModule {}
