import { createContext, useEffect, useMemo, useRef, useState } from 'react'
import { toast } from 'react-toastify'

import { Toast } from 'components/common'

import { Send, WSProviderProps, WSContextProps } from './ws.types'

import * as S from './WS.styled'

const isDev = process.env.NODE_ENV === 'development';

export const WSContext = createContext<WSContextProps>({} as WSContextProps)

export const WSProvider = ({ children }: WSProviderProps): JSX.Element => {
	const ws = useRef<WebSocket>()

	const [isReconnecting, setReconnecting] = useState(false)
	const [isReady, setIsReady] = useState(false)
	const [connectData, setConnectData] = useState({ hash: '', id: '' })
	const { hash, id } = connectData

	const tryReconnect = () => {
		setReconnecting(true)
		let interval: NodeJS.Timer | null = null

		const connectTry = () => {
			const socket = new WebSocket(isDev ? process.env.NEXT_PUBLIC_DEV_SOCKET_URL as string : process.env.NEXT_PUBLIC_SOCKET_URL as string)

			if (socket) {
				ws.current = socket
				setReconnecting(false)
				return true
			}

			return false
		}

		setTimeout(() => {
			if (connectTry()) return

			interval = setInterval(() => {
				if (connectTry() && interval) {
					clearInterval(interval)
					interval = null
				}
			}, 5000)
		}, 15000)
	}

	const disconnect = () => {
		if (!ws.current) return

		setIsReady(false)
		ws.current.close(1000)
		ws.current = undefined
	}

	useEffect(() => {
		if (!hash || !id) return

		const socket = new WebSocket(isDev ? process.env.NEXT_PUBLIC_DEV_SOCKET_URL as string : process.env.NEXT_PUBLIC_SOCKET_URL as string)

		socket.onopen = () => {
			ws.current = socket
			socket.send(JSON.stringify({ command: 'authorize', hash, id }))
		}

		socket.onclose = ({ code }) => {
			setIsReady(false)
			ws.current = undefined

			if (code !== 1000) {
				toast(
					<Toast
						type="error"
						title="Проблема с подключением."
						body="Проверьте ваше интернет-соединение и попробуйте снова"
					/>
				)

				tryReconnect()
			}
		}

		socket.onmessage = (event) => {
			const { code, success } = JSON.parse(event.data)

			if (code === 'authorize') {
				if (success) {
					setIsReady(true)
				} else {
					toast(
						<Toast
							type="error"
							title="Проблема с подключением."
							body="Проверьте ваше интернет-соединение и попробуйте снова"
						/>
					)
				}
			}
		}

		return () => {
			ws.current?.close(1000)
		}
	}, [hash, id])

	const send = <T extends {}>({
		command,
		block,
		hash,
		id,
		data,
		field,
		filter
	}: Send<T>) => {
		if (!ws.current) return

		ws.current.send(
			JSON.stringify({
				command,
				block,
				hash,
				id,
				data,
				field,
				filter
			})
		)
	}

	const connect = (hash: string, id: string) => {
		setConnectData({ hash, id })
	}

	const value: WSContextProps = useMemo(
		() => ({
			instance: ws.current,
			isReady,
			send,
			connect,
			disconnect
		}),
		[isReady]
	)

	return (
		<WSContext.Provider value={value}>
			{/*{isReconnecting ? <S.Overlay>{children}</S.Overlay> : children}*/}
			{children}
		</WSContext.Provider>
	)
}
