import { ColoredDotText } from 'components/common'

export type TransactionStatus = 'paid' | 'waiting' | 'not-paid' | 'partial-paid'

export const TransactionStatus = ({
	status
}: {
	status: TransactionStatus
}) => {
	switch (status) {
		case 'paid':
			return <ColoredDotText color="green">Оплачен</ColoredDotText>
		case 'waiting':
			return <ColoredDotText color="yellow">Ожидание</ColoredDotText>
		case 'not-paid':
			return <ColoredDotText color="orange">Не оплачен</ColoredDotText>
		case 'partial-paid':
			return <ColoredDotText color="blue">Част. оплата</ColoredDotText>
	}
}
