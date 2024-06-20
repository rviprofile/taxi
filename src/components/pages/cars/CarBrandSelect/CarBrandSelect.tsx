import { useFormContext } from 'react-hook-form'
import Tooltip from '@mui/material/Tooltip'
import { useState } from 'react'

import { SearchField } from 'components/common'
import { Checkbox } from 'ui'

import * as S from './CarBrandSelect.styled'

export const CarBrandSelect = () => {
	const { watch, setValue } = useFormContext()
	const [isTooltipOpen, setTooltipOpen] = useState(false)

	const brands = [
		{ label: 'Audi', value: 'Audi' },
		{ label: 'Acura', value: 'Acura' },
		{ label: 'BMW', value: 'BMW' },
		{ label: 'Alfa Romeo', value: 'Alfa Romeo' }
	]

	const currentValues = watch('carBrands') as string[]
	const allValues = brands.reduce<string[]>((prev, { value }) => [...prev, value], [])

	const valuesLabels = currentValues.map((value, idx, arr) => {
		const notLastIdx = arr.length - 1 !== idx
		const label = brands.find((brand) => brand.value === value)?.label
		return (
			<span key={label}>
				{label} {notLastIdx ? ',' : null}
			</span>
		)
	})

	return (
		<Tooltip title={valuesLabels} open={isTooltipOpen && Boolean(valuesLabels.length)}>
			<div></div>
			{/* <S.CarBrandSelect
				multiple
				name="carBrands"
				onMouseEnter={() => {
					setTooltipOpen(true)
				}}
				onMouseLeave={() => {
					setTooltipOpen(false)
				}}
				onClick={() => {
					setTooltipOpen(false)
				}}
				renderValue={() => {
					return (
						<>
							<>
								<S.Placeholder>Марка:</S.Placeholder>

								<S.PlaceholderValues>
									{currentValues.length ? valuesLabels : 'Не выбрано'}
								</S.PlaceholderValues>
							</>

							<S.OverflowMask />
						</>
					)
				}}
			>
				<SearchField name="carBrandsSearch" placeholder="Поиск" />

				<S.MenuItem
					onClick={() => {
						setValue('carBrands', allValues)
					}}
				>
					Все
				</S.MenuItem>

				<S.Divider />

				{brands.map(({ label, value }) => {
					return (
						<S.MenuItem key={value} value={value}>
							<Checkbox
								name={`carBrands-${value}`}
								checked={currentValues.includes(value)}
							/>
							<S.MenuItemLabel>{label}</S.MenuItemLabel>
						</S.MenuItem>
					)
				})}
			</S.CarBrandSelect> */}
		</Tooltip>
	)
}
