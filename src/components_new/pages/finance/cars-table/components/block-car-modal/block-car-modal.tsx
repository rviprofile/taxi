import React, { FC } from 'react'


import * as S from './block-car-modal.styled';
import { Button } from '../../../../../../ui'
import { Divider } from '../../../../../../styled/components'
import FinanceCarService from "api/finance/cars";
import { useQuery } from '@tanstack/react-query'

type BlockCarModalProps = {
	open: boolean,
	closeFunc: () => void;
	id: number;
	onClickFunc: () => void;
}

const BlockCarModal: FC<BlockCarModalProps> = ({ onClickFunc, open, closeFunc , id}) => {

	const { data} = useQuery({
		queryKey: [`block-car-info-${id}`],
		queryFn: async () => await FinanceCarService.getBlockCarInfo(id),
		enabled: Boolean(id)
	})

	const { refetch } = useQuery({
		queryKey: [`block-car-${id}`],
		queryFn: async () => await FinanceCarService.blockCar(id),
		enabled: false
	})

	const onClick = async () => {
		await refetch();
		await onClickFunc();
		closeFunc()
	}


	const modalData = data?.data

	return (
		<S.BlockCarModal   open={open} onClose={closeFunc}>
			<S.ModalContent>
				<S.ModalHeader>Блокировка автомобиля</S.ModalHeader>
				<Divider style={{ marginBottom: "15px"}}></Divider>
				<S.ModalText>
					<div>
						Вы уверены, что хотите заблокировать этот автомобиль:
					</div>
					<div>
						{modalData?.brand} {modalData?.model} {modalData?.number}
					</div>
					<div>
						{modalData?.fio}
					</div>
					<div>
						Если вы это сделаете, автомобиль приостановит движение и ...
					</div>
				</S.ModalText>
				<Button onClick={async () => await onClick()} color={"red"}>Заблокировать</Button>
			</S.ModalContent>
		</S.BlockCarModal>
	)
}

export default BlockCarModal