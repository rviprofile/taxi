import { css } from '@emotion/react'
import styled from '@emotion/styled'
import MuiFormControlLabel from '@mui/material/FormControlLabel'
import Link from 'next/link'

import { Box } from 'styled/components'
import { TextField } from 'ui/TextField/TextField.styled'
import { MenuButton } from 'components/common/MenuButton/MenuButton.styled'

interface SearchFieldContainerProps {
	active: boolean
}

interface CategoryCheckboxProps {
	active: boolean
}

export const MainSearch = styled.div`
	position: relative;
	max-width: 600px;
	width: 100%;
	z-index: 20;

	${TextField} {
		.MuiInput-root {
			height: 40px;
			padding-right: 15px;

			input {
				padding-left: 15px;
			}
		}
	}
`

export const SearchFieldContainer = styled.div<SearchFieldContainerProps>`
	${({ active }) =>
		active &&
		css`
			.MuiInputBase-root {
				border-radius: 5px 5px 0 0;
			}
		`}
`

export const SearchContainer = styled(Box)`
	position: absolute;
	left: 0;
	top: 40px;
	z-index: 10;
	width: 100%;
	border: 2px solid var(--color-gray-200);
	padding: 15px 10px 20px;
	border-radius: 0px 0px 5px 5px;
	box-shadow: 0px 2px 15px rgba(37, 37, 37, 0.25);
`

export const SearchCategory = styled.div`
	&:not(:last-of-type) {
		margin-bottom: 25px;
	}

	&:last-of-type {
		position: relative;
		padding-top: 15px;

		&::before {
			content: '';
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 2px;
			border-radius: 1px;
			background: var(--color-gray-200);
		}
	}

	${MenuButton} {
		padding: 0;
	}
`

export const ResultsAmount = styled.span`
	color: var(--color-gray-100);
	font-weight: 400;
`

export const OptionsList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	margin-top: 10px;
`

export const CategoryCheckbox = styled(MuiFormControlLabel)<CategoryCheckboxProps>`
	margin-left: 0;
	margin-right: 0;
	padding: 7px 10px;
	border-radius: 5px;
	background: var(--color-gray-200);
	box-shadow: var(--box-shadow);
	transition: 0.3s;

	&:hover {
		background: #49535f;
	}

	&:active {
		background: var(--color-gray-400);
	}

	.MuiCheckbox-root {
		position: absolute;
		visibility: hidden;
	}

	${({ active }) =>
		active &&
		css`
			background: var(--color-gray-400);
		`}
`

export const OptionLink = styled(Link)`
	position: relative;
	display: inline-block;
	padding: 7px 10px;
	background: var(--color-gray-300);
	border: 2px solid transparent;
	filter: drop-shadow(2px 2px 8px rgba(37, 37, 37, 0.25));
	border-radius: 5px;

	&::before,
	&::after {
		content: '';
		position: absolute;
		inset: 0;
		padding: 2px;
		border-radius: inherit;
		mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
		-webkit-mask-composite: xor;
		mask-composite: exclude;
		transition: 0.3s;
	}

	&::before {
		background: linear-gradient(
			93.88deg,
			rgba(47, 152, 207, 0.2) 61.98%,
			rgba(47, 207, 178, 0.2) 100%
		);
	}

	&::after {
		background: var(--gradient-blue);
		opacity: 0;
	}

	&:hover {
		&::before {
			opacity: 0;
		}

		&::after {
			opacity: 1;
		}
	}
`
