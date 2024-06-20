import { Block } from 'contexts/WS/ws.types'
import { UploadedFile } from 'types/common'

interface AdditionalContact {
	fullName: string
	person: string
	phone: string
}

export interface Counterparty {
	firstName: string
	middleName: string
	lastName: string
	phone: string
	email: string
	comment: string
	drivingLicenseNumber: string
	drivingLicenseExpireDate: string
	passportSeries: string
	passportNumber: string
	passportCountry: string
	passportGive: string
	passportExpireDate: string
	passportCode: string
	registrationAddress: string
	actualAddress: string
	addressEqual: 0 | 1
	kisiartId: string
	files: UploadedFile[]
	additionalContacts: AdditionalContact[]
}

export interface Files {
	main: UploadedFile[]
	passport: UploadedFile[]
	drivingLicense: UploadedFile[]
	kisiart: UploadedFile[]
	documents: UploadedFile[]
}

export interface CounterpartiesContextProps {
	counterparty?: Counterparty
	files: Files
	isCounterpartyLoading: boolean
	focusedFields: string[]
	update: (data: Partial<Counterparty>) => void
	focus: (fieldName: string) => void
	blur: (fieldName: string) => void
	addFile: (file: File, group: string) => void
	removeFile: (fileId: string) => void
}
