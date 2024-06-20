import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { useWS } from 'hooks'
import { ROUTE_NAMES } from 'constants/routes'
import { replaceIdPathname } from 'utils'
import { Counterparty } from 'contexts/Counterparties/Counterparties.types'
import { Block } from 'contexts/WS/ws.types'

export interface AddCounterpartyData {
	success: boolean
	errors: Object
	block: Block
	code: string
}

export const useCounterparty = () => {
	const router = useRouter()

	const {
		data: addCounterpartyData,
		add,
		isReady
	} = useWS<AddCounterpartyData | Counterparty>({
		block: 'contragent',
		subscription: false
	})

	useEffect(() => {
		if (isReady) {
			add({})
		}
	}, [isReady])

	useEffect(() => {
		if (!addCounterpartyData) return

		const { success, id } = addCounterpartyData

		if (success && id) {
			router.push(replaceIdPathname(ROUTE_NAMES.COUNTERPARTY, id))
		}
	}, [addCounterpartyData, router])

	const createCounterparty = (fields: Partial<Counterparty>) => {
		const fieldsWithoutValues = Object.fromEntries(
			Object.entries(fields).filter(([name, value]) => value !== '')
		)

		add(fieldsWithoutValues)
	}

	return {
		addCounterpartyData,
		createCounterparty
	}
}
