import Head from 'next/head'

import { FinanceLayout } from 'components/layouts'
import { CreditsTable } from 'components/pages/finance'

const CreditsPage = () => {
	return (
		<>
			<Head>
				<title>Кредиты</title>
			</Head>

			<FinanceLayout>
				<CreditsTable />
			</FinanceLayout>
		</>
	)
}

export default CreditsPage
