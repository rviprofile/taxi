import { css } from '@emotion/react'
import styled from '@emotion/styled'

interface PaginationButtonProps {
	hoverAvailable?: boolean
}

export const Pagination = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 5px;
`

export const PaginationButton = styled.button<PaginationButtonProps>`
	opacity: 0.2;
	transition: 0.3s;
	cursor: auto;

	${({ hoverAvailable }) =>
		hoverAvailable &&
		css`
			&:hover {
				opacity: 1;
				cursor: pointer;
			}
		`}
`

export const FirstPageButton = styled(PaginationButton)`
	transform: rotate(180deg);
`

export const PrevButton = styled(PaginationButton)`
	transform: rotate(90deg);
`

export const NextButton = styled(PaginationButton)`
	transform: rotate(-90deg);
`

export const LastPageButton = styled(PaginationButton)``

export const Pages = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
`

export const CurrentPage = styled.div`
	padding: 2px 6px;
	background: var(--color-gray-200);
	border-radius: 2px;
`

export const PagesNumber = styled.div`
	color: var(--color-gray-100);
`
