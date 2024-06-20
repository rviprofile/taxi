import { createColumnHelper, getCoreRowModel } from '@tanstack/react-table'

import {
	ColoredDotText,
	CurrencyAmount,
	DatePaginationFilter,
	Heading,
	SwitchRow
} from 'components/common'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Table } from 'ui'

import * as S from './PenaltiesTable.styled'

type PenaltyStatus = 'paid' | 'not-paid'

interface Car {
	brand: string
	model: string
	licensePlate: string
	region: string
}

interface Penalty {
	dateTime: Date
	article: string
	penalty: number
	car: Car
	status: PenaltyStatus
}

export const PenaltiesTable = () => {
	const useFormProps = useForm()
	const [date, setDate] = useState<Date | null>(null)

	const columnHelper = createColumnHelper<Penalty>()

	const car: Car = {
		brand: 'Kia',
		model: 'K5',
		licensePlate: 'М766КС',
		region: '198'
	}

	const penalties: Penalty[] = [
		{
			dateTime: new Date(),
			article: '12.09.2 - Превышение скорости движения ТС от 20 до 40',
			penalty: 250,
			car: car,
			status: 'paid'
		},
		{
			dateTime: new Date(),
			article: '12.09.2 - Превышение скорости движения ТС от 20 до 40',
			penalty: 250,
			car: car,
			status: 'not-paid'
		}
	]

	const renderPenaltyStatus = (status: PenaltyStatus) => {
		switch (status) {
			case 'paid':
				return <ColoredDotText color="green">Оплачен</ColoredDotText>
			case 'not-paid':
				return <ColoredDotText color="orange">Не оплачен</ColoredDotText>
		}
	}

	const columns = [
		columnHelper.accessor('dateTime', {
			header: 'Дата/время',
			cell: ({ getValue }) => (
				<S.DateTime>
					<span>{new Intl.DateTimeFormat().format(getValue())}</span>

					<span>
						{new Intl.DateTimeFormat('ru-RU', {
							hour: '2-digit',
							minute: '2-digit'
						}).format(getValue())}
					</span>
				</S.DateTime>
			)
		}),
		columnHelper.accessor('article', {
			header: 'Статья'
		}),
		columnHelper.accessor('penalty', {
			header: 'Штраф',
			cell: ({ getValue }) => (
				<S.Penalty>
					<CurrencyAmount fraction value={getValue()} />
					<S.PenaltyDiscount>-50% до 00.00</S.PenaltyDiscount>
				</S.Penalty>
			)
		}),
		columnHelper.accessor('car', {
			header: 'Автомобиль',
			cell: ({ getValue }) => {
				const { brand, model, licensePlate, region } = getValue()

				return (
					<S.LicensePlate>
						<span>
							{brand} {model}
						</span>

						<span>
							<span>{licensePlate}</span>
							<span>{region}</span>
						</span>
					</S.LicensePlate>
				)
			}
		}),
		columnHelper.accessor('status', {
			header: 'Статус',
			cell: ({ getValue }) => renderPenaltyStatus(getValue())
		})
	]

	return (
		<S.PenaltiesTable>
			<FormProvider {...useFormProps}>
				<Heading
					endAdornment={<SwitchRow name="isPaid" left="Оплачен" right="Не оплачен" />}
				>
					Штрафы
				</Heading>

				<DatePaginationFilter date={date} onDateChange={setDate} />

				<Table
					noPagination
					options={{
						data: penalties,
						columns,
						getCoreRowModel: getCoreRowModel()
					}}
				/>
			</FormProvider>
		</S.PenaltiesTable>
	)
}
