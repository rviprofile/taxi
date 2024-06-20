import { ReactNode } from 'react'

import { CounterpartiesLayout as Layout } from './Counterparties'

import { CounterpartiesProvider } from 'contexts'

export const CounterpartiesLayout = ({ children }: { children?: ReactNode }) => {
	return (
		<CounterpartiesProvider>
			<Layout>{children}</Layout>
		</CounterpartiesProvider>
	)
}
