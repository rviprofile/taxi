import { createColumnHelper, getCoreRowModel } from '@tanstack/react-table'
import { FormProvider, useForm } from 'react-hook-form'

import { Checkbox, Table } from 'ui'
import { PaymentStatus } from '../PaymentStatus/PaymentStatus'
import { Pagination } from 'components/common'

import { PaymentStatus as PaymentStatusType } from 'types/payments'

import * as S from './CreditsTable.styled'

import TrashIcon from 'public/icons/trash-2.svg'
import EditIcon from 'public/icons/edit.svg'

interface Credit {
	number: string
	name: string
	date: string
	payment: number
	status: PaymentStatusType
	residue: number
}

export const CreditsTable = () => {
	const useFormProps = useForm()
	const columnHelper = createColumnHelper<Credit>()

	const credits: Credit[] = [
		{
			number: '0000',
			name: 'Кредит №1234',
			date: new Intl.DateTimeFormat().format(new Date()),
			payment: 50_000,
			status: 'paid',
			residue: 5_000_000
		},
		{
			number: '0000',
			name: 'Кредит №1234',
			date: new Intl.DateTimeFormat().format(new Date()),
			payment: 50_000,
			status: 'soon',
			residue: 5_000_000
		},
		{
			number: '0000',
			name: 'Кредит №1234',
			date: new Intl.DateTimeFormat().format(new Date()),
			payment: 50_000,
			status: 'expired',
			residue: 5_000_000
		}
	]

	const columns = [
		columnHelper.accessor('number', {
			header: '№'
		}),
		columnHelper.accessor('name', {
			header: 'Название'
		}),
		columnHelper.accessor('date', {
			header: 'Дата платежа'
		}),
		columnHelper.accessor('payment', {
			header: 'Платеж',
			cell: ({ getValue }) => new Intl.NumberFormat().format(getValue())
		}),
		columnHelper.accessor('status', {
			header: 'Статус',
			cell: ({ getValue }) => <PaymentStatus status={getValue() as PaymentStatusType} />
		}),
		columnHelper.accessor('residue', {
			header: () => (
				<S.ResidueHeadRow>
					<span>Остаток</span>
					<Checkbox name="" />
				</S.ResidueHeadRow>
			),
			cell: ({ getValue, row }) => (
				<S.ResidueRow>
					<span>{new Intl.NumberFormat().format(getValue())}</span>

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
				</S.ResidueRow>
			)
		})
	]

	return (
		<S.CreditsTable>
			<S.TablesRow>
				<FormProvider {...useFormProps}>
					<Table
						options={{
							data: credits,
							columns,
							getCoreRowModel: getCoreRowModel()
						}}
						noPagination
					/>

					<Table
						options={{
							data: credits,
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
		</S.CreditsTable>
	)
}
