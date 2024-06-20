import { useEffect, useState } from 'react'
import {
	createColumnHelper,
	getCoreRowModel,
} from '@tanstack/react-table'

import { BookingModal } from '../BookingModal/BookingModal'
import { DatePaginationFilter, Heading } from 'components/common'
import { Table } from 'ui'
import { format } from 'date-fns'
import { useQuery } from '@tanstack/react-query'
import FinanceCarsService from '../../../../api/finance/cars'

import * as S from './AvailableCars.styled'

import MoveIcon from 'public/icons/move.svg'

interface AvailableCar {
	actual_sum: number
	brand: string
	driver_name: string
	driver_phone: string
	model: string
	number: string
	licensePlate: string
	status: 'available' | 'booked'
	status_name: string
	waited_sum: number
	warning: boolean
}

export const AvailableCars = () => {
	const [date, setDate] = useState<Date | null>(null)
	const [isBookingModalOpen, setBookingModalOpen] = useState(false)
	const columnHelper = createColumnHelper<AvailableCar>()

	const { data, isLoading, isError, error, refetch } = useQuery({
		queryKey: ['cars'],
		queryFn: async () =>
			await FinanceCarsService.getCars({
				codes,
				statuses,
				brands,
				sort,
				models,
				dates: {
					from: format(startDate as Date, 'dd.MM.yyyy'),
					to: format(endDate as Date, 'dd.MM.yyyy')
				}
			})
	})
	console.log(data?.data.data)

	const [codes, setCodes] = useState<{ [key: string]: string }>({
		statuses: '',
		brands: '',
		models: '',
		sort: ''
	})
	const [statuses, setStatuses] = useState<string[]>([])
	const [brands, setBrands] = useState<string[]>([])
	const [models, setModels] = useState<string[]>([])
	const [sort, setSort] = useState<{ name: string; code: string }[]>([])
	const [isSubmit, setIsSubmit] = useState<boolean>(false)
	const [startDate, setStartDate] = useState<Date | string>(
		new Date(new Date().setDate(new Date().getDate() - 1))
	)
	const [endDate, setEndDate] = useState<Date | string>(new Date())

	const [availableCars, setAvailableCars] = useState<AvailableCar[]>([])
	useEffect(() => {
		console.log(data)
		if (data) {
			setAvailableCars(data!.data.data.cars)
		}
	}, [data])

	const columns = [
		columnHelper.accessor('brand', {
			header: 'Марка'
		}),
		columnHelper.accessor('model', {
			header: 'Модель'
		}),
		columnHelper.accessor('number', {
			header: 'Гос. номер'
		}),
		columnHelper.accessor('licensePlate', {
			header: '',
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
