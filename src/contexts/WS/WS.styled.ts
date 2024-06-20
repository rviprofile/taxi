import styled from '@emotion/styled'

export const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	z-index: 1900;
	pointer-events: none;
`

export const Error = styled.div`
	display: flex;
	flex-direction: column;

	span:last-of-type {
		margin-top: 5px;
		font-weight: 400;
	}
`
