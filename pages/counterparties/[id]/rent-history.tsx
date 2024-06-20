import Head from 'next/head'

import { CarsRent } from 'components/pages/cars'
import { CounterpartiesLayout } from 'components/layouts'

const RentHistoryPage = () => {
	return (
		<>
			<Head>
				<title>История аренды</title>
			</Head>

			<CounterpartiesLayout>
				<CarsRent action="assign" />
			</CounterpartiesLayout>
		</>
	)
}

export default RentHistoryPage
