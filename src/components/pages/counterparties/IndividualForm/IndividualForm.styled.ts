import styled from '@emotion/styled'
import { css } from '@emotion/react'
import MuiModal from '@mui/material/Modal'

import { FormColumn, Divider, FieldsRow } from 'styled/components'
import { scrollStyles } from 'styled/common'

import { AvatarUpload } from 'components/common/AvatarUpload/AvatarUpload.styled'
import { Textarea } from 'ui/Textarea/Textarea.styled'
import { HeadingContainer } from 'components/common/Heading/Heading.styled'
import { Button } from 'ui/Button/Button.styled'
import { TextField } from 'ui/TextField/TextField.styled'

interface AddressEqualButtonProps {
	gray: boolean
}

export { FormColumn, Divider, FieldsRow }

export const FirstColumn = styled(FormColumn)`
	& > *:not(:last-of-type) {
		margin-bottom: 20px;
	}

	${AvatarUpload} {
		margin: 0 auto;
		margin-bottom: 25px;
	}
`

export const SecondColumn = styled(FormColumn)`
	& > *:not(:last-of-type) {
		margin-bottom: 20px;
	}

	${Textarea} {
		min-height: 96px;
	}

	& > div:last-of-type ${HeadingContainer} {
		${Divider} {
			margin-bottom: 15px;
		}
	}
`

export const CounterpartyIndividualForm = styled.form`
	max-width: 1126px;
	max-height: calc(100vh - 20px - 52px - 10px - 31px - 15px);
	background: var(--color-gray-300);
	border-radius: 5px;
	overflow: auto;

	${scrollStyles}
`

export const ColumnsList = styled.div`
	display: flex;

	& > ${Divider} {
		margin: 30px 0;
		background: var(--color-gray-200);
	}

	${HeadingContainer} {
		${Divider} {
			margin-top: 5px;
			border-radius: 5px;
			box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
		}
	}

	${Button} {
		&:disabled {
			background: var(--color-gray-200);
		}
	}
`

export const ActualAddress = styled.div`
	position: relative;

	& > button {
		position: absolute;
		top: 0;
		right: 0;
		width: 17px;
		height: 17px;
	}

	.MuiTooltip-tooltip {
		max-width: 255px;
	}
`

export const AddressEqualButton = styled.button<AddressEqualButtonProps>`
	${({ gray }) =>
		gray &&
		css`
			svg path {
				stroke: var(--color-gray-100);
			}
		`}
`

export const PersonSelectMenu = styled.div`
	max-width: 132px;

	${TextField} {
		.MuiInputBase-root {
			display: flex;
			justify-content: space-between;
			background: var(--color-gray-400);
			box-shadow: none;
		}
	}

	${Divider} {
		margin: 10px 0;
		background: var(--color-gray-300);
	}
`

export const PhoneField = styled.div`
	position: relative;

	${TextField} .MuiInputBase-root {
		cursor: auto;
		pointer-events: none;
		background: rgba(66, 72, 79, 0.5);
		box-shadow: none;
	}

	& > button {
		position: absolute;
		right: 10px;
		bottom: 8px;
		font-size: 14px;
		font-weight: 400;
		color: #31aced;
		cursor: pointer;
		z-index: 10;
	}
`

export const DocumentsList = styled.ul``

export const DocumentItem = styled.li`
	&:not(:last-of-type) {
		margin-bottom: 15px;
	}

	a {
		display: flex;
		align-items: center;
		gap: 5px;
		padding: 8px 10px;
		border-radius: 5px;
		box-shadow: var(--box-shadow);
		background: var(--color-gray-200);
		cursor: pointer;

		span {
			font-size: 14px;
			line-height: 16px;
			font-weight: 400;
			text-overflow: ellipsis;
			overflow: hidden;
			white-space: nowrap;
		}

		svg:last-of-type {
			margin-left: auto;
		}
	}
`

export const DocumentHintModal = styled(MuiModal)`
	cursor: pointer;

	.MuiBackdrop-root {
		background: rgba(0, 0, 0, 0.9);
		backdrop-filter: blur(10px);
	}
`

export const InfoButton = styled.button`
	margin-left: 5px;
`

export const RemoveButton = styled.button`
	opacity: 0.5;
	transition: 0.3s;

	svg {
		transition: 0.3s;
	}

	&:hover {
		opacity: 1;

		svg {
			fill: #b80600;
		}
	}
`
