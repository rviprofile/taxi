import React, { FC } from 'react'

import CircleArrowUp from "public/icons/circle-arrow-up.svg";
import CircleArrowDown from "public/icons/circle-arrow-down.svg";

import * as S from './car_grid.styled';
import { Divider } from '../../../../../styled/components'


export type CarType = {
	brand: string,
	model: string,
	number: string,
	actual_sum: number,
	waited_sum: number,
	driver_name: string,
	status_name: "Работает" | "Ожидает" | "На ремонте" | "ДТП",
	status: 'working' | 'waiting' | 'crash' | 'repair',
}

type CarsInfoType = CarType[]

type CarGrid = {
	cars: CarsInfoType,
}

const CarGrid: FC<CarGrid> = ({ cars }) => {

	const renderStatusIcon = (car: CarType) => {
			switch(car.status) {
				case "working":
					return <CircleArrowUp />
				case "waiting":
					return <CircleArrowUp />
				case "crash":
					return <CircleArrowDown />
				case "repair":
					return <CircleArrowDown />
				default:
					return null;
			}
	}

	const renderTextColor = (car: CarType) => {
		switch(car.status) {
			case "working":
				return "rgba(136, 177, 20, 1)"
			case "waiting":
				return "rgba(255, 182, 0, 1)"
			case "crash":
				return "rgba(255, 71, 65, 1)"
			case "repair":
				return "rgba(211, 127, 0, 1)"
			default:
				return "rgba(136, 177, 20, 1)"
		}
	}

	return (
			<S.CarGridContainer>
				{cars?.map((car, i) => {

					return (
						<S.CarCard key={i}>
							<div style={{ display: "flex", justifyContent: "space-between"}}>
								<S.CarInfoBlock>
									<div>{car.brand} {car.model}</div>
									<div>{car.number}</div>
								</S.CarInfoBlock>
								<S.CarStatusBlock color={renderTextColor(car)}>
									{renderStatusIcon(car)}
									<div>{car.status_name}</div>
								</S.CarStatusBlock>
							</div>
							<Divider />
							<div style={{ marginBottom: "10px"}}></div>

							<S.DriverInfoContainer>
								<S.DriverIncome>
									<span>{car.actual_sum} <span style={{ fontFamily: "Roboto, sans-serif", fontWeight: "400"}}>₽</span></span>
									<span> / {car.waited_sum} <span style={{ fontFamily: 'Roboto, sans-serif', fontWeight: '400', fontSize: "15px" }}>₽</span> за период </span>
								</S.DriverIncome>
								<S.DriverName>{car.driver_name}</S.DriverName>
							</S.DriverInfoContainer>
						</S.CarCard>
					)
				})}
			</S.CarGridContainer>
	)
}

export default CarGrid;