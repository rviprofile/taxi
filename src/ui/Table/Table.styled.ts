import { css } from '@emotion/react'
import styled from '@emotion/styled'
import MuiSkeleton from '@mui/material/Skeleton'

import { Pagination } from 'components/common/Pagination/Pagination.styled'
import { scrollStyles } from 'styled/common'
import { Text } from 'styled/components'

interface TableCellProps {
	sortable?: boolean
}

interface TableContainerScrollProps {
	grow: boolean
}

export const TableContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	width: 100%;
	max-height: 100%;
	background: var(--color-gray-300);

	${Pagination} {
		position: relative;
		padding: 14px 15px 15px;
		margin-top: auto;
		box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.25);

		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 15px;
			width: calc(100% - 30px);
			height: 2px;
			background: var(--color-gray-200);
			border-radius: 1px;
		}
	}
`

export const TableContainerScroll = styled.div<TableContainerScrollProps>`
	display: flex;
	overflow: auto;

	${scrollStyles}

	${({ grow }) =>
		grow &&
		css`
			flex-grow: 1;
		`}
`

export const Table = styled.table`
	width: 100%;
`

export const TableCell = styled.td<TableCellProps>`
	cursor: pointer;
	${({ sortable }) =>
		sortable &&
		css`
			span {
				display: flex;
				align-items: center;
				justify-content: space-between;
			}
		`}
`

export const TableRow = styled.tr``

export const TableHead = styled.thead`
	position: sticky;
	top: 0;
	background: #737d89;

	${TableCell} {
		position: relative;
		padding: 8px 9px;

		&:first-of-type {
			padding-left: 20px;
		}

		&:not(:last-child)::after {
			content: '';
			position: absolute;
			top: 8px;
			right: 0;
			width: 2px;
			height: 17px;
			background: #5d6672;
			opacity: 0.5;
			border-radius: 1px;
		}
	}
`

export const TableBody = styled.tbody`
	${TableRow} {
		&:nth-of-type(odd) {
			background: var(--color-gray-300);
		}

		&:nth-of-type(even) {
			background: var(--color-gray-200);
		}
	}

	${TableCell} {
		padding: 12px 9px;

		&:first-of-type {
			padding-left: 20px;
			width: 600px;
		}
	}
`

export const SortButton = styled.button`
	margin-left: 10px;
`

export const Skeleton = styled(MuiSkeleton)`
	max-height: inherit;
	height: 100%;
	flex-grow: 1;
`

export const NoDataText = styled(Text)`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	opacity: 0.2;
`
