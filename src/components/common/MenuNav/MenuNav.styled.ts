import { css } from '@emotion/react'
import styled from '@emotion/styled'
import NextLink from 'next/link'

import { ButtonGroup } from 'styled/components'

interface LinkProps {
  active: boolean
}

export const MenuNav = styled(ButtonGroup)`
width: 100%;
background: 0;`

export const Link =
  styled(NextLink) <
  LinkProps >
  `
	background: #2f6d08;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 500;
	font-size: 15px;
	line-height: 17px;
	padding: 7px 10px;
	transition: 0.3s;

	&:first-of-type {
		border-top-left-radius: 5px;
		border-bottom-left-radius: 5px;
	}

	&:last-of-type {
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
	}

	&:hover {
		background: #599109;
	}

	&:active {
		background: #19560a;
	}

	${({ active }) =>
    active &&
    css`
			background: #19560a;
		`}
`
