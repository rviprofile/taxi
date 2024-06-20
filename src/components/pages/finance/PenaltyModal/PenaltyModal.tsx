import Image from 'next/image'

import { Button } from 'ui'
import { CurrencyAmount } from 'components/common'

import * as S from './PenaltyModal.styled'

import TextFileIcon from 'public/icons/text-file.svg'
import ShareIcon from 'public/icons/share.svg'
import BankCardIcon from 'public/icons/bank-card-2.svg'
import CopyIcon from 'public/icons/copy.svg'
import qrSrc from 'public/img/qr.png'

interface PenaltyModalProps {
	open: boolean
	onClose: () => void
}

export const PenaltyModal = ({ open, onClose }: PenaltyModalProps) => {
	return (
		<S.PenaltyModal
			open={open}
			heading="Штраф"
			headingProps={{
				endAdornment: (
					<S.HeadingEndAdornment>
						<Button startIcon={<ShareIcon />}>Поделиться</Button>
						<Button startIcon={<TextFileIcon />}>Распечатать</Button>
					</S.HeadingEndAdornment>
				)
			}}
			onClose={onClose}
		>
			<>
				<S.FirstSection>
					<S.FirstSectionLeft>
						<S.Column>
							<span>Постановление:</span>
							<span>
								18810578221129046651 <S.Gray>от 29.11.2022</S.Gray>
							</span>
						</S.Column>

						<S.Column>
							<span>Сумма:</span>

							<S.SumRow>
								<CurrencyAmount value={500} /> <CurrencyAmount value={250} /> до
								10.10.2022
							</S.SumRow>
						</S.Column>

						<S.Column>
							<span>Администратор:</span>
							<span>ЦАФАП в ОДД ГИБДД ГУ МВД России по г.СПб и ЛО</span>
						</S.Column>
					</S.FirstSectionLeft>

					<S.FirstSectionRight>
						<Image width={117} height={117} src={qrSrc} alt="" />
						<Button color="green" startIcon={<BankCardIcon />}>
							Оплатить
						</Button>
					</S.FirstSectionRight>
				</S.FirstSection>

				<S.Divider />

				<S.Violation>
					<span>Нарушение</span>

					<span>29.11.2022 00.00</span>

					<S.Column>
						<span>Место:</span>
						<span>
							МОСКОВСКИЙ ПРОСПЕКТ, Д.177, ЛИТ.А, ОТ УЛ. ФРУНЗЕ К УЛ. ГАСТЕЛЛО,
							САНКТ-ПЕТЕРБУРГ Г.
						</span>
					</S.Column>

					<S.Column>
						<span>Статья КоАП::</span>
						<span>12.09.2 - Превышение скорости движения ТС от 20 до 40</span>
					</S.Column>
				</S.Violation>

				<S.Divider />

				<S.Car>
					<span>Автомобиль</span>

					<S.CarInfo>
						<S.Column>
							<span>Госномер:</span>
							<span>М766КС 198</span>
						</S.Column>

						<S.Column>
							<span>Марка:</span>
							<span>Нет информации</span>
						</S.Column>

						<S.Column>
							<span>СТС:</span>
							<span>99 29 000000</span>
						</S.Column>

						<S.Column>
							<span>Марка:</span>
							<span>Нет информации</span>
						</S.Column>
					</S.CarInfo>
				</S.Car>

				<S.Divider />

				<S.Responsible>
					<span>Ответсвенный</span>
					<span>Нет информации</span>
				</S.Responsible>

				<S.Divider />

				<S.Photo>
					<S.PhotoDoesntUpload>
						<span>Фото не загрузилось на сервис</span>

						<span>
							Попробуйте позже или проверьте на сайте <a href="гибдд.рф">гибдд.рф</a>
						</span>
					</S.PhotoDoesntUpload>
				</S.Photo>
				<S.Divider />

				<S.Requisites>
					<span>
						Реквизиты для оплаты
						<button>
							<CopyIcon />
						</button>
					</span>

					<span>
						УФК по г. Санкт-Петергу (УГИБДД ГУ МВД России по г.Санкт-Петербургу и
						Ленинградской области
					</span>
				</S.Requisites>
			</>
		</S.PenaltyModal>
	)
}
