import Head from 'next/head'

import { CounterpartiesLayout } from 'components/layouts'

const CounterpartyPage = () => {
	return (
		<>
			<Head>
				<title>Контрагент</title>
			</Head>

			<CounterpartiesLayout />
		</>
	)
}

export default CounterpartyPage
