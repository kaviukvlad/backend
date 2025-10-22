import { Controller, Get, Query } from '@nestjs/common'
import {
	ApiBearerAuth,
	ApiOperation,
	ApiQuery,
	ApiResponse,
	ApiTags
} from '@nestjs/swagger'
import { Auth } from 'src/auth/decorators/auth.decorators'

import { UserRole } from 'prisma/generated/client'
import { GeoService } from './geo.service'

@ApiTags('Geo')
@ApiBearerAuth()
@Controller('geo')
@Auth(UserRole.ADMIN, UserRole.DRIVER, UserRole.USER, UserRole.SUPERADMIN)
export class GeoController {
	constructor(private readonly geoService: GeoService) {}

	@Get('autocomplete')
	@ApiOperation({ summary: 'Search for addresses with autocomplete' })
	@ApiQuery({
		name: 'query',
		description: 'Part of the address to search (min. 3 characters)',
		example: 'Lviv, Step St.'
	})
	@ApiQuery({
		name: 'language',
		description: 'Language code (en)',
		required: false,
		example: 'en'
	})
	@ApiResponse({ status: 200, description: 'List of found addresses.' })
	async autocomplete(
		@Query('query') query: string,
		@Query('language') language: string
	) {
		return this.geoService.autocomplete(query, language)
	}

	@Get('place-details')
	@ApiOperation({ summary: 'Get coordinates and details by Place ID' })
	@ApiQuery({
		name: 'placeId',
		description: 'Unique place ID from Google (obtained from autocomplete)'
	})
	@ApiResponse({
		status: 200,
		description: 'Detailed information about the place.'
	})
	async getPlaceDetails(@Query('placeId') placeId: string) {
		return this.geoService.getPlaceDetails(placeId)
	}

	@Get('reverse-geocode')
	@ApiOperation({ summary: 'Get address by coordinates' })
	@ApiQuery({
		name: 'lat',
		description: 'Latitude',
		example: 49.83266
	})
	@ApiQuery({
		name: 'lng',
		description: 'Longitude',
		example: 24.01953
	})
	@ApiResponse({ status: 200, description: 'Most relevant address.' })
	async reverseGeocode(@Query('lat') lat: string, @Query('lng') lng: string) {
		return this.geoService.reverseGeocode(parseFloat(lat), parseFloat(lng))
	}
}
