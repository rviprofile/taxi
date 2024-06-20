import styled from '@emotion/styled'

import { Divider } from '../../../../styled/components'
import { PopoverWithClose } from '../../../common'

import { FormControlLabel } from '../../../../ui/Checkbox/Checkbox.styled'

export const BankCardEditPopover = styled(PopoverWithClose)`
	.MuiPaper-root {
		width: 361px;
		margin-left: 15px;
	}

	${Divider} {
		margin-top: 10px;

		&:nth-of-type(2) {
			margin-top: 15px;
		}
	}
`

export const Form = styled.form`
	margin-top: 10px;

	& > *:not(:last-child) {
		margin-bottom: 20px;
	}

	${FormControlLabel} {
		span {
			font-size: 14px;
			font-weight: 400;
		}
	}
`
