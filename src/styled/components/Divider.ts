import { css } from '@emotion/react'
import styled from '@emotion/styled'

interface DividerProps {
	width?: number
	height?: number
	$orientation?: 'vertical' | 'horizontal'
}

export const Divider = styled.div<DividerProps>`
	${({ $orientation = 'horizontal' }) =>
		$orientation === 'horizontal'
			? css`
					width: 100%;
					height: 2px;
					border-radius: 1px;
					background: var(--color-gray-200);
			  `
			: css`
					width: 2px;
					border-radius: 5px;
					background: var(--color-gray-300);
			  `}
`
