import { css } from '@emotion/react'
import styled from '@emotion/styled'

interface BoxProps {
	noPaddings?: boolean
}

export const Box = styled.div<BoxProps>`
	padding: 10px;
	border-radius: 5px;
	background: var(--color-gray-300);
	box-sizing: border-box;

	${({ noPaddings = false }) =>
		noPaddings &&
		css`
			padding: 0;
		`}
`
