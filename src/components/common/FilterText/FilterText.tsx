import { ReactNode } from 'react'

import * as S from './FilterText.styled'

import FilterIcon from 'public/icons/filter.svg'

export const FilterText = ({ children }: { children: ReactNode }) => {
	return (
		<S.FilterText>
			<FilterIcon />
			<span>{children}</span>
		</S.FilterText>
	)
}
