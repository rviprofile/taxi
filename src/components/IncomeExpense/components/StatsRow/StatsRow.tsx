import { CurrencyAmount } from 'components/common'

import * as S from './StatsRow.styled'

import IncomeIcon from 'public/icons/income.svg'
import OutcomeIcon from 'public/icons/outcome.svg'
import CashIcon from 'public/icons/cash.svg'
import DownloadIcon from 'public/icons/download.svg'
import PlusIcon from 'public/icons/plus.svg'
import TrashIcon from 'public/icons/trash.svg'

interface Stats {
	income: number
	expense: number
	profit: number
}

interface IncomeExpenseStatsRowProps {
	stats: Stats
	onDeleteItem?: () => void
	onDownloadItem?: () => void
	onAddItem?: () => void
}

export const IncomeExpenseStatsRow = ({
	stats,
	onDeleteItem,
	onDownloadItem,
	onAddItem
}: IncomeExpenseStatsRowProps) => {
	const { income, expense, profit } = stats

	return (
		<S.StatsRow>
			<S.Stats>
				<S.StatItem>
					<IncomeIcon />
					<CurrencyAmount value={income} />
				</S.StatItem>

				<S.Divider $orientation="vertical" />

				<S.StatItem>
					<OutcomeIcon />
					<CurrencyAmount value={expense} />
				</S.StatItem>

				<S.Divider $orientation="vertical" />

				<S.StatItem>
					<CashIcon />
					<CurrencyAmount value={profit} />
				</S.StatItem>
			</S.Stats>

			<S.Actions>
				<S.ActionButton onClick={onDeleteItem}>
					<TrashIcon />
				</S.ActionButton>

				<S.ActionButton onClick={onDownloadItem}>
					<DownloadIcon width={24} height={24} viewBox="0 0 17 17" />
				</S.ActionButton>

				<S.ActionButton onClick={onAddItem}>
					<PlusIcon width={24} height={24} viewBox="0 0 17 17" />
				</S.ActionButton>
			</S.Actions>
		</S.StatsRow>
	)
}
