import {
	AddCounterpartyData,
	Counterparty,
	Files
} from 'contexts/Counterparties/Counterparties.types'

interface AdditionalContact {
	fullName: string
	person: string
	phone: string
}

export interface FormFields {
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
	additionalContacts: AdditionalContact[]
}

export interface CounterpartyIndividualFormProps {
	counterparty?: Counterparty
	addCounterpartyData?: AddCounterpartyData | Counterparty
	addingNew?: boolean
	files?: Files
	focusedFields: string[]
	onFieldFocus: (fieldName: string) => void
	onFieldBlur: (fieldName: string) => void
	onUpdate: (fields: Partial<Counterparty>) => void
	onFileAdd: (file: File, group: string) => void
	onFileRemove: (id: string) => void
}
