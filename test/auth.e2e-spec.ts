import { INestApplication, ValidationPipe } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'
import { UserRole } from '@prisma/client'
import request from 'supertest'
import { AppModule } from './../src/app.module'
import { PrismaService } from './../src/prisma.service'

describe('AuthController (e2e)', () => {
	let app: INestApplication
	let prisma: PrismaService

	beforeAll(async () => {
		const moduleFixture: TestingModule = await Test.createTestingModule({
			imports: [AppModule]
		}).compile()

		app = moduleFixture.createNestApplication()
		prisma = app.get<PrismaService>(PrismaService)

		app.useGlobalPipes(new ValidationPipe())

		await app.init()

		await prisma.user.deleteMany()
	})

	afterAll(async () => {
		await prisma.user.deleteMany()
		await app.close()
	})

	const testEmail = 'e2e-test-user@example.com'
	const testPassword = 'password123'

	describe('POST /auth/register', () => {
		it('should register a new USER successfully (201)', () => {
			return request(app.getHttpServer())
				.post('/auth/register')
				.send({
					email: testEmail,
					password: testPassword,
					name: 'E2E Test User',
					role: UserRole.USER,
					isSubscribedToNewsletter: false
				})
				.expect(201)
				.then(res => {
					expect(res.body).toHaveProperty('user')
					expect(res.body).toHaveProperty('accessToken')
					expect(res.body.user.email).toBe(testEmail)
				})
		})

		it('should fail if email is already taken (400)', () => {
			return request(app.getHttpServer())
				.post('/auth/register')
				.send({
					email: testEmail,
					password: 'anotherpassword',
					name: 'E2E Test User 2',
					role: UserRole.USER
				})
				.expect(400)
		})

		it('should fail if password is too short (400)', () => {
			return request(app.getHttpServer())
				.post('/auth/register')
				.send({
					email: 'another-user@example.com',
					password: '123',
					name: 'Short Password User',
					role: UserRole.USER
				})
				.expect(400)
		})
	})

	describe('POST /auth/login', () => {
		it('should log in the existing user (200)', () => {
			return request(app.getHttpServer())
				.post('/auth/login')
				.send({
					email: testEmail,
					password: testPassword
				})
				.expect(200)
				.then(res => {
					expect(res.body).toHaveProperty('user')
					expect(res.body).toHaveProperty('accessToken')
					expect(res.body.user.email).toBe(testEmail)

					expect(res.headers['set-cookie']).toBeDefined()
				})
		})

		it('should fail with wrong password (401)', () => {
			return request(app.getHttpServer())
				.post('/auth/login')
				.send({
					email: testEmail,
					password: 'wrongpassword'
				})
				.expect(401)
		})
	})
})
