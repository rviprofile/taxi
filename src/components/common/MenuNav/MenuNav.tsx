import { useRouter } from 'next/router'
import { useEffect } from 'react'

import * as S from './MenuNav.styled'

interface NavItem {
	name: string
	href: string
}

interface MenuNavProps {
	nav: NavItem[]
}

export const MenuNav = ({ nav }: MenuNavProps) => {
	const { pathname } = useRouter()

	const getActiveNavItem = (currentPathname: string, nav: NavItem[]) => {
		const lastEndpointIdx = currentPathname.lastIndexOf('/')
		const currentEndpoint = currentPathname.slice(lastEndpointIdx)

		const activeNavItem = nav.find(({ href }) => {
			const lastEndpointIdx = href.lastIndexOf('/')
			const endpoint = href.slice(lastEndpointIdx)

			return currentEndpoint === endpoint
		})

		return activeNavItem
	}

	return (
		<S.MenuNav style={{ background: '0' }}>
			{nav.map(({ name, href }) => {
				return (
					<S.Link
						key={name}
						href={href}
						active={name === getActiveNavItem(pathname, nav)?.name}
					>
						{name}
					</S.Link>
				)
			})}
		</S.MenuNav>
	)
}
