import styled from '@emotion/styled'
import {
	Currency,
	CurrencyAmount
} from 'components/common/CurrencyAmount/CurrencyAmount.styled'

import { Box, Divider } from 'styled/components'

export { Divider }

export const PenaltiesStats = styled.div`
	display: flex;
	flex-direction: column;
	flex-shrink: 0;
	gap: 15px;
	width: 340px;
`

export const Stat = styled(Box)`
	width: 100%;
	padding: 15px 20px;

	${Divider} {
		margin: 10px 0;
	}
`

export const StatTop = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	span {
		font-size: 18px;
		line-height: 21px;
	}
`

export const StatBottom = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	${CurrencyAmount} {
		font-size: 24px;
		line-height: 28px;

		${Currency} {
			margin-left: 10px;
			color: var(--color-gray-100);
		}
	}
`
