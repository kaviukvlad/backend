import { Controller, Get, Query } from '@nestjs/common'
import {
	ApiBearerAuth,
	ApiOperation,
	ApiQuery,
	ApiResponse,
	ApiTags
} from '@nestjs/swagger'
import { Auth } from 'src/auth/decorators/auth.decorators'

import { UserRole } from '@prisma/client'
import { GeoService } from './geo.service'

@ApiTags('Geo')
@ApiBearerAuth()
@Controller('geo')
@Auth(UserRole.ADMIN, UserRole.DRIVER, UserRole.USER)
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
	@ApiResponse({
		status: 200,
		description: 'List of found addresses.',
		schema: {
			example: [
				{
					description: 'Lviv, Stepana Bandery St, Lviv Oblast, Ukraine',
					place_id: 'ChIJN5X1qf_pE0cRj__T-h1-G_w'
				},
				{
					description: 'Lviv, Stepanivna St, Lviv Oblast, Ukraine',
					place_id: 'ChIJ0Sg1q__pE0cRL-k-I-l-G_A'
				}
			]
		}
	})
	@ApiResponse({
		status: 401,
		description: 'Unauthorized access.',
		schema: {
			example: {
				statusCode: 401,
				message: 'Unauthorized'
			}
		}
	})
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
		description: 'Detailed information about the place.',
		schema: {
			example: {
				address: 'Lviv, Stepana Bandery St, Lviv Oblast, Ukraine',
				name: 'Lviv Polytechnic National University',
				lat: 49.83266,
				lng: 24.01953
			}
		}
	})
	@ApiResponse({
		status: 404,
		description: 'Invalid or incorrect Place ID.',
		schema: {
			example: {
				statusCode: 404,
				message: 'No details were found for this location.',
				error: 'Not Found'
			}
		}
	})
	@ApiResponse({
		status: 401,
		description: 'Unauthorized access.',
		schema: {
			example: {
				statusCode: 401,
				message: 'Unauthorized'
			}
		}
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
	@ApiResponse({
		status: 200,
		description: 'Most relevant address.',
		schema: {
			example: {
				address: 'Stepana Bandery St, 1, Lviv, Lviv Oblast, 79000, Ukraine',
				placeId: 'ChIJN5X1qf_pE0cRj__T-h1-G_w'
			}
		}
	})
	@ApiResponse({
		status: 404,
		description: 'No address found for the given coordinates.',
		schema: {
			example: {
				statusCode: 404,
				message: 'No address found for these coordinates.',
				error: 'Not Found'
			}
		}
	})
	@ApiResponse({
		status: 401,
		description: 'Unauthorized access.',
		schema: {
			example: {
				statusCode: 401,
				message: 'Unauthorized'
			}
		}
	})
	async reverseGeocode(@Query('lat') lat: string, @Query('lng') lng: string) {
		return this.geoService.reverseGeocode(parseFloat(lat), parseFloat(lng))
	}
}
