import styled from '@emotion/styled'

import { PopoverWithClose } from 'components/common'
import { Divider } from 'styled/components'

import { Button } from 'ui/Button/Button.styled'
import { Textarea } from 'ui/Textarea/Textarea.styled'

export { Divider }

export const CarEndRentPopover = styled(PopoverWithClose)`
	.MuiPaper-root {
		width: 382px;
		height: 446px;
		margin-left: 15px;
	}
`

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	margin-top: 10px;

	& > *:not(:last-child) {
		margin-bottom: 15px;
	}

	${Divider} {
		margin: 10px 0;
	}

	${Textarea} {
		min-height: 80px;
	}

	${Button} {
		margin-top: auto;
	}
`

export const DateRow = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	&:first-of-type {
		margin-bottom: 0;
	}
`
