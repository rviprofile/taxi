import { FormProvider, useForm } from 'react-hook-form'

import { AttachFiles, AvatarUpload, FormFieldsAccordion } from 'components/common'
import { TextField, Textarea } from 'ui'
import { InnField, KppField, OgrnField, PhoneField } from 'ui/maskedFields'

import * as S from './LegalEntityForm.styled'

import CompanyIcon from 'public/icons/company.svg'

export const CounterpartyLegalEntityForm = () => {
	const useFormProps = useForm()

	return (
		<FormProvider {...useFormProps}>
			<S.CounterpartyLegalEntityForm>
				<S.FirstColumn>
					<AvatarUpload
						icon={<CompanyIcon />}
						images={[]}
						onFileAdd={() => {}}
						onFileRemove={() => {}}
					/>

					<div>
						<Textarea
							name="organizationFullName"
							placeholder="Укажите полное название Юр.лица/ИП"
						/>
					</div>

					<FormFieldsAccordion HeadingProps={{ children: 'Основное' }}>
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
					</FormFieldsAccordion>

					<FormFieldsAccordion HeadingProps={{ children: 'Комментарии' }}>
						<Textarea name="comment" placeholder="Написать комментарий" />
					</FormFieldsAccordion>
				</S.FirstColumn>

				<S.Divider $orientation="vertical" />

				<S.SecondColumn>
					<FormFieldsAccordion HeadingProps={{ children: 'Информация' }}>
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
					</FormFieldsAccordion>

					<FormFieldsAccordion
						disabled={true}
						HeadingProps={{
							children: 'Документы',
							endAdornment: (
								<AttachFiles
									group="documents"
									heading={['Прикрепление документов', 'Документы']}
									type="documents"
									files={[]}
									onFileAdd={() => {}}
									onFileRemove={() => {}}
								/>
							)
						}}
					>
						<span></span>
					</FormFieldsAccordion>
				</S.SecondColumn>
			</S.CounterpartyLegalEntityForm>
		</FormProvider>
	)
}
