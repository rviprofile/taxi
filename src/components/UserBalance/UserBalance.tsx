import { MouseEvent, useState } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

import { CurrencyAmount, MenuButton } from 'components/common'
import { DepositTab, TransferTab, WithdrawalTab } from './tabs'

import * as S from './UserBalance.styled'

export const UserBalance = () => {
	const [popoverAnchorEl, setPopoverAnchorEl] = useState<HTMLButtonElement | null>(null)
	const [actionTab, setActionTab] = useState<number | null>(null)

	const balances = [
		{ name: 'deposit', label: 'Депозит', value: 5000 },
		{ name: 'internal', label: 'Внутренний', value: 5000 },
		{ name: 'yandex', label: 'Яндекс', value: 5000 }
	]

	const actions = [
		{ name: 'deposit', label: 'Пополнить' },
		{ name: 'withdrawal', label: 'Вывести' },
		{ name: 'transfer', label: 'Перевести' }
	]

	const openPopover = (event: MouseEvent<HTMLButtonElement>) => {
		setPopoverAnchorEl(event.currentTarget)
	}

	const closePopover = () => {
		setPopoverAnchorEl(null)
		setActionTab(null)
	}

	const onTabChange = (event: React.SyntheticEvent, newValue: number) => {
		setActionTab(newValue)
	}

	const renderActiveTab = (tab: number | null) => {
		switch (tab) {
			case 0:
				return <DepositTab />
			case 1:
				return <WithdrawalTab />
			case 2:
				return <TransferTab />
			default:
				return null
		}
	}

	const balanceItems = balances.map(({ name, label, value }) => {
		return (
			<li key={name}>
				<S.BalanceRow>
					<span>{label}</span>

					<CurrencyAmount value={5000} />
				</S.BalanceRow>

				<S.BalanceRowBorder />
			</li>
		)
	})

	const actionTabs = actions.map(({ name, label }) => {
		return <Tab key={name} label={label} />
	})

	return (
		<S.UserBalance>
			<MenuButton open={Boolean(popoverAnchorEl)} color="blue" onClick={openPopover}>
				Баланс: <CurrencyAmount value={5000} />
			</MenuButton>

			<S.Popover
				open={Boolean(popoverAnchorEl)}
				anchorEl={popoverAnchorEl}
				onClose={closePopover}
			>
				<S.BalanceList as="ul">{balanceItems}</S.BalanceList>

				<S.ButtonGroup bgFill={actionTab === null}>
					<Tabs value={actionTab} onChange={onTabChange}>
						{actionTabs}
					</Tabs>
				</S.ButtonGroup>

				{renderActiveTab(actionTab)}
			</S.Popover>
		</S.UserBalance>
	)
}
