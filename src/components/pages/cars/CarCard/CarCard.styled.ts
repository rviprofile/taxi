import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { Box, Divider } from 'styled/components'
import { Modal } from 'ui'

import {
	Currency,
	CurrencyAmount
} from 'components/common/CurrencyAmount/CurrencyAmount.styled'
import { Button } from 'ui/Button/Button.styled'
import { ModalContent } from 'ui/Modal/Modal.styled'
import { Heading } from 'components/common/Heading/Heading.styled'

type NextPaymentDateColor = 'green' | 'orange' | 'red'

interface NextPaymentDateProps {
	color: NextPaymentDateColor
}

export { Divider }

export const CarCard = styled(Box)`
	display: flex;
	flex-direction: column;
	align-items: stretch;
	width: 100%;
	min-width: 350px;
	padding: 0;
`

export const Header = styled.div`
	padding: 15px 20px 10px;
`

export const HeaderTop = styled.div`
	display: flex;
	justify-content: space-between;
	font-size: 18px;
	line-height: 21px;
`

export const HeaderTopRight = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
`

export const LicensePlate = styled.span`
	span:last-of-type {
		margin-left: 10px;
		color: var(--color-gray-100);
	}
`
export const Model = styled.span``

export const HeaderBottom = styled.div`
	margin-top: 5px;
	font-size: 12px;
	line-height: 14px;

	${Divider} {
		margin-top: 5px;
	}

	& > span {
		color: var(--color-gray-100);

		span:last-of-type {
			margin-left: 5px;
			color: #fff;
		}
	}
`

export const Row = styled.span`
	display: flex;
	justify-content: space-between;

	& > span {
		color: var(--color-gray-100);

		&:last-of-type {
			margin-left: 5px;
			color: #fff;
		}
	}
`

export const CarInfo = styled.div`
	display: flex;
	justify-content: space-between;
`

export const CooperationTerms = styled(Row)`
	margin-top: 10px;
`

export const AvailableTime = styled(Row)`
	justify-content: flex-start;
	margin-top: 10px;
`

export const CarImage = styled.div`
	position: relative;

	img {
		width: 100%;
	}
`

export const CarStatus = styled.div`
	position: absolute;
	top: 5px;
	left: 10px;
	padding: 5px 10px;
	background: var(--color-gray-300);
	border-radius: 15px;
`

export const CarImagePlaceholder = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 200px;
	background: var(--color-gray-200);
`

export const Footer = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	padding: 15px 20px;

	${Divider} {
		margin-top: 10px;
	}

	${Button} {
		margin-top: auto;
	}
`

export const FooterTop = styled.div`
	display: flex;
	justify-content: space-between;
`

export const Price = styled.span`
	display: flex;
	align-items: flex-end;

	span:last-of-type {
		margin-left: 5px;
	}

	${CurrencyAmount} {
		font-size: 18px;
		line-height: 21px;
	}

	${Currency}, span:last-of-type {
		color: var(--color-gray-100);
	}
`

export const FooterBottom = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 15px;
	font-size: 18px;
	line-height: 21px;

	span:first-of-type {
		color: var(--color-gray-100);
	}
`

const getNextPaymentDateStyles = (color: NextPaymentDateColor) => {
	switch (color) {
		case 'green':
			return css`
				background-image: linear-gradient(270deg, #88b114 0%, #579d2c 100%);
			`
		case 'orange':
			return css`
				background-image: linear-gradient(45deg, #fcd062 -2.94%, #ffb702 102.94%),
					linear-gradient(270deg, #88b114 0%, #579d2c 100%);
			`
		case 'red':
			return css`
				color: #b80600;
			`
	}
}

export const NextPaymentDate = styled.span<NextPaymentDateProps>`
	background-image: linear-gradient(270deg, #88b114 0%, #579d2c 100%);
	background-clip: text;
	color: transparent;

	${({ color }) => getNextPaymentDateStyles(color)}
`

export const AssignRentModal = styled(Modal)`
	${ModalContent} {
		width: 382px;
	}

	${Heading} {
		justify-content: center;
	}
`
