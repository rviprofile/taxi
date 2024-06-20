import MuiAutocomplete, {
	AutocompleteProps as MuiAutocompleteProps
} from '@mui/material/Autocomplete'
import { useFormContext, Controller } from 'react-hook-form'

import * as S from './Autocomplete.styled'

type AutocompleteProps<
	T,
	Multiple extends boolean | undefined,
	DisableClearable extends boolean | undefined,
	FreeSolo extends boolean | undefined
> = {
	name: string
} & MuiAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>

export const Autocomplete = <
	T,
	Multiple extends boolean | undefined,
	DisableClearable extends boolean | undefined,
	FreeSolo extends boolean | undefined
>({
	name,
	defaultValue,
	...props
}: AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>) => {
	const { control } = useFormContext()

	return (
		<Controller
			name={name}
			control={control}
			defaultValue={defaultValue}
			render={({ field }) => (
				<S.Autocomplete>
					<MuiAutocomplete<T, Multiple, DisableClearable, FreeSolo>
						{...field}
						openOnFocus
						disablePortal
						loadingText="Загрузка..."
						noOptionsText="Ничего не найдено"
						PaperComponent={S.Paper}
						{...props}
						onChange={(_, value) => {
							return field.onChange(value)
						}}
					/>
				</S.Autocomplete>
			)}
		/>
	)
}
