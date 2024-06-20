import styled from '@emotion/styled'

import { Box } from 'styled/components'

import { Heading } from 'components/common/Heading/Heading.styled'
import { DatePaginationFilter } from 'components/common/DatePaginationFilter/DatePaginationFilter.styled'
import { Currency } from 'components/common/CurrencyAmount/CurrencyAmount.styled'
import { TableCell, TableRow } from 'ui/Table/Table.styled'

export const ChargesTable = styled(Box)`
	padding: 0;

	${Heading} {
		padding: 10px 20px 0;
	}

	${DatePaginationFilter} {
		padding: 5px 20px 15px;
	}

	${TableRow} {
		${TableCell} {
			&:last-of-type {
				width: 169px;
				padding-right: 20px;
			}
		}
	}
`

export const ActionsCell = styled.span`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 20px;

	${Currency} {
		color: var(--color-gray-100);
	}
`

export const Actions = styled.span`
	display: flex;
	gap: 15px;

	button {
		&:hover {
			svg {
				opacity: 1;
			}
		}

		svg {
			opacity: 0.5;
			transition: 0.3s;
		}
	}
`
