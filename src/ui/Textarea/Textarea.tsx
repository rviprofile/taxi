import InputLabel from '@mui/material/InputLabel'
import { TextareaAutosizeProps } from '@mui/material/TextareaAutosize'
import { useFormContext, Controller } from 'react-hook-form'

import * as S from './Textarea.styled'

type TextareaProps = {
	label?: string
	name: string
} & TextareaAutosizeProps

export const Textarea = ({ label, name, ...props }: TextareaProps) => {
	const { control } = useFormContext()

	return (
		<S.TextareaContainer>
			{label && <InputLabel htmlFor={name}>{label}</InputLabel>}

			<Controller
				name={name}
				control={control}
				render={({ field }) => {
					return <S.Textarea id={name} {...field} {...props} />
				}}
			/>
		</S.TextareaContainer>
	)
}
