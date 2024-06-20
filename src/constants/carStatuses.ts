import { Color } from 'components/common/ColoredDotText/ColoredDotText'
import { CarStatus } from 'types/car'

export interface CarStatusItem {
	label: string
	value: CarStatus
	color: Color
}

export const CAR_STATUSES: CarStatusItem[] = [
	{ label: 'Работает', value: 'working', color: 'green' },
	{ label: 'Ожидает', value: 'awaits', color: 'yellow' },
	{ label: 'На ремонте', value: 'repairs', color: 'orange' },
	{ label: 'ДТП', value: 'accident', color: 'red' }
]
