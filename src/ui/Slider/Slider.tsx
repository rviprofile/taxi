import { useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { SliderProps as MuiSliderProps } from '@mui/material/Slider'

import { InputLabel } from 'ui'

import * as S from './Slider.styled'

type SliderProps = {
	label?: string
	name: string
} & MuiSliderProps

export const Slider = ({ name, label = 'Числа', ...props }: SliderProps) => {
	const { control, getValues } = useFormContext()

	const [value, setValue] = useState<number[]>(getValues(name))

	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => {
				return (
					<S.SliderContainer>
						<InputLabel>{label}</InputLabel>

						{/* <S.FieldsRow>
							{value[0]}
							{value[1]}
						</S.FieldsRow> */}

						<S.SliderLimiter>
							<S.Slider
								{...props}
								value={value}
								onChange={(_, value) => {
									if (Array.isArray(value)) {
										setValue(value)
									}
								}}
								onChangeCommitted={(_, value) => {
									field.onChange(value)
								}}
							/>
						</S.SliderLimiter>
					</S.SliderContainer>
				)
			}}
		/>
	)
}
