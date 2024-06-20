import Head from 'next/head'

import { CarRentedCard, CarAvailableCard, CarsListFilter } from 'components/pages/cars'
import { CounterpartiesLayout } from 'components/layouts'

import * as S from 'styled/pages/Cars'

import carSrc from 'public/img/car.png'

const CarsPage = () => {
	return (
		<>
			<Head>
				<title>Автомобили</title>
			</Head>

			<CounterpartiesLayout>
				<S.CarsPage>
					<CarsListFilter />

					<S.CarsGrid>
						<CarRentedCard status="working" nextPaymentStatus="far" />
						<CarRentedCard img={carSrc} status="awaits" nextPaymentStatus="far" />
						<CarRentedCard status="working" nextPaymentStatus="medium" />
						<CarRentedCard status="working" nextPaymentStatus="medium" />
						<CarRentedCard status="working" nextPaymentStatus="far" />
						<CarRentedCard status="repairs" nextPaymentStatus="medium" />
						<CarRentedCard status="accident" nextPaymentStatus="soon" />
						<CarAvailableCard img={carSrc} />
					</S.CarsGrid>
				</S.CarsPage>
			</CounterpartiesLayout>
		</>
	)
}

export default CarsPage
