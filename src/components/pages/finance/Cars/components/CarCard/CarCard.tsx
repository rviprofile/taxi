import { CarStatus } from 'components/pages/cars'
import { CurrencyAmount } from 'components/common'

import * as S from './CarCard.styled'

export const CarCard = () => {
	return (
		<S.CarCard>
			<S.Top>
				<S.Row>
					<S.Text variant="h2" as="span">
						А 111 АА
					</S.Text>

					<S.Text variant="h2" as="span">
						36
					</S.Text>
				</S.Row>

				<S.Text variant="h2" as="p">
					Grand Vitara
				</S.Text>
			</S.Top>

			<S.Divider />

			<S.Bottom>
				<S.BottomColumn>
					<S.Row>
						<CurrencyAmount value={15_000} />
						<span>за день</span>
					</S.Row>

					<S.Row>
						<CurrencyAmount value={15_000} />
						<span>за месяц</span>
					</S.Row>
				</S.BottomColumn>

				<S.BottomColumn>
					<CarStatus status="working" />
				</S.BottomColumn>
			</S.Bottom>
		</S.CarCard>
	)
}
