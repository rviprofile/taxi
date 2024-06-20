import { InputMask } from 'ui'

import { TextFieldProps } from 'ui/TextField/TextField'

type PhoneFieldProps = { maskType?: 1 | 2 } & TextFieldProps

export const PhoneField = ({ maskType = 1, name, ...props }: PhoneFieldProps) => (
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
