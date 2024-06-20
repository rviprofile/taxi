import styled from '@emotion/styled'

export const CarsPage = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`

export const CarsGrid = styled.ul`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
	justify-content: space-between;
	grid-auto-flow: dense;
	grid-gap: 15px;
	margin-top: 15px;
`
