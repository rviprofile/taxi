import { useState } from 'react'
import { createColumnHelper, getCoreRowModel } from '@tanstack/react-table'

import { BookingModal } from '../BookingModal/BookingModal'
import { DatePaginationFilter, Heading } from 'components/common'
import { Table } from 'ui'

import * as S from './AvailableCars.styled'

import MoveIcon from 'public/icons/move.svg'

interface AvailableCar {
	brand: string
	model: string
	licensePlate: string
	status: 'available' | 'booked'
}

export const AvailableCars = () => {
	const [date, setDate] = useState<Date | null>(null)
	const [isBookingModalOpen, setBookingModalOpen] = useState(false)
	const columnHelper = createColumnHelper<AvailableCar>()

	const availableCars: AvailableCar[] = [
		{ brand: 'KIA', model: 'K5', licensePlate: 'MA 1894 3K', status: 'available' },
		{ brand: 'Audi', model: 'K5', licensePlate: 'MA 1894 3K', status: 'booked' },
		{ brand: 'Audi', model: 'K5', licensePlate: 'MA 1894 3K', status: 'available' }
	]

	const columns = [
		columnHelper.accessor('brand', {
			header: 'Марка'
		}),
		columnHelper.accessor('model', {
			header: 'Модель'
		}),
		columnHelper.accessor('licensePlate', {
			header: 'Гос. номер',
			cell: ({ getValue, row }) => {
				const { status } = row.original

				return (
					<S.LicensePlateRow>
						<span>{getValue()}</span>

						{status === 'available' ? (
							<button>
								<S.Badge
									color="green"
									onClick={() => {
										setBookingModalOpen(true)
									}}
								>
									Свободен
								</S.Badge>
							</button>
						) : (
							<button>
								<S.Badge color="blue">Бронь</S.Badge>
							</button>
						)}
					</S.LicensePlateRow>
				)
			}
		})
	]

	return (
		<>
			<S.AvailableCars>
				<Heading
					endAdornment={
						<button>
							<MoveIcon width={21} height={21} viewBox="0 0 16 16" />
						</button>
					}
				>
					Свободные автомобили
				</Heading>

				<DatePaginationFilter date={date} onDateChange={setDate} />

				<Table
					noPagination
					options={{
						data: availableCars,
						columns,
						getCoreRowModel: getCoreRowModel()
					}}
				/>
			</S.AvailableCars>

			<BookingModal
				open={isBookingModalOpen}
				onClose={() => {
					setBookingModalOpen(false)
				}}
			/>
		</>
	)
}
