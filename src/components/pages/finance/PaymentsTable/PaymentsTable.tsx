import { createColumnHelper, getCoreRowModel } from '@tanstack/react-table'
import { FormProvider, useForm } from 'react-hook-form'

import { Checkbox, Table } from 'ui'
import { PaymentStatus } from '../PaymentStatus/PaymentStatus'
import { Pagination } from 'components/common'

import { PaymentStatus as PaymentStatusType } from 'types/payments'

import * as S from './PaymentsTable.styled'

interface Payment {
	counterparty: string
	purpose: string
	status: PaymentStatusType
	sum: number
}

export const PaymentsTable = () => {
	const useFormProps = useForm()
	const columnHelper = createColumnHelper<Payment>()

	const payments: Payment[] = [
		{
			counterparty: 'ИП КУТЕПОВ ВИТАЛИЙ ВИКТОРОВИЧ',
			purpose: 'Развал-схождение',
			status: 'paid',
			sum: 45_000_000
		},
		{
			counterparty: 'ИП КУТЕПОВ ВИТАЛИЙ ВИКТОРОВИЧ',
			purpose: 'Развал-схождение',
			status: 'soon',
			sum: 45_000_000
		},
		{
			counterparty: 'ИП КУТЕПОВ ВИТАЛИЙ ВИКТОРОВИЧ',
			purpose: 'Развал-схождение',
			status: 'expired',
			sum: 45_000_000
		},
		{
			counterparty: 'ИП КУТЕПОВ ВИТАЛИЙ ВИКТОРОВИЧ',
			purpose: 'Развал-схождение',
			status: 'scheduled',
			sum: 45_000_000
		}
	]

	const columns = [
		columnHelper.accessor('counterparty', {
			header: 'Контрагент'
		}),
		columnHelper.accessor('purpose', {
			header: 'Назначение'
		}),
		columnHelper.accessor('status', {
			header: 'Статус',
			cell: ({ getValue }) => <PaymentStatus status={getValue() as PaymentStatusType} />
		}),
		columnHelper.accessor('sum', {
			header: () => (
				<S.SumHeadRow>
					<span>Сумма</span>
					<Checkbox name="" />
				</S.SumHeadRow>
			),
			cell: ({ getValue, row }) => (
				<S.SumRow>
					<span>{new Intl.NumberFormat().format(getValue())}</span>
					<Checkbox name={`sum-${row.index}`} />
				</S.SumRow>
			)
		})
	]

	return (
		<S.PaymentsTable>
			<S.TablesRow>
				<FormProvider {...useFormProps}>
					<Table
						options={{
							data: payments,
							columns,
							getCoreRowModel: getCoreRowModel()
						}}
						noPagination
					/>

					<Table
						options={{
							data: payments,
							columns,
							getCoreRowModel: getCoreRowModel()
						}}
						noPagination
					/>
				</FormProvider>
			</S.TablesRow>

			<Pagination
				page={1}
				pageCount={10}
				onPrev={() => {}}
				onNext={() => {}}
				onLast={() => {}}
			/>
		</S.PaymentsTable>
	)
}
