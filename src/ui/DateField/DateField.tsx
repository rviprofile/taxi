import { useFormContext, Controller } from 'react-hook-form'
import InputMask from 'react-input-mask'

import { InputLabel } from 'ui'

import * as S from './DateField.styled'

import CalendarIcon from 'public/icons/calendar.svg'

interface DateFieldProps {
	name: string
	label?: string
}

export const DateField = ({ name, label }: DateFieldProps) => {
	const { control } = useFormContext()

	return (
		<S.DateField>
			{label ? <InputLabel htmlFor={name}>{label}</InputLabel> : null}

			<S.DateFieldContent>
				<Controller
					name={name}
					control={control}
					render={({ field }) => {
						return (
							<S.DatePicker
								id={name}
								name={name}
								showPopperArrow={false}
								placeholderText="__.__.____"
								dateFormat="dd.MM.yyyy"
								locale="ru"
								popperPlacement="bottom-end"
								popperModifiers={[
									{
										name: 'offset',
										options: {
											offset: [0, 20]
										}
									}
								]}
								value={field.value}
								onChangeRaw={field.onChange}
								onChange={() => {}}
								customInput={
									<InputMask
										name={name}
										mask="99.99.9999"
										alwaysShowMask={false}
										// placeholder="__.__.____"
									/>
								}
							/>
						)
					}}
				/>

				<S.Icon>
					<CalendarIcon />
				</S.Icon>
			</S.DateFieldContent>
		</S.DateField>
	)
}
