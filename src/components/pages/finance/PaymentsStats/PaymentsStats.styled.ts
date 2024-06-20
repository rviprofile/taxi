import styled from '@emotion/styled'

import { Box, Text } from 'styled/components'

import {
	Currency,
	CurrencyAmount
} from 'components/common/CurrencyAmount/CurrencyAmount.styled'

export { Text }

export const PaymentsStats = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`

export const Left = styled.div`
	display: flex;
	gap: 15px;
`

export const TotalPayments = styled(Box)`
	display: flex;
	align-items: flex-end;
	gap: 10px;
	padding: 12px 15px;

	${CurrencyAmount} {
		font-size: 24px;
		line-height: 28px;

		${Currency} {
			color: var(--color-gray-100);
		}
	}

	& > span:last-child {
		margin-bottom: 2px;
		color: var(--color-gray-100);
	}
`

export const SelectedPayments = styled(TotalPayments)`
	${CurrencyAmount} {
		color: var(--color-gray-100);
	}
`

export const StatusStats = styled(Box)`
	display: flex;
	align-items: center;
	gap: 10px;
	padding: 0;
	padding-left: 20px;
	overflow: hidden;

	${Text} {
		font-weight: 500;
	}

	& > ${Text} {
		color: var(--color-gray-100);
	}
`

export const StatusStatsButtons = styled.div`
	display: flex;
	gap: 2px;
`

export const StatusStatsButton = styled.button`
	position: relative;
	display: flex;
	align-items: flex-end;
	height: 52px;
	gap: 10px;
	padding: 12px 10px;
	transition: 0.3s;
	box-sizing: border-box;

	&:not(:first-of-type)::before {
		content: '';
		position: absolute;
		top: 10px;
		left: -2px;
		width: 2px;
		height: 32px;
		border-radius: 5px;
		opacity: 0.2;
		background: #fff;
		transition: 0.3s;
	}

	&:hover {
		background: var(--color-gray-200);

		&::before {
			opacity: 0;
		}

		& + button::before {
			opacity: 0;
		}
	}

	&:active {
		background: var(--color-gray-400);
	}

	& > *:last-child {
		margin-bottom: 3px;
		font-size: 15px;
		font-weight: 500;
		color: var(--color-gray-100);
	}
`

export const Buttons = styled.div`
	display: flex;
	align-items: center;
	gap: 15px;
`

export const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 42px;
	height: 42px;
	background: var(--color-gray-200);
	border-radius: 5px;

	&:hover {
		svg {
			opacity: 1;
		}
	}

	svg {
		opacity: 0.5;
		fill: #fff;
		transition: 0.3s;
	}

	&:first-of-type {
		svg path {
			fill: #fff;
		}
	}

	&:nth-child(3),
	&:last-child {
		svg path {
			stroke: #fff;
		}
	}
`
