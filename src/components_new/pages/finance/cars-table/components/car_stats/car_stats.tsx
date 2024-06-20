import React, { FC } from 'react'
import * as S from './car_stats.styled';
import { ColoredDotText } from '../../../../../../components/common'
import { calculatePercentage, numberWithSpaces } from '../../../../../../utils'
import { TotalStats } from '../../../../../../api/finance/cars'

const data = [
	{
		id: "working",
		name: "Работает",
		sum: 4000,
		proc: 10,
	},
	{
		id: "repair",
		name: "Ремонт",
		sum: 4000,
		proc: 10,
	},
	{
		id: "crash",
		name: "ДТП",
		sum: 4000,
		proc: 10,
	},
	{
		id: "waiting",
		name: "Свободна",
		sum: 4000,
		proc: 10,
	},
	{
		id: "booked",
		name: "Бронь",
		sum: 4000,
		proc: 10,
	},
]

const returnColorDependedToStatus = (status: string) => {
	switch(status) {
		case "waiting":
			return "yellow";
		case "crash":
			return "red";
		case "working":
			return "green";
		case "repair":
			return "orange";
		case "booked":
			return "blue"
		default:
			return "";
	}
}

const CarStats: FC<TotalStats> = ({ total,repair,crash,waiting,working}) => {
	const actualTotal= repair + crash + working + waiting
	return (
		<S.CarStatsWrapper>
			<S.StatHeader>
				<span>Всего:</span>
				<div>
					<span>{numberWithSpaces(actualTotal)}</span>
					<span></span>
				</div>
			</S.StatHeader>
			<S.StatBody>
				<CarStatItem id={"working"} name={"В работе"} sum={working} perc={calculatePercentage(working, actualTotal)} />
				<CarStatItem id={"waiting"} name={"Ожидает"} sum={waiting} perc={calculatePercentage(waiting, actualTotal)} />
				<CarStatItem id={"repair"} name={"Ремонт"} sum={repair} perc={calculatePercentage(repair, actualTotal)} />
				<CarStatItem id={"crash"} name={"ДТП"} sum={crash} perc={calculatePercentage(crash, actualTotal)} />
			</S.StatBody>
		</S.CarStatsWrapper>
	)
}

const CarStatItem = ({ name, id, sum, perc  }: {name: string, perc: number, id: string, sum: number}) => (
	<S.StatItem>
		<ColoredDotText
			color={returnColorDependedToStatus(id)}>
			{name}
		</ColoredDotText>
		<div>
			<span>{numberWithSpaces(sum)}</span>
			<span>{perc}%</span>
		</div>
	</S.StatItem>
)

export default CarStats