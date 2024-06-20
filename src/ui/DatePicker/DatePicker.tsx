import { ReactDatePickerProps, registerLocale } from 'react-datepicker'
import InputMask from 'react-input-mask'
import ru from 'date-fns/locale/ru'

import * as S from './DatePicker.styled'

import CalendarIcon from 'public/icons/calendar.svg'
import ArrowDownIcon from 'public/icons/arrow-down.svg'

registerLocale('ru', ru)

type DateValue<T> = T extends false | undefined ? Date | null : [Date | null, Date | null]

export const DatePicker = <
	CustomModifierNames extends string = never,
	WithRange extends boolean | undefined = undefined
>(
	props: ReactDatePickerProps<CustomModifierNames, WithRange>
) => {
	const { selectsRange: isRangePicker, onChange } = props

	const isValidDate = (date: Date) => {
		return date instanceof Date && !isNaN(date.getTime())
	}

	const parseDMY = (string: string) => {
		const [d, m, y] = string.split('.')
		return new Date(Number(`20${y}`), Number(m) - 1, Number(d))
	}

	const checkValidRangeDate = (rangeValue: string) => {
		const [startDate, endDate] = rangeValue.split(' - ')

		if (isValidDate(new Date(startDate)) && isValidDate(new Date(endDate))) {
			return [parseDMY(startDate), parseDMY(endDate)]
		}

		if (isValidDate(new Date(startDate))) {
			return [
				new Date(startDate),
				isValidDate(new Date(endDate)) ? new Date(endDate) : null
			]
		}

		if (isValidDate(new Date(endDate))) {
			return [
				isValidDate(new Date(startDate)) ? new Date(startDate) : null,
				new Date(endDate)
			]
		}

		return [null, null]
	}

	return (
		<S.DatePickerContainer>
			<CalendarIcon />

			<S.DatePagination range={isRangePicker}>
				<S.PrevButton>
					<ArrowDownIcon />
				</S.PrevButton>

				<S.DatePicker
					showPopperArrow={false}
					placeholderText={isRangePicker ? '00.00.00 - 00.00.00' : '00.00.0000'}
					dateFormat={isRangePicker ? 'dd.MM.yy' : 'dd.MM.yyyy'}
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
					onChangeRaw={(e) => {
						const { value } = e.target

						if (!value) {
							return
						}

						if (isRangePicker) {
							return onChange(checkValidRangeDate(value) as DateValue<WithRange>, e)
						}
					}}
					customInput={
						isRangePicker ? (
							<InputMask
								mask="99.99.99 - 99.99.99"
								value={`${props.startDate} - ${props.endDate}`}
							/>
						) : (
							<InputMask mask="99.99.9999" />
						)
					}
					{...props}
				/>

				<S.NextButton>
					<ArrowDownIcon />
				</S.NextButton>
			</S.DatePagination>
		</S.DatePickerContainer>
	)
}
