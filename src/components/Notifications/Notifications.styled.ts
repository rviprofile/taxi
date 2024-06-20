import styled from '@emotion/styled'

export const Notifications = styled.div`
	.Toastify {
		&__toast-container {
			top: 0;
			right: 0;
			padding: 0;
			z-index: 2000;
			width: 347px;
		}

		&__toast {
			min-height: auto;
			padding: 0;
			box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
			border-radius: 0px 0px 0px 5px;

			&-body {
				padding: 0;
				margin: 0;
				font-family: var(--font-ubuntu);
				font-weight: 500;
				font-size: 14px;
				line-height: 16px;
			}
		}
	}
`
