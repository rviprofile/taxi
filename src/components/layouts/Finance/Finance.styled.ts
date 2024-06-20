import styled from '@emotion/styled'

import { FilterSelect } from 'components/common/FilterSelect/FilterSelect.styled'
import { MenuNav } from 'components/common/MenuNav/MenuNav.styled'
import { TextField } from 'ui/TextField/TextField.styled'

export const FinanceLayout = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	width: 100%;
`

export const TopLine = styled.div`
	display: flex;
	justify-content: space-between;

	${MenuNav} {
		width: auto;
		margin-left: auto;

		a {
			display: flex;
			align-items: center;
			justify-content: center;
			font-weight: 500;
			font-size: 15px;
			line-height: 17px;
			padding: 7px 10px;
			transition: 0.3s;

			&:first-of-type {
				border-top-left-radius: 5px;
				border-bottom-left-radius: 5px;
			}

			&:last-of-type {
				border-top-right-radius: 5px;
				border-bottom-right-radius: 5px;
			}

			&:hover {
				background: #599109;
			}

			&:active {
				background: #19560a;
			}
		}
	}
`

export const TopLineLeft = styled.div`
	display: flex;
	align-items: center;
	flex-grow: 1;
	gap: 20px;

	${TextField} {
		max-width: 340px;
	}
`

export const Filters = styled.div`
	display: flex;
	align-items: center;
	gap: 15px;

	${FilterSelect} {
		width: 260px;
	}
`

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	flex-grow: 1;
	width: 100%;
	gap: 15px;
	margin-top: 15px;
`
