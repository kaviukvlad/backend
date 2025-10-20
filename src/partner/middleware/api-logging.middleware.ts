import { Injectable, NestMiddleware } from '@nestjs/common'
import { NextFunction, Request, Response } from 'express'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class ApiLoggingMiddleware implements NestMiddleware {
	constructor(private prisma: PrismaService) {}

	async use(req: Request, res: Response, next: NextFunction) {
		const originalSend = res.send
		let responseBody: any

		res.send = function (body) {
			responseBody = body
			return originalSend.apply(res, arguments)
		}

		res.on('finish', async () => {
			const { method, originalUrl, body, headers, ip } = req
			const statusCode = res.statusCode
			const apiKey = headers['x-api-key'] as string

			if (!apiKey) {
				return
			}

			const partner = await this.prisma.partner.findUnique({
				where: { apiKey },
				select: { id: true }
			})

			if (!partner) {
				return
			}

			let parsedResponseBody
			try {
				parsedResponseBody = JSON.parse(responseBody)
			} catch (error) {
				parsedResponseBody = 'Non-JSON response'
			}

			await this.prisma.apiLog.create({
				data: {
					partnerId: partner.id,
					requestMethod: method,
					requestUrl: originalUrl,
					requestBody: body,
					responseStatusCode: statusCode,
					responseBody: parsedResponseBody,
					ipAddress: ip
				}
			})
		})

		next()
	}
}
