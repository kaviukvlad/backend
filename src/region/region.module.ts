import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { RegionController } from './region.controller'
import { RegionService } from './region.service'

@Module({
	controllers: [RegionController],
	providers: [RegionService, PrismaService],
	exports: [RegionService]
})
export class RegionModule {}
