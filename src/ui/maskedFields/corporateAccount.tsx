import { InputMask } from 'ui'

import { TextFieldProps } from 'ui/TextField/TextField'

export const CorporateAccountField = ({ name, ...props }: TextFieldProps) => (
	<InputMask
		name={name}
		label="К/C"
		maskProps={{ mask: '9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9' }}
		inputProps={{
			name
		}}
		{...props}
	/>
)
