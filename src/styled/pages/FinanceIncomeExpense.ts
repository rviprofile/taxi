import styled from '@emotion/styled'
import {
	IncomeExpenseTableFilters,
	Selects
} from 'components/IncomeExpense/components/TableFilters/TableFilters.styled'
import { DatePickerContainer } from 'ui/DatePicker/DatePicker.styled'
import {
	TextOverflowFadeOut,
	TableActions
} from 'components/IncomeExpense/components/Table/Table.styled'

export { TextOverflowFadeOut, TableActions }

export const FinanceIncomeExpensePage = styled.div`
	height: 100%;
	width: 100%;

	${IncomeExpenseTableFilters} ${DatePickerContainer} {
		display: none;
	}

	${Selects} {
		margin-left: 0;
	}
`
