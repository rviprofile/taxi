import styled from '@emotion/styled'

export const Autocomplete = styled.div`
	.Mui-focused {
		.MuiInputBase-root {
			background: var(--color-gray-400);
		}
	}

	&& {
		.MuiInputBase-root {
			padding-top: 0;
			padding-left: 10px;
			padding-right: 10px !important;
		}
	}
`

export const Paper = styled.div`
	padding: 15px 10px;
	background-color: var(--color-gray-200);
	box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.25);
	border-radius: 0px 0px 5px 5px;
	color: #fff;
	box-sizing: border-box;

	.MuiAutocomplete-noOptions {
		padding: 0;
		font-family: var(--font-ubuntu);
		font-size: 15px;
		font-weight: 500;
		line-height: 17px;
		color: #fff;
	}

	.MuiAutocomplete-listbox {
		padding: 0;

		li {
			padding: 0;
			background-color: transparent !important;

			&:not(:last-child) {
				margin-bottom: 15px;
			}

			font-family: var(--font-ubuntu);
			font-size: 15px;
			font-weight: 500;
			line-height: 17px;
		}
	}
`
