import { MainSearch } from 'components'

import { Clock } from '../Clock/Clock'
import { UserProfile } from '../UserProfile/UserProfile'

import * as S from './Header.styled'

export const Header = () => {
	return (
		<S.Header>
			<MainSearch />

			<Clock />

			<UserProfile />
		</S.Header>
	)
}
