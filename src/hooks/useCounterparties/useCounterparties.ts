import { PaginationState } from '@tanstack/react-table'
import { useEffect, useMemo, useState } from 'react'

import { useWS } from '../useWS'

import { CounterpartiesData } from './useCounterparties.types'
import { FilterComponentData } from 'types/common'

type FilterValue = string | number[] | string[]

interface Filters {
	[key: string]: FilterValue
}

export const useCounterparties = () => {
	const block = 'contragent_list'

	const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
		pageIndex: 0,
		pageSize: 25
	})

	const pagination = useMemo(
		() => ({
			pageIndex,
			pageSize
		}),
		[pageIndex, pageSize]
	)

	const [filters, setFilters] = useState<Filters>()

	const { data: filtersData, isLoading: isFiltersLoading } = useWS<{
		filter: FilterComponentData[]
	}>({
		block: 'contragent_filter',
		id: 4549
	})

	const { data, isLoading: isDataLoading } = useWS<CounterpartiesData>({
		block,
		filter: { page: pageIndex + 1, ...filters },
		subscription: !isFiltersLoading && Boolean(filters)
	})

	// set defaultValues to filter from filtersData
	useEffect(() => {
		if (!filtersData) return

		const { filter } = filtersData

		const defaultValues = filter.reduce<[string, FilterValue][]>((prev, curr) => {
			const { code, defaultValue } = curr

			return [...prev, [code, defaultValue]]
		}, [])

		setFilters(Object.fromEntries(defaultValues))
	}, [filtersData])

	return {
		data,
		filters,
		filterComponents: filtersData?.filter,
		isDataLoading,
		isFiltersLoading,
		pagination,
		setPagination,
		setFilters
	}
}
