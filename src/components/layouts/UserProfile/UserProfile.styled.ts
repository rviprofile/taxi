import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { Popover as MuiPopover } from 'ui'
import { Divider } from 'styled/components'
import { gradientBlue } from 'styled/components/ButtonGradient'

import { Button } from 'ui/Button/Button.styled'
import { MenuButton } from 'components/common/MenuButton/MenuButton.styled'
import { NotificationsNumber } from 'components/common/NotificationsNumber/NotificationsNumber.styled'

interface UserProfilePorps {
	popoverOpen: boolean
}

export { Divider }

export const Avatar = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 42px;
	height: 42px;
	border-radius: 50%;

	${gradientBlue}

	&:hover::before {
		opacity: 0;
	}

	background-image: none;

	${NotificationsNumber} {
		position: absolute;
		top: -10px;
		left: 26px;
	}
`

export const UserProfile = styled.div<UserProfilePorps>`
	${MenuButton} {
		display: flex;
		align-items: center;
		padding: 5px 10px;
		border-radius: 5px;
		transition: 0.3s;

		&::before {
			display: none;
		}

		&:hover {
			background: rgba(55, 63, 72, 0.5);

			svg path {
				stroke: #fff;
			}

			${Avatar}::before {
				opacity: 1;
			}
		}

		& > span > span {
			font-weight: 700;
			font-size: 15px;
			margin-left: 10px;
		}

		svg path {
			stroke: var(--color-gray-100);
			transition: 0.3s;
		}

		${({ popoverOpen }) =>
			popoverOpen &&
			css`
				background: var(--color-gray-300);

				&:hover {
					background: var(--color-gray-300);
				}

				svg path {
					stroke: #fff;
				}

				${Avatar}::before {
					opacity: 1;
				}
			`}
	}
`

export const NotificationsCount = styled.span`
	${gradientBlue}

	position: absolute;
	top: -10px;
	left: 26px;
	padding: 2px 6px;
	border-radius: 10px;
	font-size: 14px;
	font-weight: 500;

	&:hover::before {
		opacity: 0;
	}
`

export const Popover = styled(MuiPopover)`
	.MuiPaper-root {
		width: 360px;
		padding: 15px 0;

		& > *:not(:last-child) {
			margin-bottom: 15px;
		}
	}

	${Divider} {
		width: calc(100% - 20px);
		margin: 0 10px;
	}
`

export const ActionsRow = styled.div`
	display: flex;
	gap: 10px;
	padding: 0 10px;

	&:last-of-type {
		${Button} {
			&:first-of-type {
				&:hover {
					background: var(--color-red);
				}
			}

			&:last-of-type {
				background-image: var(--color-gray-200);

				&::before {
					background-image: var(--gradient-blue);
				}
			}
		}
	}
`

export const Notifications = styled.div`
	& > p {
		padding: 0 10px;
	}
`

export const NotificationList = styled.ul`
	margin-top: 15px;
`

export const NotificationItem = styled.li`
	display: flex;
	align-items: center;
	padding: 5px 10px;

	&:not(:last-child) {
		margin-bottom: 5px;
	}
`

export const NotificationTime = styled.span`
	margin-left: auto;
	font-weight: 400;
	font-size: 11px;
	color: var(--color-gray-100);
	line-height: 12.64px;
`
