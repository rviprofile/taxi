import styled from '@emotion/styled'

import { Modal } from 'ui'
import { FieldsRow } from 'styled/components'

import { ModalContent } from 'ui/Modal/Modal.styled'
import { Button } from 'ui/Button/Button.styled'
import { Heading } from 'components/common/Heading/Heading.styled'

export { FieldsRow }

export const PaymentCreateModal = styled(Modal)`
	${ModalContent} {
		width: 450px;
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

	${Button} {
		margin-top: 5px;
	}
`
