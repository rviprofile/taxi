import styled from '@emotion/styled'

import { FieldsRow } from 'styled/components'

import { Button } from 'ui/Button/Button.styled'

export const CarAssignRentForm = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	margin-top: 10px;

	& > *:not(:last-child) {
		margin-bottom: 15px;
	}

	${Button} {
		margin-top: auto;
	}
`

export const ThreeColumnsRow = styled(FieldsRow)`
	display: grid;
	grid-template-columns: 166px 96px 60px;
	grid-gap: 10px;
`

export const TwoColumnsRow = styled(FieldsRow)`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 10px;
`
