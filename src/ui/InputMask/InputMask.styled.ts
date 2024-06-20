import { css } from '@emotion/react'
import styled from '@emotion/styled'
import ReactInputMask from 'react-input-mask'

export const InputMask = styled(ReactInputMask)`
	input {
		transition: 0.3s;
	}

	&:hover,
	&:focus,
	&:active,
	&:focus-within {
		input {
			color: #fff;

			&:read-only {
				color: var(--color-gray-100);

				&::placeholder {
					color: var(--color-gray-100);
				}
			}
		}
	}

	${({ value }) =>
		!Boolean(value) &&
		css`
			input {
				color: var(--color-gray-100);
			}
		`}
`
