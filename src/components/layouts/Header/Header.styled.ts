import styled from '@emotion/styled'

import { UserProfile } from 'components/layouts/UserProfile/UserProfile.styled'

export const Header = styled.header`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;

	${UserProfile} {
		justify-self: flex-end;
	}
`
