import { Pagination } from 'components/common'
import { DatePicker } from 'ui'

import * as S from './DatePaginationFilter.styled'

interface DatePaginationFilterProps {
	date: Date | null
	onDateChange: (date: Date | null) => void
}

export const DatePaginationFilter = ({ date, onDateChange }: DatePaginationFilterProps) => {
	return (
		<S.DatePaginationFilter>
			<DatePicker selected={date} onChange={onDateChange} />

			<Pagination page={1} pageCount={10} onPrev={() => {}} onNext={() => {}} onLast={() => {}} />
		</S.DatePaginationFilter>
	)
}
