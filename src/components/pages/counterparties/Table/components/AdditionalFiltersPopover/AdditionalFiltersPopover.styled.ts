import styled from '@emotion/styled'

import { Popover } from 'ui'
import { FormColumn, FieldsRow, Divider } from 'styled/components'

import { Button } from 'ui/Button/Button.styled'
import { InputLabel } from 'ui/InputLabel/InputLabel.styled'
import { FormControlLabel } from 'ui/Checkbox/Checkbox.styled'
import { SelectContainer } from 'ui/Select/Select.styled'
import { OverflowMask } from 'components/common/FilterSelect/FilterSelect.styled'

export { FormColumn, FieldsRow, Divider }

export const AdditionalFiltersPopover = styled(Popover)`
	.MuiPaper-root {
		width: 530px;
		padding: 15px 10px 20px;
		box-sizing: border-box;
		box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.25);
	}

	form {
		& > *:not(:last-child) {
			margin-bottom: 20px;
		}

		${Button} {
			margin-top: 25px;
		}
	}

	${SelectContainer} {
		flex-shrink: 0;

		${OverflowMask} {
			background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, var(--color-gray-300) 100%);
		}
	}

	${FormColumn} {
		padding: 0;

		& > ${InputLabel} {
			margin-bottom: 15px;
		}

		${FieldsRow} {
			align-items: flex-end;
		}

		${FormControlLabel} span {
			font-size: 14px;
			line-height: 16px;
		}
	}
`

export const CheckboxColumn = styled.div`
	${FormControlLabel}:not(:last-child) {
		margin-bottom: 15px;
	}
`

export const CheckboxGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 15px 30px;
`

export const FormContent = styled.div`
	display: flex;
	align-items: stretch;

	${Divider} {
		margin: 0 20px;
	}
`
