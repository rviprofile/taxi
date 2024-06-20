import styled from '@emotion/styled'
import MuiTextField from '@mui/material/TextField'

export const TextField = styled(MuiTextField)`
	input[type='number'] {
		-moz-appearance: textfield;
	}

	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	&&& {
		.MuiInputBase-input.MuiInput-input::placeholder {
			opacity: 1 !important;
		}
	}

	.disabled {
		background: rgba(66, 72, 79, 0.5);
		box-shadow: none;

		input {
			color: var(--color-gray-100);
		}
	}

	label {
		&.Mui-error {
			color: inherit;
		}
	}

	.MuiInputBase-root {
		border: 1px solid transparent;

		&.Mui-error {
			border: 1px solid #b80600;
		}
	}

	.MuiFormHelperText-root {
		position: absolute;
		bottom: -12px;
		left: 0;
		width: 100%;
		margin-top: 0;
		font-family: var(--font-ubuntu);
		font-size: 10px;
		line-height: 11px;

		&.Mui-error {
			color: #b80600;
		}
	}
`
