import Head from 'next/head'

import { FinanceLayout } from 'components/layouts'
import { PaymentsStats, PaymentsTable } from 'components/pages/finance'

const PaymentsPage = () => {
	return (
		<>
			<Head>
				<title>Платежи</title>
			</Head>

			<FinanceLayout>
				<PaymentsStats />

				<PaymentsTable />
			</FinanceLayout>
		</>
	)
}

export default PaymentsPage
