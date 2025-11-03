import { PrismaClient } from '@prisma/client'
import { hash } from 'argon2'

const prisma = new PrismaClient()

async function main() {
	console.log('Створення регіонів...')
	const parisRegion = await prisma.region.create({
		data: {
			name: 'Paris',
			type: 'CITY',
			latitude: 48.8566,
			longitude: 2.3522,
			radiusKm: 100
		}
	})

	const lvivRegion = await prisma.region.create({
		data: {
			name: 'Lviv',
			type: 'CITY',
			latitude: 49.8397,
			longitude: 24.0297,
			radiusKm: 50
		}
	})

	console.log('Створення класів авто...')
	const economyClass = await prisma.vehicleType.create({
		data: {
			code: 'ECONOMY',
			max_passengers: 4,
			max_luggage_standard: 2,
			max_luggage_small: 2
		}
	})

	const businessClass = await prisma.vehicleType.create({
		data: {
			code: 'BUSINESS',
			max_passengers: 4,
			max_luggage_standard: 2,
			max_luggage_small: 3
		}
	})

	const busClass = await prisma.vehicleType.create({
		data: {
			code: 'BUS',
			max_passengers: 50,
			max_luggage_standard: 50,
			max_luggage_small: 50
		}
	})

	const anyClass = await prisma.vehicleType.create({
		data: {
			code: 'ANY',
			max_passengers: 0,
			max_luggage_standard: 0,
			max_luggage_small: 0
		}
	})

	console.log('Створення додаткових опцій...')
	await prisma.orderOption.createMany({
		data: [
			{
				code: 'CHILD_SEAT_0_3',
				name: 'Дитяче крісло (0-3 роки)',
				description: 'Безкоштовне дитяче крісло',
				price: 0.0,
				isActive: true
			},
			{
				code: 'MINERAL_WATER',
				name: 'Мінеральна вода',
				description: 'Пляшка води 0.5л',
				price: 5.0,
				isActive: true
			}
		]
	})

	console.log('Створення налаштувань цін...')
	await prisma.pricingSetting.createMany({
		data: [
			{
				key: 'DEFAULT_DRIVER_COMMISSION_PERCENT',
				value: 20.0,
				description: 'Глобальна комісія водія за замовчуванням (%)'
			},
			{
				key: 'NIGHT_SURCHARGE_MULTIPLIER',
				value: 1.3,
				description: 'Множник для нічного тарифу (22:00 - 06:00)'
			}
		]
	})

	const password = 'password123'
	const hashedPassword = await hash(password)

	console.log('Створення Адміністратора...')
	await prisma.user.create({
		data: {
			email: 'admin@test.com',
			password: hashedPassword,
			role: 'ADMIN',
			adminProfile: {
				create: {
					name: 'Admin'
				}
			}
		}
	})

	console.log('Створення Оператора (універсального водія)...')
	await prisma.$transaction(async tx => {
		const operatorUser = await tx.user.create({
			data: {
				email: 'operator@test.com',
				password: hashedPassword,
				role: 'OPERATOR',
				operatorProfile: {
					create: {
						name: 'Operator'
					}
				},
				driverProfile: {
					create: {
						name: 'Operator (Driver)',
						status: 1,
						regionId: parisRegion.id
					}
				}
			}
		})
	})

	console.log('Створення Водія (Париж, Економ)...')
	await prisma.$transaction(async tx => {
		const driverUser = await tx.user.create({
			data: {
				email: 'driver-paris@test.com',
				password: hashedPassword,
				role: 'DRIVER',
				driverProfile: {
					create: {
						name: 'Jean Pierre',
						status: 1,
						commissionPercent: 15.0,
						regionId: parisRegion.id,
						allowedVehicleTypes: {
							connect: [{ id: economyClass.id }]
						}
					}
				}
			}
		})
	})

	console.log('Створення Водія (Львів, Бізнес)...')
	await prisma.$transaction(async tx => {
		const driverUser = await tx.user.create({
			data: {
				email: 'driver-lviv@test.com',
				password: hashedPassword,
				role: 'DRIVER',
				driverProfile: {
					create: {
						name: 'Богдан',
						status: 1,
						regionId: lvivRegion.id,
						allowedVehicleTypes: {
							connect: [{ id: businessClass.id }]
						}
					}
				}
			}
		})
	})

	console.log('Створення Клієнта...')
	await prisma.user.create({
		data: {
			email: 'client@test.com',
			password: hashedPassword,
			role: 'USER',
			clientProfile: {
				create: {
					name: 'John Doe'
				}
			}
		}
	})

	console.log('Створення тарифів...')
	await prisma.tariff.createMany({
		data: [
			{
				regionId: parisRegion.id,
				vehicleTypeId: economyClass.id,
				baseFare: 20.0,
				pricePerKm: 1.8,
				pricePerMinute: 0.5,
				minimumFare: 35.0,
				isActive: true
			},
			{
				regionId: parisRegion.id,
				vehicleTypeId: businessClass.id,
				baseFare: 40.0,
				pricePerKm: 3.0,
				pricePerMinute: 1.0,
				minimumFare: 60.0,
				isActive: true
			},
			{
				regionId: lvivRegion.id,
				vehicleTypeId: businessClass.id,
				baseFare: 150.0,
				pricePerKm: 25.0,
				pricePerMinute: 5.0,
				minimumFare: 300.0,
				isActive: true
			}
		]
	})

	console.log('✅ Наповнення бази даних успішно завершено!')
}

main()
	.catch(e => {
		console.error(e)
		process.exit(1)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
