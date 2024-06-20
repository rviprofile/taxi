import styled from '@emotion/styled'

export const Car = styled.div``

export const Dates = styled.div`
	position: relative;
	display: flex;
	margin-top: 10px;
`

export const Date = styled.span`
	padding: 2px 5px;
	background: linear-gradient(93.88deg, rgba(47, 152, 207, 0.1) 61.98%, rgba(47, 207, 178, 0.1) 100%);
	border-radius: 205px;

	&:first-of-type {
		background: linear-gradient(
			268.87deg,
			rgba(136, 177, 20, 0.5) -10.28%,
			rgba(85, 143, 9, 0.5) 27.63%,
			rgba(44, 116, 0, 0.5) 73.22%,
			rgba(64, 129, 4, 0.5) 100%
		);
	}

	&:last-of-type {
		background: linear-gradient(93.88deg, rgba(47, 152, 207, 0.5) 61.98%, rgba(47, 207, 178, 0.5) 100%);
	}

	&:nth-of-type(1),
	&:nth-of-type(2) {
		margin-right: auto;
	}
`

export const Triplet = styled.button`
	align-self: flex-end;
	padding: 0 15px;
	cursor: pointer;
`

export const DatesExpanded = styled(Dates)`
	flex-wrap: wrap;

	gap: 10px;

	${Date} {
		&:nth-of-type(1),
		&:nth-of-type(2) {
			margin-right: 0;
		}
	}
`
