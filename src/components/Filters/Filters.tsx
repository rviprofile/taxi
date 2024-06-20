import { MouseEvent, useState } from 'react'
import Link from 'next/link'
import Skeleton from '@mui/material/Skeleton'

import { CustomFilter, FilterText } from 'components/common'
import { FiltersPopover } from '../pages/counterparties/Table/components/FiltersPopover/FiltersPopover'
import { AdditionalFiltersPopover } from '../pages/counterparties/Table/components/AdditionalFiltersPopover/AdditionalFiltersPopover'

import { ROUTE_NAMES } from 'constants/routes'
import { FilterComponentData } from 'types/common'

import * as S from './Filters.styled'

import GearIcon from 'public/icons/gear.svg'
import PlusIcon from 'public/icons/plus.svg'

interface FiltersProps {
	filterComponents?: FilterComponentData[]
	isLoading: boolean
}

export const Filters = ({ filterComponents = [], isLoading }: FiltersProps) => {
	const [filtersPopoverAnchorEl, setFiltersPopoverAnchorEl] =
		useState<HTMLButtonElement | null>(null)
	const [additionalFiltersPopoverAnchorEl, setAdditionalFiltersPopoverAnchorEl] =
		useState<HTMLButtonElement | null>(null)
	const [counterpartiesPopoverAnchorEl, setCounterpartiesPopoverAnchorEl] =
		useState<HTMLButtonElement | null>(null)

	const isFiltersPopoverOpen = Boolean(filtersPopoverAnchorEl)
	const isAdditionalFiltersPopoverOpen = Boolean(additionalFiltersPopoverAnchorEl)
	const isCounterpartiesPopoverOpen = Boolean(counterpartiesPopoverAnchorEl)

	const mainFilters = filterComponents.filter(({ main }) => main)
	const additionalFilters = filterComponents.filter(({ main }) => !main)

	const openFiltersPopover = ({ currentTarget }: MouseEvent<HTMLButtonElement>) => {
		setFiltersPopoverAnchorEl(currentTarget)
	}

	const openAdditionalFiltersPopover = ({
		currentTarget
	}: MouseEvent<HTMLButtonElement>) => {
		setAdditionalFiltersPopoverAnchorEl(currentTarget)
	}

	const openCounterpartiesPopover = ({
		currentTarget
	}: MouseEvent<HTMLButtonElement>) => {
		setCounterpartiesPopoverAnchorEl(currentTarget)
	}

	const closeFiltersPopover = () => {
		setFiltersPopoverAnchorEl(null)
	}

	const closeAdditionalFiltersPopover = () => {
		setAdditionalFiltersPopoverAnchorEl(null)
	}

	const closeCounterpartiesPopover = () => {
		setCounterpartiesPopoverAnchorEl(null)
	}

	if (isLoading || !filterComponents) {
		return (
			<S.Filters>
				<Skeleton width="100%" height={40} />
			</S.Filters>
		)
	}

	return (
		<>
			<S.Filters>
				<CustomFilter {...mainFilters[0]} />

				<S.SelectGroup>
					<FilterText>Фильтры:</FilterText>

					{mainFilters.slice(1).map((filterData) => {
						return <CustomFilter key={filterData.code} {...filterData} />
					})}
				</S.SelectGroup>

				<S.ButtonsGroup>
					<S.PopoverButton
						open={isAdditionalFiltersPopoverOpen}
						onClick={openAdditionalFiltersPopover}
					>
						Дополнительные фильтры
					</S.PopoverButton>

					<S.PopoverButton
						open={isFiltersPopoverOpen}
						arrow={false}
						onClick={openFiltersPopover}
					>
						<GearIcon />
					</S.PopoverButton>

					<S.PopoverButton
						open={isCounterpartiesPopoverOpen}
						arrow={false}
						onClick={openCounterpartiesPopover}
					>
						<PlusIcon />
					</S.PopoverButton>
				</S.ButtonsGroup>
			</S.Filters>

			<FiltersPopover
				open={isFiltersPopoverOpen}
				anchorEl={filtersPopoverAnchorEl}
				onClose={closeFiltersPopover}
			/>

			<AdditionalFiltersPopover
				open={isAdditionalFiltersPopoverOpen}
				anchorEl={additionalFiltersPopoverAnchorEl}
				filterComponents={additionalFilters}
				onClose={closeAdditionalFiltersPopover}
			/>

			<S.CounterpartiesPopover
				open={isCounterpartiesPopoverOpen}
				anchorEl={counterpartiesPopoverAnchorEl}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right'
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right'
				}}
				onClose={closeCounterpartiesPopover}
			>
				<Link href={ROUTE_NAMES.COUNTERPARTIES_CREATE_INDIVIDUAL}>Физическое лицо</Link>
				<Link href={ROUTE_NAMES.COUNTERPARTIES_CREATE_LEGAL_ENTITY}>
					Юридическое лицо
				</Link>
			</S.CounterpartiesPopover>
		</>
	)
}
