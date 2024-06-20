import { useState } from 'react'

import { PaymentStatus } from '../PaymentStatus/PaymentStatus'
import { PaymentCreateModal } from '../PaymentCreateModal/PaymentCreateModal'
import { CurrencyAmount } from 'components/common'

import * as S from './PaymentsStats.styled'

import TrashIcon from 'public/icons/trash.svg'
import DownloadIcon from 'public/icons/download.svg'
import WithdrawIcon from 'public/icons/withdraw.svg'
import PlusIcon from 'public/icons/plus.svg'

export const PaymentsStats = () => {
	const [isPaymentCreateModalOpen, setPaymentCreateModalOpen] = useState(false)

	return (
		<>
			<S.PaymentsStats>
				<S.Left>
					<S.TotalPayments>
						<CurrencyAmount value={45_000_000} />
						<span>Всего</span>
					</S.TotalPayments>

					<S.StatusStats>
						<S.Text variant="h1" as="p">
							По статусу:
						</S.Text>

						<S.StatusStatsButtons>
							<S.StatusStatsButton>
								<S.Text variant="h1" as="p">
									{new Intl.NumberFormat().format(40_000_000)}
								</S.Text>

								<PaymentStatus status="paid" />
							</S.StatusStatsButton>

							<S.StatusStatsButton>
								<S.Text variant="h1" as="p">
									{new Intl.NumberFormat().format(4_000_000)}
								</S.Text>

								<PaymentStatus status="soon" />
							</S.StatusStatsButton>

							<S.StatusStatsButton>
								<S.Text variant="h1" as="p">
									{new Intl.NumberFormat().format(500_000)}
								</S.Text>

								<PaymentStatus status="expired" />
							</S.StatusStatsButton>

							<S.StatusStatsButton>
								<S.Text variant="h1" as="p">
									{new Intl.NumberFormat().format(500_000)}
								</S.Text>

								<PaymentStatus status="scheduled" />
							</S.StatusStatsButton>
						</S.StatusStatsButtons>
					</S.StatusStats>

					<S.SelectedPayments>
						<CurrencyAmount value={0} />
						<span>Выбрано</span>
					</S.SelectedPayments>
				</S.Left>

				<S.Buttons>
					<S.Button>
						<TrashIcon />
					</S.Button>

					<S.Button>
						<DownloadIcon width={24} height={24} viewBox="0 0 17 17" />
					</S.Button>

					<S.Button>
						<WithdrawIcon />
					</S.Button>

					<S.Button
						onClick={() => {
							setPaymentCreateModalOpen(true)
						}}
					>
						<PlusIcon width={24} height={24} viewBox="0 0 17 17" />
					</S.Button>
				</S.Buttons>
			</S.PaymentsStats>

			<PaymentCreateModal
				open={isPaymentCreateModalOpen}
				onClose={() => {
					setPaymentCreateModalOpen(false)
				}}
			/>
		</>
	)
}
