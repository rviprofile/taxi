import { useCallback, useEffect, useState } from 'react'
import {
	createColumnHelper,
	getCoreRowModel,
	getSortedRowModel,
	Row,
	SortingState
} from '@tanstack/react-table'
import { useRouter } from 'next/router'
import { FormProvider, useForm } from 'react-hook-form'

import { Table } from 'ui'
import { Filters } from '../../counterparties/Table/components'
import { CarStatus } from '../CarStatus/CarStatus'

import { ROUTE_NAMES } from 'constants/routes'
import { Car } from 'types/car'

import * as S from './Table.styled'
import { useCars } from 'hooks/useCars/useCars'
import debounce from 'lodash.debounce'

export const CarsTable = () => {
	const router = useRouter()
	const useFormProps = useForm()
	const { watch, reset } = useFormProps
	const filtersWatch = watch()

	const {
		data,
		filters,
		filterComponents,
		isDataLoading,
		isFiltersLoading,
		pagination,
		setPagination,
		setFilters
	} = useCars()

	const updateFiltersDebounce = useCallback(debounce(setFilters, 1000), [])

	useEffect(() => {
		updateFiltersDebounce(filtersWatch)
	}, [filtersWatch, updateFiltersDebounce])

	const cars: Car[] = [
		{
			id: '1',
			status: 'working',
			brand: 'Hyundai',
			notifications: 200,
			model: 'Sonata',
			year: '0000',
			licensePlate: 'В183СР 114',
			ctc: '9931731343',
			vin: '78564639284737264',
			mileage: '10 000',
			kpp: 'АКПП',
			owner: 'Назаренко Иван Иванович',
			color: 'Белый'
		},
		{
			id: '2',
			status: 'awaits',
			brand: 'Hyundai',
			notifications: 2,
			model: 'Sonata',
			year: '0000',
			licensePlate: 'В183СР 114',
			ctc: '9931731343',
			vin: '78564639284737264',
			mileage: '10 000',
			kpp: 'АКПП',
			owner: 'Назаренко Иван Иванович',
			color: 'Белый'
		},
		{
			id: '3',
			status: 'repairs',
			brand: 'Hyundai',
			notifications: 12,
			model: 'Sonata',
			year: '0000',
			licensePlate: 'В183СР 114',
			ctc: '9931731343',
			vin: '78564639284737264',
			mileage: '10 000',
			kpp: 'АКПП',
			owner: 'Назаренко Иван Иванович',
			color: 'Белый'
		},
		{
			id: '4',
			status: 'accident',
			brand: 'Hyundai',
			notifications: 1433,
			model: 'Sonata',
			year: '0000',
			licensePlate: 'В183СР 114',
			ctc: '9931731343',
			vin: '78564639284737264',
			mileage: '10 000',
			kpp: 'АКПП',
			owner: 'Назаренко Иван Иванович',
			color: 'Белый'
		}
	]

	const [sorting, setSorting] = useState<SortingState>([])

	const columnHelper = createColumnHelper<Car>()

	const columns = [
		columnHelper.accessor('brand', {
			header: 'Марка'
		}),
		columnHelper.accessor('model', {
			header: 'Модель'
		}),
		columnHelper.accessor('year', {
			header: 'Год'
		}),
		columnHelper.accessor('licensePlate', {
			header: 'Госномер'
		}),
		columnHelper.accessor('status', {
			header: 'Статус',
			cell: ({ getValue }) => <CarStatus status={getValue()} />
		}),
		columnHelper.accessor('ctc', {
			header: 'СТС'
		}),
		columnHelper.accessor('vin', {
			header: 'VIN'
		}),
		columnHelper.accessor('mileage', {
			header: 'Пробег'
		}),
		columnHelper.accessor('kpp', {
			header: 'КПП'
		}),
		columnHelper.accessor('owner', {
			header: 'Собственник'
		}),
		columnHelper.accessor('color', {
			header: 'Цвет'
		})
	]

	const toCarPage = ({ original }: Row<Car>) => {
		router.push(ROUTE_NAMES.CAR.replace('[id]', original.id))
	}

	return (
		<S.CarsTable>
			<FormProvider {...useFormProps}>
				<Filters filterComponents={filterComponents} isLoading={isFiltersLoading} />
			</FormProvider>

			<S.Divider />

			<Table
				options={{
					data: data?.list ?? [],
					pageCount: data?.pageTotal ?? -1,
					columns,
					state: {
						sorting,
						pagination
					},
					manualPagination: true,
					onSortingChange: setSorting,
					getCoreRowModel: getCoreRowModel(),
					getSortedRowModel: getSortedRowModel(),
					onPaginationChange: setPagination
				}}
				noDataText="Автомобилей нет"
				onRowClick={toCarPage}
			/>
		</S.CarsTable>
	)
}
