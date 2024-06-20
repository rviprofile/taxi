import styled from '@emotion/styled'

import { Popover as MuiPopover } from 'ui'
import { Box, ButtonGroup } from 'styled/components'

import {
	Currency,
	CurrencyAmount
} from 'components/common/CurrencyAmount/CurrencyAmount.styled'
import { MenuButton } from 'components/common/MenuButton/MenuButton.styled'

export { ButtonGroup }

export const UserBalance = styled.div`
	${MenuButton} {
		${CurrencyAmount} {
			margin-left: 5px;
		}
	}
`

export const Popover = styled(MuiPopover)`
	.MuiPaper-root {
		width: 334px;

		& > *:not(:last-child) {
			margin-bottom: 15px;
		}
	}

	${ButtonGroup} {
		.MuiTab-root:not(.Mui-selected) {
			background: var(--color-gray-200);
		}
	}
`

export const BalanceList = styled(Box)`
	background: var(--color-gray-200);

	li {
		&:not(:last-child) {
			margin-bottom: 15px;
		}
	}
`

export const BalanceRow = styled.div`
	display: flex;
	justify-content: space-between;

	${Currency} {
		color: var(--color-gray-100);
	}
`

export const BalanceRowBorder = styled.div`
	width: 100%;
	height: 3px;
	margin-top: 5px;
	background: var(--gradient-blue);
	border-radius: 5px;
`

export const TabContent = styled.div`
	& > *:not(:last-child) {
		margin-bottom: 15px;
	}
`
