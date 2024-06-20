import { useUser } from 'hooks'

import * as S from './WelcomeLoadingScreen.styled'

import LogoIronIcon from 'public/icons/logo-iron.svg'
import LogoDarkIcon from 'public/icons/logo-dark.svg'
import LogoTextIcon from 'public/icons/logo-text.svg'

export const WelcomeLoadingScreen = () => {
	const { user } = useUser()

	return (
		<S.WelcomeLoadingScreen>
			<S.Background>
				<S.TopLogo>
					<LogoTextIcon />
				</S.TopLogo>

				<S.WelcomeText variant="h1" as="p">
					Здравствуйте,
					<span>
						{user?.lastName} {user?.firstName}
					</span>
				</S.WelcomeText>

				<S.Box>
					<S.EntryText variant="h2" as="p">
						Вход выполнен
					</S.EntryText>
				</S.Box>
			</S.Background>

			<S.LogoDark>
				<LogoDarkIcon />
			</S.LogoDark>

			<S.LogoIron>
				<LogoIronIcon />
			</S.LogoIron>
		</S.WelcomeLoadingScreen>
	)
}
