/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
	experimental: {
		appDir: true
	},
	reactStrictMode: true,
	swcMinify: true,
	compiler: {
		emotion: true
	},
	typescript: {
		ignoreBuildErrors: true
	},
	images: {
		domains: ['test.taxivoshod.ru']
	},
	trailingSlash: true,
	env: {
		NEXT_PUBLIC_API_BASE: 'https://test.taxivoshod.ru/api',
		NEXT_PUBLIC_SOCKET_URL: 'wss://test.taxivoshod.ru:9998',
		NEXT_PUBLIC_DEV_API_BASE: 'https://test.taxivoshod.ru/api',
		NEXT_PUBLIC_DEV_SOCKET_URL: 'wss://test.taxivoshod.ru:9998'
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			include: [path.join(__dirname, 'public/icons/')],
			use: ['@svgr/webpack']
		})

		return config
	}
}

module.exports = nextConfig
