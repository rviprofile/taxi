/* eslint-disable react-hooks/exhaustive-deps */
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { useQuery } from '@tanstack/react-query'
import { Button, TextField } from 'ui'
import { DateField, PhoneField } from 'ui/maskedFields'
import * as S from './BookingModal.styled'
import allDrivers from 'api/allDrivers/allDrivers'
import BookCarService from 'api/bookCar/bookCar'
import { useEffect, useState } from 'react'
import { buffer } from 'stream/consumers'
import { AxiosResponse } from 'axios'

interface BookingModalProps {
	open: boolean
	carId: number
	onClose: () => void
}

interface FormValues {
	date: string
	sum: string
	fullName: string
	phone: string
	licenseNumber: string
}

interface Driver {
	id: number
	name: string
	phone: string
	license: string
}

export const BookingModal = ({ open, carId, onClose }: BookingModalProps) => {
	const { data } = useQuery({
		queryKey: ['drivers'],
		queryFn: async () => await allDrivers.getDrivers()
	})
	const booking = useQuery({
		queryKey: ['booking car'],
		queryFn: async () =>
			await BookCarService.bookingCar({
				isExist: isDisabled,
				carId: carId,
				date: useFormProps.getValues('date'),
				deposit: useFormProps.getValues('sum'),
				driverId: driverId,
				driverName: useFormProps.getValues('fullName'),
				driverLicense: useFormProps.getValues('licenseNumber'),
				phone: useFormProps.getValues('phone')
			}),
		refetchOnWindowFocus: false,
		enabled: false
	})
	const useFormProps = useForm<FormValues>()

	const { getUnixTime } = require('date-fns')

	const submit: SubmitHandler<FormValues> = () => {
		validateForm() ? booking.refetch() : console.log(validateForm())
		if (booking.status === 'success') {
			onClose()
		} else if (booking.data) {
			setErrorMessage(booking.data)
			console.log(errorMessage)
		} else {
			return
		}
		console.log(booking.status)
	}

	const [hints, setHints] = useState<Driver[]>()
	const [isHintsOpen, setIsHintsOpen] = useState<boolean>(false)
	const [isDisabled, setIsDisabled] = useState<boolean>(false)
	const [dateCorrect, setDateCorrect] = useState<boolean>(true)
	const [sumCorrect, setSumCorrect] = useState<boolean>(true)
	const [driverId, setDriverId] = useState<number>()
	const [errorMessage, setErrorMessage] = useState<AxiosResponse<any, any>>()

	const validateForm = () => {
		if (
			useFormProps.getValues('fullName')?.length > 0 &&
			useFormProps.getValues('phone')?.length > 7 &&
			dateCorrect &&
			sumCorrect
		) {
			return true
		} else {
			return false
		}
	}

	useEffect(() => {
		setHints(
			data?.data.drivers.filter((item: Driver) =>
				item.name
					.replace(/\s/g, '')
					.toLowerCase()
					.includes(
						useFormProps.getValues('fullName')
							? useFormProps.getValues('fullName')!.toLowerCase().replace(/\s/g, '')
							: useFormProps.getValues('fullName')
					)
			)
		)
		setIsDisabled(
			data?.data.drivers.filter(
				(item: Driver) => item.name === useFormProps.getValues('fullName')
			).length > 0
		)
		const inputDate = useFormProps.getValues('date')
		if (inputDate) {
			const inputUnix = getUnixTime(
				new Date(
					Number(`${inputDate[4]}${inputDate[5]}${inputDate[6]}${inputDate[7]}`),
					Number(`${inputDate[2]}${inputDate[3]}`),
					Number(`${inputDate[0]}${inputDate[1]}`)
				)
			)
			const todayUnix = Math.floor(new Date().getTime() / 1000)
			setDateCorrect(inputUnix >= todayUnix)
		}
		const inputSum = useFormProps.getValues('sum')
		if (inputSum) {
			setSumCorrect(Number(inputSum) > 0)
		}
	}, [
		useFormProps.getValues('fullName'),
		useFormProps.getValues('date'),
		useFormProps.getValues('sum')
	])

	return (
		<S.BookingModal heading="Регистрация бронирования" open={open} onClose={onClose}>
			<FormProvider {...useFormProps}>
				<S.Form onSubmit={useFormProps.handleSubmit(submit)}>
					<S.FieldsRow>
						{dateCorrect ? (
							''
						) : (
							<S.DateErrorSign
								src="/icons/errorSign.svg"
								alt="error"
								title="Текст подсказки"
							/>
						)}
						<DateField label="Дата" name="date" />
						{sumCorrect ? (
							''
						) : (
							<S.SumErrorSign
								src="/icons/errorSign.svg"
								alt="error"
								title="Текст подсказки"
							/>
						)}
						<TextField label="Сумма" placeholder="0000.00" name="sum" />
					</S.FieldsRow>
					<S.Divider />
					<TextField
						label="Водитель ФИО"
						name="fullName"
						value={useFormProps.getValues('fullName')}
						onFocus={() => setIsHintsOpen(true)}
					/>
					{useFormProps.watch('fullName')?.length > 1 &&
					isHintsOpen &&
					hints &&
					hints!.length > 0 &&
					hints[0].name !== useFormProps.getValues('fullName') ? (
						<S.HintsBlock>
							{hints
								? hints.slice(0, 10).map((item: Driver) => {
										return (
											<S.HintsItem
												onClick={() => {
													useFormProps.setValue('fullName', item.name)
													useFormProps.setValue('phone', item.phone)
													useFormProps.setValue('licenseNumber', item.license)
													setDriverId(item.id)
												}}
												key={item.id + item.name}
											>
												{item.name}
											</S.HintsItem>
										)
								  })
								: ''}
							{hints && hints.length > 10 ? <p>Eще {hints!.length - 10}</p> : ''}
						</S.HintsBlock>
					) : (
						''
					)}
					<S.FieldsRow>
						<PhoneField
							label="Телефон"
							name="phone"
							disabled={isDisabled}
							value={useFormProps.watch('phone')}
						/>
						<TextField
							label="Номер прав"
							placeholder="1234567890123"
							name="licenseNumber"
							disabled={isDisabled}
						/>
					</S.FieldsRow>
					{useFormProps.watch() ? (
						<Button color={validateForm() ? 'green' : 'disable'} fullWidth type="submit">
							Забронировать
						</Button>
					) : (
						<Button color={validateForm() ? 'green' : 'disable'} fullWidth type="submit">
							Забронировать
						</Button>
					)}
				</S.Form>
			</FormProvider>
		</S.BookingModal>
	)
}
