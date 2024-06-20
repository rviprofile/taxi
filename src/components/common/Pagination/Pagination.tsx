import Skeleton from '@mui/material/Skeleton'

import * as S from './Pagination.styled'

import ArrowDownIcon from 'public/icons/arrow-down.svg'
import ArrowDoubleRightIcon from 'public/icons/arrow-double-right.svg'

interface PaginationProps {
	page: number
	pageCount: number
	isLoading?: boolean
	onFirst?: () => void
	onPrev?: () => void
	onNext?: () => void
	onLast?: () => void
}

export const Pagination = ({
	page,
	pageCount,
	isLoading,
	onFirst,
	onPrev,
	onNext,
	onLast
}: PaginationProps) => {
	const firstAvailable = page !== 1
	const prevAvailable = page !== 1
	const nextAvailable = page !== pageCount
	const lastAvailable = page !== pageCount

	if (isLoading) {
		return (
			<S.Pagination>
				<Skeleton width="100%" height={21} />
			</S.Pagination>
		)
	}

	return (
		<S.Pagination>
			{firstAvailable ? (
				<S.FirstPageButton hoverAvailable onClick={onFirst}>
					<ArrowDoubleRightIcon />
				</S.FirstPageButton>
			) : null}

			<S.PrevButton
				hoverAvailable={prevAvailable}
				onClick={() => {
					if (prevAvailable) {
						onPrev()
					}
				}}
			>
				<ArrowDownIcon />
			</S.PrevButton>

			<S.Pages>
				<S.CurrentPage>{page}</S.CurrentPage>

				<S.PagesNumber>из {pageCount}</S.PagesNumber>
			</S.Pages>

			<S.NextButton
				hoverAvailable={nextAvailable}
				onClick={() => {
					if (nextAvailable) {
						onNext()
					}
				}}
			>
				<ArrowDownIcon />
			</S.NextButton>

			{lastAvailable ? (
				<S.LastPageButton hoverAvailable onClick={onLast}>
					<ArrowDoubleRightIcon />
				</S.LastPageButton>
			) : null}
		</S.Pagination>
	)
}
