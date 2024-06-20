export interface AuthContextProps {
	showWelcomeScreen: boolean
	sendCode: (phone: string) => void
	isSendCodeSuccess: boolean
	isSendCodeError: boolean
	sendCodeErrorMessage: any
	confirmCode: (phone: string, code: string) => void
	isConfirmCodeError: boolean
	confirmCodeErrorMessage: any
	logout: () => void
}

export interface SendCode {
	phone: string
}

export interface ConfirmCode {
	phone: string
	code: string
}

export interface HandleLogin {
	hash: string
	id: string
}
