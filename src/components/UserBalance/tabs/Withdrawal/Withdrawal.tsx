import { FormProvider, useForm } from 'react-hook-form'

import { TextField, Select, Button } from 'ui'

import * as S from './Withdrawal.styled'

export const WithdrawalTab = () => {
	const useFormProps = useForm()

	const balances = [
		{ label: 'Депозит', value: 'deposit' },
		{ label: 'Внутренний', value: 'internal' },
		{ label: 'Яндекс', value: 'yandex' }
	]

	return (
		<FormProvider {...useFormProps}>
			<S.WithdrawalTab>
				<TextField
					name="depositAmount"
					type="number"
					placeholder="Введите сумму"
				/>
				<Select
					name="balance"
					defaultValue="deposit"
					placeholder="Выберите баланс"
					options={balances}
				/>

				<Button color="green" fullWidth>
					Вывести
				</Button>
			</S.WithdrawalTab>
		</FormProvider>
	)
}
