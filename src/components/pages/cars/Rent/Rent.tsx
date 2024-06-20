import { MouseEvent, useRef, useState } from 'react'

import { DatePaginationFilter, Heading } from 'components/common'
import { Car, CarAssignRentForm, CarEndRentPopover } from 'components/pages/cars'
import { Button } from 'ui'

import * as S from './Rent.styled'

interface CarsRentProps {
	action: 'assign' | 'end'
}

export const CarsRent = ({ action }: CarsRentProps) => {
	const carRentRef = useRef(null)
	const [date, setDate] = useState<Date | null>(null)
	const [popoverAnchorEl, setPopoverAnchorEl] = useState<null | HTMLElement>(null)

	const isPopoverOpen = Boolean(popoverAnchorEl)

	const cars = [
		{
			name: 'Hyundai Sonata f222dd191',
			dates: new Array(6).fill(new Date())
		},
		{
			name: 'Hyundai Sonata f222dd192',
			dates: new Array(12).fill(new Date())
		},
		{
			name: 'Hyundai Sonata f222dd193',
			dates: new Array(7).fill(new Date())
		},
		{
			name: 'Hyundai Sonata f222dd194',
			dates: new Array(8).fill(new Date())
		},
		{
			name: 'Hyundai Sonata f222dd195',
			dates: new Array(9).fill(new Date())
		},
		{
			name: 'Hyundai Sonata f222dd196',
			dates: new Array(10).fill(new Date())
		},
		{
			name: 'Hyundai Sonata f222dd197',
			dates: new Array(11).fill(new Date())
		},
		{
			name: 'Hyundai Sonata f222dd198',
			dates: new Array(5).fill(new Date())
		},
		{
			name: 'Hyundai Sonata f222dd199',
			dates: new Array(4).fill(new Date())
		},
		{
			name: 'Hyundai Sonata f222dd190',
			dates: new Array(3).fill(new Date())
		}
	]

	const carItems = cars.map(({ name, dates }) => (
		<Car key={name} name={name} dates={dates} />
	))

	const openPopover = ({ currentTarget }: MouseEvent<HTMLButtonElement>) => {
		setPopoverAnchorEl(currentTarget)
	}

	return (
		<S.CarsRent ref={carRentRef}>
			<S.InRent>
				<Heading
					endAdornment={
						<Button color="blue" onClick={openPopover}>
							{action === 'assign' ? 'Назначить' : 'Завершить'}
						</Button>
					}
				>
					Сейчас в аренде
				</Heading>

				<S.RentStatusText>
					<span>Автомобилей в аренде нет</span>
				</S.RentStatusText>

				<S.Divider />
			</S.InRent>

			<S.RentHistory>
				<Heading>История аренды</Heading>

				<DatePaginationFilter date={date} onDateChange={setDate} />

				<S.Divider />

				<S.CarsList>{carItems}</S.CarsList>
			</S.RentHistory>

			{action === 'assign' ? (
				<S.CarAssignRentPopover
					open={isPopoverOpen}
					anchorEl={carRentRef.current}
					anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
					transformOrigin={{ horizontal: 'left', vertical: 'top' }}
					heading="Назначить аренду"
					onClose={() => {
						setPopoverAnchorEl(null)
					}}
				>
					<CarAssignRentForm />
				</S.CarAssignRentPopover>
			) : (
				<CarEndRentPopover
					open={isPopoverOpen}
					anchorEl={carRentRef.current}
					onClose={() => {
						setPopoverAnchorEl(null)
					}}
				/>
			)}
		</S.CarsRent>
	)
}
