import Head from 'next/head'

import { CounterpartiesTable } from 'components/pages/counterparties'

const CounterpartiesDashboardPage = () => {
	return (
		<>
			<Head>
				<title>Контрагенты</title>
			</Head>

			<CounterpartiesTable />
		</>
	)
}

export default CounterpartiesDashboardPage
