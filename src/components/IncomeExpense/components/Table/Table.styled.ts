import { css } from '@emotion/react'
import styled from '@emotion/styled'

import {
	Table,
	TableCell,
	TableRow,
	TableBody,
	TableContainer,
	TableHead
} from 'ui/Table/Table.styled'

interface SubTableBodyProps {
	haveBorder: boolean
}

export { Table, TableHead, TableBody, TableRow, TableCell }

export const TableActions = styled.span`
	display: flex;
	align-items: center;
	gap: 15px;

	button {
		svg {
			opacity: 0.5;
			transition: 0.3s;
		}

		&:hover {
			svg {
				opacity: 1;
			}
		}
	}
`

export const TextOverflowFadeOut = styled.span`
	position: absolute;
	top: 12px;
	right: 0;
	width: 10px;
	height: 17px;
	background: var(--color-gray-300);
	transition: 0.3s;

	&::before,
	&::after {
		content: '';
		position: absolute;
		top: 0;
		right: 10px;
		width: 30px;
		height: 17px;
	}

	&::before {
		opacity: 0;
		background: linear-gradient(
			90deg,
			rgba(46, 53, 59, 0) 0%,
			var(--color-gray-400) 100%
		);
		transition: 0.2s opacity;
	}

	&::after {
		opacity: 1;
		background: linear-gradient(
			90deg,
			rgba(55, 63, 72, 0) 0%,
			var(--color-gray-300) 100%
		);
		transition: 0.3s opacity;
	}
`

export const IncomeExpenseTable = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	width: 100%;

	${TableContainer} {
		padding: 0;
	}

	${Table} {
		width: calc(100% - 30px);
		margin: 0 15px;

		${TableCell}:last-of-type {
			width: 78px;
			vertical-align: middle;

			& > span {
				justify-content: flex-end;

				span {
					&:hover {
						svg {
							opacity: 1;
						}
					}

					svg {
						opacity: 0.5;
						transition: 0.3s;
					}
				}
			}
		}

		${TableBody} {
			${TableRow} {
				cursor: pointer;
				transition: 0.3s;

				&:nth-of-type(even) {
					${TextOverflowFadeOut} {
						background: var(--color-gray-200);

						&::after {
							background: linear-gradient(
								90deg,
								rgba(66, 72, 79, 0) 0%,
								var(--color-gray-200) 100%
							);
						}
					}
				}

				&:hover {
					background: var(--color-gray-400);

					${TextOverflowFadeOut} {
						background: var(--color-gray-400);

						&::after {
							opacity: 0;
						}

						&::before {
							opacity: 1;
						}
					}
				}

				${TableCell} {
					position: relative;
					max-width: 221px;
					white-space: nowrap;
					overflow-x: hidden;
				}
			}
		}
	}
`

export const SubTableHead = styled(TableRow)`
	border-top: 2px solid #737d89;
	background: #3c434a;

	${TableCell} {
		padding: 4.5px 9px;
	}
`

export const SubTableBody = styled(TableRow)<SubTableBodyProps>`
	background: var(--color-gray-400);

	${({ haveBorder }) =>
		haveBorder &&
		css`
			border-bottom: 2px solid #737d89;
		`}
`

export const SubTableHalfCell = styled.span`
	display: flex;
	justify-content: space-between;
	align-items: center;

	span {
		flex-grow: 1;
	}
`
