import styled from '@emotion/styled'
import { FilterSelect } from 'components/common/FilterSelect/FilterSelect.styled'

import { Placeholder } from 'ui/Select/Select.styled'

export { Placeholder as SelectPlaceholder }

export const IncomeExpenseTableFilters = styled.div`
	display: flex;
	align-items: center;
`

export const Selects = styled.div`
	display: flex;
	gap: 15px;
	margin-left: 20px;

	${FilterSelect} {
		width: 260px;
	}
`
