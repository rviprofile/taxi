import styled from '@emotion/styled'

import { CarsRent } from 'components/pages/cars/Rent/Rent.styled'
import { PenaltiesTable } from 'components/PenaltiesTable/PenaltiesTable.styled'

export const ChargesPage = styled.div`
	display: grid;
	grid-template-columns: 382px 361px 544px;
	grid-template-rows: 455px 455px;
	grid-gap: 15px;

	${CarsRent} {
		grid-row-start: span 2;
	}

	${PenaltiesTable} {
		grid-column-start: span 2;
	}
`
