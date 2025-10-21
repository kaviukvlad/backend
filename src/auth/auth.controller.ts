import {
	Body,
	Controller,
	HttpCode,
	Post,
	Req,
	Res,
	UnauthorizedException,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import express from 'express'
import { AuthService } from './auth.service'
import { LoginDto } from './dto/login.dto'
import { RegisterDto } from './dto/register.dto'

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@ApiOperation({ summary: 'User login' })
	@ApiResponse({
		status: 200,
		description: 'Successful login. Returns user and accessToken.'
	})
	@ApiResponse({ status: 401, description: 'Invalid password.' })
	@ApiResponse({ status: 404, description: 'User not found.' })
	@Post('login')
	async login(
		@Body() dto: LoginDto,
		@Res({ passthrough: true }) res: express.Response
	) {
		const { refreshToken, ...response } = await this.authService.login(dto)
		this.authService.addRefreshTokenToResponse(res, refreshToken)

		return response
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(201)
	@ApiOperation({ summary: 'New user registration' })
	@ApiResponse({ status: 201, description: 'Successful registration.' })
	@ApiResponse({
		status: 400,
		description: 'A user with this email already exists.'
	})
	@Post('register')
	async register(
		@Body() dto: RegisterDto,
		@Res({ passthrough: true }) res: express.Response
	) {
		const { refreshToken, ...response } = await this.authService.register(dto)
		this.authService.addRefreshTokenToResponse(res, refreshToken)

		return response
	}

	@HttpCode(200)
	@ApiOperation({ summary: 'Refresh access token' })
	@ApiResponse({ status: 200, description: 'Tokens successfully refreshed.' })
	@ApiResponse({
		status: 401,
		description: 'Refresh token not provided or invalid.'
	})
	@Post('login/access-token')
	async getNewTokens(
		@Req() req: express.Request,
		@Res({ passthrough: true }) res: express.Response
	) {
		const refreshTokenFromCookies =
			req.cookies[this.authService.REFRESH_TOKEN_NAME]

		if (!refreshTokenFromCookies) {
			this.authService.removeRefreshTokenFromResponse(res)
			throw new UnauthorizedException('Refresh token not passed')
		}

		const { refreshToken, ...response } = await this.authService.getNewTokens(
			refreshTokenFromCookies
		)

		this.authService.addRefreshTokenToResponse(res, refreshToken)

		return response
	}

	@HttpCode(200)
	@ApiOperation({ summary: 'Logout' })
	@ApiResponse({ status: 200, description: 'Logout successful.' })
	@Post('logout')
	async logout(@Res({ passthrough: true }) res: express.Response) {
		this.authService.removeRefreshTokenFromResponse(res)
		return true
	}
}
