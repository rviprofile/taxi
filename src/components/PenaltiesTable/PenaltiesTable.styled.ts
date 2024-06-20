import styled from '@emotion/styled'

import { Box, Divider } from 'styled/components'

import { TableCell, TableContainer } from 'ui/Table/Table.styled'
import { Currency } from 'components/common/CurrencyAmount/CurrencyAmount.styled'
import { DatePaginationFilter } from 'components/common/DatePaginationFilter/DatePaginationFilter.styled'
import { Heading } from 'components/common/Heading/Heading.styled'

export { Divider }

export const PenaltiesTable = styled(Box)`
	width: 100%;
	max-width: 754px;
	padding: 0;

	${Heading} {
		padding: 15px 20px 0;
	}

	${DatePaginationFilter} {
		padding: 10px 20px;
	}

	${Divider} {
		margin-top: 10px;
	}

	${TableContainer} {
		margin-top: 5px;

		${TableCell}:nth-of-type(2) {
			width: 240px;
		}
	}
`

export const LicensePlate = styled.span`
	& > span:last-of-type {
		display: flex;
		justify-content: space-between;
		margin-top: 10px;
	}
`

export const DateTime = styled.span`
	display: flex;
	flex-direction: column;
	gap: 10px;
`

export const Penalty = styled.span`
	display: flex;
	flex-direction: column;

	${Currency} {
		color: var(--color-gray-100);
	}
`

export const PenaltyDiscount = styled.span`
	margin-top: 10px;
	color: var(--color-green);
`
