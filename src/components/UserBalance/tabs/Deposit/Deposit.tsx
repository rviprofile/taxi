import { Fragment, ReactNode, useState } from 'react'
import Radio from '@mui/material/Radio'
import { FormProvider, useForm } from 'react-hook-form'

import { CurrencyAmount } from 'components/common'
import { TextField, Select, Button } from 'ui'

import * as S from './Deposit.styled'

import SberPayIcon from 'public/icons/sberpay.svg'
import BankCardIcon from 'public/icons/bank-card.svg'

interface Option {
	name: string
	label: string
	commission: number
	icon: ReactNode
}

export const DepositTab = () => {
	const useFormProps = useForm()
	const { watch } = useFormProps

	const [selectedOption, setSelectedOption] = useState<Option | null>()
	const depositAmountWatch = parseInt(watch('depositAmount'))

	const options = [
		{ name: 'sberpay', label: 'СБП 1%', commission: 1, icon: <SberPayIcon /> },
		{ name: 'bank-card', label: 'Картой 3%', commission: 3, icon: <BankCardIcon /> }
	]

	const balances = [
		{ label: 'Депозит', value: 'deposit' },
		{ label: 'Внутренний', value: 'internal' },
		{ label: 'Яндекс', value: 'yandex' }
	]

	const depositWithCommission =
		depositAmountWatch && selectedOption
			? (depositAmountWatch / 100) * selectedOption.commission + depositAmountWatch
			: null

	const isReadyToDeposit = depositWithCommission && selectedOption

	return (
		<FormProvider {...useFormProps}>
			<S.DepositTab>
				<S.RadioGroup>
					{options.map((option, idx, arr) => {
						const { name, label, icon } = option

						return (
							<Fragment key={name}>
								<S.FormControlLabel
									value={name}
									label={label}
									checked={name === selectedOption?.name}
									onClick={() => {
										setSelectedOption(option)
									}}
									control={<Radio name={name} icon={icon} checkedIcon={icon} />}
								/>

								{arr.length !== idx + 1 ? <S.Divider /> : null}
							</Fragment>
						)
					})}
				</S.RadioGroup>

				<TextField type="number" name="depositAmount" placeholder="Введите сумму" />

				<Select
					name="balance"
					defaultValue="deposit"
					placeholder="Выберите баланс"
					options={balances}
				/>

				{isReadyToDeposit ? (
					<S.Total>
						<span>К оплате:</span>

						<CurrencyAmount value={depositWithCommission} />
					</S.Total>
				) : null}

				<Button color="green" fullWidth disabled={!isReadyToDeposit}>
					Пополнить
				</Button>
			</S.DepositTab>
		</FormProvider>
	)
}
