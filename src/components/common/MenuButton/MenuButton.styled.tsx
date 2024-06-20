import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { ButtonGradient } from 'styled/components'

interface MenuButtonProps {
	open: boolean
}

export const MenuButton = styled(ButtonGradient)<MenuButtonProps>`
	display: flex;
	align-items: center;
	padding: 7px 10px;
	border-radius: 5px;
	font-weight: 500;
	font-size: 15px;
	transition: 0.3s;

	& > svg {
		transition: 0.3s;

		&:first-child {
			margin-right: 10px;
		}

		&:last-child {
			margin-left: 10px;
		}
	}

	span {
		display: flex;
		align-items: center;
	}

	${({ open }) =>
		open &&
		css`
			& > svg {
				transform: rotate(180deg);
			}
		`}
`
