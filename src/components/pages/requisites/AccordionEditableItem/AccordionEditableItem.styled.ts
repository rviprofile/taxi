import styled from '@emotion/styled'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'

export const EditButton = styled.button`
	margin-right: 10px;
	opacity: 0.5;
	transition: 0.3s;

	svg {
		transition: 0.3s;
	}

	&:hover {
		opacity: 1;

		svg {
			fill: #fff;
		}
	}
`

export const AccordionSummary = styled(MuiAccordionSummary)`
	padding: 10px 20px;
	min-height: auto;
	color: #fff;

	.MuiAccordionSummary-expandIconWrapper svg {
		opacity: 0.5;
		transition: 0.3s;

		path {
			stroke: var(--color-gray-100);
		}
	}

	.MuiAccordionSummary-content {
		display: flex;
		justify-content: space-between;
	}
`

export const AccordionEditableItem = styled(MuiAccordion)`
	transition: 0.3s;

	&::before {
		display: none;
	}

	&:hover {
		box-shadow: 0px 0px 20px rgba(37, 37, 37, 0.4);

		${EditButton}, .MuiAccordionSummary-expandIconWrapper svg {
			opacity: 1;
		}
	}

	&.Mui-expanded {
		box-shadow: inset 0px 0px 20px rgba(37, 37, 37, 0.4);

		${EditButton}, .MuiAccordionSummary-expandIconWrapper svg {
			opacity: 1;
		}
	}
`

export const AccordionDetails = styled(MuiAccordionDetails)`
	display: flex;
	justify-content: flex-start;
	padding: 0 20px 10px;
`

export const SummaryLabel = styled.div`
	display: flex;
`
