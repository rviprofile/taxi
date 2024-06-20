import * as S from './Toast.styled'

import AlertIcon from 'public/icons/alert.svg'

type ToastType = 'success' | 'info' | 'error'

interface ToastProps {
	type: ToastType
	title: string
	body?: string
	icon?: React.ReactNode
}

export const Toast = ({ type, icon, title, body }: ToastProps) => {
	return (
		<S.Toast type={type}>
			{icon ? <S.Icon>{icon}</S.Icon> : null}

			{!icon && type === 'error' ? (
				<S.Icon>
					<AlertIcon />
				</S.Icon>
			) : null}

			<S.ToastBody>
				<S.Title>{title}</S.Title>

				{body ? <S.Body>{body}</S.Body> : null}
			</S.ToastBody>
		</S.Toast>
	)
}
