import styled from '@emotion/styled'

import { Box, Divider, Text } from 'styled/components'

import {
	Currency,
	CurrencyAmount
} from 'components/common/CurrencyAmount/CurrencyAmount.styled'

export { Divider, Text }

export const Stats = styled.div`
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 15px;
		margin-bottom: 15px;
`

export const MoneyStats = styled(Box)`
	display: flex;
	padding: 12px 15px;

	& > svg {
		margin-right: 5px;
	}

	${Divider} {
		margin: 0 10px;
		background: #fff;
		opacity: 0.2;
	}
`

export const MoneyRow = styled.div`
	display: flex;
	align-items: flex-end;

	${CurrencyAmount} {
		font-size: 24px;
		line-height: 28px;

		${Currency} {
			color: var(--color-gray-100);
		}
	}

	& > span:last-child {
		margin-left: 10px;
		margin-bottom: 4px;
		color: var(--color-gray-100);
	}
`

export const CarsStats = styled(Box)`
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

export const CarStatButtons = styled.div`
	display: flex;
	gap: 2px;
`

export const CarStatButton = styled.button`
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
