import styled from '@emotion/styled'

import { Pagination } from 'components/common/Pagination/Pagination.styled'
import { Checkbox } from 'ui/Checkbox/Checkbox.styled'
import { TableCell, TableContainer, TableHead } from 'ui/Table/Table.styled'
import { TableActions } from 'components/IncomeExpense/components/Table/Table.styled'

export { TableActions }

export const CreditsTable = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	width: 100%;
	border-radius: 5px 5px 0px 0px;
	overflow: hidden;
	background: var(--color-gray-300);

	${Pagination} {
		position: relative;
		padding: 14px 0 15px;
		margin-top: auto;
		background: var(--color-gray-300);
		box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.25);

		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 15px;
			width: calc(100% - 30px);
			height: 2px;
			background: var(--color-gray-200);
			border-radius: 1px;
		}
	}
`

export const TablesRow = styled.div`
	display: flex;
	flex-grow: 1;

	${TableContainer} {
		&:first-of-type {
			border-right: 2px solid #737d89;
		}
		box-sizing: border-box;
	}

	${TableHead} {
		${Checkbox} {
			svg {
				opacity: 0.5;
			}
		}
	}

	${TableCell}:last-child {
		padding-right: 20px;
	}
`

export const ResidueHeadRow = styled.span`
	display: flex;
	justify-content: space-between;
	align-self: center;
`

export const ResidueRow = styled.span`
	display: flex;
	justify-content: space-between;
	align-self: center;
`
