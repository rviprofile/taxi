import styled from '@emotion/styled'

import { FilterSelect } from 'components/common'

import { Divider as DividerCommon } from 'styled/components'
import { Checkbox } from 'ui/Checkbox/Checkbox.styled'
import { MenuItem as MenuItemUI } from 'ui/MenuItem/MenuItem.styled'

import { Placeholder } from 'ui/Select/Select.styled'

export { Placeholder }

export const CarStatusSelect = styled(FilterSelect)`
	position: relative;

	.MuiPaper-root {
		margin-top: 0;
		border-radius: 0 0 5px 5px;
		box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.25);
		background: var(--color-gray-200);
	}
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

export const OverflowMask = styled.span`
	position: absolute;
	top: 8px;
	right: 25px;
	width: 30px;
	height: 17px;
	background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
	pointer-events: none;
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

export const PlaceholderStatuses = styled.div`
	display: flex;
	gap: 5px;
	overflow-x: hidden;
`
