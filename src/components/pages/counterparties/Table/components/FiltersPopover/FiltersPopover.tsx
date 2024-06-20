import { PopoverProps } from '@mui/material/Popover'
import { FormProvider, useForm } from 'react-hook-form'

import { Button, Checkbox } from 'ui'

import * as S from './FiltersPopover.styled'

import MoveIcon from 'public/icons/move.svg'

export const FiltersPopover = ({ open, anchorEl, onClose }: PopoverProps) => {
	const useFormProps = useForm()

	const firstColumnCheckbox = [
		'Статус',
		'Марка',
		'Модель',
		'Год',
		'Госномер',
		'СТС',
		'VIN',
		'Пробег',
		'КПП',
		'КПП',
		'Собственник',
		'Цвет'
	]

	const secondColumnCheckbox = [
		'пункт, в две строки',
		'Марка',
		'Модель',
		'Год',
		'Госномер',
		'СТС',
		'VIN',
		'Пробег',
		'КПП',
		'Собственник',
		'Цвет',
		'Цвет',
		'Цвет',
		'Цвет',
		'Цвет',
		'Цвет'
	]

	const thirdColumnCheckbox = [
		'Марка',
		'Модель',
		'Год',
		'Госномер',
		'СТС',
		'VIN',
		'Пробег',
		'пункт, в две строки',
		'КПП',
		'Собственник',
		'Цвет',
		'Цвет',
		'Цвет',
		'Цвет',
		'Цвет',
		'Цвет'
	]

	return (
		<S.FiltersPopover
			open={open}
			anchorEl={anchorEl}
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'center'
			}}
			transformOrigin={{
				vertical: 'top',
				horizontal: 'center'
			}}
			onClose={onClose}
		>
			<FormProvider {...useFormProps}>
				<form>
					<S.FormContent>
						<S.FormColumn>
							{firstColumnCheckbox.map((label) => {
								return (
									<S.CheckboxMoveRow key={label}>
										<Checkbox name="" label={label} />

										<button>
											<MoveIcon />
										</button>
									</S.CheckboxMoveRow>
								)
							})}
						</S.FormColumn>

						<S.Divider $orientation="vertical" />

						<S.FormColumn>
							{secondColumnCheckbox.map((label) => {
								return <Checkbox name="" key={label} label={label} />
							})}
						</S.FormColumn>

						<S.Divider $orientation="vertical" />

						<S.FormColumn>
							{thirdColumnCheckbox.map((label) => {
								return <Checkbox name="" key={label} label={label} />
							})}
						</S.FormColumn>
					</S.FormContent>

					<Button
						color="green"
						fullWidth
						onClick={(e) => onClose && onClose(e, 'backdropClick')}
					>
						Закончить
					</Button>
				</form>
			</FormProvider>
		</S.FiltersPopover>
	)
}
