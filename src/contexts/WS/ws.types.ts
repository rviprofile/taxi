import { ReactNode } from 'react'

export type Command =
	| 'subscribe'
	| 'unsubscribe'
	| 'update'
	| 'authorize'
	| 'focus'
	| 'blur'
	| 'add'

export type Block = '' | 'contragent' | 'user' | 'contragent_list' | 'contragent_filter' | 'car' | 'car_filter' | 'car_list'

export interface Send<T> {
	command: Command
	block?: Block
	id?: number | string
	filter?: object
	hash?: string
	data?: T
	field?: string
}

export interface WSProviderProps {
	children: ReactNode
}

export interface WSContextProps {
	instance: WebSocket | undefined
	isReady: boolean
	send: <T extends {}>(props: Send<T>) => void
	connect: (hash: string, id: string) => void
	disconnect: () => void
}
