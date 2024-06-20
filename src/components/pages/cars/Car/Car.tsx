import { useState } from 'react'
import Grow from '@mui/material/Grow'

import * as S from './Car.styled'

interface CarProps {
	name: string
	dates: Date[]
}

export const Car = ({ name, dates }: CarProps) => {
	const [isExpanded, setExpanded] = useState(false)

	const formatDate = (date: Date | undefined) => {
		if (!date) return null

		const fullDate = date.toLocaleDateString()

		return `${fullDate.slice(0, 6)}${fullDate.slice(8)}`
	}

	const dateItems = dates.slice(0, -1).map((date, idx) => {
		return (
			<Grow key={formatDate(date)} in={isExpanded} timeout={{ enter: (idx + 1) * 300 }}>
				<S.Date>{formatDate(date)}</S.Date>
			</Grow>
		)
	})

	return (
		<S.Car>
			<span>{name}</span>

			{!isExpanded ? (
				<S.Dates>
					<S.Date>{formatDate(dates.at(0))}</S.Date>
					<S.Date>{formatDate(dates.at(1))}</S.Date>
					<S.Date>{formatDate(dates.at(2))}</S.Date>

					<S.Triplet
						onClick={() => {
							setExpanded(true)
						}}
					>
						...
					</S.Triplet>

					<S.Date>{formatDate(dates.at(-1))}</S.Date>
				</S.Dates>
			) : (
				<Grow in={isExpanded}>
					<S.DatesExpanded>{dateItems}</S.DatesExpanded>
				</Grow>
			)}
		</S.Car>
	)
}
