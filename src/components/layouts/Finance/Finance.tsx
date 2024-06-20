import { useRouter } from 'next/router'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { FilterSelect, FilterText, MenuNav, SearchField } from 'components/common'
import { Button, Checkbox, DatePicker } from 'ui'

import { ROUTE_NAMES } from 'constants/routes'

import * as S from './Finance.styled'

import GearIcon from 'public/icons/gear.svg'
import { CarStatus } from '../../pages/cars'
import { CarStatusSelect } from '../../pages/cars/CarStatusSelect/CarStatusSelect'

export const FinanceLayout = ({ children }: { children?: React.ReactNode }) => {
	const { pathname } = useRouter()
	const useFormProps = useForm()
	const [date, setDate] = useState<Date | null>(null)

	const nav = [
		{ name: 'Дашборд', href: ROUTE_NAMES.FINANCE },
		{
			name: 'Автомобили',
			href: ROUTE_NAMES.FINANCE_CARS
		},
		{
			name: 'Приход/Расход',
			href: ROUTE_NAMES.FINANCE_INCOME_EXPENSE
		},
		{
			name: 'Платежи',
			href: ROUTE_NAMES.FINANCE_PAYMENTS
		},
		{
			name: 'Кредиты',
			href: ROUTE_NAMES.FINANCE_CREDITS
		},
		{
			name: 'Штрафы',
			href: ROUTE_NAMES.FINANCE_PENALTIES
		}
	]

	const options = [
		{ label: 'Все', value: 'all' },
		{ label: 'Остальные', value: 'other' }
	]

	const showRightsideNavbar = (path: string) => {
		switch(path) {
			case ROUTE_NAMES.FINANCE:
			case ROUTE_NAMES.FINANCE_INCOME_EXPENSE:
			case ROUTE_NAMES.FINANCE_PAYMENTS:
			case ROUTE_NAMES.FINANCE_CREDITS:
			case ROUTE_NAMES.FINANCE_PENALTIES:
				return true
			case ROUTE_NAMES.FINANCE_CARS:
			case ROUTE_NAMES.FINANCE_CAR_TABLE:
				return false
		}
	}

	const getTopLeftContent = (pathname: string) => {
		switch (pathname) {
			case ROUTE_NAMES.FINANCE_CAR_TABLE:
				return null
			case ROUTE_NAMES.FINANCE:
				return <Button style={{ whiteSpace: "nowrap"}} startIcon={<GearIcon />}>Настройка Дашборда</Button>
			case ROUTE_NAMES.FINANCE_INCOME_EXPENSE:
			case ROUTE_NAMES.FINANCE_PAYMENTS:
				return <DatePicker selected={date} onChange={setDate} />
			case ROUTE_NAMES.FINANCE_CREDITS:
				return (
					<>
						<DatePicker selected={date} onChange={setDate} />

						<S.Filters>
							<FilterText>Фильтры:</FilterText>
						</S.Filters>
					</>
				)
			case ROUTE_NAMES.FINANCE_PENALTIES:
				return (
					<>
						<SearchField
							name="UAIorComment"
							placeholder="УИН или комментарий к заметке"
						/>

						<DatePicker selected={date} onChange={setDate} />

						<S.Filters>
							<FilterText>Фильтры:</FilterText>
						</S.Filters>

						<Checkbox name="withDiscount" label="Со скидкой" />
						<Checkbox name="withoutDiscount" label="Без скидки" />
					</>
				)
		}
	}

	return (
		<S.FinanceLayout>
			<S.TopLine>
				<FormProvider {...useFormProps}>
					<S.TopLineLeft>{getTopLeftContent(pathname)}</S.TopLineLeft>
				</FormProvider>

				{showRightsideNavbar(pathname) ? <MenuNav nav={nav} /> : null}
			</S.TopLine>

			<S.Content>{children}</S.Content>
		</S.FinanceLayout>
	)
}
