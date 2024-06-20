import styled from '@emotion/styled'

import { Box, Badge } from 'styled/components'

import {
	EndAdornment,
	Heading,
	HeadingContainer
} from 'components/common/Heading/Heading.styled'
import { DatePaginationFilter } from 'components/common/DatePaginationFilter/DatePaginationFilter.styled'
import { TableBody, TableCell, TableContainer, TableHead } from 'ui/Table/Table.styled'

export { Badge }

export const AvailableCars = styled(Box)`
	width: 403px;
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
			${TableCell} {
				padding-top: 5px;
				padding-bottom: 5px;
			}
		}

		${TableCell} {
			vertical-align: middle;

			&:last-child {
				width: 193px;
				padding-right: 20px;
			}
		}
	}
`

export const LicensePlateRow = styled.span`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 15px;
`
