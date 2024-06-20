import Head from 'next/head'

import { CarsRent } from 'components/pages/cars'
import { BankCardsRequisites } from 'components/pages/requisites'
import { CounterpartiesLayout } from 'components/layouts'

const RequisitesPage = () => {
	return (
		<>
			<Head>
				<title>Реквизиты и карты</title>
			</Head>

			<CounterpartiesLayout>
				<CarsRent action="end" />

				<BankCardsRequisites />
			</CounterpartiesLayout>
		</>
	)
}

export default RequisitesPage
