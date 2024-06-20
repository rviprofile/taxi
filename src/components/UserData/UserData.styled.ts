import styled from '@emotion/styled'

import { Popover as MuiPopover } from 'ui'

export const UserData = styled.div`
	position: relative;
`

export const Popover = styled(MuiPopover)`
	.MuiPaper-root {
		padding: 0;
	}
`

export const Switch = styled.div`
	position: absolute;
	left: 15px;
	top: 15px;
	display: flex;
	gap: 5px;

	button {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 10px;
		height: 10px;
		border: 2px solid black;
	}
`
