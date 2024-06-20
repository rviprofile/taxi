import styled from '@emotion/styled'

type ToastType = 'success' | 'info' | 'error'

interface ToastProps {
	type: ToastType
}

const getBackgroundColor = (type: ToastType) => {
	switch (type) {
		case 'success':
			return 'var(--gradient-green)'
		case 'info':
			return 'var(--gradient-blue)'
		case 'error':
			return '#b80600;'
	}
}

export const Toast = styled.div<ToastProps>`
	display: flex;
	align-items: center;
	padding: 10px 15px;
	gap: 15px;
	font-size: 14px;
	color: #fff;
	background: ${({ type }) => getBackgroundColor(type)};
`

export const Icon = styled.div``

export const ToastBody = styled.div``

export const Title = styled.p``

export const Body = styled.p`
	margin-top: 5px;
	font-weight: 400;
`
