import styled from '@emotion/styled'
import MuiTabs from '@mui/material/Tabs'
import MuiTab from '@mui/material/Tab'

import { Modal } from 'ui'
import { Divider, FormColumn } from 'styled/components'

import { InputLabel } from 'ui/InputLabel/InputLabel.styled'
import { ModalContent } from 'ui/Modal/Modal.styled'
import { Heading, HeadingContainer } from 'components/common/Heading/Heading.styled'
import { Button } from 'ui/Button/Button.styled'
import { TableCell } from 'ui/Table/Table.styled'
import { Placeholder } from 'ui/Select/Select.styled'
import { SelectMultiple } from 'components/common/SelectMultiple/SelectMultiple.styled'

export { Divider, FormColumn, Placeholder as SelectPlaceholder }

export const IncomeExpenseAddTableRecordModal = styled(Modal)`
	${ModalContent} {
		display: flex;
		flex-direction: column;
		width: 950px;
		height: 950px;
		padding: 20px 30px;

		${HeadingContainer} {
			${Heading} {
				align-items: flex-start;
			}

			${Divider} {
				margin-top: 10px;
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
	padding-bottom: 7px;
	font-size: 18px;
	line-height: 21px;

	&.Mui-selected {
		background: transparent;
	}
`

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	margin-top: 15px;

	${FormColumn} {
		flex-grow: 1;
		padding: 0;

		&:first-of-type {
			max-width: 320px;
		}

		${SelectMultiple} {
			margin-bottom: 10px;
		}

		${Divider} {
			margin-top: 0;
		}

		& > ${InputLabel} {
			margin-bottom: 15px;
		}
	}

	${TableCell}:last-of-type {
		padding-right: 52px;
	}

	& > ${Button} {
		margin-top: 20px;
	}
`

export const ColumnsRow = styled.div`
	display: flex;
	height: 100%;

	& > ${Divider} {
		margin: 0 30px;
		height: auto;
		background: var(--color-gray-200);
		border-radius: 1px;
	}
`

export const TableAddRow = styled.span`
	position: relative;

	${Button} {
		position: absolute;
		top: 0;
		right: -52px;
		min-width: 37px;
	}
`
