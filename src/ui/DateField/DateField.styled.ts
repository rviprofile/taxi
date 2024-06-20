import styled from '@emotion/styled'

import { DatePicker } from 'ui/DatePicker/DatePicker.styled'

export { DatePicker }

export const DateField = styled.div`
	position: relative;
	z-index: 10;
	width: 100%;

	.react-datepicker {
		position: relative;
		padding: 0 5px 10px;
		background: var(--color-gray-300);
		border-radius: 5px;
		box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.25);
		box-sizing: border-box;

		&__input-container {
			width: 100%;
			height: 32px;
			background: var(--color-gray-200);
			box-shadow: var(--box-shadow);
			border-radius: 5px;
			box-sizing: border-box;

			&.disabled {
				background: rgba(66, 72, 79, 0.5);
				box-shadow: none;

				input {
					color: var(--color-gray-100);
				}
			}

			input {
				padding: 8px 31px 8px 10px;
				font-size: 14px;
				font-weight: 400;
				line-height: 16px;

				&:hover {
					&::placeholder {
						color: #fff;
					}
				}

				&::placeholder {
					font-size: 14px;
					font-weight: 400;
					line-height: 16px;
					color: var(--color-gray-100);
					transition: 0.3s;
				}
			}
		}

		&__triangle {
			display: none;
		}

		&__navigation {
			position: absolute;
			top: 12px;
			width: 24px;
			height: 24px;
			background: url('/img/arrow-right-2.svg') 50% 50% no-repeat;

			&--previous {
				left: 10px;
				transform: rotate(-180deg);
			}

			&--next {
				right: 10px;
			}

			span {
				display: none;
			}
		}

		&__current-month {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 48px;
			text-transform: capitalize;
		}

		&__day-name,
		&__day {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 38px;
			height: 29px;
			color: #989fa6;
			text-transform: capitalize;
		}

		&__week {
			display: flex;
		}

		&__day {
			position: relative;
			height: 38px;
			font-weight: 400;
			color: #fff;
			cursor: pointer;
			background-image: none;
			outline: none;
			z-index: 1;
			transition: 0.3s;

			&::before {
				position: absolute;
				content: '';
				top: 0;
				right: 0;
				bottom: 0;
				left: 0;
				z-index: -1;
				transition: 0.3s;
				border-radius: inherit;
				opacity: 0;
				background-image: var(--gradient-blue);
			}

			&:hover {
				color: #fff;

				&::before {
					opacity: 1;
				}
			}

			&-names {
				display: flex;
			}

			&--outside-month {
				color: #989fa6;
			}

			&--keyboard-selected,
			&--selected:not(.react-datepicker__day--in-range),
			&--range-start,
			&--range-end {
				border-radius: 2px;

				&::before {
					opacity: 1;
				}
			}

			&--in-range {
				background: #337c82;
				border-radius: 0;

				&::before {
					opacity: 0;
				}
			}

			&--range-start {
				border-radius: 2px 0px 0px 2px;

				&::before {
					opacity: 1;
				}
			}

			&--range-end {
				border-radius: 0px 2px 2px 0px;

				&::before {
					opacity: 1;
				}
			}
		}
	}
`

export const DateFieldContent = styled.div`
	position: relative;
	width: 100%;

	box-sizing: border-box;
`

export const Icon = styled.div`
	position: absolute;
	width: 16px;
	height: 16px;
	top: 8px;
	right: 10px;
	pointer-events: none;

	svg {
		fill: var(--color-gray-100);
	}
`
