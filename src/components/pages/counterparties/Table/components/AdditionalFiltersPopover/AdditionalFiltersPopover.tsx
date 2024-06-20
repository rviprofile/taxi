import { PopoverProps } from '@mui/material/Popover'

import { CustomFilter } from 'components/common'

import { FilterComponentData } from 'types/common'

import * as S from './AdditionalFiltersPopover.styled'

interface AdditionalFiltersPopoverProps extends PopoverProps {
	filterComponents: FilterComponentData[]
}

export const AdditionalFiltersPopover = ({
	open,
	filterComponents,
	anchorEl,
	onClose
}: AdditionalFiltersPopoverProps) => {
	return (
		<S.AdditionalFiltersPopover
			open={open}
			anchorEl={anchorEl}
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'right'
			}}
			transformOrigin={{
				vertical: 'top',
				horizontal: 'right'
			}}
			onClose={onClose}
		>
			<form>
				{filterComponents.map((data) => (
					<CustomFilter key={data.code} {...data} />
				))}

				{/* <S.FormContent>
						<S.FormColumn>
							<S.FieldsRow>
								<TextField
									name="numbersFrom"
									type="number"
									label="Числа"
									placeholder="от"
								/>
								<TextField name="numbersTo" type="number" placeholder="до" />
							</S.FieldsRow>

							<InputLabel>Адрес электронной почты</InputLabel>
							<S.CheckboxColumn>
								<Checkbox name="" label="Парковый автомобиль" />
								<Checkbox name="" label="Парковый автомобиль" />
								<Checkbox name="" label="Парковый автомобиль" />
							</S.CheckboxColumn>

							<InputLabel>Адрес электронной почты</InputLabel>
							<S.CheckboxGrid>
								<Checkbox name="" label="Чекбокс" />
								<Checkbox name="" label="Чекбокс" />
								<Checkbox name="" label="Чекбокс" />
								<Checkbox name="" label="Чекбокс" />
							</S.CheckboxGrid>
						</S.FormColumn>

						<S.Divider $orientation="vertical" />

						<S.FormColumn>
							<Select
								name="choice"
								label="Выпадающий список"
								placeholder="Выбрать"
								options={options}
							/>

							<S.FieldsRow>
								<InputMask name="field" label="Поле" maskProps={{ mask: '9 999 99' }} />

								<Select name="list" label="Список" placeholder="123" options={options} />
							</S.FieldsRow>
						</S.FormColumn>
					</S.FormContent>

					<Button
						color="green"
						fullWidth
						onClick={(e) => onClose && onClose(e, 'backdropClick')}
					>
						Закончить
					</Button> */}
			</form>
		</S.AdditionalFiltersPopover>
	)
}
