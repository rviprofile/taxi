import { css } from '@emotion/react'
import styled from '@emotion/styled'

interface ButtonGroupProps {
	bgFill?: boolean
}

export const ButtonGroup = styled.div<ButtonGroupProps>`
	display: flex;
	width: 100%;
	height: 31px;
	background: var(--gradient-green);
	border-radius: 5px;

	${({ bgFill }) =>
		bgFill &&
		css`
			.MuiTab-root {
				background: transparent;
			}
		`}
`
