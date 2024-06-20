import { FormProvider, useForm } from 'react-hook-form'

import { CarBrandSelect } from 'components/pages/cars'
import { FilterSelect, FilterText, SearchField } from 'components/common'

import { CAR_STATUSES } from 'constants/carStatuses'

import * as S from './Filters.styled'

export const Filters = () => {
	const useFormProps = useForm({
		defaultValues: {
			carStatuses: [CAR_STATUSES[0].value],
			carBrands: []
		}
	})

	const brands = [
		{ label: 'Все', value: 'all' },
		{ label: 'Марка 1', value: 'brand1' },
		{ label: 'Марка 2', value: 'brand2' }
	]

	const sort = [
		{ label: 'Возрастание дохода', value: 'profit-asc' },
		{ label: 'Убывание дохода', value: 'profit-desc' }
	]

	return (
		<FormProvider {...useFormProps}>
			<S.Filters>
				<FilterText>Фильтры:</FilterText>

				<SearchField name="otherAttribute" placeholder="Другой признак" />

				<span>Сортировка:</span>

			</S.Filters>
		</FormProvider>
	)
}
