import { FormProvider, useForm } from 'react-hook-form'

import { AvatarUpload, Heading } from 'components/common'
import { TextField, Textarea } from 'ui'
import { InnField, KppField, OgrnField, PhoneField } from 'ui/maskedFields'

import * as S from './CompanyCardData.styled'

import CompanyIcon from 'public/icons/company.svg'
import DownloadIcon from 'public/icons/download.svg'

export const CompanyCardData = () => {
	const useFormProps = useForm()

	return (
		<FormProvider {...useFormProps}>
			<S.CompanyCardData>
				<S.FormColumn>
					<AvatarUpload icon={<CompanyIcon />} />

					<div>
						<Textarea
							name="organizationFullName"
							placeholder="Укажите полное название Юр.лица/ИП"
						/>
					</div>

					<div>
						<Heading variant="body1">Основное</Heading>

						<Textarea
							name="legalAddress"
							label="Юридический адрес проживания"
							placeholder="Введите данные"
						/>

						<S.FieldsRow>
							<InnField name="inn" />
							<KppField name="kpp" />
						</S.FieldsRow>

						<OgrnField name="ogrn" label="ОГРН" />
					</div>

					<div>
						<Heading variant="body1">Комментарии</Heading>
						<Textarea name="comment" placeholder="Написать комментарий" />
					</div>
				</S.FormColumn>

				<S.Divider $orientation="vertical" />

				<S.FormColumn>
					<div>
						<Heading variant="body1">Информация</Heading>

						<Textarea
							name="officeLegalAddress"
							label="Адрес офиса юр. лица"
							placeholder="Введите данные"
						/>

						<TextField
							name="ceoFullName"
							label="ФИО гендиректора"
							placeholder="Введите данные"
						/>

						<S.FieldsRow>
							<PhoneField name="ceoPhone" label="Телефон гендиректора" maskType={2} />
							<PhoneField name="ceoOfficePhone" label="Телефон офиса" maskType={2} />
						</S.FieldsRow>

						<TextField
							name="ceoEmail"
							type="email"
							label="Адрес электронной почты"
							placeholder="Введите данные"
						/>

						<TextField
							name="workScrope"
							label="Сфера деятельности"
							placeholder="Введите данные"
						/>
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
							Документы
						</Heading>

						<span></span>
					</div>
				</S.FormColumn>
			</S.CompanyCardData>
		</FormProvider>
	)
}
