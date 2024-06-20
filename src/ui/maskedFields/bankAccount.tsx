import { InputMask } from 'ui'

import { TextFieldProps } from 'ui/TextField/TextField'

export const BankAccountField = ({ name, ...props }: TextFieldProps) => {
	return (
		<InputMask
			name={name}
			label="Р/С"
			maskProps={{ mask: '9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9' }}
			inputProps={{
				name
			}}
			{...props}
		/>
	)
}
