import { InputMask } from 'ui'

import { TextFieldProps } from 'ui/TextField/TextField'

export const OgrnField = ({ name, ...props }: TextFieldProps) => (
	<InputMask
		name={name}
		maskProps={{ mask: '9 9 9 9 9 9 9 9 9 9 9 9 9' }}
		inputProps={{
			name
		}}
		{...props}
	/>
)
