import Head from 'next/head'

import { FinanceLayout } from 'components/layouts'
import {
	AvailableCars,
	Debtors,
	ParkEvents,
	SpeedNotifications
} from 'components/pages/finance'

import * as S from 'styled/pages/FinanceDashboard'

const DashboardPage = () => {
	return (
		<>
			<Head>
				<title>Дашборд</title>
			</Head>

			<FinanceLayout>
				<S.FinanceDashboardPage>
					<AvailableCars />
					<Debtors />
					<ParkEvents />
					<SpeedNotifications />
				</S.FinanceDashboardPage>
			</FinanceLayout>
		</>
	)
}

export default DashboardPage
