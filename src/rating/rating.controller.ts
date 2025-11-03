import { Controller, Get, Query, Res } from '@nestjs/common'
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger'
import type { Response } from 'express'
import { RatingService } from './rating.service'

@ApiTags('Rating')
@Controller('rating')
export class RatingController {
	constructor(private readonly ratingService: RatingService) {}

	@Get('rate')
	@ApiOperation({
		summary: 'Submit a rating via email link',
		description:
			'This endpoint is intended to be opened from an email link. It processes the rating and redirects the user.'
	})
	@ApiQuery({
		name: 'token',
		description: 'The unique rating token sent to the user_s email.',
		example: 'a1b2c3d4-e5f6-7890-g1h2-i3j4k5l6m7n8'
	})
	@ApiQuery({
		name: 'score',
		description: 'The rating score from 1 to 5.',
		example: 5
	})
	@ApiResponse({
		status: 302,
		description:
			'Redirects the user (e.g., to a "Thank You" page). The redirect happens on both success and failure.'
	})
	async rateOrder(
		@Query('token') token: string,
		@Query('score') score: string,
		@Res() res: Response
	) {
		try {
			await this.ratingService.rateByToken(token, parseInt(score, 10))

			// res.redirect('http://your-frontend.com/thank-you-for-rating');
			res.redirect('')
		} catch (error) {
			// res.redirect('http://your-frontend.com/rating-error');
			res.redirect('')
		}
	}
}
