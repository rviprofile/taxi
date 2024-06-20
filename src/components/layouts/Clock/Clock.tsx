import { MouseEvent, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { Button, Checkbox } from 'ui'

import * as S from './Clock.styled'

import PowerIcon from 'public/icons/power-rounded.svg'
import PlusIcon from 'public/icons/plus.svg'
import PlayIcon from 'public/icons/play.svg'

export const Clock = () => {
	const useFormProps = useForm()
	const [popoverAnchorEl, setPopoverAnchorEl] = useState<HTMLButtonElement | null>(null)

	const openPopover = (event: MouseEvent<HTMLButtonElement>) => {
		setPopoverAnchorEl(event.currentTarget)
	}

	const closePopover = () => {
		setPopoverAnchorEl(null)
	}

	const tasksByDay = [
		{
			day: 'Сегодня',
			tasks: ['Задача 1', 'Задача 2', 'Задача 3']
		},
		{
			day: 'Завтра',
			tasks: ['Задача 1', 'Задача 2']
		},
		{
			day: '03.11.2022',
			tasks: ['Задача 1']
		}
	]

	const tasksByDayItems = tasksByDay.map(({ day, tasks }) => {
		return (
			<S.TaskByDay key={day}>
				<p>{day}</p>

				<S.TasksList>
					{tasks.map((label) => {
						return (
							<S.TaskItem key={label}>
								<PlayIcon />

								<p>{label}</p>

								<Checkbox name="" />
							</S.TaskItem>
						)
					})}
				</S.TasksList>
			</S.TaskByDay>
		)
	})

	return (
		<>
			<S.ClockButton open={Boolean(popoverAnchorEl)} onClick={openPopover}>
				<PowerIcon />

				<span>02:47</span>
			</S.ClockButton>

			<S.Popover
				open={Boolean(popoverAnchorEl)}
				anchorEl={popoverAnchorEl}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center'
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center'
				}}
				onClose={closePopover}
			>
				<Button color="green">Начать работу</Button>

				<S.Divider />

				<FormProvider {...useFormProps}>
					<S.TasksListsByDay>{tasksByDayItems}</S.TasksListsByDay>
				</FormProvider>

				<S.TasksActions>
					<Button color="blue" startIcon={<PlusIcon />}>
						Добавить задачу
					</Button>

					<Button>История задач</Button>
				</S.TasksActions>
			</S.Popover>
		</>
	)
}
