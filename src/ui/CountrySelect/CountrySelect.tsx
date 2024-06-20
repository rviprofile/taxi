import Image from 'next/image'

import { MenuItem } from 'ui'
import { SelectProps } from 'ui/Select/Select'

import * as S from './CountrySelect.styled'

import amFlag from 'public/img/flags/am.png'
import azFlag from 'public/img/flags/az.png'
import byFlag from 'public/img/flags/by.png'
import kgFlag from 'public/img/flags/kg.png'
import kzFlag from 'public/img/flags/kz.png'
import mdFlag from 'public/img/flags/md.png'
import ruFlag from 'public/img/flags/ru.png'
import tjFlag from 'public/img/flags/tj.png'
import tmFlag from 'public/img/flags/tm.png'
import uaFlag from 'public/img/flags/ua.png'
import uzFlag from 'public/img/flags/uz.png'

export const CountrySelect = (props: SelectProps) => {
	const countries = [
		{ label: 'Армения', value: 'am', flag: amFlag },
		{ label: 'Азербайджан', value: 'az', flag: azFlag },
		{ label: 'Беларусь', value: 'by', flag: byFlag },
		{ label: 'Киргизия', value: 'kg', flag: kgFlag },
		{ label: 'Казахстан', value: 'kz', flag: kzFlag },
		{ label: 'Молдова', value: 'md', flag: mdFlag },
		{ label: 'Россия', value: 'ru', flag: ruFlag },
		{ label: 'Таджикистан', value: 'tj', flag: tjFlag },
		{ label: 'Туркменистан', value: 'tm', flag: tmFlag },
		{ label: 'Украина', value: 'ua', flag: uaFlag },
		{ label: 'Узбекистан', value: 'uz', flag: uzFlag }
	]

	return (
		<S.CountrySelect
			{...props}
			renderValue={(value: any) => {
				const selectedOption = countries.find(({ value: v }) => v === value)

				return selectedOption ? (
					<S.ValueRow>
						<Image
							src={selectedOption.flag}
							width={16}
							height={12}
							alt={selectedOption.label}
						/>
						<span>{selectedOption.label}</span>
					</S.ValueRow>
				) : (
					<S.Placeholder>{props.placeholder}</S.Placeholder>
				)
			}}
		>
			{countries.map(({ label, value, flag }) => {
				return (
					<MenuItem key={value} value={value}>
						<S.ValueRow>
							<Image src={flag} width={16} height={12} alt={label} />
							<span>{label}</span>
						</S.ValueRow>
					</MenuItem>
				)
			})}
		</S.CountrySelect>
	)
}
