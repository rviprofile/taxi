import { FormProvider, useForm } from 'react-hook-form'
import {
	createColumnHelper,
	ExpandedState,
	getCoreRowModel,
	SortingState
} from '@tanstack/react-table'
import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'

import { ColoredDotText, CurrencyAmount } from 'components/common'
import { Button, Checkbox, Table } from 'ui'
import { PenaltyModal } from '../PenaltyModal/PenaltyModal'

import * as S from './PenaltiesTable.styled'

import photoPlaceholderSrc from 'public/img/photo-placeholder.png'
import ArrowDownIcon from 'public/icons/arrow-down.svg'
import TextFileIcon from 'public/icons/text-file.svg'
import ShareIcon from 'public/icons/share.svg'

type PenaltyStatus = 'paid' | 'not-paid'

interface Car {
	brand: string
	model: string
	licensePlate: string
	region: string
}

interface Penalty {
	img: StaticImageData
	dateTime: Date
	article: string
	penalty: {
		number: string
		date: Date
	}
	car: Car
	responsible: string
	status: PenaltyStatus
	sum: number
}

export const PenaltiesTable = () => {
	const useFormProps = useForm()
	const columnHelper = createColumnHelper<Penalty>()

	const [isPenaltyModalOpen, setPenaltyModalOpen] = useState(false)
	const [sorting, setSorting] = useState<SortingState>([])
	const [expanded, setExpanded] = useState<ExpandedState>({})

	const car: Car = {
		brand: 'Kia',
		model: 'K5',
		licensePlate: 'М766КС',
		region: '198'
	}

	const penalties: Penalty[] = [
		{
			img: photoPlaceholderSrc,
			dateTime: new Date(),
			article: '12.09.2 - Превышение скорости движения ТС от 20 до 40',
			penalty: {
				number: '18810578221129046651',
				date: new Date()
			},
			car: car,
			responsible: 'Фамилия И. О.',
			status: 'paid',
			sum: 250
		},
		{
			img: photoPlaceholderSrc,
			dateTime: new Date(),
			article: '12.09.2 - Превышение скорости движения ТС от 20 до 40',
			penalty: {
				number: '18810578221129046651',
				date: new Date()
			},
			car: car,
			responsible: 'Фамилия И. О.',
			status: 'not-paid',
			sum: 250
		},
		{
			img: photoPlaceholderSrc,
			dateTime: new Date(),
			article: '12.09.2 - Превышение скорости движения ТС от 20 до 40',
			penalty: {
				number: '18810578221129046651',
				date: new Date()
			},
			car: car,
			responsible: 'Фамилия И. О.',
			status: 'paid',
			sum: 250
		}
	]

	const renderPenaltyStatus = (status: PenaltyStatus) => {
		switch (status) {
			case 'paid':
				return <ColoredDotText color="green">Оплачен</ColoredDotText>
			case 'not-paid':
				return <ColoredDotText color="yellow">Не оплачен</ColoredDotText>
		}
	}

	const columns = [
		columnHelper.accessor('img', {
			header: '',
			cell: ({ getValue }) => <Image width={58} height={58} src={getValue()} alt="" />,
			enableSorting: false
		}),
		columnHelper.accessor('dateTime', {
			header: 'Дата/время',
			cell: ({ getValue }) => (
				<S.Column>
					<span>{new Intl.DateTimeFormat().format(getValue())}</span>

					<span>
						{new Intl.DateTimeFormat('ru-RU', {
							hour: '2-digit',
							minute: '2-digit'
						}).format(getValue())}
					</span>
				</S.Column>
			)
		}),
		columnHelper.accessor('article', {
			header: 'Статья'
		}),
		columnHelper.accessor('penalty', {
			header: 'Штраф',
			cell: ({ getValue }) => (
				<S.Column>
					<span>{getValue().number}</span>

					<span>{new Intl.DateTimeFormat().format(getValue().date)}</span>
				</S.Column>
			),
			enableSorting: false
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
			},
			enableSorting: false
		}),
		columnHelper.accessor('responsible', {
			header: 'Ответственный',
			enableSorting: false
		}),
		columnHelper.accessor('status', {
			header: 'Статус',
			cell: ({ getValue }) => renderPenaltyStatus(getValue()),
			enableSorting: false
		}),
		columnHelper.accessor('sum', {
			header: () => (
				<>
					<span>Сумма</span>
					<Checkbox name="" />
				</>
			),
			cell: ({ getValue, row }) => {
				return (
					<S.SumRow>
						<S.Penalty>
							<CurrencyAmount fraction value={getValue()} />
							<S.PenaltyDiscount>-50% до 00.00</S.PenaltyDiscount>
						</S.Penalty>

						<S.Actions>
							<Checkbox
								name=""
								onClick={(e) => {
									e.stopPropagation()
								}}
							/>

							<button>
								<ArrowDownIcon
									style={{
										transform: row.getIsExpanded() ? 'rotate(180deg)' : null
									}}
								/>
							</button>
						</S.Actions>
					</S.SumRow>
				)
			}
		})
	]

	const renderSubComponent = () => {
		return (
			<S.TableRow>
				<S.SubComponent colSpan={8}>
					<S.Divider />

					<S.SubComponentContent>
						<S.SubComponentLeft>
							<span>Дополнительная информация</span>

							<S.AdditionalInfo>
								<S.Row>
									<span>Нарушение:</span>

									<span>
										{new Intl.DateTimeFormat().format(new Date())}

										<span style={{ marginLeft: 10 }}>
											{new Intl.DateTimeFormat('default', {
												hour: '2-digit',
												minute: '2-digit'
											}).format(new Date())}
										</span>
									</span>
								</S.Row>

								<S.Row>
									<span>Загружено:</span>

									<span>{new Intl.DateTimeFormat().format(new Date())}</span>
								</S.Row>

								<S.Row>
									<span>Администратор:</span>

									<span>ГИБДД</span>
								</S.Row>

								<S.Row>
									<span>Постановление:</span>

									<span>{new Intl.DateTimeFormat().format(new Date())}</span>
								</S.Row>

								<S.Row>
									<span>Оплатить до:</span>

									<span>{new Intl.DateTimeFormat().format(new Date())}</span>
								</S.Row>
							</S.AdditionalInfo>
						</S.SubComponentLeft>

						<S.SubComponentRight>
							<Button
								endIcon={<ArrowDownIcon />}
								onClick={() => {
									setPenaltyModalOpen(true)
								}}
							>
								Карточка
							</Button>

							<Button startIcon={<TextFileIcon />}>Квитанция</Button>

							<Button startIcon={<ShareIcon />}>Поделиться</Button>
						</S.SubComponentRight>
					</S.SubComponentContent>
				</S.SubComponent>
			</S.TableRow>
		)
	}

	return (
		<>
			<S.PenaltiesTable>
				<FormProvider {...useFormProps}>
					<Table
						options={{
							data: penalties,
							state: {
								sorting,
								expanded
							},
							columns,
							getCoreRowModel: getCoreRowModel(),
							onSortingChange: setSorting,
							onExpandedChange: setExpanded,
							getRowCanExpand: () => true
						}}
						renderSubComponent={renderSubComponent}
					/>
				</FormProvider>
			</S.PenaltiesTable>

			<PenaltyModal
				open={isPenaltyModalOpen}
				onClose={() => {
					setPenaltyModalOpen(false)
				}}
			/>
		</>
	)
}
