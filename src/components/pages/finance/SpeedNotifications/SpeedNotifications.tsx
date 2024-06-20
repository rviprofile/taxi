import { useState } from 'react'
import { createColumnHelper, getCoreRowModel } from '@tanstack/react-table'

import { DatePaginationFilter, Heading } from 'components/common'
import { Table } from 'ui'

import * as S from './SpeedNotifications.styled'

import MoveIcon from 'public/icons/move.svg'

interface Notification {
	time: string
	car: string
	driver: string
	kmH: number
}

export const SpeedNotifications = () => {
	const [date, setDate] = useState<Date | null>(null)
	const columnHelper = createColumnHelper<Notification>()

	const notifications: Notification[] = [
		{
			time: new Intl.DateTimeFormat('default', {
				hour: '2-digit',
				minute: '2-digit'
			}).format(new Date()),
			car: 'M860ВХ198',
			driver: 'Иванов И. И.',
			kmH: 86
		},
		{
			time: new Intl.DateTimeFormat('default', {
				hour: '2-digit',
				minute: '2-digit'
			}).format(new Date()),
			car: 'M860ВХ198',
			driver: 'Иванов И. И.',
			kmH: 86
		},
		{
			time: new Intl.DateTimeFormat('default', {
				hour: '2-digit',
				minute: '2-digit'
			}).format(new Date()),
			car: 'M860ВХ198',
			driver: 'Иванов И. И.',
			kmH: 86
		}
	]

	const columns = [
		columnHelper.accessor('time', {
			header: 'Время',
			cell: ({ getValue }) => {
				return (
					<S.Time color="green">
						{getValue()}
						<span />
					</S.Time>
				)
			}
		}),
		columnHelper.accessor('car', {
			header: 'Автомобиль'
		}),
		columnHelper.accessor('driver', {
			header: 'Водитель'
		}),
		columnHelper.accessor('kmH', {
			header: 'Км/ч'
		})
	]

	return (
		<S.SpeedNotifications>
			<Heading
				endAdornment={
					<button>
						<MoveIcon width={21} height={21} viewBox="0 0 16 16" />
					</button>
				}
			>
				Уведомления о привышении
			</Heading>

			<DatePaginationFilter date={date} onDateChange={setDate} />

			<Table
				noPagination
				options={{
					data: notifications,
					columns,
					getCoreRowModel: getCoreRowModel()
				}}
			/>
		</S.SpeedNotifications>
	)
}
