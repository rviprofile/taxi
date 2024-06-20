import { css } from '@emotion/react'

export const scrollStyles = () => css`
	&::-webkit-scrollbar {
		width: 11px;
	}

	&::-webkit-scrollbar-thumb {
		box-shadow: inset 0 0 11px 11px #737d89;
		border: solid 3px transparent;
		border-radius: 20px;
	}
`
