import { TextField } from '@mui/material'
import { InputMask } from 'ui'

import { TextFieldProps } from 'ui/TextField/TextField'

type PhoneFieldProps = {
	maskType?: 1 | 2
	disabled?: boolean
	value: string
} & TextFieldProps

export const PhoneField = ({
	maskType = 1,
	name,
	value,
	disabled,
	...props
}: PhoneFieldProps) => {
	if (disabled) {
		return (
			<TextField
				label="Телефон"
				type="tel"
				placeholder="1234567890123"
				name={name}
				disabled
				value={value}
			/>
		)
	}
	return (
		<InputMask
			type="tel"
			name={name}
			maskProps={{
				mask: maskType === 1 ? '+7 (999) 999 - 99 - 99' : '+7 (999) 999 99 99'
			}}
			inputProps={{
				name
			}}
			{...props}
		/>
	)
}
