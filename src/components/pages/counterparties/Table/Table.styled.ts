import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { Divider, FieldsRow, FormColumn } from 'styled/components'

import {
	TableBody,
	TableCell,
	TableContainer,
	TableContainerScroll,
	TableRow
} from 'ui/Table/Table.styled'

type CounterpartyStatusColor = 'green' | 'red' | 'yellow'

interface CounterpartyStatusProps {
	color: CounterpartyStatusColor
}

const getCounterpartyStatusStyles = (color: CounterpartyStatusColor) => {
	switch (color) {
		case 'green':
			return css`
				background-image: linear-gradient(270deg, #88b114 0%, #579d2c 100%);
			`
		case 'red':
			return css`
				color: #ee2929;
			`
		case 'yellow':
			return css`
				background-image: linear-gradient(45deg, #fcd062 -2.94%, #ffb702 102.94%);
			`
	}
}

export { FormColumn, FieldsRow, Divider }

export const CounterpartiesTable = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	width: 100%;
	background: var(--color-gray-300);
	border-radius: 5px 5px 0 0;

	${TableContainer} {
		margin-top: 20px;

		${TableContainerScroll} {
			// 52 header, 10 mgt, 15 pdt, 63 filters, 15 mgt divider, 2 divider, 20 mgt table, 50 pagination
			max-height: calc(100vh - 52px - 10px - 15px - 63px - 15px - 2px - 20px - 50px);
			margin: 0 15px;
		}

		${TableBody} {
			${TableRow} {
				max-height: 39.38px;
				height: 39.38px;
				cursor: pointer;

				${TableCell}:last-of-type {
					/* vertical-align: middle; */
					padding: 9px 9px 8px;
				}
			}

			${TableCell} {
				padding: 11.2px 9px;
				box-sizing: border-box;

				&:first-of-type {
					padding-left: 20px;
				}
			}
		}
	}

	${Divider} {
		flex-shrink: 0;
		width: calc(100% - 30px);
		margin: 15px 15px 0;
	}
`

export const TextRed = styled.span`
	color: var(--color-red);
`

export const AggregatorsRow = styled.span`
	display: flex;
	gap: 10px;
`

export const CounterpartyStatus = styled.span<CounterpartyStatusProps>`
	background-clip: text;
	color: transparent;

	${({ color }) => getCounterpartyStatusStyles(color)}
`
