import type { AppProps as NextAppProps } from 'next/app';
import { Fragment } from 'react';
import { CacheProvider, EmotionCache, Global } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import { Hydrate, QueryClientProvider } from '@tanstack/react-query';
import  queryClient  from 'core/query-client';

import { RootLayout } from 'components/layouts'
import { Notifications } from 'components'

import { AuthProvider } from 'contexts'
import { WSProvider } from 'contexts'

import { global, muiTheme } from 'styled/common'
import { createEmotionCache } from 'styled/common/createEmotionCache'

const clientSideEmotionCache = createEmotionCache()

interface AppProps extends NextAppProps {
	emotionCache: EmotionCache
}

export default function App({
	Component,
	pageProps,
	router,
	emotionCache = clientSideEmotionCache
}: AppProps) {
	

	const withoutLayoutPathnames = ['/sign-in']
	const isLayoutNotNeeded = withoutLayoutPathnames.some((pathname) =>
		router.pathname.startsWith(pathname)
	)
	const LayoutComponent = isLayoutNotNeeded ? Fragment : RootLayout

	return (
		<>
			<QueryClientProvider client={queryClient}>
				<Hydrate state={pageProps.dehydratedState}>
					<CacheProvider value={emotionCache}>
						<ThemeProvider theme={muiTheme}>
							<Global styles={global} />

							{/*<WSProvider>*/}
								<AuthProvider>
									<LayoutComponent>
										<Component {...pageProps} />
									</LayoutComponent>
								</AuthProvider>
							{/*</WSProvider>*/}

							<Notifications />
						</ThemeProvider>
					</CacheProvider>
				</Hydrate>
			</QueryClientProvider>
		</>
	)
}
