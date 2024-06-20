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
