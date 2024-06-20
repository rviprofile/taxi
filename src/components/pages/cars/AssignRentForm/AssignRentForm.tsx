import { useForm, FormProvider } from 'react-hook-form'

import { Autocomplete, TextField, Select, Button, InputMask } from 'ui'
import { SearchField } from 'components/common'

import * as S from './AssignRentForm.styled'

import InfoIcon from 'public/icons/info.svg'

export const CarAssignRentForm = () => {
	const useFormProps = useForm()

	const terms = [
		{ label: 'Условие 1', value: 'term1' },
		{ label: 'Условие 2', value: 'term2' },
		{ label: 'Условие 3', value: 'term3' }
	]

	const cars = [
		'Hyundai Sonata MB1342CP',
		'Hyundai Sonata ВМ1597СР',
		'Hyundai Sonata MB1342CP',
		'Hyundai Sonata ВМ1597СР'
	]

	return (
		<FormProvider {...useFormProps}>
			<S.CarAssignRentForm>
				<Autocomplete
					name="chooseCar"
					options={cars}
					renderInput={(params) => {
						return (
							<SearchField {...params} name="chooseCar" label="Выберите автомобиль" />
						)
					}}
				/>

				<InputMask
					name="rentDateEnd"
					label="Дата завершения аренды"
					InputProps={{
						endAdornment: <InfoIcon />
					}}
					maskProps={{
						mask: '99.99.9999'
					}}
				/>

				<S.ThreeColumnsRow>
					<Select name="terms" label="Условия" options={terms} />
					<TextField name="amount" label="Сумма" />
					<TextField name="months" label="Месяцы" />
				</S.ThreeColumnsRow>

				<Select name="deposit" label="Депозит" options={terms} />

				<S.TwoColumnsRow>
					<TextField name="writeOffAmount" label="Сумма списания" />
					<TextField name="targetAmount" label="Целевая сумма" />
				</S.TwoColumnsRow>

				<S.TwoColumnsRow>
					<TextField name="depositAmount" label="Вносимая сумма" />
				</S.TwoColumnsRow>

				<Button fullWidth color="green">
					Назначить
				</Button>
			</S.CarAssignRentForm>
		</FormProvider>
	)
}
