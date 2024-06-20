import styled from '@emotion/styled'
import MuiCheckbox from '@mui/material/Checkbox'
import MuiFormControlLabel from '@mui/material/FormControlLabel'

export const Checkbox = styled(MuiCheckbox)``

export const FormControlLabel = styled(MuiFormControlLabel)`
	margin: 0;
	align-items: flex-start;

	// label text
	& > span:last-child {
		margin-left: 10px;
	}
`
