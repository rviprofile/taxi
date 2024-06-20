import { ForwardedRef, forwardRef, MouseEventHandler, ReactNode } from 'react'

import * as S from './MenuButton.styled'

import ArrowDownIcon from 'public/icons/arrow-down.svg'

interface MenuButtonProps {
	children: ReactNode
	open: boolean
	arrow?: boolean
	arrowPlacement?: 'left' | 'right'
	color?: 'blue' | 'green'
	onClick?: MouseEventHandler<{}>
}

export const MenuButton = forwardRef(
	(
		{
			children,
			open,
			arrow = true,
			color,
			arrowPlacement = 'right',
			...props
		}: MenuButtonProps,
		ref: ForwardedRef<null>
	) => (
		<S.MenuButton {...props} open={open} color={color} ref={ref}>
			{arrow && arrowPlacement === 'left' ? <ArrowDownIcon /> : null}

			<span>{children}</span>

			{arrow && arrowPlacement === 'right' ? <ArrowDownIcon /> : null}
		</S.MenuButton>
	)
)
