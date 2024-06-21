import { Fragment, useEffect, useState } from 'react'
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
import { useQuery } from '@tanstack/react-query'
import MenuService from '../../../api/menu/menu'

interface SidebarProps {
	isOpen: boolean
	onSidebarToggle: () => void
}

interface MenuItem {
	code: string
	icon: string
	name: string
	style?: string
	submenu?: MenuItem[]
	type: string
	url: string
}

export const Sidebar = ({ isOpen, onSidebarToggle }: SidebarProps) => {
	const { data } = useQuery({
		queryKey: ['menu'],
		queryFn: async () => await MenuService.getMenu()
	})
	const router = useRouter()
	const messagesNumber = 12

	const [menuItemsList, setMenuItemList] = useState<MenuItem[]>([])
	useEffect(() => {
		if (data) {
			setMenuItemList(data!.data)
			console.log(menuItemsList)
		}
	}, [data])

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
				{menuItemsList.map(({ code, icon, url, name, type, submenu }, idx) => {
					const isChatItem = name === 'Чат'
					const isSelected = router.pathname.startsWith(url)

					return (
						<Fragment key={url}>
							{idx === 0 ? (
								<S.MenuListItem selected={false} onClick={onSidebarToggle}>
									<S.ButtonExpand>
										<S.MenuItemIcon>
											<HamburgerIcon />
										</S.MenuItemIcon>
										<S.MenuItemLabel>
											<img src={'/icons/sidebar/logo.svg'} alt="logo" />
										</S.MenuItemLabel>
									</S.ButtonExpand>
								</S.MenuListItem>
							) : null}
							{type === 'lvl1-group' ? (
								// <S.MenuListItem key={url} selected={isSelected}>
									<S.MenuListItemGroup>
										<S.MenuItemIconGroup>
											<img src={'/icons/sidebar/wallet.svg'} alt="icon" />
											{isChatItem ? (
												<S.MessagesNumber>{messagesNumber}</S.MessagesNumber>
											) : null}
										</S.MenuItemIconGroup>
										<S.MenuItemLabel>{name}</S.MenuItemLabel>
										<S.MenuList>
											{submenu?.map(({ code, icon, url, name, type }) => {
												return (
													<S.MenuListItem key={url + name} selected={isSelected}>
														<S.MenuItemIcon>
															<img src={'/icons/sidebar/wallet.svg'} alt="icon" />
															{isChatItem ? (
																<S.MessagesNumber>{messagesNumber}</S.MessagesNumber>
															) : null}
														</S.MenuItemIcon>
														<S.MenuItemLabel>{name}</S.MenuItemLabel>
													</S.MenuListItem>
												)
											})}
										</S.MenuList>
									</S.MenuListItemGroup>
								// </S.MenuListItem>
							) : (
								<S.MenuListItem selected={false} onClick={onSidebarToggle}>
									<Link href={url}>
										<S.MenuItemIcon>
											<img src={'/icons/sidebar/wallet.svg'} alt="icon" />
											{isChatItem ? (
												<S.MessagesNumber>{messagesNumber}</S.MessagesNumber>
											) : null}
										</S.MenuItemIcon>
										<S.MenuItemLabel>{name}</S.MenuItemLabel>
									</Link>
								</S.MenuListItem>
							)}
						</Fragment>
					)
				})}
			</S.MenuList>
		</S.Sidebar>
	)
}
