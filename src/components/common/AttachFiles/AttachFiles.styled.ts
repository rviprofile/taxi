import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { scrollStyles } from 'styled/common/scroll'

import { Modal } from 'ui'

import { DocumentsList, Dropzone } from 'ui/Dropzone/Dropzone.styled'
import { ModalContent } from 'ui/Modal/Modal.styled'
import { Heading } from '../Heading/Heading.styled'

interface AttachFilesModalProps {
	short: boolean
}

interface UploadButtonProps {
	disabled: boolean
}

export const AttachFiles = styled.div``

export const AttachFilesModal = styled(Modal)<AttachFilesModalProps>`
	${ModalContent} {
		display: flex;
		flex-direction: column;
		width: 665px;
		height: 555px;
		background: var(--color-gray-400);
	}

	${Heading} {
		justify-content: center;
	}

	${Dropzone} {
		margin-top: 15px;
		overflow-y: auto;

		${DocumentsList} {
			overflow-y: auto;
			${scrollStyles()}
		}
	}

	${({ short }) =>
		short &&
		css`
			${ModalContent} {
				width: 398px;
			}

			${Heading} {
				justify-content: flex-start;
			}
		`}
`

export const UploadButton = styled.button<UploadButtonProps>`
	${({ disabled }) =>
		disabled &&
		css`
			opacity: 0.5;
			cursor: auto;
		`}
`
