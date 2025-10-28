import { Controller, Get, Query, Res } from '@nestjs/common'
import type { Response } from 'express'
import { RatingService } from './rating.service'

@Controller('rating')
export class RatingController {
	constructor(private readonly ratingService: RatingService) {}

	@Get('rate')
	async rateOrder(
		@Query('token') token: string,
		@Query('score') score: string,
		@Res() res: Response
	) {
		try {
			await this.ratingService.rateByToken(token, parseInt(score, 10))

			res.redirect('')
		} catch (error) {
			res.redirect('')
		}
	}
}
