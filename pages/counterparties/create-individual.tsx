import Head from 'next/head'

import { CounterpartyIndividualForm } from 'components/pages/counterparties'
import { MenuButton } from 'components/common'

import { useCounterparty } from 'hooks'

import * as S from 'styled/pages/CounterpartiesCreateIndividual'

const CounterpartiesCreateIndividualPage = () => {
	const { addCounterpartyData, createCounterparty } = useCounterparty()

	return (
		<>
			<Head>
				<title>Добавить физическое лицо</title>
			</Head>

			<S.CounterpartiesCreateIndividualPage>
				<MenuButton color="blue" open={true}>
					Заполните профиль
				</MenuButton>

				<S.Popover
					open={true}
					anchorReference="anchorPosition"
					anchorPosition={{
						left: 72,
						top: 113
					}}
				>
					<CounterpartyIndividualForm
						addingNew
						addCounterpartyData={addCounterpartyData}
						focusedFields={[]}
						onFieldFocus={() => {}}
						onFieldBlur={() => {}}
						onUpdate={createCounterparty}
						onFileAdd={() => {}}
						onFileRemove={() => {}}
					/>
				</S.Popover>
			</S.CounterpartiesCreateIndividualPage>
		</>
	)
}

export default CounterpartiesCreateIndividualPage
