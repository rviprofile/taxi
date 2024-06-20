import styled from '@emotion/styled'
import MuiTabs from '@mui/material/Tabs'
import MuiTab from '@mui/material/Tab'

import { PopoverWithClose } from '../../../common'
import { FieldsRow } from '../../../../styled/components'

import { FormControlLabel } from '../../../../ui/Checkbox/Checkbox.styled'

export { FieldsRow }

export const AddRequisitesPopover = styled(PopoverWithClose)`
	.MuiPaper-root {
		width: 361px;
		margin-left: 15px;
	}
`

export const Form = styled.form`
	margin-top: 20px;

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

export const Tabs = styled(MuiTabs)`
	margin-top: 10px;
	padding: 0;
	height: 24px;

	.MuiTabs-indicator {
		background: #fff;
		border-radius: 1px;
	}

	.MuiTabs-flexContainer {
		gap: 15px;
		align-items: flex-start;
	}

	.MuiTabs-scroller {
		display: flex;
	}
`

export const Tab = styled(MuiTab)`
	flex: 0 0 auto;
	padding: 0;
	font-size: 15px;
	line-height: 17px;

	&.Mui-selected {
		background: transparent;
	}
`

export const VatRow = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`
