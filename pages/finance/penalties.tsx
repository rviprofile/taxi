import Head from 'next/head'

import { FinanceLayout } from 'components/layouts'
import { PenaltiesTable, PenaltiesStats } from 'components/pages/finance'

import * as S from 'styled/pages/FinancePenalties'

const PenaltiesPage = () => {
	return (
		<>
			<Head>
				<title>Штрафы</title>
			</Head>

			<FinanceLayout>
				<S.FinancePenaltiesPage>
					<PenaltiesStats />

					<PenaltiesTable />
				</S.FinancePenaltiesPage>
			</FinanceLayout>
		</>
	)
}

export default PenaltiesPage
