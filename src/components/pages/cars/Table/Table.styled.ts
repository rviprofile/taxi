import styled from '@emotion/styled'

import { FormColumn, Divider, FieldsRow } from 'styled/components'

import { NotificationsNumber } from 'components/common/NotificationsNumber/NotificationsNumber.styled'
import { TableCell, Table, TableRow, TableContainer } from 'ui/Table/Table.styled'

export { FormColumn, Divider, FieldsRow }

export const CarsTable = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	background: var(--color-gray-300);

	${Divider} {
		width: calc(100% - 30px);
		margin: 15px 15px 0;
	}

	${TableContainer} {
		margin-top: 20px;

		${Table} {
			width: calc(100% - 30px);
			margin: 0 15px;

			${TableRow} {
				cursor: pointer;
			}

			${TableCell} {
				&:nth-of-type(2) {
					min-width: 140px;
				}
			}
		}
	}
`

export const Row = styled.span`
	display: flex;
	justify-content: space-between;

	${NotificationsNumber} {
		margin-left: 4px;
	}
`
