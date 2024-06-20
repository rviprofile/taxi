import { css } from '@emotion/react'
import styled from '@emotion/styled'

type Color = 'green' | 'yellow' | 'orange' | 'red' | 'blue' | 'gray'

interface ColoredDotTextProps {
	color: Color | string
}

export const Dot = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 17px;
	height: 17px;

	span {
		width: 8.5px;
		height: 8.5px;
		border-radius: 50%;
	}
`

export const getColorStyles = (color: Color | string) => {
	switch (color) {
		case 'green':
			return css`
				& > span {
					background-image: linear-gradient(270deg, #88b114 0%, #579d2c 100%);
					text-shadow: 0px 2px 5px rgba(161, 200, 50, 0.1);
				}

				${Dot} span {
					background-image: var(--gradient-green);
					filter: drop-shadow(0px 2px 5px rgba(161, 200, 50, 0.2));
				}
			`
		case 'yellow':
			return css`
				& > span {
					background-image: linear-gradient(45deg, #fcd062 -2.94%, #ffb702 102.94%);
					text-shadow: 0px 2px 5px rgba(252, 208, 98, 0.1);
				}

				${Dot} span {
					background-image: linear-gradient(45deg, #fcd062 -2.94%, #ffb702 102.94%);
					filter: drop-shadow(0px 2px 5px rgba(252, 208, 98, 0.2));
				}
			`
		case 'orange':
			return css`
				& > span {
					background-image: linear-gradient(45deg, #f39200 -2.94%, #cf7c00 102.94%);
					text-shadow: 0px 2px 5px rgba(219, 154, 57, 0.1);
				}

				${Dot} span {
					background-image: linear-gradient(45deg, #f39200 -2.94%, #cf7c00 102.94%);
					filter: drop-shadow(0px 2px 5px rgba(219, 154, 57, 0.2));
				}
			`
		case 'red':
			return css`
				& > span {
					background-image: linear-gradient(73.26deg, #914e4e 0%, #ff0000 100%);
					text-shadow: 0px 2px 5px rgba(255, 0, 0, 0.1);
				}

				${Dot} span {
					background-image: linear-gradient(45deg, #ff0000 -2.94%, #740000 102.94%);
					filter: drop-shadow(0px 2px 5px rgba(255, 0, 0, 0.2));
				}
			`
		case 'blue':
			return css`
				& > span {
					background-image: linear-gradient(89.87deg, #2f98cf 0%, #2fb8be 99.98%);
					text-shadow: 0px 2px 5px rgba(47, 159, 203, 0.1);
				}

				${Dot} span {
					background: #2f98cf;
					filter: drop-shadow(0px 2px 5px rgba(47, 159, 203, 0.2));
				}
			`
		case 'gray':
			return css`
				& > span {
					background-image: linear-gradient(45deg, #b4b4b4 -2.94%, #e2e2e2 102.94%);
					text-shadow: 0px 2px 5px rgba(161, 200, 50, 0.1);
				}

				${Dot} span {
					background: linear-gradient(45deg, #b4b4b4 -2.94%, #e2e2e2 102.94%);
				}
			`
		default:
			return null
	}
}

export const ColoredDotText = styled.div<ColoredDotTextProps>`
	position: relative;
	display: flex;
	align-items: center;

	& > span {
		margin-left: 2px;
		background-clip: text;
		color: transparent;
	}

	${({ color }) => getColorStyles(color)}
`
