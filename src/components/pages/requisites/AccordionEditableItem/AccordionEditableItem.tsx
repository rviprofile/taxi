import { FC, PropsWithChildren } from 'react'

import * as S from './AccordionEditableItem.styled'

import ArrowDownIcon from 'public/icons/arrow-down.svg'
import EditIcon from 'public/icons/edit.svg'

interface AccordionEditableItemProps {
	expanded: boolean
	name: string
	onEdit: () => void
	onExpand: (name: string, isExpanded: boolean) => void
	details: JSX.Element
}

export const AccordionEditableItem: FC<PropsWithChildren<AccordionEditableItemProps>> = ({
	children,
	expanded,
	name,
	details,
	onEdit,
	onExpand
}) => {
	return (
		<S.AccordionEditableItem
			expanded={expanded}
			onChange={(event: React.SyntheticEvent, isExpanded: boolean) => {
				onExpand(name, isExpanded)
			}}
		>
			<S.AccordionSummary expandIcon={<ArrowDownIcon />}>
				<S.SummaryLabel>{children}</S.SummaryLabel>

				<S.EditButton
					onClick={(e) => {
						e.stopPropagation()
						onEdit()
					}}
				>
					<EditIcon />
				</S.EditButton>
			</S.AccordionSummary>

			<S.AccordionDetails>{details}</S.AccordionDetails>
		</S.AccordionEditableItem>
	)
}
