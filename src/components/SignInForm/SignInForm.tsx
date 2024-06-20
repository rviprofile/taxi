import { useForm, FormProvider } from 'react-hook-form'

import { Heading } from 'components/common'
import { Button, InputMask } from 'ui'
import { PhoneField } from 'ui/maskedFields'

import { useAuth } from 'hooks'

import * as S from './SignInForm.styled'

interface FormFields {
	phone: string
	code?: string
}

export const SignInForm = () => {
	const useFormProps = useForm<FormFields>()
	const { watch, handleSubmit } = useFormProps
	const phone = watch('phone')

	const {
		sendCode,
		isSendCodeSuccess,
		isSendCodeError,
		sendCodeErrorMessage,
		confirmCode,
		isConfirmCodeError,
		confirmCodeErrorMessage
	} = useAuth()

	const phoneNotFilled = watch('phone')?.length !== 11

	const onSendCode = ({ phone }: FormFields) => {
		sendCode(phone)
	}

	const onCodeChange = (code: string, phone: string) => {
		const codeUnmasked = code.replace(/[^\d]/g, '')

		if (codeUnmasked.length === 5) {
			confirmCode(phone, codeUnmasked)
		}
	}

	return (
		<FormProvider {...useFormProps}>
			<S.SignInForm onSubmit={handleSubmit(onSendCode)}>
				<Heading variant="h1">Вход</Heading>

				<PhoneField
					name="phone"
					label="Введите ваш номер телефона"
					error={isSendCodeError}
					helperText={isSendCodeError ? sendCodeErrorMessage : null}
				/>

				{isSendCodeSuccess ? (
					<InputMask
						name="code"
						label="Введите код из СМС"
						maskProps={{ mask: '9 9 9 9 9' }}
						onChange={({ target }) => {
							onCodeChange(target.value, phone)
						}}
						error={isConfirmCodeError}
						helperText={isConfirmCodeError ? confirmCodeErrorMessage : null}
					/>
				) : null}

				{!isSendCodeSuccess ? (
					<Button color="green" fullWidth type="submit" disabled={phoneNotFilled}>
						Отправить код
					</Button>
				) : null}
			</S.SignInForm>
		</FormProvider>
	)
}
