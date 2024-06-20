import * as S from './CurrencyAmount.styled'

interface CurrencyAmountProps {
	value: number
	fraction?: boolean
}

export const CurrencyAmount = ({
	value,
	fraction = false
}: CurrencyAmountProps) => {
	return (
		<S.CurrencyAmount>
			{new Intl.NumberFormat('ru-RU', {
				minimumFractionDigits: fraction ? 2 : 0
			}).format(value)}

			<S.Currency>₽</S.Currency>
		</S.CurrencyAmount>
	)
}
