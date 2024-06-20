import Head from 'next/head'

import { ChargesTable, PenaltiesTable } from 'components'
import { CounterpartiesLayout } from 'components/layouts'
import { CarsRent } from 'components/pages/cars'
import { BankCardsRequisites } from 'components/pages/requisites'

import * as S from 'styled/pages/Charges'

const ChargesPage = () => {
	return (
		<>
			<Head>
				<title>Списания</title>
			</Head>

			<CounterpartiesLayout>
				<S.ChargesPage>
					<CarsRent action="end" />

					<BankCardsRequisites />

					<ChargesTable />

					<PenaltiesTable />
				</S.ChargesPage>
			</CounterpartiesLayout>
		</>
	)
}

export default ChargesPage
