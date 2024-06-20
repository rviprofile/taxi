import styled from '@emotion/styled'

import { Divider } from 'styled/components'

export { Divider }

export const SignInPage = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 100vh;
	z-index: 1;

	&::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		background-image: url('/img/logo-lines-bg.svg'),
			linear-gradient(252.44deg, #353b41 0%, #191a1c 100%);
		background-size: cover;
		z-index: -1;
	}

	@media (max-width: 500px) {
		&::before {
			content: '';
			position: absolute;
			width: 100%;
			height: 100%;
			left: 0;
			top: 0;
			background-image: url('/img/logo-lines-bg.svg'),
				linear-gradient(252.44deg, #353b41 0%, #191a1c 100%);
			background-size: auto;
			z-index: -1;
		}
	}
`

export const Logo = styled.div`
	filter: drop-shadow(0px 0px 60px rgba(0, 0, 0, 0.25));
`
