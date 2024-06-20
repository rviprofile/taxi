import { css } from '@emotion/react'
import styled from '@emotion/styled'
import ReactDatePicker from 'react-datepicker'

interface DatePaginationProps {
	range?: boolean
}

export const DatePickerContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	z-index: 10;
`

export const DatePagination = styled.div<DatePaginationProps>`
	display: flex;
	align-items: center;
	margin-left: 10px;

	& > *:not(:last-child):not(.react-datepicker__tab-loop) {
		margin-right: 5px;
	}

	.react-datepicker {
		position: relative;
		padding: 0 5px 10px;
		background: var(--color-gray-300);
		border-radius: 5px;
		box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.25);
		box-sizing: border-box;

		&-wrapper {
			width: 76px;
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

	${({ range }) =>
		range &&
		css`
			.react-datepicker {
				&-wrapper {
					width: 133px;
				}

				&__day {
					&--today::before {
						opacity: 0;
					}

					&--in-selecting-range {
						background: #337c82;
						border-radius: 0;
					}
				}
			}
		`}
`

export const DatePicker = styled(ReactDatePicker)`
	display: flex;
	width: 100%;
	padding: 0;
	margin: 0;
	background: transparent;
	border: none;
	color: #fff;
	font-size: 15px;
	font-weight: 500;
	box-sizing: border-box;

	&::placeholder {
		font-family: var(--font-ubuntu);
		font-size: 15px;
		font-weight: 500;
		color: #fff;
	}
`

export const PrevButton = styled.button`
	svg {
		transform: rotate(90deg);
	}
`

export const NextButton = styled.button`
	svg {
		transform: rotate(-90deg);
	}
`
