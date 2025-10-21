import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AdminModule } from './admin/admin.module'
import { AuthModule } from './auth/auth.module'
import { CarModule } from './car/car.module'
import { ClientModule } from './client/client.module'
import { DriverModule } from './driver/driver.module'
import { OrdersModule } from './orders/orders.module'
import { RegionModule } from './region/region.module'
import { UserModule } from './user/user.module'
import { VehicleTypeModule } from './vehicle-type/vehicle-type.module'
import { PartnerModule } from './partner/partner.module';
import { PdfModule } from './pdf/pdf.module';
import { EmailModule } from './email/email.module';
import { GeoModule } from './geo/geo.module';
import { OrderOptionsModule } from './order-options/order-options.module';

@Module({
	imports: [
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
		OrderOptionsModule
	]
})
export class AppModule {}
