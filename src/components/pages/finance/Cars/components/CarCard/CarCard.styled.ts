import styled from '@emotion/styled'

import { Box, Divider, Text } from 'styled/components'

import { Currency } from 'components/common/CurrencyAmount/CurrencyAmount.styled'

export { Divider, Text }

export const CarCard = styled(Box)`
	padding: 15px 20px;

	${Divider} {
		margin: 10px 0;
	}

	${Currency} {
		font-weight: 400;
		color: var(--color-gray-100);
	}
`

export const Row = styled.div`
	display: flex;
	align-items: flex-end;
	gap: 5px;

	& > span {
		font-size: 18px;
		font-weight: 500;
		line-height: 21px;

		&:last-child {
			color: var(--color-gray-100);
		}
	}
`

export const Top = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	${Row} {
		gap: 10px;
	}
`

export const Bottom = styled.div`
	display: flex;
	justify-content: space-between;
`

export const BottomColumn = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;

	${Row} > span:last-child {
		font-size: 15px;
		font-weight: 400;
	}
`
