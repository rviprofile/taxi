import styled from '@emotion/styled'
import { Heading } from 'components/common/Heading/Heading.styled'

import { Modal } from 'ui'
import { Button } from 'ui/Button/Button.styled'

import { ModalContent } from 'ui/Modal/Modal.styled'
import { TextField } from 'ui/TextField/TextField.styled'

export const PhoneChangeModal = styled(Modal)`
	${ModalContent} {
		display: flex;
		flex-direction: column;
		width: 354px;
		height: 268px;

		${Heading} {
			justify-content: center;
		}
	}
`

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
`

const Step = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	text-align: center;

	${TextField} {
		text-align: center;

		label {
			margin-bottom: 15px;
		}

		input {
			text-align: center;
		}
	}
`

export const PhoneStep = styled(Step)`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	margin-top: 36px;

	${TextField} {
		text-align: center;

		label {
			margin-bottom: 15px;
		}

		input {
			text-align: center;
		}
	}

	${Button} {
		margin-top: auto;
	}
`

export const PrevStepButton = styled.button`
	position: absolute;
	width: 21px;
	height: 21px;
	transform: rotate(90deg);
`

export const CodeStep = styled(Step)`
	p {
		&:nth-of-type(1) {
			margin-top: 15px;
		}

		&:nth-of-type(2) {
			margin-top: 5px;
			font-size: 14px;
			line-height: 16px;
			color: var(--color-gray-100);
		}

		&:nth-of-type(3) {
			margin-top: auto;
			font-size: 12px;
			line-height: 14px;
			color: var(--color-gray-100);
		}
	}

	${TextField} {
		margin-top: 15px;
	}

	${Button} {
		margin-top: 10px;
	}
`

export const ResendSMS = styled.p`
	&& {
		&:nth-of-type(3) {
			color: #fff;
		}
	}

	text-decoration: underline;
	cursor: pointer;
`
