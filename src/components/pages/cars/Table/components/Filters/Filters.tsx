import { MouseEvent, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { CarStatus } from 'components/pages/cars'

import { FilterSelect, FilterText, SearchField } from 'components/common'
import { FiltersPopover } from '../FiltersPopover/FiltersPopover'
import { AdditionalFiltersPopover } from '../AdditionalFiltersPopover/AdditionalFiltersPopover'

import { CAR_STATUSES } from 'constants/carStatuses'
import { CarStatus as CarStatusType } from 'types/car'

import * as S from './Filters.styled'

import GearIcon from 'public/icons/gear.svg'

export const Filters = () => {
	const useFormProps = useForm()

	const [filtersPopoverAnchorEl, setFiltersPopoverAnchorEl] =
		useState<HTMLButtonElement | null>(null)

	const [additionalFiltersPopoverAnchorEl, setAdditionalFiltersPopoverAnchorEl] =
		useState<HTMLButtonElement | null>(null)

	const isFiltersPopoverOpen = Boolean(filtersPopoverAnchorEl)
	const isAdditionalFiltersPopoverOpen = Boolean(additionalFiltersPopoverAnchorEl)

	const openFiltersPopover = ({ currentTarget }: MouseEvent<HTMLButtonElement>) => {
		setFiltersPopoverAnchorEl(currentTarget)
	}

	const openAdditionalFiltersPopover = ({
		currentTarget
	}: MouseEvent<HTMLButtonElement>) => {
		setAdditionalFiltersPopoverAnchorEl(currentTarget)
	}

	const closeFiltersPopover = () => {
		setFiltersPopoverAnchorEl(null)
	}

	const closeAdditionalFiltersPopover = () => {
		setAdditionalFiltersPopoverAnchorEl(null)
	}

	const options = [
		{ label: 'Все', value: 'all', color: '' },
		{ label: 'Остальные', value: 'other', color: '' }
	]

	const statuses = [{ label: 'Все', value: 'all' }, ...CAR_STATUSES]

	return (
		<>
			<FormProvider {...useFormProps}>
				<S.Filters>
					<SearchField name="search" placeholder="Введите статус, год и пр." />

					<S.SelectGroup>
						<FilterText>Фильтры:</FilterText>

						{/* <FilterSelect
							multiple
							name="status"
							options={statuses}
							renderValue={(value) => {
								return (
									<>
										<S.SelectPlaceholder>Статус:</S.SelectPlaceholder>

										{value === 'all' ? (
											'Все'
										) : (
											<CarStatus status={value as CarStatusType} />
										)}
									</>
								)
							}}
						/>

						<FilterSelect
							name="year"
							placeholder="Год:"
							defaultValue="all"
							options={options}
						/>

						<FilterSelect
							name="owner"
							placeholder="Собственник:"
							defaultValue="all"
							options={options}
						/> */}
					</S.SelectGroup>

					<S.ButtonsGroup>
						<S.FiltersButton open={isFiltersPopoverOpen} onClick={openFiltersPopover}>
							<GearIcon />
						</S.FiltersButton>

						<S.AdditionalFiltersButton
							open={isAdditionalFiltersPopoverOpen}
							onClick={openAdditionalFiltersPopover}
						>
							Дополнительные фильтры
						</S.AdditionalFiltersButton>
					</S.ButtonsGroup>
				</S.Filters>
			</FormProvider>

			<FiltersPopover
				open={isFiltersPopoverOpen}
				anchorEl={filtersPopoverAnchorEl}
				onClose={closeFiltersPopover}
			/>

			<AdditionalFiltersPopover
				open={isAdditionalFiltersPopoverOpen}
				anchorEl={additionalFiltersPopoverAnchorEl}
				onClose={closeAdditionalFiltersPopover}
			/>
		</>
	)
}
