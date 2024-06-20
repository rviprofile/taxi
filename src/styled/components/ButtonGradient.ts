import { css } from '@emotion/react'
import styled from '@emotion/styled'

type Color = 'blue' | 'green'

interface ButtonGradientProps {
	color?: Color
}

const getColorStyles = (color: Color | undefined) => {
	switch (color) {
		case 'green':
			return css`
				background-image: var(--gradient-green);

				&::before {
					background-image: linear-gradient(268.87deg, #88b114 -10.28%, #558f09 27.63%, #408104 100%);
				}
			`

		case 'blue':
			return css`
				background-image: var(--gradient-blue);

				&::before {
					background-image: linear-gradient(93.88deg, #2f98cf 0%, #2fcfb2 100%);
				}
			`
		default:
			return
	}
}

export const gradientGreen = css`
	position: relative;
	z-index: 1;
	background-image: var(--gradient-green);

	&::before {
		position: absolute;
		content: '';
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: -1;
		transition: 0.3s;
		border-radius: inherit;
		opacity: 0;
		background-image: linear-gradient(268.87deg, #88b114 -10.28%, #558f09 27.63%, #408104 100%);
	}

	&:hover::before {
		opacity: 1;
	}
`

export const gradientBlue = css`
	position: relative;
	z-index: 1;
	background-image: var(--gradient-blue);

	&::before {
		position: absolute;
		content: '';
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: -1;
		transition: 0.3s;
		border-radius: inherit;
		opacity: 0;
		background-image: linear-gradient(93.88deg, #2f98cf 0%, #2fcfb2 100%);
	}

	&:hover::before {
		opacity: 1;
	}
`

export const ButtonGradient = styled.button<ButtonGradientProps>`
	position: relative;
	z-index: 1;

	&::before {
		position: absolute;
		content: '';
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: -1;
		transition: 0.3s;
		border-radius: inherit;
		opacity: 0;
	}

	&:hover::before {
		opacity: 1;
	}

	${({ color }) => getColorStyles(color)}
`
