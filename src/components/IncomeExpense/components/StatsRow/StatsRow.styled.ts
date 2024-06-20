import styled from '@emotion/styled'

import { Box, Divider } from 'styled/components'
import {
	Currency,
	CurrencyAmount
} from 'components/common/CurrencyAmount/CurrencyAmount.styled'

export { Divider }

export const StatsRow = styled(Box)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding: 5px 15px;
	margin-top: 15px;
`

export const Stats = styled.div`
	display: flex;
	align-items: stretch;

	${Divider} {
		margin: 0 25px;
		background: #fff;
		opacity: 0.2;
	}
`

export const StatItem = styled.div`
	display: flex;
	align-items: center;

	line-height: 28px;

	${CurrencyAmount} {
		margin-left: 10px;
		font-size: 24px;

		${Currency} {
			margin-left: 10px;
			color: var(--color-gray-100);
		}
	}
`

export const Actions = styled.div`
	display: flex;
`

export const ActionButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 42px;
	height: 42px;
	border-radius: 5px;
	transition: 0.3s;

	&:hover {
		background: var(--color-gray-200);
		box-shadow: var(--box-shadow);

		svg {
			opacity: 1;
		}
	}

	&:not(:last-child) {
		margin-right: 15px;
	}

	svg {
		fill: #fff;
		opacity: 0.5;
		transition: 0.3s;
	}
`
