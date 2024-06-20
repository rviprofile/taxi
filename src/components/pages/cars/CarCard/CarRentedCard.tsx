import Image, { StaticImageData } from 'next/image'

import { CurrencyAmount } from 'components/common'
import { CarStatus } from '../CarStatus/CarStatus'

import { CarStatus as CarStatusType } from 'types/car'

import * as S from './CarCard.styled'

import CarIcon from 'public/icons/car.svg'

type NextPaymentStatus = 'far' | 'medium' | 'soon'

interface CarRentedCardProps {
	nextPaymentStatus: NextPaymentStatus
	status: CarStatusType
	img?: string | StaticImageData
}

export const CarRentedCard = ({ nextPaymentStatus, status, img }: CarRentedCardProps) => {
	const getNextPaymentDateColor = (status: NextPaymentStatus) => {
		switch (status) {
			case 'far':
				return 'green'
			case 'medium':
				return 'orange'
			case 'soon':
				return 'red'
		}
	}

	return (
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

					<S.CooperationTerms>
						<span>Условия сотрудничества:</span>
						<span>50 / 50</span>
					</S.CooperationTerms>
				</S.HeaderBottom>
			</S.Header>

			<S.CarImage>
				<S.CarStatus>
					<CarStatus status={status} />
				</S.CarStatus>

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
						<CurrencyAmount value={3_000_000} /> <span>всего</span>
					</S.Price>

					<S.Price>
						<CurrencyAmount value={15_000} /> <span>/мес</span>
					</S.Price>
				</S.FooterTop>

				<S.Divider />

				<S.FooterBottom>
					<span>Ближ. платёж</span>

					<S.NextPaymentDate color={getNextPaymentDateColor(nextPaymentStatus)}>
						{new Intl.DateTimeFormat().format(new Date())}
					</S.NextPaymentDate>
				</S.FooterBottom>
			</S.Footer>
		</S.CarCard>
	)
}
