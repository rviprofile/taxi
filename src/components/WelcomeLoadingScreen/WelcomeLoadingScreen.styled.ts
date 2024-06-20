import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { Text } from 'styled/components'

const keyframes = css`
	@keyframes showWelcomeText {
		from {
			opacity: 0;
		}

		to {
			opacity: 1;
		}
	}

	@keyframes showEntryText {
		from {
			opacity: 0;
		}

		to {
			opacity: 0.2;
		}
	}

	@keyframes hideLogoDark {
		from {
			opacity: 1;
			visibility: visible;
		}

		to {
			opacity: 0;
			visibility: hidden;
		}
	}

	@keyframes showLogoIron {
		from {
			opacity: 0;
		}

		to {
			opacity: 1;
		}
	}

	@keyframes showShadowLogoIron {
		from {
			filter: none;
		}

		to {
			filter: drop-shadow(0px 0px 150px #000000);
		}
	}

	@keyframes hideLogoIron {
		from {
			opacity: 1;
		}

		to {
			opacity: 0;
		}
	}

	@keyframes scaleLogoIron {
		from {
			transform: translateX(-50%) scale(0.89);
		}

		to {
			transform: translateX(-50%) scale(1);
		}
	}

	@keyframes hideBackground {
		from {
			opacity: 1;
		}

		to {
			opacity: 0;
		}
	}

	@keyframes hideLoadingScreen {
		from {
			opacity: 1;
			visibility: visible;
		}

		to {
			opacity: 0;
			visibility: hidden;
		}
	}
`

export const WelcomeLoadingScreen = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	min-height: 100vh;
	animation: hideLoadingScreen 0.25s 6s ease-out forwards;
	z-index: 1000;

	${keyframes}
`

export const Background = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100vw;
	min-height: 100vh;
	animation: hideBackground 0.25s ease-out forwards;
	animation-delay: 5s;
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

export const TopLogo = styled.div`
	filter: drop-shadow(0px 0px 60px rgba(0, 0, 0, 0.25));
`

export const WelcomeText = styled(Text)`
	position: absolute;
	top: 243px;
	display: flex;
	flex-direction: column;
	align-items: center;
	opacity: 0;
	animation: showWelcomeText 4s ease-out forwards;
	animation-delay: 0.8s;
`

export const Box = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 434px;
	height: 305px;
	padding: 15px;
	margin-top: 243px;
	background: linear-gradient(62.41deg, #1e2124 0%, #2b3034 100%);
	box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.25);
	border-radius: 5px;
	box-sizing: border-box;
`

export const EntryText = styled(Text)`
	margin-top: auto;
	opacity: 0;
	animation: showEntryText 4s ease-out forwards;
	animation-delay: 0.8s;
`

const Logo = styled.div`
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	z-index: 10;
`

export const LogoDark = styled(Logo)`
	top: 451px;
	width: 140px;
	height: 140px;
	animation: hideLogoDark 0.3s forwards;
	animation-delay: 0.8s;
`

export const LogoIron = styled(Logo)`
	top: 431px;
	width: 180px;
	height: 180px;
	transform: translateX(-50%) scale(0.89);
	opacity: 0;
	animation: showLogoIron 2s 0.8s ease-out forwards,
		scaleLogoIron 4s 0.8s ease-out forwards, showShadowLogoIron 0.25s 5s ease-out forwards,
		hideLogoIron 0.25s 6s ease-out forwards;
`
