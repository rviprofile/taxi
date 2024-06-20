import { InputMask } from 'ui'

import { TextFieldProps } from 'ui/TextField/TextField'

export const BankCardField = ({ name, ...props }: TextFieldProps) => (
	<InputMask
		name={name}
		label="Номер карты"
		maskProps={{ mask: '9999 9999 9999 9999' }}
		inputProps={{
			name
		}}
		{...props}
	/>
)
