import { PopoverProps } from '@mui/material/Popover'

import { Heading } from 'components/common'

import * as S from './PopoverWithClose.styled'

import CrossCircleIcon from 'public/icons/cross-circle.svg'

interface PopoverWithClose extends PopoverProps {
	onClose?: (event: {}, reason: 'backdropClick' | 'escapeKeyDown') => void
	heading: string
}

export const PopoverWithClose = ({
	children,
	heading,
	onClose,
	...props
}: PopoverWithClose) => {
	return (
		<S.PopoverWithClose {...props} onClose={onClose}>
			<Heading
				endAdornment={
					<button
						type="button"
						onClick={() => {
							if (onClose) {
								return onClose({}, 'backdropClick')
							}
						}}
					>
						<CrossCircleIcon />
					</button>
				}
			>
				{heading}
			</Heading>

			{children}
		</S.PopoverWithClose>
	)
}
