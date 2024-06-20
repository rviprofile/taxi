import { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { Button, InputMask } from 'ui'
import { PhoneField } from 'ui/maskedFields'
import { Toast } from 'components/common'

import { formatPhone } from 'utils'

import * as S from './PhoneChangeModal.styled'

import ArrowDownIcon from 'public/icons/arrow-down.svg'
import PhoneIcon from 'public/icons/phone.svg'

interface FormFields {
	phone: string
	code: string
}

interface PhoneChangeModalProps {
	open: boolean
	onPhoneChange: (phone: string) => void
	onClose: () => void
}

export const PhoneChangeModal = ({
	open,
	onPhoneChange,
	onClose
}: PhoneChangeModalProps) => {
	const useFormProps = useForm<FormFields>()
	const { handleSubmit, getValues, watch, reset } = useFormProps

	const [step, setStep] = useState(0)
	const [countdown, setCountdown] = useState(0)

	const isPhoneFilled = watch('phone')?.length === 11
	const isCodeFilled = watch('code')?.length === 6

	const startCountdown = () => {
		setCountdown(59)
	}

	useEffect(() => {
		const interval = setInterval(() => {
			if (countdown > 0) {
				setCountdown(countdown - 1)
			}

			if (countdown === 0) {
				clearInterval(interval)
			}
		}, 1000)

		return () => {
			clearInterval(interval)
		}
	}, [countdown])

	useEffect(() => {
		if (step === 1) {
			startCountdown()
		}
	}, [step])

	const toPhoneStep = () => {
		setStep(0)
		reset()
	}

	const formatCountdown = (countdown: number) => {
		if (countdown < 10) {
			return `0${countdown}`
		}

		return countdown
	}

	const onStepSubmit = ({ phone, code }: FormFields) => {
		if (step === 0) {
			setStep(1)
		}

		if (step === 1) {
			onClose()
			onPhoneChange(phone)
			setStep(0)
			reset()
			toast(
				<Toast
					type="success"
					icon={<PhoneIcon />}
					title="Номер телефона успешно изменён"
				/>
			)
		}
	}

	return (
		<FormProvider {...useFormProps}>
			<S.PhoneChangeModal heading="Изменение телефона" open={open} onClose={onClose}>
				<>
					{step !== 0 ? (
						<S.PrevStepButton type="button" onClick={toPhoneStep}>
							<ArrowDownIcon width={21} height={21} viewBox="0 0 17 17" />
						</S.PrevStepButton>
					) : null}

					<S.Form onSubmit={handleSubmit(onStepSubmit)}>
						{step === 0 ? (
							<S.PhoneStep>
								<PhoneField name="phone" label="Введите новый номер телефона" />

								<Button type="submit" color="blue" fullWidth disabled={!isPhoneFilled}>
									Отправить код
								</Button>
							</S.PhoneStep>
						) : (
							<S.CodeStep>
								<p>Мы отправили вам код</p>
								<p>на номер {formatPhone(getValues('phone').slice(1))}</p>

								<InputMask name="code" maskProps={{ mask: '9 9 9 9 9 9' }} />

								{countdown === 0 ? (
									<S.ResendSMS onClick={startCountdown}>
										Отправить СМС ещё раз
									</S.ResendSMS>
								) : (
									<p>Вы сможете запросить СМС через 00:{formatCountdown(countdown)}</p>
								)}

								<Button type="submit" color="green" disabled={!isCodeFilled} fullWidth>
									Изменить телефон
								</Button>
							</S.CodeStep>
						)}
					</S.Form>
				</>
			</S.PhoneChangeModal>
		</FormProvider>
	)
}
