import styled from '@emotion/styled'

import { Popover } from 'ui'
import { FormColumn, Divider, FieldsRow } from 'styled/components'

import { Button } from 'ui/Button/Button.styled'
import { FormControlLabel } from 'ui/Checkbox/Checkbox.styled'

export { FormColumn, Divider, FieldsRow }

export const FiltersPopover = styled(Popover)`
	.MuiPaper-root {
		width: 554px;
		padding: 15px 10px 20px;
		box-sizing: border-box;
		box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.25);
	}

	form {
		${Button} {
			margin-top: 25px;
		}
	}

	${FormColumn} {
		padding: 0;

		& > *:not(:last-child) {
			margin-bottom: 15px;
		}
	}

	${Divider} {
		margin: 0 20px;
	}
`

export const FormContent = styled.div`
	display: flex;
	align-items: stretch;

	${FormControlLabel} span {
		font-size: 14px;
		line-height: 16px;
	}
`

export const CheckboxMoveRow = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`
