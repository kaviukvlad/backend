import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { GeoController } from './geo.controller'
import { GeoService } from './geo.service'

@Module({
	imports: [HttpModule],
	controllers: [GeoController],
	providers: [GeoService],
	exports: [GeoService]
})
export class GeoModule {}
