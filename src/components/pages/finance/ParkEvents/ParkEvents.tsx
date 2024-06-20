import { useState } from 'react'
import { createColumnHelper, getCoreRowModel } from '@tanstack/react-table'

import { DatePaginationFilter, Heading } from 'components/common'
import { Table } from 'ui'

import * as S from './ParkEvents.styled'

import MoveIcon from 'public/icons/move.svg'

interface Event {
	time: string
	event: string
	executor: string
	status: 'green' | 'blue'
}

export const ParkEvents = () => {
	const [date, setDate] = useState<Date | null>(null)
	const columnHelper = createColumnHelper<Event>()

	const events: Event[] = [
		{
			time: new Intl.DateTimeFormat('default', {
				hour: '2-digit',
				minute: '2-digit'
			}).format(new Date()),
			event: 'СТО М860ВХ198',
			executor: 'Иванов И. И.',
			status: 'green'
		},
		{
			time: new Intl.DateTimeFormat('default', {
				hour: '2-digit',
				minute: '2-digit'
			}).format(new Date()),
			event: 'Оформление отчетной документации',
			executor: 'Иванов И. И.',
			status: 'blue'
		},
		{
			time: new Intl.DateTimeFormat('default', {
				hour: '2-digit',
				minute: '2-digit'
			}).format(new Date()),
			event: 'СТО М860ВХ198',
			executor: 'Иванов И. И.',
			status: 'green'
		}
	]

	const columns = [
		columnHelper.accessor('time', {
			header: 'Время',
			cell: ({ getValue, row }) => {
				return (
					<S.Time color={row.original.status}>
						{getValue()}
						<span />
					</S.Time>
				)
			}
		}),
		columnHelper.accessor('event', {
			header: 'Событие',
			cell: ({ getValue }) => (
				<>
					<S.Text>{getValue()}</S.Text> <S.TextOverflowFadeOut />
				</>
			)
		}),
		columnHelper.accessor('executor', {
			header: 'Исполнитель'
		})
	]

	return (
		<S.ParkEvents>
			<Heading
				endAdornment={
					<button>
						<MoveIcon width={21} height={21} viewBox="0 0 16 16" />
					</button>
				}
			>
				События по парку
			</Heading>

			<DatePaginationFilter date={date} onDateChange={setDate} />

			<Table
				noPagination
				options={{
					data: events,
					columns,
					getCoreRowModel: getCoreRowModel()
				}}
			/>
		</S.ParkEvents>
	)
}
