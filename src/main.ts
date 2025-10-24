import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import compression from 'compression'
import cookieParser from 'cookie-parser'
import { json } from 'express'
import helmet from 'helmet'
import { join } from 'path'
import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(AppModule)

	app.use(
		json({
			verify: (req: any, res, buf) => {
				req.rawBody = buf
			}
		})
	)

	app.use(helmet())
	app.use(compression())

	app.setGlobalPrefix('api')
	app.use(cookieParser())
	app.enableCors({
		origin: ['http://localhost:3000'],
		credentials: true,
		exposedHeaders: 'set-cookie'
	})

	app.useStaticAssets(join(__dirname, '..', 'uploads'), {
		prefix: '/uploads/'
	})

	const config = new DocumentBuilder()
		.setTitle('TakeTransfer API')
		.setDescription('')
		.setVersion('1.0')
		.addBearerAuth()
		.addApiKey(
			{ type: 'apiKey', name: 'x-api-key', in: 'header' },
			'ApiKeyAuth'
		)
		.build()

	const document = SwaggerModule.createDocument(app, config)
	SwaggerModule.setup('api/docs', app, document, {
		swaggerOptions: {
			persistAuthorization: true
		}
	})

	await app.listen(3000)
}
bootstrap()
