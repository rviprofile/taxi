import Head from 'next/head'

import { CarsLayout } from 'components/layouts'

const CarPage = () => {
	return (
		<>
			<Head>
				<title>Машина</title>
			</Head>

			<CarsLayout />
		</>
	)
}

export default CarPage
