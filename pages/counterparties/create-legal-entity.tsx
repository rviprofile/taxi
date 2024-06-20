import Head from 'next/head'

import { CounterpartyLegalEntityForm } from 'components/pages/counterparties'

const CounterpartiesCreateIndividualPage = () => {
	return (
		<>
			<Head>
				<title>Добавить юридическое лицо</title>
			</Head>

			<CounterpartyLegalEntityForm />
		</>
	)
}

export default CounterpartiesCreateIndividualPage
