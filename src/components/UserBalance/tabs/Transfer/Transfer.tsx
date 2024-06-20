import { FormProvider, useForm } from 'react-hook-form'

import { TextField, Select, Button } from 'ui'

import * as S from './Transfer.styled'

import ArrowRightIcon from 'public/icons/arrow-right.svg'

export const TransferTab = () => {
	const useFormProps = useForm()

	const balances = [
		{ label: 'Депозит', value: 'deposit' },
		{ label: 'Внутренний', value: 'internal' },
		{ label: 'Яндекс', value: 'yandex' }
	]

	return (
		<FormProvider {...useFormProps}>
			<S.TransferTab>
				<TextField
					type="number"
					name="depositAmount"
					placeholder="Введите сумму"
				/>

				<S.FieldsRow>
					<Select
						name="balanceFrom"
						defaultValue="deposit"
						placeholder="Откуда"
						options={balances}
					/>

					<S.ArrowIcon>
						<ArrowRightIcon />
					</S.ArrowIcon>

					<Select
						name="balanceTo"
						defaultValue="internal"
						placeholder="Куда"
						options={balances}
					/>
				</S.FieldsRow>

				<Button color="green" fullWidth>
					Перевести
				</Button>
			</S.TransferTab>
		</FormProvider>
	)
}
