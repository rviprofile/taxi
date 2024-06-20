import styled from '@emotion/styled'
import { CarsRent } from 'components/pages/cars/Rent/Rent.styled'

export const PenaltiesPage = styled.div`
	display: grid;
	grid-template-columns: 382px 784px;
	grid-template-rows: 455px 455px;
	grid-gap: 15px;

	${CarsRent} {
		grid-row-start: span 2;
	}
`
