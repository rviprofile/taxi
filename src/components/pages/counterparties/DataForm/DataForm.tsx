import { FormProvider, useForm } from 'react-hook-form'
import { Fragment, useEffect, useRef, useState } from 'react'
import Tooltip from '@mui/material/Tooltip'

import { PhoneChangeModal } from 'components'
import { AttachFiles, AvatarUpload, Heading } from 'components/common'
import { Select, TextField, Button, Textarea, InputMask } from 'ui'
import { DateField, PhoneField } from 'ui/maskedFields'

import { useCounterparties } from 'contexts'
import { useFormFieldsUpdate } from 'hooks'

import * as S from './DataForm.styled'

import ProfileIcon from 'public/icons/profile.svg'
import PlusIcon from 'public/icons/plus.svg'
import CheckmarkIcon from 'public/icons/checkmark-green.svg'

interface AdditionalContact {
	fullName: string
	person: string
	phone: string
}

interface FormFields {
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

export const CounterpartyDataForm = () => {
	const useFormProps = useForm<FormFields>({
		defaultValues: {
			firstName: '',
			middleName: '',
			lastName: '',
			phone: '',
			email: '',
			comment: '',
			drivingLicenseNumber: '',
			drivingLicenseExpireDate: '',
			passportSeries: '',
			passportNumber: '',
			passportCountry: '',
			passportGive: '',
			passportExpireDate: '',
			passportCode: '',
			registrationAddress: '',
			actualAddress: '',
			addressEqual: 0,
			kisiartId: ''
		}
	})
	const { reset, getValues, watch, setValue } = useFormProps

	const { counterparty, files, focusedFields, update, focus, blur } = useCounterparties()

	const formRef = useRef<HTMLFormElement>(null)
	const [additionalContactsCount, setAdditionalContactsCount] = useState(1)
	const [isPhoneModalOpen, setPhoneModalOpen] = useState(false)

	const { onFormFocus, onFormBlur } = useFormFieldsUpdate({
		formRef,
		focusedFields,
		onBlur: (fieldName) => {
			if (fieldName.includes('additionalContacts')) {
				blur('additionalContacts')
			} else {
				blur(fieldName)
			}
		},
		onFocus: (fieldName) => {
			if (fieldName.includes('additionalContacts')) {
				focus('additionalContacts')
			} else {
				focus(fieldName)
			}
		},
		onUpdate: () => {
			update(getValues())
		}
	})

	const maxAdditionalContacts = 3

	const addressEqual = watch('addressEqual')
	const actualAddress = watch('actualAddress')

	const countries = [
		{ label: 'Россия', value: 'rus' },
		{ label: 'Казахстан', value: 'kaz' }
	]
	console.log(getValues('phone'))
	const persons = [
		{ label: 'Жена', value: 'Жена' },
		{ label: 'Муж', value: 'Муж' },
		{ label: 'Сестра', value: 'Сестра' },
		{ label: 'Брат', value: 'Брат' },
		{ label: 'Родственник', value: 'Родственник' },
		{ label: 'Друг', value: 'Друг' },
		{ label: 'Другое', value: 'Другое' }
	]

	// set counterparty fields
	useEffect(() => {
		if (!counterparty) return

		const { files, ...counterpartyFields } = counterparty

		reset(counterpartyFields)
	}, [counterparty, reset, getValues])

	// set same addresses if they're equal
	useEffect(() => {
		if (!addressEqual) return

		setValue('registrationAddress', actualAddress)
	}, [actualAddress, addressEqual, setValue])

	const toggleAddressEqual = () => {
		const toggledValue = addressEqual ? 0 : 1
		const { actualAddress, registrationAddress } = getValues()

		setValue('addressEqual', toggledValue)
		update({
			addressEqual: toggledValue,
			actualAddress,
			registrationAddress: toggledValue ? actualAddress : registrationAddress
		})
	}

	return (
		<FormProvider {...useFormProps}>
			<S.CounterpartyDataForm ref={formRef} onFocus={onFormFocus} onBlur={onFormBlur}>
				<S.FirstColumn>
					<AvatarUpload icon={<ProfileIcon />} images={files.main} />

					<div>
						<TextField name="firstName" placeholder="Имя" />
						<TextField name="lastName" placeholder="Фамилия" />
						<TextField name="middleName" placeholder="Отчество" />
					</div>

					<div>
						<Heading variant="body1">Контактные данные</Heading>

						<S.PhoneField>
							<PhoneField
								name="phone"
								maskType={2}
								type="tel"
								label="Телефон"
								placeholder="Укажите телефон"
							/>

							<button
								type="button"
								onClick={() => {
									setPhoneModalOpen(true)
								}}
							>
								{getValues('phone').length === 10 ? 'Изменить' : 'Добавить'}
							</button>

							<PhoneChangeModal
								open={isPhoneModalOpen}
								onClose={() => {
									setPhoneModalOpen(false)
								}}
							/>
						</S.PhoneField>
						<TextField
							name="email"
							type="email"
							label="E-mail"
							placeholder="Укажите электронный адрес"
						/>
					</div>

					<S.AdditionalContacts>
						<Heading variant="body1">Дополнительные контакты</Heading>

						{new Array(additionalContactsCount).fill(null).map((_, idx) => {
							return (
								<Fragment key={`additionalContacts-${idx}`}>
									<TextField
										name={`additionalContacts.${idx}.fullName`}
										placeholder="Укажите ФИО родственника/друга/жены"
									/>

									<S.FieldsRow>
										<Select
											name={`additionalContacts.${idx}.person`}
											placeholder="Выбрать"
											options={persons}
										/>

										<PhoneField name={`additionalContacts.${idx}.phone`} maskType={2} />
									</S.FieldsRow>
								</Fragment>
							)
						})}

						<Button
							color="green"
							startIcon={<PlusIcon />}
							onClick={() => {
								if (additionalContactsCount < maxAdditionalContacts) {
									setAdditionalContactsCount(additionalContactsCount + 1)
								}
							}}
							disabled={additionalContactsCount === maxAdditionalContacts}
						>
							Добавить еще
						</Button>
					</S.AdditionalContacts>
				</S.FirstColumn>

				<S.Divider $orientation="vertical" />

				<S.SecondColumn>
					<div>
						<Heading variant="body1">Комментарии</Heading>

						<Textarea name="comment" placeholder="Написать комментарий" />
					</div>

					<div>
						<Heading
							variant="body1"
							endAdornment={
								<AttachFiles
									group="drivingLicense"
									heading={[
										'Прикрепление водительского удостоверения',
										'Водительское удостоверение'
									]}
									type="documents"
									files={files.drivingLicense}
								/>
							}
						>
							Водительское удостоверение
						</Heading>

						<InputMask
							name="drivingLicenseNumber"
							label="Серия и номер"
							maskProps={{ mask: '9 9 9 9   9 9 9 9 9 9' }}
						/>

						<DateField name="drivingLicenseExpireDate" label="Действителен до" />
					</div>

					<div>
						<Heading
							variant="body1"
							endAdornment={
								<AttachFiles
									group="passport"
									heading={['Прикрепление паспортных данных', 'Паспортные данные']}
									type="documents"
									files={files.passport}
								/>
							}
						>
							Паспортные данные
						</Heading>

						<Select
							name="passportCountry"
							label="Где выдано"
							placeholder="Выберите страну"
							options={countries}
						/>

						<S.FieldsRow>
							<InputMask
								name="passportSeries"
								label="Серия"
								placeholder="Укажите серию"
								maskProps={{
									alwaysShowMask: false,
									mask: '99 99'
								}}
							/>

							<InputMask
								name="passportNumber"
								label="Номер"
								placeholder="Укажите номер"
								maskProps={{
									alwaysShowMask: false,
									mask: '999 999'
								}}
							/>
						</S.FieldsRow>

						<TextField
							name="passportGive"
							label="Кем выдан"
							placeholder="Укажите данные"
						/>

						<S.FieldsRow>
							<DateField name="passportExpireDate" label="Дата выдачи" />
							<TextField
								name="passportCode"
								label="Код подразделения"
								placeholder="Укажите код"
							/>
						</S.FieldsRow>
					</div>
				</S.SecondColumn>

				<S.Divider $orientation="vertical" />

				<S.FormColumn>
					<div>
						<Textarea
							name="registrationAddress"
							label="Адрес прописки"
							placeholder="Укажите Ваш текущий адрес проживания"
							disabled={Boolean(addressEqual)}
						/>
					</div>

					<S.ActualAddress>
						<Tooltip
							title={
								addressEqual
									? 'Совпадает с адресом прописки'
									: 'Не совпадает с адресом прописки'
							}
							placement="top"
						>
							<S.AddressEqualButton
								type="button"
								gray={!Boolean(addressEqual)}
								onClick={toggleAddressEqual}
							>
								<CheckmarkIcon />

								<input type="hidden" name="addressEqual" />
							</S.AddressEqualButton>
						</Tooltip>

						<Textarea
							name="actualAddress"
							label="Фактический адрес проживания"
							placeholder="Укажите Ваш текущий адрес проживания"
						/>
					</S.ActualAddress>

					<div>
						<Heading
							variant="body1"
							endAdornment={
								<AttachFiles
									group="kisiart"
									heading={['Прикрепление кисиарт ID', 'Кисиарт ID']}
									type="documents"
									files={files.kisiart}
								/>
							}
						>
							Кисиарт ID
						</Heading>

						<TextField name="kisiartId" placeholder="Укажите кисиарт ID" />
					</div>

					<div>
						<Heading variant="body1">Привязка профилей</Heading>

						{/* <SearchField name="profile" placeholder="Введите имя" /> */}

						<Button color="green" startIcon={<PlusIcon />} disabled>
							Добавить еще
						</Button>
					</div>

					<div>
						<Heading
							variant="body1"
							endAdornment={
								<AttachFiles
									group="documents"
									heading={['Прикрепление документов', 'Документы']}
									type="documents"
									files={files.documents}
								/>
							}
						>
							Документы
						</Heading>
					</div>
				</S.FormColumn>
			</S.CounterpartyDataForm>
		</FormProvider>
	)
}
