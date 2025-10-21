import { HttpService } from '@nestjs/axios'
import {
	BadRequestException,
	Injectable,
	Logger,
	NotFoundException
} from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { firstValueFrom } from 'rxjs'

interface Waypoint {
	lat: number
	lng: number
}

@Injectable()
export class GeoService {
	private readonly apiKey: string
	private readonly logger = new Logger(GeoService.name)

	constructor(
		private readonly httpService: HttpService,
		private readonly configService: ConfigService
	) {
		const key = this.configService.get<string>('GOOGLE_MAPS_API_KEY')
		if (!key) {
			throw new Error('GOOGLE_MAPS_API_KEY is not defined in .env file')
		}
		this.apiKey = key
	}

	async getDistanceAndDuration(waypoints: Waypoint[]) {
		if (waypoints.length < 2) {
			throw new BadRequestException(
				'At least two points are required for the calculation.'
			)
		}
		const origin = `${waypoints[0].lat},${waypoints[0].lng}`
		const destination = `${waypoints[waypoints.length - 1].lat},${waypoints[waypoints.length - 1].lng}`
		const intermediateWaypoints = waypoints
			.slice(1, -1)
			.map(wp => `${wp.lat},${wp.lng}`)
			.join('|')
		const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${destination}&waypoints=${intermediateWaypoints}&key=${this.apiKey}&language=uk`

		try {
			const response = await firstValueFrom(this.httpService.get(url))
			const element = response.data.rows[0].elements[0]

			if (element.status !== 'OK') {
				throw new Error(`Distance calculation error: ${element.status}`)
			}

			return {
				distanceInKm: element.distance.value / 1000,
				durationInMinutes: Math.ceil(element.duration.value / 60)
			}
		} catch (error) {
			this.logger.error('Google Maps API request error', error.message)
			throw new Error('Failed to retrieve data from Google Maps API.')
		}
	}

	async autocomplete(query: string, language: string = 'uk') {
		if (!query || query.length < 3) {
			return []
		}
		const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURI(
			query
		)}&key=${this.apiKey}&language=${language}`

		try {
			const response = await firstValueFrom(this.httpService.get(url))
			return response.data.predictions.map((p: any) => ({
				description: p.description,
				place_id: p.place_id
			}))
		} catch (error) {
			this.logger.error('Failed to retrieve autocomplete data.', error.message)
			return []
		}
	}

	async getPlaceDetails(placeId: string) {
		const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=geometry,formatted_address,name&key=${this.apiKey}&language=uk`

		try {
			const response = await firstValueFrom(this.httpService.get(url))
			const result = response.data.result
			if (!result) {
				throw new NotFoundException('No details were found for this location.')
			}
			return {
				address: result.formatted_address,
				name: result.name,
				lat: result.geometry.location.lat,
				lng: result.geometry.location.lng
			}
		} catch (error) {
			this.logger.error('Unable to retrieve location details', error.message)
			throw new Error('Unable to get location details.')
		}
	}

	async reverseGeocode(lat: number, lng: number) {
		const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${this.apiKey}&language=uk`

		try {
			const response = await firstValueFrom(this.httpService.get(url))
			if (response.data.status !== 'OK' || response.data.results.length === 0) {
				throw new NotFoundException('No address found for these coordinates.')
			}
			const firstResult = response.data.results[0]
			return {
				address: firstResult.formatted_address,
				placeId: firstResult.place_id
			}
		} catch (error) {
			this.logger.error(
				`Reverse geocoding for ${lat},${lng} failed`,
				error.message
			)
			throw new Error('Reverse geocoding failed.')
		}
	}
}
