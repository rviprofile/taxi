import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import {
	ExpandedState,
	getCoreRowModel,
	getExpandedRowModel,
	Row,
	SortingState
} from '@tanstack/react-table'

import { IncomeExpenseTableHeading } from '../TableHeading/TableHeading'
import { Table } from 'ui'

interface IncomeExpenseTableProps {
	data: any[]
	columns: any[]
	variant: 'income' | 'expense'
}

import * as S from './Table.styled'

export const IncomeExpenseTable = ({
	data,
	columns,
	variant
}: IncomeExpenseTableProps) => {
	const useFormProps = useForm()

	const [sorting, setSorting] = useState<SortingState>([])
	const [expanded, setExpanded] = useState<ExpandedState>({})

	const renderSubTable = ({ row }: { row: Row<any> }) => {
		const { subRows } = row.original

		return (
			<>
				<S.SubTableHead>
					<S.TableCell>Номер</S.TableCell>
					<S.TableCell>Название</S.TableCell>
					<S.TableCell>
						<S.SubTableHalfCell>
							<span>Цена</span> <span>Кол-во</span>
						</S.SubTableHalfCell>
					</S.TableCell>
					<S.TableCell colSpan={3}>Стоимость</S.TableCell>
				</S.SubTableHead>

				{subRows.map(
					({ id, name, price, amount, total }: any, idx: number, arr: any[]) => {
						return (
							<S.SubTableBody key={id} haveBorder={arr.length - 1 === idx}>
								<S.TableCell>{id}</S.TableCell>
								<S.TableCell>{name}</S.TableCell>
								<S.TableCell>
									<S.SubTableHalfCell>
										<span>{price}</span> <span>{amount}</span>
									</S.SubTableHalfCell>
								</S.TableCell>
								<S.TableCell colSpan={3}>{total}</S.TableCell>
							</S.SubTableBody>
						)
					}
				)}
			</>
		)
	}

	return (
		<S.IncomeExpenseTable>
			<IncomeExpenseTableHeading variant={variant} />

			<FormProvider {...useFormProps}>
				<Table
					options={{
						data,
						columns,
						state: {
							sorting,
							expanded
						},
						onExpandedChange: setExpanded,
						onSortingChange: setSorting,
						getCoreRowModel: getCoreRowModel(),
						getExpandedRowModel: getExpandedRowModel(),
						getRowCanExpand: () => true
					}}
					renderSubComponent={renderSubTable}
				/>
			</FormProvider>
		</S.IncomeExpenseTable>
	)
}
