import styled from '@emotion/styled'

import { gradientBlue } from 'styled/components/ButtonGradient'

export const NotificationsNumber = styled.div`
	${gradientBlue}

	padding: 2px 6px;
	border-radius: 10px;
	font-size: 14px;
	font-weight: 500;

	&:hover::before {
		opacity: 0;
	}
`
