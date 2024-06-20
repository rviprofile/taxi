import { FormProvider, useForm } from 'react-hook-form'

import { Button, TextField } from 'ui'
import { DateField, PhoneField } from 'ui/maskedFields'

import * as S from './BookingModal.styled'

interface BookingModalProps {
	open: boolean
	onClose: () => void
}

export const BookingModal = ({ open, onClose }: BookingModalProps) => {
	const useFormProps = useForm()

	return (
		<S.BookingModal heading="Регистрация бронирования" open={open} onClose={onClose}>
			<FormProvider {...useFormProps}>
				<S.Form>
					<S.FieldsRow>
						<DateField name="date" label="Дата" />
						<TextField name="sum" label="Сумма" placeholder="0000.00" />
					</S.FieldsRow>

					<S.Divider />

					<TextField name="driverFullName" label="Водитель ФИО" />

					<S.FieldsRow>
						<PhoneField name="phone" label="Телефон" />
						<TextField
							name="licenseNumber"
							label="Номер прав"
							placeholder="1234567890123"
						/>
					</S.FieldsRow>

					<Button color="green" fullWidth>
						Забронировать
					</Button>
				</S.Form>
			</FormProvider>
		</S.BookingModal>
	)
}
