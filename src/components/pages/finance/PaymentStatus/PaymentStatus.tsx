import { ColoredDotText } from 'components/common'

import { PaymentStatus as PaymentStatusType } from 'types/payments'

export const PaymentStatus = ({ status }: { status: PaymentStatusType }) => {
	switch (status) {
		case 'paid':
			return <ColoredDotText color="green">Оплачен</ColoredDotText>
		case 'soon':
			return <ColoredDotText color="yellow">Скоро оплата</ColoredDotText>
		case 'expired':
			return <ColoredDotText color="red">Просрочен</ColoredDotText>
		case 'scheduled':
			return <ColoredDotText color="gray">Запланирован</ColoredDotText>
	}
}
