import { Pagination } from 'components/common'
import { DatePicker } from 'ui'

import * as S from './DatePaginationFilter.styled'

interface PagesData {
	page: number
	pages: number
}

interface DatePaginationFilterProps {
	date: Date | null
	onDateChange: (date: Date | null) => void
	pagesData: PagesData | undefined
	setPagesData: React.Dispatch<React.SetStateAction<PagesData | undefined>>
}

export const DatePaginationFilter = ({
	date,
	onDateChange,
	pagesData,
	setPagesData
}: DatePaginationFilterProps) => {
	let incomingPagesData = pagesData ? pagesData : { page: 1, pages: 1 }
	return (
		<S.DatePaginationFilter>
			<DatePicker selected={date} onChange={onDateChange} />
			<Pagination
				page={pagesData ? pagesData.page : 1}
				pageCount={pagesData ? pagesData.pages : 1}
				onPrev={() => {
					setPagesData({
						page: incomingPagesData!.page - 1,
						pages: incomingPagesData!.pages
					})
				}}
				onNext={() => {
					setPagesData({
						page: incomingPagesData!.page + 1,
						pages: incomingPagesData!.pages
					})
				}}
				onLast={() =>
					setPagesData({
						page: incomingPagesData!.pages,
						pages: incomingPagesData!.pages
					})
				}
			/>
		</S.DatePaginationFilter>
	)
}
