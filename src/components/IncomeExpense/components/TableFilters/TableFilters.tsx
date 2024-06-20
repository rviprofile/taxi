import { FormProvider, useForm } from 'react-hook-form'
import { useState } from 'react'

import { FilterSelect, FilterText } from 'components/common'
import { DatePicker } from 'ui'
import { TransactionStatus } from '../TransactionStatus/TransactionStatus'

import type { TransactionStatus as TransactionStatusType } from '../TransactionStatus/TransactionStatus'

import * as S from './TableFilters.styled'

export const IncomeExpenseTableFilters = () => {
	const useFormProps = useForm()
	const [date, setDate] = useState<Date | null>(null)

	const categories = [
		{ label: 'Все', value: 'all' },
		{ label: 'Категория 1', value: 'category1' },
		{ label: 'Категория 2', value: 'category2' }
	]

	const statuses = [
		{ label: 'Оплачен', value: 'paid' },
		{ label: 'Ожидание', value: 'waiting' },
		{ label: 'Не оплачен', value: 'not-paid' },
		{ label: 'Част. оплата', value: 'partial-paid' }
	]

	const sources = [
		{ label: 'Все', value: 'all' },
		{ label: 'Источник 1', value: 'source1' },
		{ label: 'Источник 2', value: 'source2' }
	]

	const recipients = [
		{ label: 'Все', value: 'all' },
		{ label: 'Получатель 1', value: 'recipient1' },
		{ label: 'Получатель 2', value: 'recipient2' }
	]

	return (
		<S.IncomeExpenseTableFilters>
			<DatePicker selected={date} onChange={setDate} />

			<FormProvider {...useFormProps}>
				<S.Selects>
					<FilterText>Фильтры:</FilterText>

					{/* <FilterSelect
						name="category"
						defaultValue="all"
						placeholder="Категория:"
						options={categories}
					/>

					<FilterSelect
						name="status"
						defaultValue="paid"
						options={statuses}
						renderValue={(value) => {
							return (
								<>
									<S.SelectPlaceholder>Статус:</S.SelectPlaceholder>
									<TransactionStatus status={value as TransactionStatusType} />
								</>
							)
						}}
					/>

					<FilterSelect
						name="source"
						defaultValue="all"
						placeholder="Источник:"
						options={sources}
					/>

					<FilterSelect
						name="recipient"
						defaultValue="all"
						placeholder="Получатель:"
						options={recipients}
					/> */}
				</S.Selects>
			</FormProvider>
		</S.IncomeExpenseTableFilters>
	)
}
