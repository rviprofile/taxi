import { useRouter } from 'next/router'
import { MouseEvent, useState } from 'react'
import Skeleton from '@mui/material/Skeleton'

import { UserBalance } from 'components'
import { MenuButton, MenuNav } from 'components/common'
import {
	CounterpartyIndividualForm,
	CounterpartiesRolesSelect
} from 'components/pages/counterparties'

import { useCounterparties } from 'contexts'
import { ROUTE_NAMES } from 'constants/routes'
import { formatFullName, replaceIdPathname } from 'utils'

import * as S from './Counterparties.styled'

export const CounterpartiesLayout = ({ children }: { children: React.ReactNode }) => {
	const { query } = useRouter()
	const counterpartyId = query.id as string
	const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null)

	const {
		counterparty,
		isCounterpartyLoading,
		files,
		focusedFields,
		update,
		focus,
		blur,
		addFile,
		removeFile
	} = useCounterparties()

	const openMenu = ({ currentTarget }: MouseEvent<HTMLButtonElement>) => {
		setMenuAnchorEl(currentTarget)
	}

	const closeMenu = () => {
		setMenuAnchorEl(null)
	}

	const nav = [
		{ name: 'Контрагенты', href: ROUTE_NAMES.COUNTERPARTIES },
		{
			name: 'Приход/Расход',
			href: replaceIdPathname(ROUTE_NAMES.COUNTERPARTIES_INCOME_EXPENSE, counterpartyId)
		},
		{
			name: 'История аренды',
			href: replaceIdPathname(ROUTE_NAMES.COUNTERPARTIES_RENT_HISTORY, counterpartyId)
		},
		{
			name: 'Реквизиты',
			href: replaceIdPathname(ROUTE_NAMES.COUNTERPARTIES_REQUISITES, counterpartyId)
		},
		{
			name: 'Штрафы',
			href: replaceIdPathname(ROUTE_NAMES.COUNTERPARTIES_PENALTIES, counterpartyId)
		},
		{
			name: 'Списания',
			href: replaceIdPathname(ROUTE_NAMES.COUNTERPARTIES_CHARGES, counterpartyId)
		},
		{
			name: 'Автомобили',
			href: replaceIdPathname(ROUTE_NAMES.COUNTERPARTIES_CARS, counterpartyId)
		}
	]

	const fullName = counterparty
		? formatFullName({
				firstName: counterparty.firstName,
				middleName: counterparty.middleName,
				lastName: counterparty.lastName,
				short: true
		  })
		: ''

	return (
		<S.CounterpartiesLayout>
			<S.TopLine>
				<S.TopLineLeft>
					<MenuButton
						color="blue"
						open={Boolean(menuAnchorEl)}
						onClick={!isCounterpartyLoading ? openMenu : undefined}
					>
						{!isCounterpartyLoading ? fullName : <Skeleton width={89} height={17} />}
					</MenuButton>

					<S.Popover
						open={Boolean(menuAnchorEl)}
						anchorEl={menuAnchorEl}
						onClose={closeMenu}
					>
						<CounterpartyIndividualForm
							counterparty={counterparty}
							files={files}
							focusedFields={focusedFields}
							onFieldFocus={focus}
							onFieldBlur={blur}
							onUpdate={update}
							onFileAdd={addFile}
							onFileRemove={removeFile}
						/>
					</S.Popover>

					<S.Divider $orientation="vertical" />

					<UserBalance />

					<S.Divider $orientation="vertical" />

					<CounterpartiesRolesSelect />
				</S.TopLineLeft>

				<MenuNav nav={nav} />
			</S.TopLine>

			<S.Content>{children}</S.Content>
		</S.CounterpartiesLayout>
	)
}
