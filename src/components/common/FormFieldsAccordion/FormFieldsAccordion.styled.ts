import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { Accordion, AccordionSummary, AccordionDetails } from 'styled/components'

import {
	Heading,
	HeadingContainer,
	EndAdornment
} from 'components/common/Heading/Heading.styled'

interface ExpandIconProps {
	open: boolean
	disabled?: boolean
}

export { AccordionSummary, AccordionDetails }

export const ExpandIcon = styled.div<ExpandIconProps>`
	margin-left: 10px;
	opacity: 0.5;
	transition: 0.3s;

	${({ open }) =>
		open &&
		css`
			opacity: 1;
			transform: rotate(180deg);
		`}

	${({ disabled }) =>
		disabled &&
		css`
			opacity: 0.1;

			&:hover {
				opacity: 0.1;
			}
		`}
`

export const FormFieldsAccordion = styled(Accordion)`
	${Heading} {
		justify-content: flex-start;
		margin-bottom: 0;

		${EndAdornment} {
			display: flex;
			align-items: center;
			margin-left: auto;
		}
	}

	${HeadingContainer} {
		width: 100%;
	}

	${AccordionSummary} {
		&:hover {
			${ExpandIcon} {
				opacity: 1;
			}
		}
	}

	${AccordionDetails} {
		margin-top: 15px;

		& > *:not(:last-child) {
			margin-bottom: 15px;
		}
	}
`
