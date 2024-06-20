import React, { FC } from 'react'

import * as S from'./finance_stats.styled';
import { numberWithSpaces } from '../../../../../../utils'
import { TotalIncome } from '../../../../../../api/finance/cars'

const FinanceStats: FC<TotalIncome> = ({ plan, fact,debt}) => {
	return (
		<S.FinanceStatsWrapper>
			<S.FinanceStatsHeader>
				<span>Финансы</span>
				<span>Простой 5 % (10)</span>
			</S.FinanceStatsHeader>

			<S.FinanceStatBody>
				<S.Chart />
				<S.ChartInfo>

					<S.ChartInfoItem>
						<div>План:</div>
						<div>{numberWithSpaces(plan)} <span>₽</span></div>
					</S.ChartInfoItem>

					<S.ChartInfoItem>
						<div>Факт:</div>
						<div>{numberWithSpaces(fact)} <span>₽</span></div>
					</S.ChartInfoItem>

					<S.ChartInfoItem>
						<div>Долг:</div>
						<div>{numberWithSpaces(debt)} <span>₽</span></div>
					</S.ChartInfoItem>

				</S.ChartInfo>
			</S.FinanceStatBody>
		</S.FinanceStatsWrapper>
	)
}

export default FinanceStats