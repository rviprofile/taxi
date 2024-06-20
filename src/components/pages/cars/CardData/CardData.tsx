import { useForm, FormProvider } from 'react-hook-form'

import { AvatarUpload, Heading } from 'components/common'
import { TextField, Select, Checkbox } from 'ui'
import { DateField, LicensePlateField } from 'ui/maskedFields'

import * as S from './CardData.styled'

import CarIcon from 'public/icons/car.svg'

import DownloadIcon from 'public/icons/download.svg'
import { Car } from 'types/car'
import { useEffect } from 'react'

interface Props {
	car: Car
}

export const CarCardData = ({ car }: Props) => {
	const useFormProps = useForm({ defaultValues: car })

	const { reset, resetField, getValues, watch, setValue, setError, clearErrors } =
		useFormProps

	const brands = [
		{ label: 'Марка 1', value: 'brand1' },
		{ label: 'Марка 2', value: 'brand2' },
		{ label: 'Марка 3', value: 'brand3' }
	]

	const models = [
		{ label: 'Модель 1', value: 'model1' },
		{ label: 'Модель 2', value: 'model2' },
		{ label: 'Модель 3', value: 'model3' }
	]

	const years = [
		{ label: '2001', value: '2001' },
		{ label: '2002', value: '2002' },
		{ label: '2003', value: '2003' }
	]

	const colors = [
		{ label: 'Цвет 1', value: 'color1' },
		{ label: 'Цвет 2', value: 'color2' },
		{ label: 'Цвет 3', value: 'color3' }
	]

	const types = [
		{ label: 'Тип 1', value: 'type1' },
		{ label: 'Тип 2', value: 'type2' },
		{ label: 'Тип 3', value: 'type3' }
	]

	useEffect(() => {
		if (!car) return

		const { files, ...counterpartyFields } = car

		reset(counterpartyFields)
	}, [car, reset, getValues])

	return (
		<FormProvider {...useFormProps}>
			<S.Form>
				<S.FirstColumn>
					<AvatarUpload icon={<CarIcon />} />

					<Heading variant="body1">Информация по автомобилю</Heading>

					<Select
						name="brand"
						label="Марка"
						placeholder="Выберите марку"
						options={brands}
					/>

					<Select
						name="model"
						label="Модель"
						placeholder="Выберите модель"
						options={models}
					/>

					<S.FieldsRow>
						<LicensePlateField name="licensePlate" label="ГОС номер" />

						<Select
							name="productionYear"
							label="Год выпуска"
							placeholder="Выберите год"
							options={years}
						/>
					</S.FieldsRow>

					<Select
						name="color"
						label="Цвет"
						placeholder="Выберите цвет"
						options={colors}
					/>

					<TextField
						name="vin"
						label="VIN"
						placeholder="_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _"
					/>

					<S.HeadingDownload>
						<Heading
							variant="body1"
							divider={false}
							endAdornment={
								<button type="button">
									<DownloadIcon />
								</button>
							}
						>
							CTC
						</Heading>
					</S.HeadingDownload>
					<TextField name="sts" placeholder="_ _ _ _ _ _ _ _ _ _" />
				</S.FirstColumn>

				<S.Divider $orientation="vertical" />

				<S.SecondColumn>
					<S.HeadingDownload>
						<Heading
							variant="body1"
							divider={false}
							endAdornment={
								<button type="button">
									<DownloadIcon />
								</button>
							}
						>
							ПТС
						</Heading>
					</S.HeadingDownload>
					<TextField name="pts" placeholder="_ _ _ _ _ _ _ _ _ _ _ _ _ _ _" />

					<Select
						name="productionYear"
						label="Тип КПП"
						placeholder="Выберите тип"
						options={types}
					/>

					<TextField name="mileage" label="Пробег" placeholder="Введите пробег" />

					<TextField
						name="mileageCorrection"
						label="Поправка пробега"
						placeholder="Введите поправку пробега"
					/>

					<S.HeadingDownload>
						<Heading
							variant="body1"
							divider={false}
							endAdornment={
								<button type="button">
									<DownloadIcon />
								</button>
							}
						>
							Номер разрешения
						</Heading>
					</S.HeadingDownload>
					<TextField name="authNumber" placeholder="_ _ _ _ _ _ _ _ _ _" />

					<TextField name="owner" label="Собственник" placeholder="Введите ФИО" />

					<Heading
						variant="body1"
						endAdornment={
							<button type="button">
								<DownloadIcon />
							</button>
						}
					>
						ОСАГО
					</Heading>

					<TextField
						name="osagoNumber"
						label="Номер"
						placeholder="_ _ _ _ _ _ _ _ _ _ _ _ _"
					/>

					<DateField name="osagoDateEnd" label="Дата окончания" />
				</S.SecondColumn>

				<S.Divider $orientation="vertical" />

				<S.ThirdColumn>
					<div>
						<Heading
							variant="body1"
							endAdornment={
								<button type="button">
									<DownloadIcon />
								</button>
							}
						>
							KACKO
						</Heading>
						<TextField name="kaskoNumber" label="Номер" placeholder="Введите номер" />
						<DateField name="kaskoDateEnd" label="Дата окончания" />
					</div>

					<div>
						<Heading
							variant="body1"
							endAdornment={
								<button type="button">
									<DownloadIcon />
								</button>
							}
						>
							Диагностическая карта
						</Heading>
						<TextField
							name="diagnosticNumber"
							label="Номер"
							placeholder="_ _ _ _ _ _ _ _ _ _ _ _ _"
						/>
						<DateField name="diagnosticDateEnd" label="Дата окончания" />
					</div>

					<Checkbox name="parkCar" label="Парковый автомобиль" />
				</S.ThirdColumn>
			</S.Form>
		</FormProvider>
	)
}
