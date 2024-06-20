import { Fragment } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { ROUTE_NAMES } from 'constants/routes'

import * as S from './Sidebar.styled'

import HamburgerIcon from 'public/icons/hamburger.svg'
import WalletIcon from 'public/icons/sidebar/wallet.svg'
import GroupIcon from 'public/icons/sidebar/group.svg'
import CarIcon from 'public/icons/sidebar/car.svg'
import CompanyIcon from 'public/icons/sidebar/company.svg'
import StockIcon from 'public/icons/sidebar/stock.svg'
import ServiceStationIcon from 'public/icons/sidebar/service-station.svg'
import MessageIcon from 'public/icons/sidebar/message.svg'
import { menuAPI } from 'api'
import { useQuery } from '@tanstack/react-query'

interface SidebarProps {
	isOpen: boolean
	onSidebarToggle: () => void
}

export const Sidebar = ({ isOpen, onSidebarToggle }: SidebarProps) => {
	let { data } = useQuery({
		queryKey: ['menu'],
		queryFn: () => menuAPI
	})
	console.log(data);
	const router = useRouter()
	const messagesNumber = 12

	const links = [
		{ icon: <WalletIcon />, label: 'Финансы', href: ROUTE_NAMES.FINANCE },
		{
			icon: <GroupIcon />,
			label: 'Контрагенты',
			href: ROUTE_NAMES.COUNTERPARTIES
		},
		{ icon: <CarIcon />, label: 'Автомобили', href: ROUTE_NAMES.CARS },
		{ icon: <CompanyIcon />, label: 'Компания', href: ROUTE_NAMES.COMPANY },
		{ icon: <StockIcon />, label: 'Склад', href: ROUTE_NAMES.STOCK },
		{
			icon: <ServiceStationIcon />,
			label: 'СТО',
			href: ROUTE_NAMES.SERVICE_STATION
		},
		{ icon: <MessageIcon />, label: 'Чат', href: ROUTE_NAMES.CHAT }
	]

	return (
		<S.Sidebar open={isOpen}>
			<S.MenuList>
				{links.map(({ icon, label, href }, idx) => {
					const isChatItem = label === 'Чат'
					const isSelected = router.pathname.startsWith(href)

					return (
						<Fragment key={href}>
							{idx === 0 ? (
								<S.MenuListItem selected={false} onClick={onSidebarToggle}>
									<S.ButtonExpand>
										<S.MenuItemIcon>
											<HamburgerIcon />
										</S.MenuItemIcon>
										<S.MenuItemLabel>
											{!isOpen ? 'Развернуть меню' : 'Свернуть меню'}
										</S.MenuItemLabel>
									</S.ButtonExpand>
								</S.MenuListItem>
							) : null}

							<S.MenuListItem key={href} selected={isSelected}>
								<Link href={href}>
									<S.MenuItemIcon>
										{icon}
										{isChatItem ? (
											<S.MessagesNumber>{messagesNumber}</S.MessagesNumber>
										) : null}
									</S.MenuItemIcon>
									<S.MenuItemLabel>{label}</S.MenuItemLabel>
								</Link>
							</S.MenuListItem>
						</Fragment>
					)
				})}
			</S.MenuList>
		</S.Sidebar>
	)
}
