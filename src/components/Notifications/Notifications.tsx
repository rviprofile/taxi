import { ToastContainer, ToastContainerProps, Slide } from 'react-toastify'

import * as S from './Notifications.styled'

import 'react-toastify/dist/ReactToastify.css'

export const Notifications = () => {
	const options: ToastContainerProps = {
		position: 'top-right',
		closeButton: false,
		hideProgressBar: true,
		limit: 1,
		transition: Slide,
		icon: false
	}

	return (
		<S.Notifications>
			<ToastContainer {...options} />
		</S.Notifications>
	)
}
