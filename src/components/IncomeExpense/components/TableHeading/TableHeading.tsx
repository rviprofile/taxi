import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { SearchField } from 'components/common'
import { DatePicker } from 'ui'

import * as S from './TableHeading.styled'

import IncomeIcon from 'public/icons/income.svg'
import OutcomeIcon from 'public/icons/outcome.svg'

interface IncomeExpenseTableHeadingProps {
	variant: 'income' | 'expense'
}

export const IncomeExpenseTableHeading = ({
	variant
}: IncomeExpenseTableHeadingProps) => {
	const useFormProps = useForm()
	const [dateRange, setDateRange] = useState<(Date | null)[]>([null, null])
	const [startDate, endDate] = dateRange

	return (
		<S.TableHeading>
			<S.Text variant="h1">
				<S.VariantIcon>
					{variant === 'income' ? <IncomeIcon /> : <OutcomeIcon />}
				</S.VariantIcon>
				{variant === 'income' ? 'Приход' : 'Расход'}
			</S.Text>

			<S.Filters>
				<DatePicker
					selectsRange={true}
					startDate={startDate}
					endDate={endDate}
					onChange={setDateRange}
				/>

				<FormProvider {...useFormProps}>
					<SearchField name="search" placeholder="Введите статус,год и пр." />
				</FormProvider>
			</S.Filters>
		</S.TableHeading>
	)
}
