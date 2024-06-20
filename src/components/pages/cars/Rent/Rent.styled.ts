import styled from '@emotion/styled'

import { Box, Divider } from 'styled/components'
import { PopoverWithClose } from 'components/common'

import { Heading } from 'components/common/Heading/Heading.styled'

export { Divider }

export const CarsRent = styled(Box)`
	width: 382px;
	padding: 10px 20px 20px;
`

export const InRent = styled.div``

export const RentStatusText = styled.div`
	display: flex;
	align-items: center;
	height: 48px;
	margin: 10px 0;
	color: var(--color-gray-100);
`

export const RentHistory = styled.div`
	margin-top: 15px;

	${Heading} {
		margin-bottom: 15px;
	}
`

export const Dates = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 10px 0;
`

export const CarsList = styled.div`
	margin-top: 10px;

	& > *:not(:last-child) {
		margin-bottom: 20px;
	}
`

export const CarAssignRentPopover = styled(PopoverWithClose)`
	.MuiPaper-root {
		width: 382px;
		margin-left: 15px;
	}
`
