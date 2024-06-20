import { InputMask } from 'ui'

import { TextFieldProps } from 'ui/TextField/TextField'

export const LicensePlateField = ({ name, ...props }: TextFieldProps) => {
	const letter = /(?!.*[DFIOQU])[А-Я]/i
	const digit = /[0-9]/
	const mask = [letter, ' ', digit, digit, digit, ' ', letter, letter]

	return (
		<InputMask
			name={name}
			maskProps={{
				mask: '9 999 99'
			}}
			inputProps={{
				name
			}}
			// maskProps={{
			// 	mask,
			// 	beforeMaskedStateChange: ({ nextState }) => {
			// 		return {
			// 			...nextState,
			// 			value: nextState.value.toUpperCase()
			// 		}
			// 	}
			// }}
			{...props}
		/>
	)
}
