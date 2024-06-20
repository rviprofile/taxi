import styled from '@emotion/styled'

import { FieldsRow } from 'styled/components'

import { TabContent } from 'components/UserBalance/UserBalance.styled'

export { FieldsRow }

export const TransferTab = styled(TabContent)`
	${FieldsRow} {
		align-items: stretch;
	}
`

export const ArrowIcon = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 32px;
	flex-shrink: 0;
	background: var(--color-gray-200);
	border-radius: 5px;
`
