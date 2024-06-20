import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'

import { CurrencyAmount } from 'components/common'
import { CarAssignRentForm } from '../AssignRentForm/AssignRentForm'
import { Button } from 'ui'

import * as S from './CarCard.styled'

import CarIcon from 'public/icons/car.svg'

interface CarAvailableCardProps {
	img?: string | StaticImageData
}

export const CarAvailableCard = ({ img }: CarAvailableCardProps) => {
	const [isAssignRentModalOpen, setAssignRentModalOpen] = useState(false)

	return (
		<>
			<S.CarCard as="li">
				<S.Header>
					<S.HeaderTop>
						<S.LicensePlate>
							<span>А 111 АА</span>
							<span>36</span>
						</S.LicensePlate>

						<S.Model>Grand Vitara</S.Model>
					</S.HeaderTop>

					<S.HeaderBottom>
						<S.CarInfo>
							<S.Row>
								<span>Год выпуска:</span>
								<span>2019</span>
							</S.Row>

							<S.Row>
								<span>Пробег:</span>
								<span>
									{new Intl.NumberFormat('ru-RU', {
										style: 'unit',
										unit: 'kilometer'
									}).format(150_000)}
								</span>
							</S.Row>
						</S.CarInfo>

						<S.Divider />

						<S.AvailableTime>
							<span>Свободна:</span>
							<span>Сейчас</span>
						</S.AvailableTime>
					</S.HeaderBottom>
				</S.Header>

				<S.CarImage>
					{img ? (
						<Image src={img} alt="Автомобиль" />
					) : (
						<S.CarImagePlaceholder>
							<CarIcon width={160} height={160} viewBox="0 0 84 84" />
						</S.CarImagePlaceholder>
					)}
				</S.CarImage>

				<S.Footer>
					<S.FooterTop>
						<S.Price>
							<CurrencyAmount value={15_000} /> <span>/мес</span>
						</S.Price>

						<S.Price>
							<CurrencyAmount value={30_000} /> <span>выкуп</span>
						</S.Price>
					</S.FooterTop>

					<Button
						color="green"
						fullWidth
						onClick={() => {
							setAssignRentModalOpen(true)
						}}
					>
						Арендовать
					</Button>
				</S.Footer>
			</S.CarCard>

			<S.AssignRentModal
				open={isAssignRentModalOpen}
				heading="Назначить аренду"
				onClose={() => {
					setAssignRentModalOpen(false)
				}}
			>
				<CarAssignRentForm />
			</S.AssignRentModal>
		</>
	)
}
