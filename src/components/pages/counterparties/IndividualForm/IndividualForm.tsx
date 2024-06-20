import { FormProvider, useForm } from 'react-hook-form'
import { Fragment, useEffect, useRef, useState } from 'react'
import Tooltip from '@mui/material/Tooltip'
import Image from 'next/image'
import Link from 'next/link'

import { PhoneChangeModal } from 'components'
import {
	AttachFiles,
	AvatarUpload,
	FormFieldsAccordion,
	Heading,
	SearchField
} from 'components/common'
import {
	Select,
	TextField,
	Button,
	Textarea,
	InputMask,
	CountrySelect,
	DateField
} from 'ui'
import { PhoneField } from 'ui/maskedFields'

import { useFormFieldsUpdate } from 'hooks'
import { CounterpartyIndividualFormProps, FormFields } from './IndividualForm.types'

import * as S from './IndividualForm.styled'

import drivingLicenseHintImg from 'public/img/drivingLicenseHint.png'
import passportHintImg from 'public/img/passportHint.png'
import ProfileIcon from 'public/icons/profile.svg'
import PlusIcon from 'public/icons/plus.svg'
import CheckmarkIcon from 'public/icons/checkmark-green.svg'
import PDFIcon from 'public/icons/pdf.svg'
import LoupeIcon from 'public/icons/loupe.svg'
import InfoIcon from 'public/icons/info.svg'
import TrashIcon from 'public/icons/trash-2.svg'

export const CounterpartyIndividualForm = ({
	addingNew = false,
	addCounterpartyData,
	counterparty,
	files,
	focusedFields,
	onFieldFocus,
	onFieldBlur,
	onUpdate,
	onFileAdd,
	onFileRemove
}: CounterpartyIndividualFormProps) => {
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
	const { reset, resetField, getValues, watch, setValue, setError, clearErrors } =
		useFormProps

	const formRef = useRef<HTMLFormElement>(null)

	const { onFormFocus, onFormBlur } = useFormFieldsUpdate({
		formRef,
		focusedFields,
		onBlur: (fieldName) => {
			if (fieldName.includes('additionalContacts')) {
				onFieldBlur('additionalContacts')
			} else {
				onFieldBlur(fieldName)
			}
		},
		onFocus: (fieldName) => {
			if (fieldName.includes('additionalContacts')) {
				onFieldFocus('additionalContacts')
			} else {
				onFieldFocus(fieldName)
			}
		},
		onUpdate: () => {
			clearErrors()
			onUpdate(getValues())
		}
	})

	const [additionalContactsCount, setAdditionalContactsCount] = useState(1)
	const [isPhoneModalOpen, setPhoneModalOpen] = useState(false)
	const [isDocumentHintModalOpen, setDocumentHintModalOpen] = useState('')

	const errors = addCounterpartyData?.errors
	const maxAdditionalContacts = 3

	const addressEqual = watch('addressEqual')
	const actualAddress = watch('actualAddress')

	const countries = [
		{ label: 'Россия', value: 'rus' },
		{ label: 'Казахстан', value: 'kaz' }
	]

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

	useEffect(() => {
		if (errors) {
			clearErrors()

			Object.entries(errors).forEach(([name, error]) => {
				setError(name, { message: error })
			})
		}
	}, [errors, setError, clearErrors])

	const toggleAddressEqual = () => {
		const toggledValue = addressEqual ? 0 : 1
		const { actualAddress, registrationAddress } = getValues()

		setValue('addressEqual', toggledValue)

		onUpdate({
			addressEqual: toggledValue,
			actualAddress,
			registrationAddress: toggledValue ? actualAddress : registrationAddress
		})
	}

	const onPhoneChange = (phone: string) => {
		clearErrors()
		setValue('phone', phone)
		onUpdate({ ...getValues(), phone })
	}

	const removeAdditionalContact = (deleteIdx: number) => {
		if (deleteIdx !== 0 || (deleteIdx === 0 && additionalContactsCount > 1)) {
			const additionalContacts = getValues('additionalContacts')
			const withDeleteItem = additionalContacts.filter((_, idx) => idx !== deleteIdx)

			resetField('additionalContacts', { defaultValue: [] })
			setValue('additionalContacts', withDeleteItem)
			setAdditionalContactsCount(additionalContactsCount - 1)
		} else {
			setValue('additionalContacts', [
				{
					fullName: '',
					person: '',
					phone: ''
				}
			])
		}
	}

	const documnets = files?.documents.map(({ id, name, url }) => {
		return (
			<S.DocumentItem key={id}>
				<Link href={url} target="_blank" download>
					<PDFIcon />

					<span>{name}</span>

					<LoupeIcon />
				</Link>
			</S.DocumentItem>
		)
	})

	return (
		<FormProvider {...useFormProps}>
			<S.CounterpartyIndividualForm
				ref={formRef}
				onFocus={onFormFocus}
				onBlur={onFormBlur}
			>
				<S.ColumnsList>
					<S.FirstColumn>
						<AvatarUpload
							onlyView={addingNew}
							icon={<ProfileIcon />}
							images={files?.main}
							onFileAdd={onFileAdd}
							onFileRemove={onFileRemove}
						/>

						<FormFieldsAccordion HeadingProps={{ children: 'ФИО' }}>
							<TextField name="lastName" placeholder="Фамилия" />
							<TextField name="firstName" placeholder="Имя" />
							<TextField name="middleName" placeholder="Отчество" />
						</FormFieldsAccordion>

						<FormFieldsAccordion HeadingProps={{ children: 'Контактные данные' }}>
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
							</S.PhoneField>

							<TextField
								name="email"
								type="email"
								label="E-mail"
								placeholder="Укажите электронный адрес"
							/>

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

							{!Boolean(addressEqual) ? (
								<div>
									<Textarea
										name="registrationAddress"
										label="Адрес прописки"
										placeholder="Укажите Ваш текущий адрес проживания"
										disabled={Boolean(addressEqual)}
									/>
								</div>
							) : null}
						</FormFieldsAccordion>
					</S.FirstColumn>

					<S.Divider $orientation="vertical" />

					<S.SecondColumn>
						<FormFieldsAccordion
							HeadingProps={{
								children: (
									<>
										Паспортные данные
										<S.InfoButton
											type="button"
											onClick={(e) => {
												e.stopPropagation()
												setDocumentHintModalOpen('passport')
											}}
										>
											<InfoIcon />
										</S.InfoButton>
									</>
								),
								endAdornment: (
									<AttachFiles
										group="passport"
										heading={['Прикрепление паспортных данных', 'Паспортные данные']}
										type="documents"
										files={files?.passport}
										disabled={addingNew}
										onFileAdd={onFileAdd}
										onFileRemove={onFileRemove}
									/>
								)
							}}
						>
							<CountrySelect
								name="passportCountry"
								label="Страна"
								placeholder="Выберите страну"
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

								<InputMask
									name="passportCode"
									label="Код подразделения"
									placeholder="Укажите код"
									maskProps={{ mask: '99', alwaysShowMask: false }}
								/>
							</S.FieldsRow>
						</FormFieldsAccordion>

						<FormFieldsAccordion
							HeadingProps={{
								children: (
									<>
										Водительское удостоверение
										<S.InfoButton
											type="button"
											onClick={(e) => {
												e.stopPropagation()
												setDocumentHintModalOpen('drivingLicense')
											}}
										>
											<InfoIcon />
										</S.InfoButton>
									</>
								),
								endAdornment: (
									<AttachFiles
										group="drivingLicense"
										heading={[
											'Прикрепление водительского удостоверения',
											'Водительское удостоверение'
										]}
										type="documents"
										files={files?.drivingLicense}
										disabled={addingNew}
										onFileAdd={onFileAdd}
										onFileRemove={onFileRemove}
									/>
								)
							}}
						>
							<CountrySelect
								name="drivingLicenseCountry"
								label="Где выдано"
								placeholder="Выберите страну"
							/>

							<S.FieldsRow>
								<InputMask
									name="drivingLicenseNumber"
									label="Серия и номер"
									maskProps={{ mask: '9999 999 999' }}
								/>
								<DateField name="drivingLicenseExpireDate" label="Действителен до" />
							</S.FieldsRow>
						</FormFieldsAccordion>

						<div>
							<Heading
								variant="body1"
								endAdornment={
									<AttachFiles
										group="kisiart"
										heading={['Прикрепление кисарт ID', 'Кисарт ID']}
										type="documents"
										files={files?.kisiart}
										disabled={addingNew}
										onFileAdd={onFileAdd}
										onFileRemove={onFileRemove}
									/>
								}
							>
								Кисарт ID
							</Heading>

							<InputMask
								name="kisiartId"
								placeholder="Укажите кисиарт ID"
								maskProps={{ mask: '99999999', alwaysShowMask: false }}
							/>
						</div>
					</S.SecondColumn>

					<S.Divider $orientation="vertical" />

					<S.FormColumn>
						<FormFieldsAccordion
							HeadingProps={{
								children: 'Дополнительные контакты'
							}}
						>
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

											<S.RemoveButton
												type="button"
												onClick={() => {
													removeAdditionalContact(idx)
												}}
											>
												<TrashIcon />
											</S.RemoveButton>
										</S.FieldsRow>
									</Fragment>
								)
							})}

							<Button
								type="button"
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
						</FormFieldsAccordion>

						<FormFieldsAccordion
							HeadingProps={{
								children: 'Комментарии'
							}}
						>
							<Textarea name="comment" placeholder="Написать комментарий" />
						</FormFieldsAccordion>

						<FormFieldsAccordion
							HeadingProps={{
								children: 'Привязка профилей'
							}}
						>
							<SearchField name="profile" placeholder="Введите имя" />

							<Button color="green" startIcon={<PlusIcon />} disabled>
								Добавить еще
							</Button>
						</FormFieldsAccordion>

						<FormFieldsAccordion
							disabled={!Boolean(documnets?.length)}
							HeadingProps={{
								children: 'Документы',
								endAdornment: (
									<AttachFiles
										group="documents"
										heading={['Прикрепление документов', 'Документы']}
										type="documents"
										files={files?.documents}
										disabled={addingNew}
										onFileAdd={onFileAdd}
										onFileRemove={onFileRemove}
									/>
								)
							}}
						>
							<S.DocumentsList>{documnets}</S.DocumentsList>
						</FormFieldsAccordion>
					</S.FormColumn>
				</S.ColumnsList>
			</S.CounterpartyIndividualForm>

			<PhoneChangeModal
				open={isPhoneModalOpen}
				onPhoneChange={onPhoneChange}
				onClose={() => {
					setPhoneModalOpen(false)
				}}
			/>

			<S.DocumentHintModal
				open={Boolean(isDocumentHintModalOpen)}
				onClick={() => {
					setDocumentHintModalOpen('')
				}}
			>
				<>
					{isDocumentHintModalOpen === 'passport' ? (
						<Image src={passportHintImg} alt="Подсказка в паспорте" />
					) : null}

					{isDocumentHintModalOpen === 'drivingLicense' ? (
						<Image
							src={drivingLicenseHintImg}
							alt="Подсказка в водительском удостовренеие"
						/>
					) : null}
				</>
			</S.DocumentHintModal>
		</FormProvider>
	)
}
