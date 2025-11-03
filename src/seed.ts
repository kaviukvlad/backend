import {
	DocumentStatus,
	DocumentType,
	MediaType,
	OrderStatus,
	PrismaClient,
	RegionType,
	UserRole,
	VehicleVerificationStatus
} from '@prisma/client'
import { hash } from 'argon2'

const prisma = new PrismaClient()

async function main() {
	console.log('Початок очищення старої бази даних...')

	await prisma.orderToOption.deleteMany()
	await prisma.orderOption.deleteMany()
	await prisma.ratingToken.deleteMany()
	await prisma.rating.deleteMany()
	await prisma.orderNoShowProof.deleteMany()
	await prisma.order.deleteMany()
	await prisma.apiLog.deleteMany()
	await prisma.partner.deleteMany()
	await prisma.document.deleteMany()
	await prisma.vehicleMedia.deleteMany()
	await prisma.car.deleteMany()
	await prisma.tariff.deleteMany()
	await prisma.distanceBreakpoint.deleteMany()
	await prisma.driverProfile.deleteMany()
	await prisma.clientProfile.deleteMany()
	await prisma.operatorProfile.deleteMany()
	await prisma.adminProfile.deleteMany()
	await prisma.user.deleteMany()
	await prisma.regionTranslation.deleteMany()
	await prisma.region.deleteMany()
	await prisma.vehicleTypeTranslation.deleteMany()
	await prisma.vehicleType.deleteMany()
	await prisma.pricingSetting.deleteMany()
	console.log('✅ Стару базу даних очищено.')

	console.log('Створення системних налаштувань...')
	await prisma.pricingSetting.createMany({
		data: [
			{
				key: 'GLOBAL_MINIMUM_FARE',
				value: 50.0,
				description: 'Глобальна мінімальна вартість (EUR)'
			},
			{
				key: 'NIGHT_SURCHARGE_MULTIPLIER',
				value: 1.3,
				description: 'Коефіцієнт нічної націнки (22:00 - 06:00)'
			},
			{
				key: 'DEFAULT_DRIVER_COMMISSION_PERCENT',
				value: 20.0,
				description: 'Стандартна комісія водія у %'
			}
		]
	})

	const childSeat = await prisma.orderOption.create({
		data: {
			code: 'CHILD_SEAT_0_3',
			name: 'Дитяче крісло (0-3 роки)',
			price: 0.0,
			isActive: true
		}
	})

	const extraBaggage = await prisma.orderOption.create({
		data: {
			code: 'EXTRA_BAGGAGE',
			name: 'Додатковий багаж',
			price: 10.0,
			isActive: true
		}
	})

	console.log('Створення типів авто...')
	const vtStandard = await prisma.vehicleType.create({
		data: {
			code: 'STANDARD',
			max_passengers: 3,
			max_luggage_standard: 2,
			max_luggage_small: 1,
			translations: {
				create: [
					{ locale: 'en', name: 'Standard' },
					{ locale: 'uk', name: 'Стандарт' }
				]
			}
		}
	})

	const vtBusiness = await prisma.vehicleType.create({
		data: {
			code: 'BUSINESS',
			max_passengers: 3,
			max_luggage_standard: 2,
			max_luggage_small: 2,
			translations: {
				create: [
					{ locale: 'en', name: 'Business' },
					{ locale: 'uk', name: 'Бізнес' }
				]
			}
		}
	})

	const vtMinivan = await prisma.vehicleType.create({
		data: {
			code: 'MINIVAN',
			max_passengers: 7,
			max_luggage_standard: 6,
			max_luggage_small: 2,
			translations: {
				create: [
					{ locale: 'en', name: 'Minivan' },
					{ locale: 'uk', name: 'Мінівен' }
				]
			}
		}
	})

	const vtBus = await prisma.vehicleType.create({
		data: {
			code: 'BUS',
			max_passengers: 16,
			max_luggage_standard: 16,
			max_luggage_small: 16,
			translations: {
				create: [
					{ locale: 'en', name: 'Bus' },
					{ locale: 'uk', name: 'Автобус' }
				]
			}
		}
	})
	const allVehicleTypes = [vtStandard, vtBusiness, vtMinivan, vtBus]

	console.log('Створення регіонів...')
	const parisRegion = await prisma.region.create({
		data: {
			name: 'Paris',
			type: RegionType.CITY,
			latitude: 48.8566,
			longitude: 2.3522
		}
	})

	const lvivRegion = await prisma.region.create({
		data: {
			name: 'Lviv',
			type: RegionType.CITY,
			latitude: 49.8397,
			longitude: 24.0297
		}
	})

	console.log('Створення брейкпоінтів...')
	await prisma.distanceBreakpoint.createMany({
		data: [
			{ regionId: parisRegion.id, distanceKm: 10, coefficient: 1.0 },
			{ regionId: parisRegion.id, distanceKm: 25, coefficient: 1.5 },
			{ regionId: parisRegion.id, distanceKm: 50, coefficient: 2.0 },
			{ regionId: parisRegion.id, distanceKm: 100, coefficient: 2.5 },
			{ regionId: lvivRegion.id, distanceKm: 15, coefficient: 1.0 },
			{ regionId: lvivRegion.id, distanceKm: 30, coefficient: 1.4 },
			{ regionId: lvivRegion.id, distanceKm: 60, coefficient: 1.8 }
		]
	})

	console.log('Створення тарифів...')
	const tariffsData = [
		{ regionId: parisRegion.id, vtId: vtStandard.id, price: 1.8 },
		{ regionId: parisRegion.id, vtId: vtBusiness.id, price: 2.5 },
		{ regionId: parisRegion.id, vtId: vtMinivan.id, price: 2.2 },
		{ regionId: parisRegion.id, vtId: vtBus.id, price: 4.0 },

		{ regionId: lvivRegion.id, vtId: vtStandard.id, price: 1.2 },
		{ regionId: lvivRegion.id, vtId: vtBusiness.id, price: 1.9 },
		{ regionId: lvivRegion.id, vtId: vtMinivan.id, price: 1.7 },
		{ regionId: lvivRegion.id, vtId: vtBus.id, price: 3.0 }
	]

	for (const t of tariffsData) {
		await prisma.tariff.create({
			data: {
				regionId: t.regionId,
				vehicleTypeId: t.vtId,
				baseFare: 10.0,
				pricePerKm: t.price,
				minimumFare: 30.0,
				isActive: true
			}
		})
	}

	console.log('Створення користувачів...')
	const hashedPassword = await hash('123456')

	const adminUser = await prisma.user.create({
		data: {
			email: 'admin@test.com',
			password: hashedPassword,
			phone: '+38000000001',
			role: UserRole.ADMIN,
			adminProfile: {
				create: { name: 'Admin Boss' }
			}
		}
	})

	const operatorUser = await prisma.user.create({
		data: {
			email: 'operator@test.com',
			password: hashedPassword,
			phone: '+38000000002',
			role: UserRole.OPERATOR,
			operatorProfile: {
				create: { name: 'Operator Jane' }
			},
			driverProfile: {
				create: {
					name: 'Operator Jane (Driver)',
					status: 1,
					rating: 5.0,
					regionId: parisRegion.id
				}
			}
		}
	})

	await prisma.driverProfile.update({
		where: { userId: operatorUser.id },
		data: {
			allowedVehicleTypes: {
				connect: allVehicleTypes.map(vt => ({ id: vt.id }))
			}
		}
	})

	const clientUser1 = await prisma.user.create({
		data: {
			email: 'client1@test.com',
			password: hashedPassword,
			phone: '+38000000003',
			role: UserRole.USER,
			clientProfile: {
				create: {
					name: 'Client Anton',
					isSubscribedToNewsletter: true
				}
			}
		}
	})

	const clientUser2 = await prisma.user.create({
		data: {
			email: 'client2@test.com',
			password: hashedPassword,
			phone: '+38000000004',
			role: UserRole.USER,
			clientProfile: {
				create: {
					name: 'Client Maria',
					isSubscribedToNewsletter: false
				}
			}
		}
	})

	console.log('Створення водіїв та авто...')

	const driverParis = await prisma.user.create({
		data: {
			email: 'driver.paris@test.com',
			password: hashedPassword,
			phone: '+38000000005',
			role: UserRole.DRIVER,
			driverProfile: {
				create: {
					name: 'Jean Pierre',
					status: 1,
					regionId: parisRegion.id,
					commissionPercent: 15,
					allowedVehicleTypes: {
						connect: [{ id: vtBusiness.id }, { id: vtMinivan.id }]
					},
					cars: {
						create: {
							brand: 'Mercedes-Benz',
							model: 'E-Class',
							year: 2022,
							color: 'Black',
							license_plate: 'FR-123-AB',
							verification_status: VehicleVerificationStatus.APPROVED,
							vehicle_type_id: vtBusiness.id
						}
					}
				}
			}
		}
	})

	const driverLviv = await prisma.user.create({
		data: {
			email: 'driver.lviv@test.com',
			password: hashedPassword,
			phone: '+38000000006',
			role: UserRole.DRIVER,
			driverProfile: {
				create: {
					name: 'Богдан Лис',
					status: 1,
					regionId: lvivRegion.id,
					commissionPercent: 20,
					allowedVehicleTypes: {
						connect: [{ id: vtStandard.id }]
					},
					cars: {
						create: {
							brand: 'Skoda',
							model: 'Octavia',
							year: 2020,
							color: 'White',
							license_plate: 'BC-456-XY',
							verification_status: VehicleVerificationStatus.APPROVED,
							vehicle_type_id: vtStandard.id
						}
					}
				}
			}
		}
	})

	// Водій, що очікує схвалення (Львів)
	const driverPending = await prisma.user.create({
		data: {
			email: 'driver.pending@test.com',
			password: hashedPassword,
			phone: '+38000000007',
			role: UserRole.DRIVER,
			driverProfile: {
				create: {
					name: 'Олег Новий',
					status: 0, // Очікує
					regionId: lvivRegion.id,
					cars: {
						create: {
							brand: 'Renault',
							model: 'Megane',
							year: 2018,
							color: 'Blue',
							license_plate: 'AA-789-BC',
							verification_status: VehicleVerificationStatus.PENDING,
							vehicle_type_id: vtStandard.id,
							media: {
								create: {
									url: '/uploads/vehicles/demo_photo.jpg', // Умовний шлях
									type: MediaType.PHOTO
								}
							}
						}
					},
					documents: {
						create: {
							type: DocumentType.DRIVERS_LICENSE,
							file_url: '/uploads/documents/demo_license.jpg',
							status: DocumentStatus.PENDING
						}
					}
				}
			}
		}
	})

	// --- 5. ЗАМОВЛЕННЯ ---
	console.log('Створення тестових замовлень...')
	const { id: client1Id } = await prisma.clientProfile.findUniqueOrThrow({
		where: { userId: clientUser1.id }
	})
	const { id: client2Id } = await prisma.clientProfile.findUniqueOrThrow({
		where: { userId: clientUser2.id }
	})
	const { id: driverParisId, cars: driverParisCars } =
		await prisma.driverProfile.findUniqueOrThrow({
			where: { userId: driverParis.id },
			include: { cars: true }
		})

	// ЗАМОВЛЕННЯ 1: Нове у Львові (для прийняття водієм lviv)
	await prisma.order.create({
		data: {
			clientId: client1Id,
			customerEmail: clientUser1.email,
			regionId: lvivRegion.id,
			vehicleTypeId: vtStandard.id,
			status: OrderStatus.NEW,
			price: 65.0,
			paymentIntentId: 'pi_test_lviv_new',
			trip_datetime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // через 2 дні
			passenger_count: 2,
			luggage_standard: 1,
			flight_number: 'LO 765',
			routeWaypoints: [
				{ lat: 49.8015, lng: 23.956, address: 'Lviv Airport (LWO)' },
				{ lat: 49.842, lng: 24.032, address: 'Rynok Square, Lviv' }
			],
			distanceInKm: 15.2,
			durationInMinutes: 25,
			selectedOptions: {
				create: {
					optionId: childSeat.id,
					quantity: 1,
					priceAtTimeOfOrder: childSeat.price
				}
			}
		}
	})

	// ЗАМОВЛЕННЯ 2: Завершене у Парижі (для історії)
	await prisma.order.create({
		data: {
			clientId: client2Id,
			customerEmail: clientUser2.email,
			regionId: parisRegion.id,
			vehicleTypeId: vtBusiness.id,
			driverId: driverParisId,
			car_id: driverParisCars[0].id,
			status: OrderStatus.COMPLETED,
			price: 120.5,
			paymentIntentId: 'pi_test_paris_completed',
			trip_datetime: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 дні тому
			passenger_count: 1,
			notes: 'Please be on time, important meeting.',
			routeWaypoints: [
				{
					lat: 49.0097,
					lng: 2.5479,
					address: 'Charles de Gaulle Airport (CDG)'
				},
				{ lat: 48.8584, lng: 2.2945, address: 'Eiffel Tower, Paris' }
			],
			distanceInKm: 35.5,
			durationInMinutes: 45
		}
	})

	// ЗАМОВЛЕННЯ 3: Автобус (очікує ручного підтвердження)
	await prisma.order.create({
		data: {
			clientId: client1Id,
			customerEmail: clientUser1.email,
			regionId: parisRegion.id,
			vehicleTypeId: vtBus.id,
			status: OrderStatus.PENDING_MANUAL_CONFIRMATION,
			price: 0, // Ціна 0, очікує на оператора
			trip_datetime: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // через 5 днів
			passenger_count: 15,
			luggage_standard: 15,
			notes: 'Corporate group transfer to Disneyland.',
			routeWaypoints: [
				{ lat: 48.8738, lng: 2.784, address: 'Disneyland Paris' },
				{ lat: 48.8606, lng: 2.3376, address: 'Louvre Museum, Paris' }
			],
			distanceInKm: 42.0,
			durationInMinutes: 50
		}
	})

	// ЗАМОВЛЕННЯ 4: Прийняте (для перевірки cron-задачі)
	await prisma.order.create({
		data: {
			clientId: client2Id,
			customerEmail: clientUser2.email,
			regionId: parisRegion.id,
			vehicleTypeId: vtBusiness.id,
			driverId: driverParisId,
			car_id: driverParisCars[0].id,
			status: OrderStatus.ACCEPTED, // Водій прийняв, але не виїхав
			price: 95.0,
			paymentIntentId: 'pi_test_paris_accepted',
			trip_datetime: new Date(Date.now() + 25 * 60 * 60 * 1000), // через 25 годин
			passenger_count: 2,
			routeWaypoints: [
				{ lat: 48.853, lng: 2.3499, address: 'Notre Dame Cathedral' },
				{ lat: 48.725, lng: 2.36, address: 'Orly Airport (ORY)' }
			],
			distanceInKm: 18.0,
			durationInMinutes: 30
		}
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
