import { Fragment, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import * as S from './Sidebar.styled'
import HamburgerIcon from 'public/icons/hamburger.svg'
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
	// Запрос к API, получаем все элементы menu
	const { data } = useQuery({
		queryKey: ['menu'],
		queryFn: async () => await MenuService.getMenu()
	})
	const router = useRouter()
	const messagesNumber = 12
	const bookmarksNumber = 5

	// Массив с элементами меню
	const [list, setList] = useState<MenuItem[]>([])
	// Какая именно группа элементов открыта
	const [openGroup, setOpenGroup] = useState<string[]>()

	useEffect(() => {
		if (data) {
			setList(data!.data)
		}
	}, [data])

	return (
		<S.Sidebar open={isOpen}>
			<S.MenuList>
				{list
					? list.map(({ code, url, name, type, submenu, style }, idx) => {
							const isSelected = router.pathname.startsWith(url)

							return (
								<Fragment key={url + code + name}>
									{idx === 0 ? (
										// Шапка меню
										<S.MenuListItem
											selected={isSelected}
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
										// Объект с подменю
										<S.MenuListItemsGroup color={style ? style : 'gray'}>
											{/* Название группы */}
											<S.MenuListItem
												selected={isSelected}
												color={style ? style : '#818993'}
												onClick={() =>
													openGroup?.includes(code)
														? setOpenGroup((openGroup) =>
																openGroup!.filter((item) => item !== code)
														  )
														: setOpenGroup((prevGroup) => [...(prevGroup || []), code])
												}
											>
												<Link href={url}>
													<S.MenuItemIcon>
														<S.MenuItemSvg color={style ? style : '#818993'}>
															<use xlinkHref={'/icons/sidebar/sprite.svg#' + code}></use>
														</S.MenuItemSvg>
													</S.MenuItemIcon>
													<S.MenuItemLabelHeader>{name}</S.MenuItemLabelHeader>
												</Link>
											</S.MenuListItem>
											{/* Список из submenu */}
											{openGroup?.includes(code)
												? submenu?.map(({ code, icon, url, name, type }) => {
														return (
															<S.MenuListItemInGroup
																key={url + code + name}
																selected={false}
																color={style ? style : '#818993'}
															>
																<Link href={url}>
																	<S.MenuItemIcon>
																		<S.MenuItemSvg color={style ? style : '#818993'}>
																			<use
																				xlinkHref={'/icons/sidebar/sprite.svg#' + code}
																			></use>
																		</S.MenuItemSvg>
																	</S.MenuItemIcon>
																	<S.MenuItemLabel>{name}</S.MenuItemLabel>
																</Link>
															</S.MenuListItemInGroup>
														)
												  })
												: ''}
											{/* Кнопка закрытия подменю */}
											{openGroup?.includes(code) ? (
												<S.HideButtonBlock
													onClick={() =>
														setOpenGroup((openGroup) =>
															openGroup!.filter((item) => item !== code)
														)
													}
												>
													<S.MenuItemImg
														src={'/icons/sidebar/arrowTop.svg'}
														color={style ? style : '#818993'}
														alt="icon"
													/>
													<S.HideGroupButton>скрыть</S.HideGroupButton>
												</S.HideButtonBlock>
											) : (
												''
											)}
										</S.MenuListItemsGroup>
									) : (
										// Обычный пункт меню
										<S.MenuListItem
											selected={isSelected}
											onClick={onSidebarToggle}
											color={style ? style : 'white'}
										>
											<Link href={url}>
												<S.MenuItemIcon>
													<S.MenuItemSvg color={style ? style : '#818993'}>
														<use xlinkHref={'/icons/sidebar/sprite.svg#' + code}></use>
													</S.MenuItemSvg>
												</S.MenuItemIcon>
												<S.MenuItemLabel>{name}</S.MenuItemLabel>
											</Link>
										</S.MenuListItem>
									)}
								</Fragment>
							)
					  })
					: ''}
				{/* Блок с чатом и закладками */}
				<S.ChatAndBookmarkBlock>
					<S.MenuListItem selected={false} onClick={onSidebarToggle} color="white">
						<Link href="/chat">
							<S.MenuItemIcon>
								<S.MenuItemImg
									src={'/icons/sidebar/message.svg'}
									color={'#fff'}
									alt="icon"
								/>
								<S.MessagesNumber>{messagesNumber}</S.MessagesNumber>
							</S.MenuItemIcon>
							<S.MenuItemLabel>Чат</S.MenuItemLabel>
						</Link>
					</S.MenuListItem>
					<S.MenuListItem selected={false} onClick={onSidebarToggle} color="white">
						<Link href="/bookmarks">
							<S.MenuItemIcon>
								<S.MenuItemImg
									src={'/icons/sidebar/bookmark.svg'}
									color={'#fff'}
									alt="icon"
								/>
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
