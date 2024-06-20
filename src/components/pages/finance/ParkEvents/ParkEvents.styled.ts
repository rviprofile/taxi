import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { Box } from 'styled/components'

import {
	EndAdornment,
	Heading,
	HeadingContainer
} from 'components/common/Heading/Heading.styled'
import { DatePaginationFilter } from 'components/common/DatePaginationFilter/DatePaginationFilter.styled'
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

export const TextOverflowFadeOut = styled.span`
	position: absolute;
	top: 5px;
	right: 0;
	width: 10px;
	height: 30px;
	background: var(--color-gray-300);
	transition: 0.3s;

	&::before,
	&::after {
		content: '';
		position: absolute;
		top: 0;
		right: 10px;
		width: 30px;
		height: 30px;
	}

	&::after {
		background: linear-gradient(
			90deg,
			rgba(55, 63, 72, 0) 0%,
			var(--color-gray-300) 100%
		);
	}
`

export const ParkEvents = styled(Box)`
	width: 383px;
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

					${TextOverflowFadeOut} {
						background: var(--color-gray-200);

						&::after {
							background: linear-gradient(90deg, rgba(66, 72, 79, 0) 0%, #42484f 100%);
						}
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

export const Text = styled.span`
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	text-overflow: clip;
	line-height: 15px;
	overflow: hidden;
`
