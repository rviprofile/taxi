import { css } from '@emotion/react'
import styled from '@emotion/styled'
import MuiButton from '@mui/material/Button'
import { ButtonProps as MuiButtonProps } from '@mui/material/Button'

import { gradientBlue, gradientGreen } from 'styled/components/ButtonGradient'

type Color = 'green' | 'blue' | 'red'

export interface ButtonProps extends Omit<MuiButtonProps, 'color'> {
	color?: Color
}

const getColorStyles = (color: Color | undefined) => {
	switch (color) {
		case 'green':
			return css`
				${gradientGreen}

				&:active::before {
					background: #2c7400;
				}
			`
		case 'blue':
			return css`
				${gradientBlue}

				&:active::before {
					background: #2f98cf;
				}
			`
		case 'red':
			return css`
					background: #FF4741;
					
					&:hover {
              background: #FF4741;
					}
			`
		default:
			return css`
				&:hover {
					background: var(--color-gray-200);
				}
			`
	}
}

export const Button = styled(({ color, ...props }: ButtonProps) => (
	<MuiButton {...props} />
))`
	${({ color }) => getColorStyles(color)}
	
	&:disabled {
		background: var(--color-gray-400);
		color: var(--color-gray-100);
		box-shadow: none;

		svg {
			fill: var(--color-gray-100);

			path {
				stroke: var(--color-gray-100);
			}
		}
	}
`
