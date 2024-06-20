import styled from '@emotion/styled'

import { FormColumn, Divider, FieldsRow } from 'styled/components'

import { AvatarUpload } from 'components/common/AvatarUpload/AvatarUpload.styled'
import { SelectContainer } from 'ui/Select/Select.styled'
import { Textarea } from 'ui/Textarea/Textarea.styled'
import { HeadingContainer } from 'components/common/Heading/Heading.styled'
import { Button } from 'ui/Button/Button.styled'
import { css } from '@emotion/react'
import { TextField } from 'ui/TextField/TextField.styled'

interface AddressEqualButtonProps {
	gray: boolean
}

export { FormColumn, Divider, FieldsRow }

export const FirstColumn = styled(FormColumn)`
	${AvatarUpload} {
		margin: 0 auto;
		margin-bottom: 25px;
	}
`

export const SecondColumn = styled(FormColumn)`
	${Textarea} {
		min-height: 96px;
	}
`

export const CounterpartyDataForm = styled.form`
	display: flex;

	& > ${Divider} {
		margin: 30px 0;
	}

	${HeadingContainer} {
		margin-bottom: 15px;

		${Divider} {
			margin-top: 5px;
			border-radius: 5px;
			box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
		}
	}

	${FormColumn}, ${FirstColumn}, ${SecondColumn} {
		& > div:not(:first-of-type) > *:not(:last-child) {
			margin-bottom: 15px;
		}
	}

	${Button} {
		&:disabled {
			background: var(--color-gray-200);
		}
	}
`

export const AdditionalContacts = styled.div`
	& > *:not(:last-child) {
		margin-bottom: 15px;
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
