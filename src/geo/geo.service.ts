import { HttpService } from '@nestjs/axios'
import { BadRequestException, Injectable, Logger } from '@nestjs/common'
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
			throw new BadRequestException(
				'GOOGLE_MAPS_API_KEY is not defined in .env file'
			)
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
			this.logger.error('Google Maps API request error', error)
			throw new Error('Failed to get data from Google Maps API.')
		}
	}
}
