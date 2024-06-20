import { InputMask } from 'ui'

import { TextFieldProps } from 'ui/TextField/TextField'

export const VinField = ({ name, ...props }: TextFieldProps) => (
	<InputMask
		name={name}
		maskProps={{ mask: '* * * * * * * * * * * * * * * * *' }}
		inputProps={{
			name
		}}
		{...props}
	/>
)
