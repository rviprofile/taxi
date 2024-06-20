import styled from '@emotion/styled'

import { Divider } from 'styled/components'

import { Currency } from 'components/common/CurrencyAmount/CurrencyAmount.styled'
import { Checkbox } from 'ui/Checkbox/Checkbox.styled'
import {
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow
} from 'ui/Table/Table.styled'
import { Button } from 'ui/Button/Button.styled'

export { TableRow, Divider }

export const PenaltiesTable = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	width: 100%;
	border-radius: 5px 5px 0 0;
	overflow: hidden;

	${TableContainer} {
		flex-grow: 1;
	}

	${TableHead} {
		${TableCell}:last-child {
			position: relative;

			${Checkbox} {
				position: absolute;
				right: 20px;
				opacity: 0.5;
				transition: 0.3s;

				&:hover {
					opacity: 1;
				}
			}

			button {
				margin-right: 36px;
			}
		}
	}

	${TableCell}:last-child {
		padding-right: 20px;
	}

	${TableBody} {
		${TableRow} {
			transition: 0.3s;
			cursor: pointer;

			&:hover {
				background: var(--color-gray-400);
			}
		}

		${TableCell} {
			padding-top: 10.5px;
			padding-bottom: 10.5px;
			vertical-align: top;

			&:nth-child(3) {
				width: 275px;
			}
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

export const Column = styled.span`
	display: flex;
	flex-direction: column;
	gap: 10px;
`

export const PenaltyDiscount = styled.span`
	margin-top: 10px;
	color: var(--color-green);
`

export const Penalty = styled.span`
	display: flex;
	flex-direction: column;

	${Currency} {
		color: var(--color-gray-100);
	}
`

export const SumRow = styled.span`
	display: flex;
	justify-content: space-between;
`

export const Actions = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;

	${Checkbox} {
		opacity: 0.5;
		transition: 0.3s;

		&:hover {
			opacity: 1;
		}
	}

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

export const SubComponent = styled(TableCell)`
	padding: 0 20px;
	background: var(--color-gray-400);
`

export const SubComponentContent = styled.span`
	display: flex;
	justify-content: space-between;
	padding: 12px 20px 20px;

	& > span {
		font-size: 18px;
		line-height: 21px;
	}
`

export const SubComponentLeft = styled.span``

export const SubComponentRight = styled.span`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 15px;

	${Button} {
		justify-content: flex-start;
		min-height: auto;
		padding: 0;
		background: transparent;
		box-shadow: none;

		&:hover {
			background: transparent;
		}

		&:first-of-type {
			svg {
				transform: rotate(-90deg);
			}
		}
	}
`

export const Row = styled.span`
	display: flex;
	font-size: 15px;
	gap: 5px;

	& > span {
		&:first-of-type {
			color: var(--color-gray-100);
		}
	}
`

export const AdditionalInfo = styled.span`
	display: grid;
	grid-template-columns: 248px 178px minmax(176px, 1fr);
	gap: 15px 60px;
	margin-top: 20px;

	${Row} {
		&:nth-child(1),
		&:nth-child(4) {
			display: grid;
			grid-template-columns: 117px 1fr;
			grid-gap: 5px;
		}

		&:nth-child(2),
		&:nth-child(5) {
			display: grid;
			grid-template-columns: 96px 1fr;
		}

		&:nth-child(5) {
			span:last-child {
				background-image: linear-gradient(88.32deg, #2f98cf -1.89%, #2fcfb2 100%);
				background-clip: text;
				color: transparent;
			}
		}
	}
`
