import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { Select } from 'ui'

import { Divider as DividerCommon } from 'styled/components'
import { Checkbox } from 'ui/Checkbox/Checkbox.styled'
import { MenuItem as MenuItemUI } from 'ui/MenuItem/MenuItem.styled'
import { Placeholder } from 'ui/Select/Select.styled'

export { Placeholder }

export const FilterSelect = styled(Select)`
	position: relative;
	padding: 0;
	background: transparent;
	min-width: 240px;

	&&& {
		.MuiSelect-select {
			padding-right: 33px;
		}
	}

	&& {
		.MuiSelect-select {
			background: transparent;
		}
	}

	&:hover {
		${Placeholder} {
			color: #fff;
		}

		.MuiSelect-icon path {
			stroke: #fff;
		}

		.MuiInputBase-input {
			color: var(--color-gray-100);
		}
	}

	.MuiPopover-root {
		pointer-events: none;
	}

	.MuiPaper-root {
		pointer-events: all;
	}

	.MuiPaper-root {
		z-index: 1600;
		margin-top: 0;
		border-radius: 0 0 5px 5px;
		box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.25);
		background: var(--color-gray-200);
	}

	.MuiSelect-icon {
		z-index: 10;
		stroke: #fff;
	}

	.MuiSelect-select {
		position: relative;
		display: flex;
		align-items: center;
		border-radius: 5px;
		background: #000;
		font-size: 15px;
		font-weight: 500;

		&::before {
			content: '';
			position: absolute;
			inset: 0;
			padding: 2px;
			background: var(--gradient-blue);
			border-radius: inherit;
			mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
			-webkit-mask-composite: xor;
			mask-composite: exclude;
			transition: 0.3s;
		}
	}

	${Placeholder} {
		margin-right: 5px;
		font-size: 15px;
		font-weight: 500;
		flex-shrink: 0;
	}

	${({ open }) =>
		open &&
		css`
			.MuiSelect-select {
				&::before {
					border-radius: 5px 5px 0 0;
				}
			}
		`}
`

export const MenuItem = styled(MenuItemUI)`
	font-weight: 500;
	font-size: 15px;
	line-height: 17px;
	justify-content: space-between;

	&:first-of-type {
		margin-bottom: 10px;
	}

	${Checkbox} {
		svg {
			fill: var(--color-gray-100);
		}

		&.Mui-checked {
			svg {
				fill: #fff;
			}
		}
	}
`

export const MenuItemLeft = styled.span`
	display: flex;
	align-items: center;
`

export const MenuItemLabel = styled.span`
	margin-left: 10px;
`

export const Divider = styled(DividerCommon)`
	margin-bottom: 10px;
	background: var(--color-gray-300);
`

export const PlaceholderValues = styled.div`
	display: flex;
	gap: 5px;
	overflow-x: hidden;
`

export const OverflowMask = styled.span`
	position: absolute;
	top: 8px;
	right: 25px;
	width: 30px;
	height: 17px;
	background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
	pointer-events: none;
`
