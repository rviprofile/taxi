import { useFormContext } from 'react-hook-form'

import { CarStatus } from '../CarStatus/CarStatus'
import { Checkbox } from 'ui'
import { ColoredDotText } from 'components/common'

import { CAR_STATUSES } from 'constants/carStatuses'
import { CarStatus as CarStatusType } from 'types/car'

import * as S from './CarStatusSelect.styled'

export const CarStatusSelect = () => {
	const { watch, setValue } = useFormContext()

	const currentValues = watch('carStatuses') as CarStatusType[]
	const allValues = CAR_STATUSES.reduce<CarStatusType[]>(
		(prev, { value }) => [...prev, value],
		[]
	)

	return (
		<S.CarStatusSelect
			multiple
			name="carStatuses"
			renderValue={() => {
				return (
					<>
						<>
							<S.Placeholder>Статус:</S.Placeholder>

							<S.PlaceholderStatuses>
								{currentValues.length
									? currentValues.map((value) => <CarStatus key={value} status={value} />)
									: 'Не выбрано'}
							</S.PlaceholderStatuses>
						</>
						<S.OverflowMask />
					</>
				)
			}}
		>
			<S.MenuItem
				onClick={() => {
					setValue('carStatuses', allValues)
				}}
			>
				Все
			</S.MenuItem>

			<S.Divider />

			{CAR_STATUSES.map(({ label, value, color }) => {
				return (
					<S.MenuItem key={value} value={value}>
						<S.MenuItemLeft>
							<Checkbox
								name={`carStatuses-${value}`}
								checked={currentValues.includes(value)}
							/>
							<S.MenuItemLabel>{label}</S.MenuItemLabel>
						</S.MenuItemLeft>

						<ColoredDotText color={color} />
					</S.MenuItem>
				)
			})}
		</S.CarStatusSelect>
	)
}
