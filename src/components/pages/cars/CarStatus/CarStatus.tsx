import { ColoredDotText } from 'components/common'

import { CarStatusItem, CAR_STATUSES } from 'constants/carStatuses'
import { CarStatus as Status } from 'types/car'

export const CarStatus = ({ status }: { status: Status }) => {
	const findLabelByValue = (statuses: CarStatusItem[], status: Status) => {
		return statuses.find(({ value }) => value === status)?.label
	}

	switch (status) {
		case 'working':
			return (
				<ColoredDotText color="green">
					{findLabelByValue(CAR_STATUSES, 'working')}
				</ColoredDotText>
			)
		case 'awaits':
			return (
				<ColoredDotText color="yellow">
					{findLabelByValue(CAR_STATUSES, 'awaits')}
				</ColoredDotText>
			)
		case 'repairs':
			return (
				<ColoredDotText color="orange">
					{findLabelByValue(CAR_STATUSES, 'repairs')}
				</ColoredDotText>
			)
		case 'accident':
			return (
				<ColoredDotText color="red">
					{findLabelByValue(CAR_STATUSES, 'accident')}
				</ColoredDotText>
			)
	}
}
