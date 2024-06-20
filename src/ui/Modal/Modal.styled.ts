import styled from '@emotion/styled'
import MuiModal from '@mui/material/Modal'

import { Box, Divider } from 'styled/components'

import { HeadingContainer } from 'components/common/Heading/Heading.styled'
import { Button } from 'ui/Button/Button.styled'
import { css } from '@emotion/react'

export { Divider }

export const Backdrop = styled.div`
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: center;
	right: 0;
	bottom: 0;
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.8);
	backdrop-filter: blur(5px);
	opacity: 0;
	transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
	-webkit-tap-highlight-color: transparent;
	z-index: -1;
`

export const Modal = styled(MuiModal)`
	${({ open }) =>
		open &&
		css`
			${Backdrop} {
				opacity: 1;
			}
		`}
`

export const ModalContent = styled(Box)`
	position: relative;
	padding: 15px 20px;
	outline: none;

	& > ${HeadingContainer} {
		${Divider} {
			margin-top: 15px;
		}
	}

	${Button} {
		box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
	}
`

export const CloseButton = styled.button`
	position: absolute;
	top: 0;
	right: -34px;
	width: 24px;
	height: 24px;
`
