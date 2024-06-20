import styled from '@emotion/styled'
import { css } from '@emotion/react'

interface ContentProps {
	isSidebarOpen: boolean
}

export const RootLayout = styled.div`
	position: relative;
	display: flex;
	min-height: 100vh;
`

export const Content = styled.div<ContentProps>`
	position: relative;
	left: 62px;
	display: flex;
	flex-direction: column;
	width: calc(100% - 62px);
	padding: 20px 20px 0 10px;
	box-sizing: border-box;
	z-index: 10;
	transition: 0.3s;

	${({ isSidebarOpen }) =>
		isSidebarOpen &&
		css`
			width: calc(100% - 229px);
			left: 229px;
		`}
`

export const Main = styled.main`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	gap: 15px;
	margin-top: 10px;
`

export const Background = styled.div`
	position: absolute;
	right: 0;
	bottom: 0;
`
