module.exports = {
	/*
	** Headers of the page
	*/
	head: {
		title: 'AYA code & design',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'AYA code & design the digital agency by Zenika' },
			{ name: 'theme-color', content: '#ffffff' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
			{ rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
			{ rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
			{ rel: 'manifest', href: '/manifest.json' },
			{ rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#000000' }
		]
	},
	/*
	** Customize the progress bar color
	*/
	loading: { color: '#EBB815' },
	/*
	** Build configuration
	*/
	build: {
		/*
		** Run ESLint on save
		*/
		extend (config, ctx) {
			if (ctx.dev && ctx.isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				})
			}
		}
	}
}
