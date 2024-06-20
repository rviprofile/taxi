import { useState } from 'react'
import { createColumnHelper, getCoreRowModel } from '@tanstack/react-table'

import { DatePaginationFilter, Heading, Pagination } from 'components/common'
import { Table } from 'ui'

import * as S from './Debtors.styled'

import MoveIcon from 'public/icons/move.svg'

interface Debtor {
	licensePlate: string
	driver: string
	phone: string
	balance: string
}

export const Debtors = () => {
	const [date, setDate] = useState<Date | null>(null)
	const columnHelper = createColumnHelper<Debtor>()

	const debtors: Debtor[] = [
		{
			licensePlate: 'MA 1894 3K',
			driver: 'Иванов И. И.',
			phone: '+79254425430',
			balance: '- 00 000'
		},
		{
			licensePlate: 'MA 1894 3K',
			driver: 'Иванов И. И.',
			phone: '+79254425430',
			balance: '- 00 000'
		},
		{
			licensePlate: 'MA 1894 3K',
			driver: 'Иванов И. И.',
			phone: '+79254425430',
			balance: '- 00 000'
		}
	]

	const columns = [
		columnHelper.accessor('licensePlate', {
			header: 'Гос. номер'
		}),
		columnHelper.accessor('driver', {
			header: 'Водитель'
		}),
		columnHelper.accessor('phone', {
			header: 'Телефон'
		}),
		columnHelper.accessor('balance', {
			header: 'Баланс',
			cell: ({ getValue }) => {
				return (
					<S.BalanceRow>
						<span>{getValue()}</span>

						<button>
							<S.Badge color="green">Заблокировать</S.Badge>
						</button>
					</S.BalanceRow>
				)
			}
		})
	]

	return (
		<S.Debtors>
			<Heading
				endAdornment={
					<button>
						<MoveIcon width={21} height={21} viewBox="0 0 16 16" />
					</button>
				}
			>
				Должники
			</Heading>

			<Pagination
				page={1}
				pageCount={10}
				onPrev={() => {}}
				onNext={() => {}}
				onLast={() => {}}
			/>

			<Table
				noPagination
				options={{
					data: debtors,
					columns,
					getCoreRowModel: getCoreRowModel()
				}}
			/>
		</S.Debtors>
	)
}
