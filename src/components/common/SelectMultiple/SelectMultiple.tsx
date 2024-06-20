import { useFormContext } from 'react-hook-form'

import { Select, SelectProps } from 'ui/Select/Select'

import * as S from './SelectMultiple.styled'

import CrossIcon from 'public/icons/cross.svg'

export const SelectMultiple = (props: SelectProps) => {
	const { watch, setValue } = useFormContext()

	const { name, options, placeholder } = props

	const selectedValues: string[] = watch(name)
	const selectedOptions = selectedValues?.length
		? options.filter(({ value }) =>
				selectedValues.some((selectedValue) => selectedValue === value)
		  )
		: null

	const removeValue = (value: string) => {
		setValue(
			name,
			selectedValues.filter((selectedValue) => selectedValue !== value)
		)
	}

	return (
		<S.SelectMultiple>
			<Select
				multiple
				renderValue={() => <S.Placeholder>{placeholder}</S.Placeholder>}
				{...props}
			/>

			{selectedOptions ? (
				<S.ChipList>
					{selectedOptions.map(({ label, value }) => (
						<li key={value}>
							<S.Chip>
								<span>{label}</span>

								<button type="button" onClick={() => removeValue(value)}>
									<CrossIcon />
								</button>
							</S.Chip>
						</li>
					))}
				</S.ChipList>
			) : null}
		</S.SelectMultiple>
	)
}
