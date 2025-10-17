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
		ClientModule
	]
})
export class AppModule {}
