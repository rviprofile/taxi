import { useFormContext } from 'react-hook-form'
import { useState } from 'react'

import { ColoredDotText } from 'components/common'
import { Checkbox } from 'ui'

import { SelectProps } from 'ui/Select/Select'

import * as S from './FilterSelect.styled'
import { ClickAwayListener } from '@mui/material'

interface Option {
	label: string
	value: string
	color?: string | ''
}

interface FilterSelect extends SelectProps {
	label?: string
	name: string
	options: Option[]
}

export const FilterSelect = ({
	label,
	name,
	options,
	placeholder,
	...props
}: FilterSelect) => {
	const { watch, setValue } = useFormContext()
	const currentValues = (watch(name) as string[]) || []
	const allValues = options.reduce<string[]>((prev, { value }) => [...prev, value], [])

	const [open, setOpen] = useState(false)

	const handleClose = () => {
		setOpen(false)
	}

	const handleOpen = () => {
		setOpen(true)
	}

	const renderValuesPlaceholder = (options: Option[], values: string[]) => {
		return values.map((value, idx, arr) => {
			const option = options.find((option) => option.value === value)

			if (!option) return

			const { color, label } = option

			if (!color) {
				const isntLastItem = arr.length - 1 !== idx

				return `${label}${isntLastItem ? ', ' : ''}`
			}

			return (
				<ColoredDotText key={value} color={color}>
					{label}
				</ColoredDotText>
			)
		})
	}

	return (
		<ClickAwayListener
			onClickAway={() => {
				setOpen(false)
			}}
		>
			<S.FilterSelect
				name={name}
				defaultValue={[]}
				open={open}
				MenuProps={{
					disablePortal: true,
					disableEnforceFocus: true
				}}
				onClose={handleClose}
				onOpen={handleOpen}
				renderValue={() => {
					return (
						<>
							<>
								<S.Placeholder>{label || placeholder}:</S.Placeholder>

								<S.PlaceholderValues>
									{currentValues.length
										? renderValuesPlaceholder(options, currentValues)
										: 'Не выбрано'}
								</S.PlaceholderValues>
							</>

							{props.multiple ? <S.OverflowMask /> : null}
						</>
					)
				}}
				{...props}
			>
				<S.MenuItem
					onClick={() => {
						setValue(name, allValues)
					}}
				>
					Все
				</S.MenuItem>

				<S.Divider />

				{options.map(({ label, value, color }) => {
					return (
						<S.MenuItem key={value} value={value}>
							<S.MenuItemLeft>
								<Checkbox
									name={`${name}-${value}`}
									checked={currentValues.includes(value)}
								/>

								<S.MenuItemLabel>{label}</S.MenuItemLabel>
							</S.MenuItemLeft>

							{color ? <ColoredDotText color={color} /> : null}
						</S.MenuItem>
					)
				})}
			</S.FilterSelect>
		</ClickAwayListener>
	)
}
