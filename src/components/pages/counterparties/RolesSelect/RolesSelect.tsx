import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { MenuItem } from 'ui'
import { SearchField } from 'components/common'

import * as S from './RolesSelect.styled'

import PlusIcon from 'public/icons/plus.svg'
import CrossIcon from 'public/icons/cross.svg'
import ArrowDownIcon from 'public/icons/arrow-down.svg'

export const CounterpartiesRolesSelect = () => {
	const useFormProps = useForm()
	const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null)
	const [subRolesMenuAnchorEl, setSubRolesMenuAnchorEl] = useState<null | HTMLElement>(
		null
	)

	const roles = [
		{
			name: 'supplier',
			label: 'Поставщик',
			roles: [
				{ name: 'supplier1', label: 'Поставщик #1' },
				{ name: 'supplier2', label: 'Поставщик #2' }
			]
		},
		{
			name: 'employee',
			label: 'Сотрудник',
			roles: [
				{ name: 'mechanic', label: 'Механик' },
				{ name: 'chiefAccountant', label: 'Главный бухгалтер' },
				{ name: 'employee1', label: 'Сотрудник №...' },
				{ name: 'employee2', label: 'Сотрудник №...' },
				{ name: 'employee3', label: 'Сотрудник №...' },
				{ name: 'employee4', label: 'Сотрудник №...' },
				{ name: 'employee5', label: 'Сотрудник №...' },
				{ name: 'employee6', label: 'Сотрудник №...' },
				{ name: 'employee7', label: 'Сотрудник №...' },
				{ name: 'employee8', label: 'Сотрудник №...' }
			]
		}
	]

	const selectedRoles = [
		{
			name: 'driver',
			label: 'Водитель',
			subRole: { name: 'subRole', label: 'Подроль №1' }
		},
		{ name: 'owner', label: 'Собственник' },
		{ name: 'employee', label: 'Сотрудник №1' }
	]

	const subRoles = [
		{ name: 'subRole1', label: 'Подроль №1' },
		{ name: 'subRole2', label: 'Подроль №2' },
		{ name: 'subRole3', label: 'Подроль №3' },
		{ name: 'subRole4', label: 'Подроль №4' }
	]

	const closeSubRolesMenu = () => {
		setSubRolesMenuAnchorEl(null)
	}

	const closeMenu = () => {
		setMenuAnchorEl(null)
	}

	return (
		<S.CounterpartiesRolesSelect>
			<S.RolesList>
				{selectedRoles.map(({ name, label, subRole }) => {
					return (
						<S.RoleListItem key={name} darkGreen={name === 'owner'}>
							<S.RoleListItemName>{label}</S.RoleListItemName>

							{subRole ? (
								<S.RoleListItemSubRole>{subRole.label}</S.RoleListItemSubRole>
							) : null}

							<S.RoleListItemActions>
								<button
									onClick={({ currentTarget }) => {
										setSubRolesMenuAnchorEl(currentTarget)
									}}
								>
									<ArrowDownIcon />
								</button>

								<button>
									<CrossIcon width={13} height={13} viewBox="0 0 15 15" />
								</button>
							</S.RoleListItemActions>
						</S.RoleListItem>
					)
				})}
			</S.RolesList>

			<S.MenuButton
				open={Boolean(menuAnchorEl)}
				onClick={({ currentTarget }) => {
					setMenuAnchorEl(currentTarget)
				}}
			>
				<span>
					<PlusIcon />
					<span>
						<ArrowDownIcon />
					</span>
				</span>
			</S.MenuButton>

			<S.SubRolesMenu
				open={Boolean(subRolesMenuAnchorEl)}
				anchorEl={subRolesMenuAnchorEl}
				anchorOrigin={{
					horizontal: 'left',
					vertical: 'bottom'
				}}
				onClose={closeSubRolesMenu}
			>
				<S.RolesMenuNamesList>
					<S.RolesMenuList>
						{subRoles.map(({ name, label }) => (
							<MenuItem key={name} onClick={closeSubRolesMenu}>
								{label}
							</MenuItem>
						))}
					</S.RolesMenuList>
				</S.RolesMenuNamesList>
			</S.SubRolesMenu>

			<S.RolesMenu
				open={Boolean(menuAnchorEl)}
				anchorEl={menuAnchorEl}
				onClose={closeMenu}
			>
				<FormProvider {...useFormProps}>
					<SearchField name="search" placeholder="Поиск" />
				</FormProvider>

				<S.RolesMenuNamesList>
					{roles.map(({ name, label, roles }) => {
						return (
							<S.RolesMenuNamesListItem key={name}>
								<span>{label}</span>

								<S.RolesMenuList>
									{roles.map(({ name, label }) => (
										<MenuItem key={name} onClick={closeMenu}>
											{label}
										</MenuItem>
									))}
								</S.RolesMenuList>
							</S.RolesMenuNamesListItem>
						)
					})}
				</S.RolesMenuNamesList>
			</S.RolesMenu>
		</S.CounterpartiesRolesSelect>
	)
}
