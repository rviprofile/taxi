import Head from 'next/head'

import { FinanceLayout } from 'components/layouts'
import Cars from 'components_new/pages/finance/cars'

const CarsPage = () => {
	return (
		<>
			<Head>
				<title>Автомобили</title>
			</Head>

			<FinanceLayout>
				<Cars />
			</FinanceLayout>
		</>
	)
}

export default CarsPage
