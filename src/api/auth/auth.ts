import { AxiosResponse } from 'axios'
import { API } from 'core/axios'

import {
	ConfirmCode,
	ErrorResponse,
	HashResponse,
	Response,
	SendCode
} from './auth.types'

export const checkAuth = async () => {
		const { data } = await API.get<HashResponse, AxiosResponse<HashResponse, Response>>(
			'/login.php'
		)
	
		return data
}

export const sendCode = async ({ phone }: SendCode) => {
	const { data } = await API.post<Response, AxiosResponse<Response, ErrorResponse>>(
		`/login.php?auth=${1}&phone=${phone}`
	)

	return data
}

export const confirmCode = async ({ phone, code }: ConfirmCode) => {
	const response = await API.post<
		HashResponse,
		AxiosResponse<HashResponse, ErrorResponse>
	>(`/login.php?auth=${1}&phone=${phone}&code=${code}`)

	return response.data
}

export const logout = async () => {
	const { data } = await API.post('/login.php?logout=1', { withCredentials: true })

	localStorage.removeItem("refreshToken");
	localStorage.removeItem("accessToken");
	localStorage.removeItem("sessid");

	return data
}
