import { SwitchProps } from '@mui/material'
import { useFormContext } from 'react-hook-form'

import { Switch } from 'ui'

import * as S from './SwitchRow.styled'

interface SwitchRowProps extends SwitchProps {
	name: string
	left: string
	right: string
}

export const SwitchRow = ({ left, right, name, ...props }: SwitchRowProps) => {
	const { watch } = useFormContext()

	const active = watch(name)

	return (
		<S.SwitchRow>
			<S.Label active={!active}>{left}</S.Label>

			<Switch {...props} name={name} />

			<S.Label active={active}>{right}</S.Label>
		</S.SwitchRow>
	)
}
