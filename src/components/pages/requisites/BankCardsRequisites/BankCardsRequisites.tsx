import { Fragment, useRef, useState } from 'react'

import { ColoredDotText, Heading } from '../../../common'
import {
	AccordionEditableItem,
	BankCardEditPopover,
	EditRequisitesPopover,
	AddRequisitesPopover
} from '../index'
import { Button } from '../../../../ui'

import * as S from './BankCardsRequisites.styled'

export const BankCardsRequisites = () => {
	const requisitesRef = useRef(null)
	const [activeTab, setActiveTab] = useState(0)
	const [expandedBankCard, setExpandedBankCard] = useState<string | false>(false)
	const [expandedRequisite, setExpandedRequisite] = useState<string | false>(false)
	const [editableBankCard, setEditableBankCard] = useState<string | null>(null)
	const [editableRequisite, setEditableRequisite] = useState<string | null>(null)
	const [isAddRequisitesPopoverOpen, setAddRequisitesPopoverOpen] = useState(false)

	const tabs = ['Карты', 'Реквизиты']

	const cards = ['1123', '1111', '1211', '1311', '1411', '1511', '1611', '1711', '1811']

	const requisites = [
		'1123',
		'1111',
		'1211',
		'1311',
		'1411',
		'1511',
		'1611',
		'1711',
		'1811'
	]

	const onTabChange = (event: React.SyntheticEvent, newValue: number) => {
		setActiveTab(newValue)
	}

	const tabItems = tabs.map((label) => {
		return <S.Tab key={label} label={label} />
	})

	const cardsAccordionItems = cards.map((last4Digit, idx) => {
		const isMainCard = idx === 0

		return (
			<Fragment key={`cards${last4Digit}`}>
				<AccordionEditableItem
					name={last4Digit}
					expanded={expandedBankCard === last4Digit}
					details={<S.BankCardNumber>0000 0000 0000 0000</S.BankCardNumber>}
					onEdit={() => setEditableBankCard(last4Digit)}
					onExpand={(name, isExpanded) => {
						setExpandedBankCard(isExpanded ? name : false)
					}}
				>
					<span>Карта *{last4Digit}</span>
					{isMainCard ? <ColoredDotText color="green">Основная</ColoredDotText> : null}
				</AccordionEditableItem>

				{isMainCard ? <S.Divider /> : null}
			</Fragment>
		)
	})

	const requisitesAccordionItems = requisites.map((last4Digit, idx) => {
		const isMainCard = idx === 0

		return (
			<Fragment key={`requisites${last4Digit}`}>
				<AccordionEditableItem
					name={last4Digit}
					expanded={expandedRequisite === last4Digit}
					details={
						<S.RequisiteDetails>
							<S.RequisiteDetailsRow>
								<span>БИК:</span>
								<span>1 2 3 4 5 6 7 8 9</span>
							</S.RequisiteDetailsRow>

							<S.RequisiteDetailsRow>
								<span>Р/C:</span>
								<span>0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 </span>
							</S.RequisiteDetailsRow>

							<S.RequisiteDetailsRow>
								<span>К/C:</span>
								<span>0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 </span>
							</S.RequisiteDetailsRow>

							<S.RequisiteDetailsRow>
								<span>ИНН:</span>
								<span>0 0 0 0 0 0 0 0 0 0</span>
							</S.RequisiteDetailsRow>

							<S.RequisiteDetailsRow>
								<span>КПП:</span>
								<span>0 0 0 0 0 0 0 0 0 0</span>
							</S.RequisiteDetailsRow>
						</S.RequisiteDetails>
					}
					onEdit={() => setEditableRequisite(last4Digit)}
					onExpand={(name, isExpanded) => {
						setExpandedRequisite(isExpanded ? name : false)
					}}
				>
					<span>Счёт *{last4Digit}</span>
					{isMainCard ? <ColoredDotText color="green">Основная</ColoredDotText> : null}
				</AccordionEditableItem>

				{isMainCard ? <S.Divider /> : null}
			</Fragment>
		)
	})

	return (
		<S.BankCardsRequisites ref={requisitesRef}>
			<Heading
				endAdornment={
					<Button
						color="green"
						onClick={() => {
							setAddRequisitesPopoverOpen(true)
						}}
					>
						Добавить
					</Button>
				}
			>
				<S.Tabs
					value={activeTab}
					onChange={onTabChange}
					TabIndicatorProps={{
						sx: {
							display: 'block'
						}
					}}
				>
					{tabItems}
				</S.Tabs>
			</Heading>

			<S.TabContent>
				{activeTab === 0 ? cardsAccordionItems : requisitesAccordionItems}
			</S.TabContent>

			<BankCardEditPopover
				open={Boolean(editableBankCard)}
				anchorEl={requisitesRef.current}
				onClose={() => {
					setEditableBankCard(null)
				}}
			/>

			<EditRequisitesPopover
				open={Boolean(editableRequisite)}
				anchorEl={requisitesRef.current}
				onClose={() => {
					setEditableRequisite(null)
				}}
			/>

			<AddRequisitesPopover
				open={isAddRequisitesPopoverOpen}
				anchorEl={requisitesRef.current}
				onClose={() => {
					setAddRequisitesPopoverOpen(false)
				}}
			/>
		</S.BankCardsRequisites>
	)
}
