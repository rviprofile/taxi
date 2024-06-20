import { useState } from 'react'
import { createColumnHelper, getCoreRowModel } from '@tanstack/react-table'

import { AddChargeModal } from 'components'
import { CurrencyAmount, DatePaginationFilter, Heading } from 'components/common'
import { Button, Table } from 'ui'

import * as S from './ChargesTable.styled'

import EditIcon from 'public/icons/edit.svg'
import TrashIcon from 'public/icons/trash-2.svg'

interface Column {
	date: string
	time: string
	name: string
	sum: number
}

export const ChargesTable = () => {
	const [isAddChargeModalOpen, setAddChargeModalOpen] = useState(false)
	const [date, setDate] = useState<Date | null>(null)

	const columnHelper = createColumnHelper<Column>()

	const charges: Column[] = [
		{
			date: new Intl.DateTimeFormat().format(new Date()),
			time: new Intl.DateTimeFormat('default', {
				hour: '2-digit',
				minute: '2-digit'
			}).format(new Date()),
			name: 'Аренда',
			sum: 250
		},
		{
			date: new Intl.DateTimeFormat().format(new Date()),
			time: new Intl.DateTimeFormat('default', {
				hour: '2-digit',
				minute: '2-digit'
			}).format(new Date()),
			name: 'Аренда',
			sum: 250
		}
	]

	const columns = [
		columnHelper.accessor('date', {
			header: 'Дата'
		}),
		columnHelper.accessor('time', {
			header: 'Время'
		}),
		columnHelper.accessor('name', {
			header: 'Название'
		}),
		columnHelper.accessor('sum', {
			header: 'Сумма',
			cell: ({ getValue }) => (
				<S.ActionsCell>
					<CurrencyAmount fraction value={getValue()} />

					<S.Actions>
						<button>
							<EditIcon />
						</button>

						<button>
							<TrashIcon />
						</button>
					</S.Actions>
				</S.ActionsCell>
			)
		})
	]

	return (
		<>
			<S.ChargesTable>
				<Heading
					endAdornment={
						<Button
							color="green"
							onClick={() => {
								setAddChargeModalOpen(true)
							}}
						>
							Добавить
						</Button>
					}
				>
					Списания
				</Heading>

				<DatePaginationFilter date={date} onDateChange={setDate} />

				<Table
					noPagination
					options={{
						data: charges,
						columns,
						getCoreRowModel: getCoreRowModel()
					}}
				/>
			</S.ChargesTable>

			<AddChargeModal
				open={isAddChargeModalOpen}
				onClose={() => {
					setAddChargeModalOpen(false)
				}}
			/>
		</>
	)
}
