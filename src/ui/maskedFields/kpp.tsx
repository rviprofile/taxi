import { InputMask } from 'ui'

import { TextFieldProps } from 'ui/TextField/TextField'

export const KppField = ({ name, ...props }: TextFieldProps) => (
	<InputMask
		name={name}
		label="КПП"
		maskProps={{ mask: '9 9 9 9 9 9 9 9 9' }}
		inputProps={{
			name
		}}
	/>
)
