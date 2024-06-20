import styled from '@emotion/styled'
import MuiTabs from '@mui/material/Tabs'
import MuiTab from '@mui/material/Tab'

import { Box, Divider } from '../../../../styled/components'

import { Heading, HeadingContainer } from '../../../common/Heading/Heading.styled'
import { ColoredDotText } from '../../../common/ColoredDotText/ColoredDotText.styled'
import { AccordionEditableItem } from '../AccordionEditableItem/AccordionEditableItem.styled'

export { Divider }

export const BankCardsRequisites = styled(Box)`
	position: relative;
	width: 361px;
	max-height: 460px;
	padding: 0;
	overflow: hidden;

	&::before {
		content: '';
		position: absolute;
		left: 0px;
		bottom: 0px;
		width: 100%;
		height: 40px;
		background: linear-gradient(
			180deg,
			rgba(55, 63, 72, 0) 0%,
			var(--color-gray-300) 100%
		);
		z-index: 10;
	}

	${Heading} {
		align-items: stretch;
		padding: 10px 20px 0;
	}

	${Divider} {
		width: calc(100% - 40px);
		margin: 0 20px;
	}

	${HeadingContainer} {
		${Divider} {
			margin-top: 10px;
		}
	}

	${AccordionEditableItem}:first-of-type {
		${ColoredDotText} {
			margin-left: 5px;

			span {
				font-size: 12px;
			}
		}
	}
`

export const Tabs = styled(MuiTabs)`
	padding: 0;

	.MuiTabs-indicator {
		background: #fff;
		border-radius: 1px;
	}

	.MuiTabs-flexContainer {
		gap: 15px;
	}

	.MuiTabs-scroller {
		display: flex;
	}
`

export const Tab = styled(MuiTab)`
	flex: 0 0 auto;
	padding: 0;
	font-size: 18px;
	line-height: 21px;

	&.Mui-selected {
		background: transparent;
	}
`

export const BankCardNumber = styled.div`
	padding: 5px;
	background: linear-gradient(
		93.88deg,
		rgba(47, 152, 207, 0.2) 61.98%,
		rgba(47, 207, 178, 0.2) 100%
	);
	border-radius: 205px;
	color: #fff;
`

export const TabContent = styled.div``

export const RequisiteDetails = styled(Box)`
	width: 100%;
	padding: 5px 10px;
	background: var(--color-gray-200);
	box-sizing: border-box;

	& > *:not(:last-child) {
		margin-bottom: 10px;
	}
`

export const RequisiteDetailsRow = styled.div`
	display: grid;
	grid-template-columns: 35px 1fr;
	grid-gap: 5px;

	span {
		font-size: 14px;
		line-height: 16px;

		&:first-of-type {
			color: var(--color-gray-100);
		}

		&:last-of-type {
			color: #fff;
		}
	}
`
