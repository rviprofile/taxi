import React, { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import {
	createColumnHelper,
	getCoreRowModel,
	getSortedRowModel,
	Row,
	SortingState
} from '@tanstack/react-table'
import { FormProvider, useForm } from 'react-hook-form'
import debounce from 'lodash.debounce'

import { Table } from 'ui'
import { Filters } from './components'

import { useCounterparties } from 'hooks'
import { ROUTE_NAMES } from 'constants/routes'
import { formatFullName, formatPhone } from 'utils'
import { CounterpartiesItem } from 'hooks/useCounterparties/useCounterparties.types'
import { CounterpartyStatus } from 'types/counterparty'

import * as S from './Table.styled'

type FieldValue = string | number[] | string[]

interface FormFields {
	[key: string]: FieldValue
}

export const CounterpartiesTable = () => {
	const router = useRouter()
	const useFormProps = useForm<FormFields>()
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
	} = useCounterparties()

	const columnHelper = createColumnHelper<CounterpartiesItem>()
	const [sorting, setSorting] = useState<SortingState>([])

	const updateFiltersDebounce = useCallback(debounce(setFilters, 1000), [])

	useEffect(() => {
		updateFiltersDebounce(filtersWatch)
	}, [filtersWatch, updateFiltersDebounce])

	useEffect(() => {
		reset(filters)
	}, [filters, reset])

	const renderCounterpartyStatus = (status: CounterpartyStatus) => {
		switch (status) {
			case 'working':
				return <S.CounterpartyStatus color="green">Работает</S.CounterpartyStatus>
			case 'not_working':
				return <S.CounterpartyStatus color="yellow">Не работает</S.CounterpartyStatus>
			case 'fired':
				return <S.CounterpartyStatus color="red">Уволен</S.CounterpartyStatus>
		}
	}

	const columns = [
		columnHelper.accessor(
			({ firstName, middleName, lastName }) => `${lastName} ${firstName} ${middleName}`,
			{
				header: 'ФИО/Название',
				cell: ({ row }) => {
					const { firstName, middleName, lastName } = row.original

					return formatFullName({ firstName, middleName, lastName })
				}
			}
		),
		columnHelper.accessor('status', {
			header: 'Статус',
			cell: ({ getValue }) => renderCounterpartyStatus(getValue())
		}),
		columnHelper.accessor('phone', {
			header: 'Телефон',
			cell: ({ getValue }) => formatPhone(getValue())
		}),
		columnHelper.accessor('drivingLicenseNumber', {
			header: 'Водит. удостоверение',
			cell: ({ getValue }) => `${getValue().slice(0, 4)} ${getValue().slice(4)}`
		})
	]

	const tableOptions = {
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
	}

	const toCounterpartyPage = ({ original }: Row<CounterpartiesItem>) => {
		router.push(ROUTE_NAMES.COUNTERPARTY.replace('[id]', original.id))
	}

	return (
		<S.CounterpartiesTable>
			<FormProvider {...useFormProps}>
				<Filters filterComponents={filterComponents} isLoading={isFiltersLoading} />
			</FormProvider>

			<S.Divider />

			<Table
				isLoading={isDataLoading || isFiltersLoading}
				options={tableOptions}
				noDataText="Контрагентов нет"
				onRowClick={toCounterpartyPage}
			/>
		</S.CounterpartiesTable>
	)
}
