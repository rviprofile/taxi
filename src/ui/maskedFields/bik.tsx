import { InputMask } from 'ui'

import { TextFieldProps } from 'ui/TextField/TextField'

export const BikField = ({ name, ...props }: TextFieldProps) => (
	<InputMask
		name={name}
		label="БИК"
		maskProps={{ mask: '9 9 9 9 9 9 9 9 9' }}
		inputProps={{
			name
		}}
		{...props}
	/>
)
