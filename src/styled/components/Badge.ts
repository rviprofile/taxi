import { css } from '@emotion/react'
import styled from '@emotion/styled'

interface BadgeProps {
	color: 'blue' | 'green'
}

export const Badge = styled.span<BadgeProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	min-width: 93px;
	height: 31px;
	padding: 7px 10px;
	box-shadow: var(--box-shadow);
	border-radius: 5px;
	font-size: 15px;
	font-weight: 500;
	line-height: 17px;
	box-sizing: border-box;

	${({ color }) =>
		color === 'green'
			? css`
					background: linear-gradient(270deg, #88b114 0%, #579d2c 100%);
			  `
			: css`
					background: linear-gradient(93.88deg, #2f98cf 51.56%, #2fcfb2 100%);
			  `}
`
