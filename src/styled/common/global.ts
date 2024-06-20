import { css } from '@emotion/react'

import { reset } from './reset'
import { variables } from './variables'
import { fonts } from './fonts'

export const global = css`
	${reset}
	${fonts}
	${variables}

	html,
  #__next,
  body {
		min-width: 1920px;
		min-height: 100vh;
		font-family: var(--font-ubuntu), sans-serif;
		font-size: 15px;
		font-weight: 500;
		line-height: 17px;
		color: #fff;
		background: #000;
	}

	a {
		color: #fff;
		text-decoration: none;
	}

	button {
		display: flex;
		padding: 0;
		border: none;
		background: transparent;
		color: #fff;
		cursor: pointer;
	}

	button,
	input {
		font-family: var(--font-ubuntu), sans-serif;

		&:focus {
			outline: none;
		}
	}

	svg {
		display: flex;
		flex-shrink: 0;
	}
`
