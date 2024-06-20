import { css } from '@emotion/react'
import styled from '@emotion/styled'

interface VatValueProps {
	active: boolean
}

export const SwitchRow = styled.div`
	display: flex;
	align-items: center;
	gap: 15px;
`

export const Label = styled.span<VatValueProps>`
	color: #fff;
	opacity: 0.5;
	transition: 0.3s;

	${({ active }) =>
		active &&
		css`
			opacity: 1;
		`}
`
