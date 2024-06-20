import { FormProvider, useForm } from 'react-hook-form'
import { Button, Select, TextField } from 'ui'
import { DateField } from 'ui/maskedFields'

import * as S from './PaymentCreateModal.styled'

interface PaymentCreateModalProps {
	open: boolean
	onClose: () => void
}

export const PaymentCreateModal = ({ open, onClose }: PaymentCreateModalProps) => {
	const useFormProps = useForm()

	const statuses = [
		{ label: 'Статус 1', value: 'status1' },
		{ label: 'Статус 2', value: 'status2' },
		{ label: 'Статус 3', value: 'status3' }
	]

	const accounts = [
		{ label: 'Аккаунт 1', value: 'account1' },
		{ label: 'Аккаунт 2', value: 'account2' },
		{ label: 'Аккаунт 3', value: 'account3' }
	]

	return (
		<S.PaymentCreateModal heading="Создание платежа" open={open} onClose={onClose}>
			<FormProvider {...useFormProps}>
				<S.Form>
					<TextField
						name="counterparty"
						label="Контрагент"
						placeholder="Введите контрагента"
					/>
					<TextField
						name="purpose"
						label="Назначение"
						placeholder="Выберите назначение"
					/>
					<TextField name="category" label="Категория" placeholder="Выберите категорию" />

					<S.FieldsRow>
						<Select
							name="status"
							label="Статус"
							placeholder="Выберите статус"
							options={statuses}
						/>

						<DateField name="date" label="Дата" />
					</S.FieldsRow>

					<S.FieldsRow>
						<Select
							name="accountOutgoing"
							label="Счёт исходящий"
							placeholder="Выберите счёт"
							options={accounts}
						/>

						<Select
							name="accountDestination"
							label="Счёт назначения"
							placeholder="Выберите счёт"
							options={accounts}
						/>
					</S.FieldsRow>

					<TextField name="sum" label="Сумма" placeholder="Введите сумму" />

					<Button color="green" fullWidth>
						Создать
					</Button>
				</S.Form>
			</FormProvider>
		</S.PaymentCreateModal>
	)
}
