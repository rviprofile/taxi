import styled from '@emotion/styled'

import { Modal } from 'ui'
import { scrollStyles } from 'styled/common'

import { Button } from 'ui/Button/Button.styled'
import { Dropzone, SortableList } from 'ui/Dropzone/Dropzone.styled'
import { ModalContent } from 'ui/Modal/Modal.styled'
import { Heading } from '../Heading/Heading.styled'

export const AvatarUpload = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-shrink: 0;
	width: 140px;
	height: 140px;
	border-radius: 50%;
	background: var(--color-gray-200);
	box-shadow: 1px 2px 7px rgba(0, 0, 0, 0.2);

	${Button} {
		position: absolute;
		right: 0;
		bottom: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-shrink: 0;
		min-width: auto;
		width: 34px;
		height: 34px;
		padding: 0;
		box-shadow: none;
		border-radius: 50%;
	}
`

export const MainPhoto = styled.span`
	display: flex;
	align-items: center;
	height: 100%;

	img {
		border-radius: 50%;
	}
`

export const UploadAvatarModal = styled(Modal)`
	${ModalContent} {
		display: flex;
		flex-direction: column;
		width: 676px;
		height: 555px;
	}

	${Heading} {
		justify-content: center;
	}

	${Dropzone} {
		margin-top: 15px;
		overflow-y: auto;
		${scrollStyles()}

		${SortableList} {
			overflow-y: auto;
			${scrollStyles()}
		}
	}
`
