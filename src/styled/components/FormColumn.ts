import styled from '@emotion/styled'

export const FormColumn = styled.div`
	display: flex;
	flex-direction: column;
	width: 314px;
	padding: 30px;

	& > *:not(:last-of-type) {
		margin-bottom: 20px;
	}
`
