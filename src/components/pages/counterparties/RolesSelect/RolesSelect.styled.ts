import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { Menu as MenuUI } from 'ui'
import { Menu } from 'ui/Menu/Menu.styled'
import { MenuItem } from 'ui/MenuItem/MenuItem.styled'
import { TextField } from 'ui/TextField/TextField.styled'

interface MenuButtonProps {
	open: boolean
}

interface RoleListItem {
	darkGreen: boolean
}

export const CounterpartiesRolesSelect = styled.div`
	display: flex;
	gap: 10px;

	${Menu} ${MenuItem} {
		font-size: 15px;
		font-weight: 500;
	}
`

export const RolesList = styled.ul`
	display: flex;
	height: 31px;
	background: var(--gradient-green);
	border-radius: 5px;
`

export const RoleListItem = styled.li<RoleListItem>`
	display: flex;
	align-items: center;
	padding: 5px 10px;

	&:not(:last-of-type) {
		border-right: 2px solid #2f6d08;
	}

	${({ darkGreen }) =>
		darkGreen &&
		css`
			background: #19560a;
			box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.1);
		`}
`

export const RoleListItemName = styled.div``

export const RoleListItemSubRole = styled.div`
	margin-left: 5px;
	padding: 2px 5px;
	border-radius: 5px;
	background: rgba(255, 255, 255, 0.2);
`

export const RoleListItemActions = styled.div`
	display: flex;
	align-items: center;
	margin-left: 5px;

	button {
		display: flex;
		justify-content: center;
		align-items: center;

		// arrow
		&:first-of-type {
			width: 17px;
			height: 17px;
		}

		// cross
		&:last-of-type {
			width: 13px;
			height: 13px;
			margin-left: 10px;
			opacity: 0.5;
			transition: 0.3s;

			&:hover {
				opacity: 1;
			}
		}
	}
`

export const MenuButton = styled.button<MenuButtonProps>`
	position: relative;
	padding: 7px 10px;
	border-radius: 5px;
	background-image: linear-gradient(0deg, #19560a, #19560a),
		linear-gradient(
			268.87deg,
			#88b114 -10.28%,
			#558f09 27.63%,
			#2c7400 73.22%,
			#408104 100%
		);

	&::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		bottom: 0;
		background-image: linear-gradient(
			268.87deg,
			#88b114 -10.28%,
			#558f09 27.63%,
			#2c7400 73.22%,
			#408104 100%
		);
		border-radius: inherit;
		transition: 0.3s;
	}

	&:hover {
		&::before {
			opacity: 0;
		}
	}

	& > span {
		position: relative;
		display: flex;
		z-index: 1;

		span {
			margin-left: 5px;

			svg {
				transition: 0.3s;
			}
		}
	}

	${({ open }) =>
		open &&
		css`
			&::before {
				background-image: linear-gradient(0deg, #19560a, #19560a),
					linear-gradient(
						268.87deg,
						#88b114 -10.28%,
						#558f09 27.63%,
						#2c7400 73.22%,
						#408104 100%
					);
			}

			svg {
				transform: rotate(180deg);
			}
		`}
`

export const RolesMenu = styled(MenuUI)`
	.MuiPaper-root {
		padding: 15px 10px 5px;
		background: var(--color-gray-200);
	}

	${TextField} {
		.MuiInput-root {
			background: #1f2225;
		}
	}
`

export const RolesMenuNamesList = styled.div`
	margin-top: 10px;

	${MenuItem} {
		height: 33px;

		&:not(:last-child) {
			margin-bottom: 0;
		}
	}
`

export const RolesMenuNamesListItem = styled.div`
	&:not(:last-child) {
		position: relative;
		padding-bottom: 2px;

		&::after {
			content: '';
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 2px;
			border-radius: 1px;
			background: var(--color-gray-300);
		}
	}

	& > span {
		display: flex;
		align-items: center;
		width: 100%;
		height: 33px;
		color: var(--color-gray-100);
	}
`

export const RolesMenuList = styled.ul`
	${MenuItem} {
		font-size: 15px;
		font-weight: 500;
		line-height: 17px;
	}
`

export const SubRolesMenu = styled(RolesMenu)`
	.MuiPaper-root {
		margin-top: 17px;
		padding: 5px 10px;
	}

	${RolesMenuNamesList} {
		margin-top: 0;
	}
`
