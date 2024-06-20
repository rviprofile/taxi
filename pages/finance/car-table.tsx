import Head from 'next/head'

import { FinanceLayout } from 'components/layouts'
import Cars from 'components_new/pages/finance/cars'
import CarsTable from '../../src/components_new/pages/finance/cars-table'

const CarsPage = () => {
	return (
		<>
			<Head>
				<title>Автомобили</title>
			</Head>

			<FinanceLayout>
					<CarsTable />
			</FinanceLayout>
		</>
	)
}

export default CarsPage