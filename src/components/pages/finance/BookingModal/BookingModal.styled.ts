import styled from '@emotion/styled'

import { Modal } from 'ui'
import { FieldsRow, Divider } from 'styled/components'

import { ModalContent } from 'ui/Modal/Modal.styled'
import { Button } from 'ui/Button/Button.styled'
import { Heading } from 'components/common/Heading/Heading.styled'

export { FieldsRow, Divider }

export const BookingModal = styled(Modal)`
	${ModalContent} {
		width: 380px;
	}

	${Heading} {
		justify-content: center;
	}
`

export const Form = styled.form`
	margin-top: 15px;

	& > *:not(:last-child) {
		margin-bottom: 15px;
	}

	${FieldsRow} {
		gap: 20px;
	}

	${Button} {
		margin-top: 30px;
	}
`

export const HintsBlock = styled.div`
	position: absolute;
	transform: translateY(-18px);
	z-index: 2;
	width: calc(100% - 64px);
	height: fit-content;
	padding: 12px;
	background-color: #434b53;
	border-radius: 0 0 5px 5px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	gap: 10px;
	font-weight: 400;
	font-size: 14px;
	color: #3abbda;
`
export const HintsItem = styled.button`
	color: white;
	cursor: pointer;
	text-align: start;
	font-weight: 500;
	font-size: 15px;
	width: 100%;
	&:hover {
		background-color: #7a828b;
	}
`

export const DateErrorSign = styled.img`
	position: absolute;
	transform: translateX(140px) translateY(-20px);
`
export const SumErrorSign = styled.img`
	position: absolute;
	transform: translateX(321px) translateY(-20px);
`
