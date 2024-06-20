import styled from '@emotion/styled'

import { Divider } from 'styled/components'

import { Heading, HeadingContainer } from 'components/common/Heading/Heading.styled'
import { Button } from 'ui/Button/Button.styled'
import { TextField } from 'ui/TextField/TextField.styled'

export const SignInForm = styled.form`
	max-width: 434px;
	width: calc(100% - 30px);
	padding: 30px 60px;
	margin-top: 243px;
	background: linear-gradient(62.41deg, #1e2124 0%, #2b3034 100%);
	box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.25);
	border-radius: 5px;
	box-sizing: border-box;

	${HeadingContainer} {
		${Heading} {
			justify-content: center;

			h1 {
				font-size: 32px;
				line-height: 37px;
			}
		}

		${Divider} {
			margin-top: 18px;
			background: var(--color-gray-400);
		}
	}

	${TextField}, ${TextField} input {
		text-align: center;
	}

	${TextField} {
		margin-top: 30px;

		label {
			margin-bottom: 15px;
			color: #fff;
		}

		.MuiInputBase-root {
			background: var(--color-gray-400);
			border: 1px solid transparent;

			&.Mui-error {
				border: 1px solid #b80600;
			}
		}

		input {
			&::placeholder {
				color: #585d62;
			}

			&:hover::placeholder,
			&:focus::placeholder {
				color: #fff;
			}
		}

		p {
			position: absolute;
			bottom: -16px;
			left: 50%;
			width: 100%;
			transform: translateX(-50%);
			font-family: var(--font-ubuntu);
			font-size: 10px;
			line-height: 11px;
			text-align: center;
			color: #b80600;
		}
	}

	${Button} {
		margin-top: 62px;
		box-shadow: var(--box-shadow);
	}

	@media (max-width: 500px) {
		margin-top: 100px;
		padding: 20px 30px;

		${Heading} {
			font-size: 24px;
			line-height: 28px;
		}

		${Divider} {
			margin-top: 10px;
		}

		${TextField} {
			margin-top: 15px;
		}

		${Button} {
			margin-top: 30px;
		}
	}
`
