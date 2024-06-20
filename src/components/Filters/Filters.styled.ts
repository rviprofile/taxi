import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { Popover as MuiPopover } from 'ui'
import { MenuButton } from 'components/common'

import { OverflowMask } from 'components/common/FilterSelect/FilterSelect.styled'
import { SelectContainer } from 'ui/Select/Select.styled'

import { TextField } from 'ui/TextField/TextField.styled'

export const Filters = styled.div`
	display: flex;
	gap: 20px;
	padding: 15px 15px 0;

	${TextField} {
		max-width: 280px;

		.MuiInputBase-root {
			height: 40px;
		}
	}

	${SelectContainer} {
		width: 240px;
		flex-shrink: 0;

		${OverflowMask} {
			background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, var(--color-gray-300) 100%);
		}
	}
`

export const SelectGroup = styled.div`
	display: flex;
	align-items: center;
	flex-grow: 1;
	gap: 15px;
`

export const ButtonsGroup = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`

export const PopoverButton = styled(MenuButton)`
	background: var(--color-gray-200);

	${({ open }) =>
		open &&
		css`
			background: var(--color-gray-400);
		`}
`

export const CounterpartiesPopover = styled(MuiPopover)`
	.MuiPaper-root {
		display: flex;
		flex-direction: column;
		gap: 15px;
		background: var(--color-gray-200);
		box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.25);
	}

	a {
		opacity: 0.5;
		transition: 0.3s;

		&:hover {
			opacity: 1;
		}
	}
`
