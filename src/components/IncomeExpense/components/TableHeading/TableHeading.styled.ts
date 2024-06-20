import styled from '@emotion/styled'

import { Text } from 'styled/components'
import { TextField } from 'ui/TextField/TextField.styled'

export { Text }

export const TableHeading = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 15px;
	background: var(--color-gray-300);
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;

	${Text} {
		display: flex;
		align-items: center;
	}
`

export const VariantIcon = styled.span`
	margin-right: 10px;
`

export const Filters = styled.div`
	display: flex;
	align-items: center;
	flex-grow: 1;
	justify-content: flex-end;

	${TextField} {
		max-width: 280px;
		margin-left: 20px;

		.MuiInput-root {
			height: 40px;
			padding: 12px 15px 12px 0;
			box-shadow: 1px 2px 7px rgba(0, 0, 0, 0.2);
		}

		input {
			padding: 0 10px 0 15px;
		}
	}
`
