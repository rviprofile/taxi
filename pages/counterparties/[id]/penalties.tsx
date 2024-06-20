import Head from 'next/head'

import { CarsRent } from 'components/pages/cars'
import { BankCardsRequisites } from 'components/pages/requisites'
import { CounterpartiesLayout } from 'components/layouts'
import { PenaltiesTable } from 'components'

import * as S from 'styled/pages/Penalties'

const PenaltiesPage = () => {
	return (
		<>
			<Head>
				<title>Штрафы</title>
			</Head>

			<CounterpartiesLayout>
				<S.PenaltiesPage>
					<CarsRent action="end" />

					<BankCardsRequisites />

					<PenaltiesTable />
				</S.PenaltiesPage>
			</CounterpartiesLayout>
		</>
	)
}

export default PenaltiesPage
