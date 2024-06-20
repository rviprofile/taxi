import { PopoverProps } from '@mui/material/Popover'
import { FormProvider, useForm } from 'react-hook-form'

import { Button, Checkbox, TextField } from '../../../../ui'
import { BankCardField } from '../../../../ui/maskedFields'

import * as S from './BankCardEditPopover.styled'

export const BankCardEditPopover = (props: PopoverProps) => {
	const useFormProps = useForm()

	return (
		<S.BankCardEditPopover
			{...props}
			heading="Карта №123"
			anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
			transformOrigin={{ horizontal: 'left', vertical: 'top' }}
		>
			<FormProvider {...useFormProps}>
				<S.Form>
					<TextField
						name="name"
						label="Название"
						placeholder="Введите название"
					/>

					<BankCardField name="bankCard" />

					<Checkbox name="" label="Сделать основной" />

					<Button fullWidth color="blue">
						Сохранить
					</Button>
				</S.Form>
			</FormProvider>
		</S.BankCardEditPopover>
	)
}
