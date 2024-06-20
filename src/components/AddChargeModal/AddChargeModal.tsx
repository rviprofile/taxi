import { FormProvider, useForm } from 'react-hook-form'

import { Button, Checkbox, InputMask, Select, Textarea, TextField } from 'ui'
import { DateField } from 'ui/maskedFields'

import * as S from './AddChargeModal.styled'

import ClockIcon from 'public/icons/clock.svg'

interface AddChargeModalProps {
	open: boolean
	onClose: () => void
}

export const AddChargeModal = (props: AddChargeModalProps) => {
	const useFormProps = useForm()
	const { watch } = useFormProps

	const chargeSchedule = watch('chargeSchedule')

	const accounts = [
		{ label: 'Счёт 1', value: 'account1' },
		{ label: 'Счёт 2', value: 'account2' },
		{ label: 'Счёт 3', value: 'account3' }
	]

	const chargeSchedules = [
		{ label: 'Ежедневно', value: 'daily' },
		{ label: 'По дням недели', value: 'week-days' },
		{ label: 'По дням месяца', value: 'month-days' },
		{ label: 'По графику', value: 'schedule' },
		{ label: 'По активности', value: 'activity' }
	]

	const weekDays = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']

	const getDaysInCurrentMonth = () => {
		const date = new Date()

		return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
	}

	return (
		<FormProvider {...useFormProps}>
			<S.AddChargeModal
				{...props}
				heading="Создание списания"
				headingProps={{
					endAdornment: (
						<S.ChargeScheduleSelect
							name="chargeSchedule"
							defaultValue="daily"
							options={chargeSchedules}
							MenuProps={{
								disablePortal: true,
								anchorOrigin: { horizontal: 'left', vertical: 'bottom' },
								transformOrigin: { horizontal: 'left', vertical: 'top' }
							}}
						/>
					)
				}}
			>
				<S.Form>
					<S.FieldsRow>
						<TextField name="name" label="Название" placeholder="Введите контрагент" />
						<TextField name="sum" label="Сумма" placeholder="Введите сумму" />
					</S.FieldsRow>

					{chargeSchedule === 'schedule' ? (
						<S.FieldsRow>
							<TextField
								name="workingDays"
								label="Рабочие дни"
								placeholder="Выберите дату"
							/>
							<TextField
								name="weekends"
								label="Выходные дни"
								placeholder="Выберите время"
							/>
						</S.FieldsRow>
					) : null}

					<S.Divider />

					<S.FieldsRow>
						<DateField
							name="startDate"
							label="Начало"
							maskProps={{ alwaysShowMask: false }}
							placeholder={new Intl.DateTimeFormat().format(new Date())}
						/>

						{chargeSchedule !== 'activity' ? (
							<InputMask
								name="time"
								label="Время"
								maskProps={{ mask: '99:99', alwaysShowMask: false }}
								placeholder="00:00"
								InputProps={{
									endAdornment: <ClockIcon />
								}}
							/>
						) : null}

						<DateField
							name="endDate"
							label="Завершение"
							placeholder="Введите дату"
							maskProps={{ alwaysShowMask: false }}
						/>
					</S.FieldsRow>

					<Checkbox name="indefinitely" label="Бессрочно" />

					<S.Divider />

					<Select
						name="account"
						label="Счёт"
						placeholder="Выберите счёт"
						options={accounts}
					/>

					<S.Divider />

					<Textarea
						name="comment"
						label="Комментарии"
						placeholder="Написать комментарий"
					/>

					{chargeSchedule === 'week-days' ? (
						<>
							<S.Divider />
							<S.WeekDays>
								{weekDays.map((day) => (
									<S.Day key={day}>
										<button type="button">{day}</button>
									</S.Day>
								))}
							</S.WeekDays>
						</>
					) : null}

					{chargeSchedule === 'month-days' ? (
						<>
							<S.Divider />

							<S.MonthDays>
								{new Array(getDaysInCurrentMonth()).fill(null).map((_, idx) => (
									<S.Day key={`day-${idx}`}>
										<button type="button">{idx + 1}</button>
									</S.Day>
								))}
							</S.MonthDays>
						</>
					) : null}

					<Button color="green" fullWidth>
						Создать
					</Button>
				</S.Form>
			</S.AddChargeModal>
		</FormProvider>
	)
}
