import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
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
import { PdfModule } from './pdf/pdf.module'
import { RegionModule } from './region/region.module'
import { UserModule } from './user/user.module'
import { VehicleTypeModule } from './vehicle-type/vehicle-type.module'
import { PricingModule } from './pricing/pricing.module';

@Module({
	imports: [
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
		PricingModule
	]
})
export class AppModule {}
