import { MouseEvent, useState } from 'react'
import Image from 'next/image'
import { FormProvider, useForm } from 'react-hook-form'
import Skeleton from '@mui/material/Skeleton'

import { NotificationsNumber, MenuButton } from 'components/common'
import { Button, Checkbox } from 'ui'

import { useAuth, useUser } from 'hooks'

import * as S from './UserProfile.styled'

import avatarImg from 'public/img/avatar.png'

export const UserProfile = () => {
	const useFormProps = useForm()
	const [popoverAnchorEl, setPopoverAnchorEl] = useState<HTMLButtonElement | null>(null)
	const isPopoverOpen = Boolean(popoverAnchorEl)

	const { logout } = useAuth()
	const { user, isUserLoading } = useUser()

	const notifications = [
		{ id: 0, label: 'Выбрать все', time: '13:06' },
		{ id: 1, label: 'Уведомление 1 не прочитано', time: '13:06' },
		{ id: 2, label: 'Уведомление 1 не прочитано', time: '13:06' },
		{ id: 3, label: 'Уведомление 1 не прочитано', time: '13:06' },
		{ id: 4, label: 'Уведомление 1 не прочитано', time: '13:06' },
		{ id: 5, label: 'Уведомление 1 не прочитано', time: '13:06' }
	]

	const openPopover = (event: MouseEvent<HTMLButtonElement>) => {
		setPopoverAnchorEl(event.currentTarget)
	}

	const closePopover = () => {
		setPopoverAnchorEl(null)
	}

	const onLogout = () => {
		logout()
	}

	const notificationItems = notifications.map(({ id, label, time }) => {
		return (
			<S.NotificationItem key={id}>
				<Checkbox name="" label={label} />

				<S.NotificationTime>{time}</S.NotificationTime>
			</S.NotificationItem>
		)
	})

	return (
		<S.UserProfile popoverOpen={isPopoverOpen}>
			<MenuButton open={isPopoverOpen} onClick={openPopover}>
				<S.Avatar>
					<Image src={avatarImg} alt="Пользователь" />
					<NotificationsNumber value={5} />
					<S.NotificationsCount>5</S.NotificationsCount>
				</S.Avatar>

				{!isUserLoading && user ? (
					<span>
						{user.lastName} {user.firstName}
					</span>
				) : (
					<Skeleton width={217} height={17} />
				)}
			</MenuButton>

			<S.Popover
				open={isPopoverOpen}
				anchorEl={popoverAnchorEl}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right'
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right'
				}}
				onClose={closePopover}
			>
				<S.ActionsRow>
					<Button fullWidth>В профиль</Button>
					<Button fullWidth onClick={onLogout}>
						Выйти
					</Button>
				</S.ActionsRow>

				<S.Notifications>
					<p>Уведомления</p>

					<FormProvider {...useFormProps}>
						<S.NotificationList>{notificationItems}</S.NotificationList>
					</FormProvider>
				</S.Notifications>

				<S.Divider />

				<S.ActionsRow>
					<Button fullWidth>Удалить</Button>
					<Button fullWidth color="blue">
						Прочитано
					</Button>
				</S.ActionsRow>
			</S.Popover>
		</S.UserProfile>
	)
}
