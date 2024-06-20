import { useState } from 'react'

import {
	IncomeExpenseStatsRow,
	IncomeExpenseTable,
	IncomeExpenseAddTableRecordModal,
	IncomeExpenseTableFilters
} from './components'

import * as S from './IncomeExpense.styled'

interface Stats {
	income: number
	expense: number
	profit: number
}

interface Table {
	data: any[]
	columns: any[]
}

interface IncomeExpenseProps {
	stats: Stats
	income: Table
	expense: Table
}

export const IncomeExpense = ({ stats, income, expense }: IncomeExpenseProps) => {
	const [isAddTableRecordModalOpen, setAddTableRecordModalOpen] = useState(false)

	const toggleAddTableRecordModal = () => {
		setAddTableRecordModalOpen(!isAddTableRecordModalOpen)
	}

	return (
		<>
			<S.IncomeExpense>
				<IncomeExpenseTableFilters />

				<IncomeExpenseStatsRow stats={stats} onAddItem={toggleAddTableRecordModal} />

				<S.TablesRow>
					<IncomeExpenseTable
						variant="income"
						data={income.data}
						columns={income.columns}
					/>

					<IncomeExpenseTable
						variant="expense"
						data={expense.data}
						columns={expense.columns}
					/>
				</S.TablesRow>
			</S.IncomeExpense>

			<IncomeExpenseAddTableRecordModal
				open={isAddTableRecordModalOpen}
				onClose={toggleAddTableRecordModal}
			/>
		</>
	)
}
