import styled from '@emotion/styled'
import Link from 'next/link'
import React from 'react'
import { forwardRef, LegacyRef } from 'react'

import { Text } from 'styled/components'
import { Button } from 'ui/Button/Button.styled'

export { Text }

export const Dropzone = styled.div`
	position: relative;
	display: flex;
	flex-grow: 1;
	width: 100%;

	& > span {
		position: relative;
		display: flex;
		flex-grow: 1;
		width: 100%;
	}
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

export const SortableList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 15px 10px;

	li {
		width: 117px;
		height: 117px;

		&:first-of-type a {
			border: 1px solid #fff;
			box-sizing: border-box;
		}

		a {
			position: relative;
			display: inline-block;
			width: 100%;
			height: 100%;
			border-radius: 5px;
			background: var(--color-gray-300);
			cursor: pointer;
			overflow: hidden;
		}
	}
`

export const ImagePreviewSortableList = forwardRef((props, ref) => (
	<SortableList {...props} ref={ref as LegacyRef<HTMLUListElement>} />
))

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

export const MoveButton = styled.button`
	position: absolute;
	bottom: 0;
	right: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 24px;
	height: 24px;
	border-radius: 2px 0px 0px 0px;
	background: rgba(46, 53, 59, 0.8);
	opacity: 0.5;
	backdrop-filter: blur(0.5px);
	transition: 0.3s;

	&:hover {
		opacity: 1;
	}

	svg {
		path {
			fill: #fff;
		}
	}
`

export const MainText = styled.p`
	position: absolute;
	left: 0px;
	bottom: 0px;
	padding: 4px 8px;
	font-size: 14px;
	line-height: 16px;
	border-radius: 0px 2px 0px 0px;
	background: rgba(46, 53, 59, 0.8);
`

export const DocumentsList = styled.ul`
	li:not(:last-child) {
		margin-bottom: 10px;
	}
`

export const DocumentLink = styled(Link)`
	position: relative;
	display: flex;
	gap: 20px;
	padding-right: 20px;
	cursor: pointer;
	overflow: hidden;
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

export const DocumentDescription = styled.div`
	margin-top: 10px;
`

export const DocumentSize = styled(Text)`
	margin-top: 5px;
	color: var(--color-gray-100);
`

export const DocumentRemoveButton = styled.button`
	position: absolute;
	top: 11px;
	right: 0;
	width: 14px;
	height: 14px;
	opacity: 0.2;
	transition: 0.3s;

	&:hover {
		opacity: 1;
	}
`
