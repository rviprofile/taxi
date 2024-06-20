import styled from '@emotion/styled'

import { Modal } from 'ui'
import { Divider } from 'components/common/Heading/Heading.styled'

import { Heading, Text } from 'components/common/Heading/Heading.styled'
import { ModalContent } from 'ui/Modal/Modal.styled'
import { Button } from 'ui/Button/Button.styled'
import {
	Currency,
	CurrencyAmount
} from 'components/common/CurrencyAmount/CurrencyAmount.styled'

export { Divider }

export const PenaltyModal = styled(Modal)`
	${ModalContent} {
		width: 600px;
		padding: 15px 30px;

		& > *:not(:last-child) {
			margin-bottom: 15px;
		}
	}

	${Heading} ${Text} {
		font-size: 42px;
		line-height: 48px;
	}
`

export const HeadingEndAdornment = styled.div`
	display: flex;
	gap: 20px;

	${Button} {
		justify-content: flex-start;
		padding: 0;
		background: transparent;

		&:hover {
			background: transparent;
		}
	}
`

export const Column = styled.div`
	display: flex;
	flex-direction: column;

	& > span {
		&:first-of-type {
			color: var(--color-gray-100);
		}

		&:last-of-type {
			margin-top: 5px;
		}
	}
`

export const FirstSection = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 100px;
`

export const FirstSectionLeft = styled.div`
	& > *:not(:last-child) {
		margin-bottom: 20px;
	}
`

export const FirstSectionRight = styled.div`
	display: flex;
	flex-direction: column;
	width: 117px;
	flex-shrink: 0;

	${Button} {
		margin-top: auto;
	}
`

export const SumRow = styled.span`
	display: flex;
	gap: 10px;

	${CurrencyAmount}:first-of-type {
		text-decoration: line-through;
		color: var(--color-gray-100);

		${Currency} {
			color: var(--color-gray-100);
		}
	}
`

export const Gray = styled.span`
	color: var(--color-gray-100);
`

export const Section = styled.div`
	display: flex;
	flex-direction: column;

	& > span:first-of-type {
		font-size: 18px;
		line-height: 21px;
	}

	& > *:not(:last-of-type) {
		margin-bottom: 10px;
	}
`

export const Violation = styled(Section)``

export const Car = styled(Section)``

export const CarInfo = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 20px;
`

export const Responsible = styled(Section)``

export const Photo = styled(Section)``

export const PhotoDoesntUpload = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
	justify-content: center;
	height: 107px;
	border: 2px solid var(--color-gray-200);
	border-radius: 5px;
	box-sizing: border-box;

	span {
		&:first-of-type {
			font-size: 18px;
			line-height: 21px;
		}

		&:last-child {
			font-size: 14px;

			a {
				position: relative;
				background-image: linear-gradient(93.88deg, #2f98cf 0%, #2fcfb2 100%);
				background-clip: text;
				color: transparent;
				text-decoration: underline;

				&:hover {
					&::before {
						opacity: 0;
					}
				}

				&::before {
					content: '';
					position: absolute;
					width: 100%;
					height: 1px;
					left: 0;
					bottom: 0;
					background: linear-gradient(93.88deg, #2f98cf 0%, #2fcfb2 100%), #d9d9d9;
					border-radius: 1px;
					transition: 0.3s;
				}
			}
		}
	}
`

export const Requisites = styled(Section)`
	& > span:first-of-type {
		display: flex;
		align-items: center;
		gap: 10px;
	}
`
