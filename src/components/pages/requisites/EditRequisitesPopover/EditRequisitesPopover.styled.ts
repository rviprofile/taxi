import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { PopoverWithClose } from '../../../common'
import { Divider, FieldsRow } from '../../../../styled/components'

import { FormControlLabel } from '../../../../ui/Checkbox/Checkbox.styled'

interface VatValueProps {
	active: boolean
}

export { Divider, FieldsRow }

export const EditRequisitesPopover = styled(PopoverWithClose)`
	.MuiPaper-root {
		width: 361px;
		margin-left: 15px;
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

export const VatRow = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

export const VatSwitch = styled.div`
	display: flex;
	align-items: center;
	gap: 15px;
`

export const VatValue = styled.span<VatValueProps>`
	color: #fff;
	opacity: 0.5;
	transition: 0.3s;

	${({ active }) =>
		active &&
		css`
			opacity: 1;
		`}
`
