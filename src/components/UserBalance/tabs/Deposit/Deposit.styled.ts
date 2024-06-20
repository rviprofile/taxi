import { css } from '@emotion/react'
import styled from '@emotion/styled'
import MuiRadioGroup from '@mui/material/RadioGroup'
import MuiFormControlLabel from '@mui/material/FormControlLabel'

import { gradientGreen } from 'styled/components/ButtonGradient'
import { Divider } from 'styled/components'

import { CurrencyAmount } from 'components/common/CurrencyAmount/CurrencyAmount.styled'
import { TabContent } from 'components/UserBalance/UserBalance.styled'

export { Divider }

export const DepositTab = styled(TabContent)``

export const RadioGroup = styled(MuiRadioGroup)`
	border-radius: 5px;
	background: var(--color-gray-200);

	${Divider} {
		width: calc(100% - 20px);
		margin: 0 10px;
		background: var(--color-gray-100);
		opacity: 0.1;
	}
`

export const DepositOption = styled.div`
	display: flex;

	span {
		margin-left: 8px;
	}
`

export const FormControlLabel = styled(MuiFormControlLabel)`
	margin: 0;

	${gradientGreen}

	background-image: none;

	&:hover::before {
		opacity: 0;
	}

	&:first-of-type {
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
	}

	&:last-of-type {
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
	}

	.MuiRadio-root {
		padding: 8px;
	}

	${({ checked }) =>
		checked &&
		css`
			&::before,
			&:hover::before {
				opacity: 1;
			}
		`}
`

export const Total = styled.span`
	display: flex;
	align-items: center;

	span {
		&:first-of-type {
			color: var(--color-gray-100);
		}
	}

	${CurrencyAmount} {
		margin-left: 8px;
	}
`
