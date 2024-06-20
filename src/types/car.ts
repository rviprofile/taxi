export type CarStatus = 'working' | 'awaits' | 'repairs' | 'accident'

export interface Car {
	id: string
	status: CarStatus
	model: string
	notifications: number
	brand: string
	year: string
	licensePlate: string
	ctc: string
	vin: string
	mileage: string
	kpp: string
	owner: string
	color: string
}
