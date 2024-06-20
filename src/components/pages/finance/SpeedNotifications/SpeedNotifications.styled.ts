import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { Box } from 'styled/components'

import { DatePaginationFilter } from 'components/common/DatePaginationFilter/DatePaginationFilter.styled'
import {
	EndAdornment,
	Heading,
	HeadingContainer
} from 'components/common/Heading/Heading.styled'
import {
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow
} from 'ui/Table/Table.styled'

interface TimeProps {
	color: 'green' | 'blue'
}

export const Time = styled.span<TimeProps>`
	position: relative;
	padding: 2px 3px;
	background: var(--color-gray-300);
	border: 2px solid transparent;
	background-clip: padding-box;
	border-radius: 5px;
	z-index: 0;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: -2px;
		border-radius: inherit;
		background: var(--gradient-green);
		z-index: -1;
	}

	${({ color = 'green' }) =>
		color === 'blue'
			? css`
					background: linear-gradient(
						98.34deg,
						#2f98cf 70.26%,
						#2fcfb2 105.98%
					) !important;

					&::before {
						display: none;
					}
			  `
			: null}
`

export const SpeedNotifications = styled(Box)`
	width: 393px;
	padding: 0;

	${HeadingContainer} {
		position: relative;
		margin: 0 20px;

		${Heading} {
			padding-top: 15px;
			justify-content: center;
		}

		${EndAdornment} {
			position: absolute;
			right: 0;

			button {
				width: 21px;
				height: 21px;

				svg {
					opacity: 0.1;
					transition: 0.3s;

					&:hover {
						opacity: 1;
					}
				}
			}
		}
	}

	${DatePaginationFilter} {
		padding: 10px 20px;
	}

	${TableContainer} {
		margin-top: 5px;

		${TableHead} {
			${TableCell}::after {
				display: none;
			}
		}

		${TableBody} {
			${TableRow} {
				height: 41px;

				&:nth-of-type(even) {
					${Time} {
						background: var(--color-gray-200);
						background-clip: padding-box;
					}
				}
			}

			${TableCell} {
				position: relative;
				padding-top: 5px;
				padding-bottom: 5px;
			}
		}

		${TableCell} {
			vertical-align: middle;

			&:last-child {
				padding-right: 20px;
			}
		}
	}
`
