import styled from '@emotion/styled'

import { Select, Modal } from 'ui'
import { FieldsRow, Divider } from 'styled/components'

import { ModalContent } from 'ui/Modal/Modal.styled'
import { Button } from 'ui/Button/Button.styled'
import { Textarea } from 'ui/Textarea/Textarea.styled'
import { TextField } from 'ui/TextField/TextField.styled'

export { FieldsRow, Divider }

export const AddChargeModal = styled(Modal)`
	${ModalContent} {
		display: flex;
		flex-direction: column;
		width: 500px;
		min-height: 694px;
	}
`

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	margin-top: 15px;

	& > *:not(:last-child) {
		margin-bottom: 15px;
	}

	${Textarea} {
		min-height: 96px;
	}

	${TextField} {
		svg {
			fill: var(--color-gray-100);
		}
	}

	${Button} {
		margin-top: auto;
	}
`

export const ChargeScheduleSelect = styled(Select)`
	&&& {
		background: transparent;
		box-shadow: none;
		height: 17px;

		.MuiSelect-select {
			padding: 0;
			padding-right: 23px;
			background: transparent;
			font-size: 15px;
			font-weight: 500;
			line-height: 17px;
		}

		.MuiSelect-icon {
			right: 0;
		}

		&[aria-expanded='true'] {
			background: transparent;
		}
	}

	.MuiPaper-root {
		margin-top: 6px;
		margin-left: -10px;
		padding: 10px;
		box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.25);
		background: var(--color-gray-200);

		.MuiMenuItem-root {
			font-weight: 500;
			font-size: 15px;
			line-height: 17px;
		}
	}
`

export const Day = styled.li`
	flex-grow: 1;

	button {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		padding: 3px 0;
		border: 2px solid var(--color-gray-200);
		border-radius: 5px;
		box-sizing: border-box;
		font-weight: 500;
		font-size: 15px;
		text-transform: uppercase;
	}
`

export const WeekDays = styled.ul`
	display: flex;
	gap: 10px;
`

export const MonthDays = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 10px;

	${Day} {
		width: 32.73px;
		flex-shrink: 0;
		flex-grow: 0;

		&:nth-child(-n + 20) {
			width: 37px;
		}
	}
`
