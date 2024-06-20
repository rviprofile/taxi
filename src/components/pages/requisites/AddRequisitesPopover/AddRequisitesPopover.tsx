import { useState } from 'react'
import { PopoverProps } from '@mui/material/Popover'
import { FormProvider, useForm } from 'react-hook-form'

import { SwitchRow } from '../../../common'
import { Button, Checkbox, Textarea, TextField } from '../../../../ui'
import {
	BankAccountField,
	BankCardField,
	BikField,
	CorporateAccountField,
	InnField,
	KppField
} from '../../../../ui/maskedFields'

import * as S from './AddRequisitesPopover.styled'

export const AddRequisitesPopover = (props: PopoverProps) => {
	const useFormProps = useForm()
	const [activeTab, setActiveTab] = useState(0)

	const tabs = ['Карта', 'Реквизиты']

	const onTabChange = (event: React.SyntheticEvent, newValue: number) => {
		setActiveTab(newValue)
	}

	const tabItems = tabs.map((label) => {
		return <S.Tab key={label} label={label} />
	})

	return (
		<S.AddRequisitesPopover
			{...props}
			heading="Добавление карты/реквезитов"
			anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
			transformOrigin={{ horizontal: 'left', vertical: 'top' }}
		>
			<S.Tabs
				value={activeTab}
				onChange={onTabChange}
				TabIndicatorProps={{
					sx: {
						display: 'block'
					}
				}}
			>
				{tabItems}
			</S.Tabs>

			<FormProvider {...useFormProps}>
				{activeTab === 0 ? (
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
				) : (
					<S.Form>
						<TextField
							name="name"
							label="Название"
							placeholder="Введите название"
						/>
						<BikField name="bik" />
						<BankAccountField name="bankAccount" />
						<CorporateAccountField name="corporateAccount" />

						<S.FieldsRow>
							<InnField name="inn" />
							<KppField name="kpp" />
						</S.FieldsRow>

						<Textarea name="rationale" label="Обоснование" />

						<S.VatRow>
							<span>НДС</span>

							<SwitchRow name="vat" left="Нет" right="Да" />
						</S.VatRow>

						<Checkbox name="" label="Сделать основной" />

						<Button fullWidth color="green">
							Сохранить
						</Button>
					</S.Form>
				)}
			</FormProvider>
		</S.AddRequisitesPopover>
	)
}
