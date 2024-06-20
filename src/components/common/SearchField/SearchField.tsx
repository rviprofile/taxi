import { TextField } from 'ui'

import { TextFieldProps } from 'ui/TextField/TextField'

import LoupeIcon from 'public/icons/loupe.svg'

export const SearchField = ({ InputProps, ...props }: TextFieldProps) => {
	return (
		<TextField
			{...props}
			InputProps={{ ...InputProps, endAdornment: <LoupeIcon /> }}
		/>
	)
}
