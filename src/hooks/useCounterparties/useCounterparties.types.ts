import { CounterpartyStatus } from 'types/counterparty'

export interface CounterpartiesItem {
	id: string
	firstName: string
	middleName: string
	lastName: string
	status: CounterpartyStatus
	phone: string
	email: string
	comment: string
	drivingLicenseNumber: string
	drivingLicenseCountry: string
	drivingLicenseExpireDate: string
	passportSeries: string
	passportNumber: string
	passportCountry: string
	passportGive: string
	passportExpireDate: string
	passportCode: string
	registrationAddress: string
	actualAddress: string
	addressEqual: string
	kisiartId: string
}

export interface CounterpartiesData {
	list: CounterpartiesItem[]
	page: number
	pageTotal: number
	total: string
}
