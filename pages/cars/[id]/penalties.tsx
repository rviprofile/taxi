import Head from 'next/head'

import { CarsLayout } from 'components/layouts'
import { CarsRent } from 'components/pages/cars'
import { BankCardsRequisites } from 'components/pages/requisites'
import { PenaltiesTable } from 'components'

import * as S from 'styled/pages/Penalties'

const PenaltiesPage = () => {
	return (
		<>
			<Head>
				<title>Штрафы</title>
			</Head>

			<CarsLayout>
				<S.PenaltiesPage>
					<CarsRent action="end" />

					<BankCardsRequisites />

					<PenaltiesTable />
				</S.PenaltiesPage>
			</CarsLayout>
		</>
	)
}

export default PenaltiesPage
