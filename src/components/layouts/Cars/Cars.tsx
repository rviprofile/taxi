import { useRouter } from 'next/router'
import { MouseEvent, ReactNode, useState, useEffect } from 'react'

import { MenuButton, MenuNav } from 'components/common'
import { CarCardData } from 'components/pages/cars'

import { ROUTE_NAMES } from 'constants/routes'
import { replaceIdPathname } from 'utils'

import * as S from './Cars.styled'
import { useWS } from 'hooks'
import { Skeleton } from '@mui/material'
import { Car } from 'types/car'

export const CarsLayout = ({ children }: { children?: ReactNode }) => {
	const { query } = useRouter()

	const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null)

	const carId = query.id as string // 4549
	const block = 'car'

	const data = useWS<Car>({
		block,
		id: carId,
		transformRaw: (data) => ({
			...data,
			additionalContacts: []
		})
	})

	const { isLoading } = data

	const openMenu = ({ currentTarget }: MouseEvent<HTMLButtonElement>) => {
		setMenuAnchorEl(currentTarget)
	}

	const closeMenu = () => {
		setMenuAnchorEl(null)
	}

	const nav = [
		{ name: 'Автомобили', href: ROUTE_NAMES.CARS },
		{
			name: 'Приход/Расход',
			href: replaceIdPathname(ROUTE_NAMES.CARS_INCOME_EXPENSE, carId)
		},
		{
			name: 'Штрафы',
			href: replaceIdPathname(ROUTE_NAMES.CARS_PENALTIES, carId)
		}
	]

	return (
		<S.CarsLayout>
			<S.TopLine>
				<S.TopLineLeft>
					<MenuButton color="blue" open={Boolean(menuAnchorEl)} onClick={openMenu}>
						{isLoading ? (
							<Skeleton width={150} height={17} />
						) : (
							data.data?.brand + ' ' + data.data?.model + ' ' + data.data?.licensePlate
						)}
					</MenuButton>

					<S.Popover
						open={Boolean(menuAnchorEl)}
						anchorEl={menuAnchorEl}
						onClose={closeMenu}
					>
						<CarCardData car={data?.data} />
					</S.Popover>

					<S.Divider $orientation="vertical" />
				</S.TopLineLeft>

				<MenuNav nav={nav} />
			</S.TopLine>

			<S.Content>{children}</S.Content>
		</S.CarsLayout>
	)
}
