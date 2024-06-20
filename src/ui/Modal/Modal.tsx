import { ModalProps as MuiModalProps } from '@mui/material/Modal'
import Fade from '@mui/material/Fade'

import { Heading } from 'components/common'

import { HeadingProps } from 'components/common/Heading/Heading'

import * as S from './Modal.styled'

import CrossIcon from 'public/icons/cross-circle.svg'

interface ModalProps extends MuiModalProps {
	heading?: string | JSX.Element
	headingProps?: HeadingProps
}

export const Modal = ({ children, heading, headingProps, ...props }: ModalProps) => {
	return (
		<S.Modal {...props} slots={{ backdrop: S.Backdrop }} closeAfterTransition>
			<Fade in={props.open}>
				<S.ModalContent>
					{heading ? <Heading {...headingProps}>{heading}</Heading> : null}

					{children}

					<S.CloseButton
						onClick={(e) => props.onClose && props.onClose(e, 'backdropClick')}
					>
						<CrossIcon width={24} height={24} viewBox="0 0 21 21" />
					</S.CloseButton>
				</S.ModalContent>
			</Fade>
		</S.Modal>
	)
}
