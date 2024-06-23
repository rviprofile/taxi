import { useEffect, useState } from 'react'
import { createColumnHelper, getCoreRowModel } from '@tanstack/react-table'

import { BookingModal } from '../BookingModal/BookingModal'
import { DatePaginationFilter, Heading } from 'components/common'
import { Table } from 'ui'
import { useQuery } from '@tanstack/react-query'

import * as S from './AvailableCars.styled'

import MoveIcon from 'public/icons/move.svg'
import carsDashboard from 'api/carsDashboard/carsDashboard'

// Тип обьекта, который используется в таблице
interface AvailableCar {
	id: number
	brand: string
	model: string
	licensePlate: string
	number: string
	status: string
}

// Из API приходит [[ApiData, ApiData, ApiData], ...]
interface ApiData {
	value: string
	id: number
	name?: string
}

interface PagesData {
	page: number
	pages: number
}

export const AvailableCars = () => {
	const [date, setDate] = useState<Date | null>(null)
	const [isBookingModalOpen, setBookingModalOpen] = useState(false)
	const columnHelper = createColumnHelper<AvailableCar>()

	const { data, isLoading, isError, error, refetch } = useQuery({
		queryKey: ['cars'],
		queryFn: async () =>
			await carsDashboard.getCarsDashboard({ page: pagesData ? pagesData.page : 1 })
	})

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

	// В состоянии активная страница и общее количество страниц
	const [pagesData, setPagesData] = useState<PagesData>()
	// availableCars идет в таблицу
	const [availableCars, setAvailableCars] = useState<AvailableCar[]>([])
	// id автомобиля для брони
	const [carId, setCarId] = useState<number>()

	useEffect(() => {
		let response = []
		if (data && data.data.list) {
			response = data?.data.list.map((element: ApiData[]) => {
				let newobj: AvailableCar = {
					id: 0,
					brand: '',
					model: '',
					licensePlate: '',
					number: '',
					status: ''
				}
				for (let i in element) {
					if (parseInt(i) === 0) {
						newobj.brand = element[i].value
						newobj.id = element[i].id
					} else if (parseInt(i) === 1) {
						newobj.model = element[i].value
					} else if (parseInt(i) === 2) {
						newobj.number = element[i].value
					} else if (parseInt(i) === 3) {
						newobj.status = element[i].value
					}
				}
				return newobj
			})
			setPagesData({ page: data.data.page, pages: data.data.pages })
		}
		setAvailableCars(response)
	}, [data])

	// Изменилась траница? refetch()
	useEffect(() => {
		refetch()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pagesData?.page])

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
				const { status, id } = row.original

				return (
					<S.LicensePlateRow>
						<span>{getValue()}</span>

						{status === 'free' ? (
							<button>
								<S.Badge
									color="green"
									onClick={() => {
										setBookingModalOpen(true)
										setCarId(id)
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

				<DatePaginationFilter
					date={date}
					onDateChange={setDate}
					pagesData={pagesData}
					setPagesData={setPagesData}
				/>

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
				carId={carId!}
				onClose={() => {
					setBookingModalOpen(false)
				}}
			/>
		</>
	)
}
