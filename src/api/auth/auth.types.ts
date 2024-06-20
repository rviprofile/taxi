export interface Response {
	success: boolean
}

export interface ErrorResponse extends Response {
	field: string
	message: string
}

export interface HashResponse extends Response {
	hash: string
	id: string
}

export interface SendCode {
	phone: string
}

export interface ConfirmCode {
	phone: string
	code: string
}
