import { SwitchProps as MuiSwitchProps } from '@mui/material/Switch'
import { useFormContext, Controller } from 'react-hook-form'

import * as S from './Switch.styled'

type SwitchProps = {
	name: string
	label?: string
} & MuiSwitchProps

export const Switch = ({ label, name, ...props }: SwitchProps) => {
	const { control } = useFormContext()

	const controller = (
		<Controller
			name={name}
			control={control}
			defaultValue=""
			render={({ field }) => (
				<S.Switch {...field} {...props} checked={Boolean(field.value)} />
			)}
		/>
	)

	return label ? (
		<S.FormControlLabel label={label} control={controller} />
	) : (
		controller
	)
}
