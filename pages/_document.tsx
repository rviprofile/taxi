import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import createEmotionServer from '@emotion/server/create-instance'

import { createEmotionCache } from 'styled/common/createEmotionCache'

export default class AppDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const originalRenderPage = ctx.renderPage

		// You can consider sharing the same Emotion cache between all the SSR requests to speed up performance.
		// However, be aware that it can have global side effects.
		const cache = createEmotionCache()
		const { extractCriticalToChunks } = createEmotionServer(cache)

		ctx.renderPage = () =>
			originalRenderPage({
				enhanceApp: (App) =>
					function EnhanceApp(props: any) {
						return <App emotionCache={cache} {...props} />
					}
			})

		const initialProps = await Document.getInitialProps(ctx)
		// This is important. It prevents Emotion to render invalid HTML.
		// See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
		const emotionStyles = extractCriticalToChunks(initialProps.html)
		const emotionStyleTags = emotionStyles.styles.map((style) => (
			<style
				data-emotion={`${style.key} ${style.ids.join(' ')}`}
				key={style.key}
				// eslint-disable-next-line react/no-danger
				dangerouslySetInnerHTML={{ __html: style.css }}
			/>
		))

		return {
			...initialProps,
			emotionStyleTags
		}
	}

	render() {
		return (
			<Html lang="ru">
				<Head>
					<meta name="emotion-insertion-point" content="" />

					<link
						rel="preload"
						href="/fonts/Lato-Heavy.ttf"
						type="font/ttf"
						crossOrigin=""
					/>
					<link
						rel="preload"
						href="/fonts/Ubuntu-Bold.woff"
						type="font/woff"
						crossOrigin=""
					/>
					<link
						rel="preload"
						href="/fonts/Ubuntu-Medium.woff"
						type="font/woff"
						crossOrigin=""
					/>
					<link
						rel="preload"
						href="/fonts/Ubuntu-Regular.woff"
						type="font/woff"
						crossOrigin=""
					/>

					{(this.props as any).emotionStyleTags}
				</Head>

				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
