import { CheckboxProps as MuiCheckboxProps } from '@mui/material/Checkbox'
import { useFormContext, Controller } from 'react-hook-form'

import * as S from './Checkbox.styled'

type CheckboxProps = {
	name: string
	label?: string
} & MuiCheckboxProps

export const Checkbox = ({ label, name, ...props }: CheckboxProps) => {
	const { control } = useFormContext()

	const controller = (
		<Controller
			name={name}
			control={control}
			render={({ field }) => <S.Checkbox {...field} {...props} />}
		/>
	)

	return label ? (
		<S.FormControlLabel control={controller} label={label} />
	) : (
		controller
	)
}
