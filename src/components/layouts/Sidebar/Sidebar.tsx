import { Fragment, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import * as S from './Sidebar.styled'

import HamburgerIcon from 'public/icons/hamburger.svg'
import { useQuery } from '@tanstack/react-query'
import MenuService from '../../../api/menu/menu'
import Image from 'next/image'

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
	const bookmarksNumber = 5

	const [list, setList] = useState<MenuItem[]>([])
	const [openGroup, setOpenGroup] = useState<string>()

	useEffect(() => {
		if (data) {
			setList(data!.data)
			console.log(data!.data)
		}
	}, [data])

	return (
		<S.Sidebar open={isOpen}>
			<S.MenuList>
				{list
					? list.map(({ code, icon, url, name, type, submenu, style }, idx) => {
							const isChatItem = name === 'Чат'
							const isSelected = router.pathname.startsWith(url)

							return (
								<Fragment key={url}>
									{idx === 0 ? (
										<S.MenuListItem
											selected={false}
											onClick={onSidebarToggle}
											color={style ? style : 'white'}
										>
											<S.ButtonExpand>
												<S.MenuItemIcon>
													<HamburgerIcon />
												</S.MenuItemIcon>
												<S.MenuItemLabel>
													<S.MenuLogo
														src={'/icons/sidebar/logo.svg'}
														alt="logo"
														isOpen={isOpen}
													/>
												</S.MenuItemLabel>
											</S.ButtonExpand>
										</S.MenuListItem>
									) : null}
									{type === 'lvl1-group' ? (
										<S.MenuListItemsGroup
											color={style ? style : 'gray'}
											onMouseEnter={() => setOpenGroup(code)}
										>
											<S.MenuListItem selected={false} color={style ? style : '#818993'}>
												<Link href={url}>
													<S.MenuItemIcon>
														<S.MenuItemImg src={`/icons/sidebar/${code}.svg`} alt="icon" />
														{isChatItem ? (
															<S.MessagesNumber>{messagesNumber}</S.MessagesNumber>
														) : null}
													</S.MenuItemIcon>
													<S.MenuItemLabelHeader>{name}</S.MenuItemLabelHeader>
												</Link>
											</S.MenuListItem>
											{openGroup === code
												? submenu?.map(({ code, icon, url, name, type }) => {
														return (
															<S.MenuListItemInGroup
																key={url + code}
																selected={false}
																color={style ? style : '#818993'}
															>
																<Link href={url}>
																	<S.MenuItemIcon>
																		<S.MenuItemImg
																			src={`/icons/sidebar/${code}.svg`}
																			alt={`icon ${code}`}
																		/>
																		{isChatItem ? (
																			<S.MessagesNumber>
																				{messagesNumber}
																			</S.MessagesNumber>
																		) : null}
																	</S.MenuItemIcon>
																	<S.MenuItemLabel>{name}</S.MenuItemLabel>
																</Link>
															</S.MenuListItemInGroup>
														)
												  })
												: ''}
											{openGroup === code ? (
												<S.HideButtonBlock onClick={() => setOpenGroup('')}>
													<S.MenuItemImg src={'/icons/sidebar/arrowTop.svg'} alt="icon" />
													<S.HideGroupButton>скрыть</S.HideGroupButton>
												</S.HideButtonBlock>
											) : (
												''
											)}
										</S.MenuListItemsGroup>
									) : (
										<S.MenuListItem
											selected={false}
											onClick={onSidebarToggle}
											color={style ? style : 'white'}
										>
											<Link href={url}>
												<S.MenuItemIcon>
													<S.MenuItemImg src={`/icons/sidebar/${code}.svg`} alt={`icon ${code}`} />
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
					  })
					: ''}
				<S.ChatAndBookmarkBlock>
					<S.MenuListItem selected={false} onClick={onSidebarToggle} color="white">
						<Link href="/chat">
							<S.MenuItemIcon>
								<S.MenuItemImg src={'/icons/sidebar/message.svg'} alt="icon" />
								<S.MessagesNumber>{messagesNumber}</S.MessagesNumber>
							</S.MenuItemIcon>
							<S.MenuItemLabel>Чат</S.MenuItemLabel>
						</Link>
					</S.MenuListItem>
					<S.MenuListItem selected={false} onClick={onSidebarToggle} color="white">
						<Link href="/bookmarks">
							<S.MenuItemIcon>
								<S.MenuItemImg src={'/icons/sidebar/bookmark.svg'} alt="icon" />
								<S.MessagesNumber>{bookmarksNumber}</S.MessagesNumber>
							</S.MenuItemIcon>
							<S.MenuItemLabel>Закладки</S.MenuItemLabel>
						</Link>
					</S.MenuListItem>
				</S.ChatAndBookmarkBlock>
			</S.MenuList>
		</S.Sidebar>
	)
}
