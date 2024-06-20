import React, { FC } from 'react'

import ArrowRightIcon from 'public/icons/arrow-right.svg';
import CanistrIcon from 'public/icons/canistr.svg';

import * as S from './car-message-input.styled';

type CarMessageInputProps = {
	text?: string,
	disabled?: boolean
}

const CarMessageInput: FC<CarMessageInputProps> = () => {
	return (
		<S.CarMessageInputWrapper>
			<S.Input placeholder={"Текст рассылки"}/>
			<S.ButtonGroup>
				<S.SendMessageButton><ArrowRightIcon /></S.SendMessageButton>
				<S.ButtonMessage><CanistrIcon /></S.ButtonMessage>
			</S.ButtonGroup>
		</S.CarMessageInputWrapper>
	)
}

export default CarMessageInput