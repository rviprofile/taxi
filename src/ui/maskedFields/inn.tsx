import { InputMask } from 'ui'

import { TextFieldProps } from 'ui/TextField/TextField'

export const InnField = ({ name, ...props }: TextFieldProps) => (
	<InputMask
		name={name}
		label="ИНН"
		maskProps={{ mask: '9 9 9 9 9 9 9 9 9 9' }}
		inputProps={{
			name
		}}
		{...props}
	/>
)
