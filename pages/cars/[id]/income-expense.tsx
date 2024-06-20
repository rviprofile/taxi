import Head from 'next/head'
import { createColumnHelper } from '@tanstack/react-table'

import { IncomeExpense } from 'components'
import { CarsLayout } from 'components/layouts'
import { Checkbox } from 'ui'
import { ColoredDotText } from 'components/common'

import TrashIcon from 'public/icons/trash-2.svg'
import EditIcon from 'public/icons/edit.svg'

import * as S from 'styled/pages/CounterpartiesIncomeExpense'

type TransactionStatus = 'paid' | 'waiting' | 'not-paid' | 'partial-paid'

interface SubRow {
	id: number
	name: string
	price: number
	amount: number
	total: number
}

interface CounterpartyMoneyFlowItem {
	id: number
	date: string
	mileage: number
	category: string
	counterparty: string
	sum: number
	status: TransactionStatus
	actions: null
	subRows: SubRow[]
}

const IncomeExpensePage = () => {
	const stats = {
		income: 500_000,
		expense: 50_000,
		profit: 450_000
	}

	const subRows: SubRow[] = [
		{ id: 1, name: 'Шиномонтаж', price: 5000, amount: 2, total: 10000 },
		{ id: 2, name: 'Что-то ещё', price: 5000, amount: 1, total: 5000 },
		{ id: 3, name: 'Что-то ещё', price: 5000, amount: 1, total: 5000 }
	]

	const today = new Date().toLocaleDateString('ru-RU', {
		day: '2-digit',
		month: '2-digit',
		year: '2-digit'
	})

	const counterparties: CounterpartyMoneyFlowItem[] = [
		{
			id: 0,
			mileage: 100,
			date: today,
			category: 'Шиномонтаж',
			counterparty: 'ИП КУТЕПОВ ВИТАЛИЙ ВИКТОРОВИЧ',
			sum: 5000,
			status: 'paid',
			actions: null,
			subRows
		},
		{
			id: 1,
			mileage: 100,
			date: today,
			category: 'Шиномонтаж',
			counterparty: 'ИП КУТЕПОВ ВИТАЛИЙ ВИКТОРОВИЧ',
			sum: 5000,
			status: 'waiting',
			actions: null,
			subRows
		},
		{
			id: 2,
			mileage: 100,
			date: today,
			category: 'Шиномонтаж',
			counterparty: 'ИП КУТЕПОВ ВИТАЛИЙ ВИКТОРОВИЧ',
			sum: 5000,
			status: 'not-paid',
			actions: null,
			subRows
		},
		{
			id: 3,
			mileage: 100,
			date: today,
			category: 'Шиномонтаж',
			counterparty: 'ИП КУТЕПОВ ВИТАЛИЙ ВИКТОРОВИЧ',
			sum: 5000,
			status: 'partial-paid',
			actions: null,
			subRows
		}
	]

	const renderTransactionStatus = (status: TransactionStatus) => {
		switch (status) {
			case 'paid':
				return <ColoredDotText color="green">Оплачен</ColoredDotText>
			case 'waiting':
				return <ColoredDotText color="yellow">Ожидание</ColoredDotText>
			case 'not-paid':
				return <ColoredDotText color="orange">Не оплачен</ColoredDotText>
			case 'partial-paid':
				return <ColoredDotText color="blue">Част. оплата</ColoredDotText>
		}
	}

	const columnHelper = createColumnHelper<CounterpartyMoneyFlowItem>()

	const columns = [
		columnHelper.accessor('date', {
			header: 'Дата'
		}),
		columnHelper.accessor('mileage', {
			header: 'Пробег'
		}),
		columnHelper.accessor('category', {
			header: 'Категория'
		}),
		columnHelper.accessor('counterparty', {
			header: 'Контрагент',
			cell: ({ getValue }) => (
				<>
					{getValue()} <S.TextOverflowFadeOut />
				</>
			)
		}),
		columnHelper.accessor('sum', {
			header: 'Сумма',
			cell: ({ getValue }) => getValue().toLocaleString()
		}),
		columnHelper.accessor('status', {
			header: 'Статус',
			cell: ({ getValue }) => renderTransactionStatus(getValue())
		}),
		columnHelper.accessor('actions', {
			header: () => <Checkbox name="" />,
			cell: () => (
				<S.TableActions>
					<button
						onClick={(e) => {
							e.stopPropagation()
						}}
					>
						<TrashIcon />
					</button>

					<button
						onClick={(e) => {
							e.stopPropagation()
						}}
					>
						<EditIcon />
					</button>

					<button
						onClick={(e) => {
							e.stopPropagation()
						}}
					>
						<Checkbox name="" />
					</button>
				</S.TableActions>
			)
		})
	]

	return (
		<>
			<Head>
				<title>Приход/Расход</title>
			</Head>

			<CarsLayout>
				<IncomeExpense
					stats={stats}
					income={{ data: counterparties, columns }}
					expense={{ data: counterparties, columns }}
				/>
			</CarsLayout>
		</>
	)
}

export default IncomeExpensePage
