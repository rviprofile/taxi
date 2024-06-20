import styled from '@emotion/styled'

import { Text } from 'styled/components'
import { Button } from 'ui/Button/Button.styled'

export { Text }

export const Dropzone = styled.div`
	position: relative;
	display: flex;
	flex-grow: 1;
	width: 100%;
`

export const BorderBG = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
`

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	flex-grow: 1;

	& > ${Button} {
		margin-top: auto;
	}
`

export const Images = styled(Content)`
	align-items: center;
`

export const Documents = styled(Content)``

export const Placeholder = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	flex-grow: 1;

	p {
		text-align: center;

		&:not(:first-of-type) {
			color: var(--color-gray-100);
		}

		&:nth-of-type(2) {
			margin-top: 10px;
		}

		&:nth-of-type(3) {
			margin-top: 25px;
		}

		&:nth-of-type(4) {
			margin-top: 5px;
		}
	}

	${Button} {
		margin-top: 10px;
	}
`

export const PlaceholderDragActive = styled(Placeholder)`
	svg {
		margin-top: 40px;
	}
`

export const ImagePreviewList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 15px 10px;

	li {
		position: relative;
		width: 117px;
		height: 117px;
		border-radius: 5px;
		background: var(--color-gray-300);
		overflow: hidden;
	}
`

export const RemoveImageButton = styled.button`
	position: absolute;
	top: 0;
	right: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 24px;
	height: 24px;
	border-radius: 0px 0px 0px 2px;
	background: rgba(46, 53, 59, 0.8);
	opacity: 0.5;
	backdrop-filter: blur(0.5px);
	transition: 0.3s;

	&:hover {
		opacity: 1;
	}
`

export const DocumentsList = styled.ul`
	li:not(:last-child) {
		margin-bottom: 10px;
	}
`

export const Document = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
`

export const DocumentPreview = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;

	${Text} {
		position: absolute;
		font-size: 17px;
		line-height: 20px;
		opacity: 0.5;
	}
`

export const DocumentDescription = styled.div``

export const DocumentSize = styled(Text)`
	margin-top: 5px;
	color: var(--color-gray-100);
`
