import { CurrencyAmount } from 'components/common'
import { Button } from 'ui'
import * as S from './PenaltiesStats.styled'

export const PenaltiesStats = () => {
	return (
		<S.PenaltiesStats>
			<S.Stat>
				<S.StatTop>
					<span>Со скидкой</span>
					<span>13</span>
				</S.StatTop>

				<S.Divider />

				<S.StatBottom>
					<CurrencyAmount value={4_000} fraction />
				</S.StatBottom>
			</S.Stat>

			<S.Stat>
				<S.StatTop>
					<span>Без скидки</span>
					<span>8</span>
				</S.StatTop>

				<S.Divider />

				<S.StatBottom>
					<CurrencyAmount value={22_000} fraction />
				</S.StatBottom>
			</S.Stat>

			<S.Stat>
				<S.StatTop>
					<span>Просрочено</span>
					<span>16</span>
				</S.StatTop>

				<S.Divider />

				<S.StatBottom>
					<CurrencyAmount value={22_000} fraction />
				</S.StatBottom>
			</S.Stat>

			<S.Stat>
				<S.StatTop>
					<span>Всего</span>
					<span>37</span>
				</S.StatTop>

				<S.Divider />

				<S.StatBottom>
					<CurrencyAmount value={740_000} fraction />
					<Button color="blue">Оплатить всё</Button>
				</S.StatBottom>
			</S.Stat>
		</S.PenaltiesStats>
	)
}
