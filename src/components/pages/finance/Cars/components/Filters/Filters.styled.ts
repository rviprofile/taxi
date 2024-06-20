import styled from '@emotion/styled'

import { Placeholder } from 'components/common/FilterSelect/FilterSelect.styled'
import { SelectContainer } from 'ui/Select/Select.styled'
import { TextField } from 'ui/TextField/TextField.styled'

export { Placeholder as SelectPlaceholder }

export const Filters = styled.div`
	display: flex;
	align-items: center;
	width: 100%;

	& > *:not(:last-child) {
		margin-right: 15px;
	}

	& > ${TextField} {
		flex-grow: 1;
		margin-right: 20px;
	}

	${SelectContainer} {
		width: 240px;
		flex-shrink: 0;
	}

	& > span {
		color: var(--color-gray-100);
	}
`
