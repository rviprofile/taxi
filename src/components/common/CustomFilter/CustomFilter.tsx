import { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'

import { FilterSelect, SearchField } from 'components/common'
import { Slider } from 'ui'

import { FilterComponentData } from 'types/common'
import { Checkbox } from 'ui'

interface Option {
	label: string
	value: string
	color: string
}

export const CustomFilter = ({
	type,
	name,
	placeholder,
	code,
	default: defaultValue,
	values
}: FilterComponentData) => {
	// const { resetField } = useFormContext()

	// useEffect(() => {
	// 	resetField(code, { defaultValue })
	// }, [code, resetField, defaultValue])

	switch (type) {
		case 'search':
			return <SearchField name={code} placeholder={placeholder} />

		case 'dropdown':
			const options = values
				? Object.entries(values).reduce<Option[]>((prev, curr) => {
						const [value, data] = curr
						const { name: label, style: color } = data

						return [...prev, { label, value, color }]
				  }, [])
				: []

			return <FilterSelect multiple name={code} label={name} options={options} />

		case 'slider':
			if (Array.isArray(values)) {
				return <Slider name={code} label={name} min={values[0]} max={values[1]} />
			}

		case 'checkbox':
			return <Checkbox name={code} label={name} />
	}
}
