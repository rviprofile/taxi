import { CurrencyAmount } from 'components/common'

import * as S from './Stats.styled'

import ArrowUpIcon from 'public/icons/arrow-green-up.svg'
import { CarStatus } from 'components/pages/cars'
import { TotalIncome, TotalStats } from '../../../../../../components_new/pages/finance/cars/cars'
import { FC } from 'react'
import { numberWithSpaces } from '../../../../../../utils'


type StatsProps = {
	totalIncome: TotalIncome,
	totalStats: TotalStats
}
export const Stats: FC<StatsProps> = ({ totalStats, totalIncome}) => {
	return (
		<S.Stats>
			<S.MoneyStats>
				<ArrowUpIcon />

				<S.MoneyRow>
					<CurrencyAmount value={totalIncome.actual_period_sum} />
					<span>/ {numberWithSpaces(totalIncome.waited_period_sum)} за период</span>
				</S.MoneyRow>

				<S.Divider $orientation="vertical" />

				<S.MoneyRow>
					<CurrencyAmount value={totalIncome.actual_average_sum} />
					<span>/ {totalIncome.waited_average_sum} сред. в день</span>
				</S.MoneyRow>

			</S.MoneyStats>

			<S.CarsStats>
				<S.Text variant="h1" as="p">
					Авто:
				</S.Text>

				<S.CarStatButtons>
					<S.CarStatButton>
						<S.Text variant="h1" as="p">
							{new Intl.NumberFormat().format(totalStats.working + totalStats.crash + totalStats.repair + totalStats.waiting)}
						</S.Text>
						<span>всего</span>
					</S.CarStatButton>

					<S.CarStatButton>
						<S.Text variant="h1" as="p">
							{new Intl.NumberFormat().format(totalStats.working)}
						</S.Text>

						<CarStatus status="working" />
					</S.CarStatButton>

					<S.CarStatButton>
						<S.Text variant="h1" as="p">
							{new Intl.NumberFormat().format(totalStats.waiting)}
						</S.Text>

						<CarStatus status="awaits" />
					</S.CarStatButton>

					<S.CarStatButton>
						<S.Text variant="h1" as="p">
							{new Intl.NumberFormat().format(totalStats.repair)}
						</S.Text>

						<CarStatus status="repairs" />
					</S.CarStatButton>

					<S.CarStatButton>
						<S.Text variant="h1" as="p">
							{new Intl.NumberFormat().format(totalStats.crash)}
						</S.Text>

						<CarStatus status="accident" />
					</S.CarStatButton>
				</S.CarStatButtons>
			</S.CarsStats>
		</S.Stats>
	)
}
