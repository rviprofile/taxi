import { ReactNode, useState } from 'react'

import { Heading } from 'components/common'

import { HeadingProps } from 'components/common/Heading/Heading'

import * as S from './FormFieldsAccordion.styled'

import ArrowIcon from 'public/icons/arrow-down.svg'

interface FormFieldsAccordionProps {
	children: ReactNode
	HeadingProps: HeadingProps
	disabled?: boolean
}

export const FormFieldsAccordion = ({
	children,
	HeadingProps,
	disabled
}: FormFieldsAccordionProps) => {
	const [expanded, setExpanded] = useState(true)

	const handleChange = (event: React.SyntheticEvent, isExpanded: boolean) => {
		setExpanded(isExpanded)
	}

	return (
		<S.FormFieldsAccordion
			expanded={expanded}
			disabled={disabled}
			onChange={handleChange}
		>
			<S.AccordionSummary>
				<Heading
					variant="body1"
					endAdornment={
						<>
							{HeadingProps.endAdornment}

							<S.ExpandIcon open={expanded} disabled={disabled}>
								<ArrowIcon />
							</S.ExpandIcon>
						</>
					}
				>
					{HeadingProps.children}
				</Heading>
			</S.AccordionSummary>

			<S.AccordionDetails>{children}</S.AccordionDetails>
		</S.FormFieldsAccordion>
	)
}
