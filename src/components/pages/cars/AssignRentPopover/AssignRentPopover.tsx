import { PopoverProps } from '@mui/material/Popover'
import { useForm, FormProvider } from 'react-hook-form'

import { Autocomplete, TextField, Select, Button, InputMask } from 'ui'
import { SearchField } from 'components/common'

import * as S from './AssignRentPopover.styled'

import InfoIcon from 'public/icons/info.svg'

export const CarAssignRentPopover = (props: PopoverProps) => {
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
		<S.CarAssignRentPopover
			{...props}
			heading="Назначить аренду"
			anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
			transformOrigin={{ horizontal: 'left', vertical: 'top' }}
		>
			<FormProvider {...useFormProps}>
				<S.Form>
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
				</S.Form>
			</FormProvider>
		</S.CarAssignRentPopover>
	)
}
