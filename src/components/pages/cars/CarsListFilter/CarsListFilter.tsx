import { FormProvider, useForm } from 'react-hook-form'
import { useState } from 'react'

import { SearchField, FilterSelect, FilterText } from 'components/common'
import { CarStatus } from 'components/pages/cars'
import { DatePicker } from 'ui'

import { CAR_STATUSES } from 'constants/carStatuses'
import { CarStatus as CarStatusType } from 'types/car'

import * as S from './CarsListFilter.styled'

export const CarsListFilter = () => {
	const useFormProps = useForm()
	const [date, setDate] = useState<Date | null>(null)

	const brands = [
		{ label: 'Все', value: 'all', color: '' },
		{ label: 'Все 2', value: 'all2', color: '' },
		{ label: 'Все 3', value: 'all3', color: '' }
	]

	const models = [
		{ label: 'Все', value: 'all', color: '' },
		{ label: 'Все 2', value: 'all2', color: '' },
		{ label: 'Все 3', value: 'all3', color: '' }
	]

	const sort = [
		{ label: 'Возрастание дохода', value: 'profit-asc' },
		{ label: 'Убывание дохода', value: 'profit-desc' }
	]

	return (
		<S.CarsListFilter>
			<FormProvider {...useFormProps}>
				<SearchField name="licensePlateSearch" placeholder="Поиск по госномеру" />

				<DatePicker selected={date} onChange={setDate} />

				<FilterText>Фильтры:</FilterText>

				{/* <FilterSelect
					name="brand"
					placeholder="Марка:"
					defaultValue="all"
					options={brands}
				/>

				<FilterSelect
					name="model"
					placeholder="Модель:"
					defaultValue="all"
					options={models}
				/>

				<FilterSelect
					name="status"
					defaultValue="working"
					options={CAR_STATUSES}
					renderValue={(value) => {
						return (
							<>
								<S.SelectPlaceholder>Статус:</S.SelectPlaceholder>
								<CarStatus status={value as CarStatusType} />
							</>
						)
					}}
				/> */}

				<FilterText>Сортировка:</FilterText>

				{/* <FilterSelect name="sort" defaultValue="profit-asc" options={sort} /> */}
			</FormProvider>
		</S.CarsListFilter>
	)
}
