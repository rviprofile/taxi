import * as S from './NotificationsNumber.styled'

interface NotificationsNumberProps {
	value: number
}

export const NotificationsNumber = ({ value }: NotificationsNumberProps) => {
	return <S.NotificationsNumber>{value}</S.NotificationsNumber>
}
