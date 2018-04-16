const path = require('path');
const config = require('config');

const works = require('./content/work.json');

module.exports = {
	/*
	** Headers of the page
	*/
	head: {
		title: 'AYA code & design',
		htmlAttrs: {
			lang: 'fr'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				hid: 'description',
				name: 'description',
				content: 'AYA code & design the digital agency by Zenika'
			},
			{ name: 'theme-color', content: '#ffffff' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{
				rel: 'apple-touch-icon',
				sizes: '180x180',
				href: '/apple-touch-icon.png'
			},
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '32x32',
				href: '/favicon-32x32.png'
			},
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '16x16',
				href: '/favicon-16x16.png'
			},
			{ rel: 'manifest', href: '/manifest.json' },
			{ rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#000000' },
			{ rel: 'prefetch', href: '/photos/art.jpg' },
			{ rel: 'prefetch', href: '/photos/cell.jpg' },
			{ rel: 'prefetch', href: '/photos/cell2.jpg' },
			{ rel: 'prefetch', href: '/photos/craft.jpg' },
			{ rel: 'prefetch', href: '/photos/innovation.jpg' },
			{ rel: 'prefetch', href: '/photos/mac.jpg' },
			{ rel: 'prefetch', href: '/photos/matrix.jpg' },
			{ rel: 'prefetch', href: '/photos/rails.jpg' },
			{ rel: 'prefetch', href: '/photos/woman.jpg' }
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
		extend(config, ctx) {
			if (ctx.dev && ctx.isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				});
			}
			if (ctx.isServer) {
				config.resolve.alias.hammerjs$ = path.join(
					__dirname,
					'./node_modules/vue-touch/dist/hammer-ssr.js'
				);
			}
		},
		vendor: ['vue-touch', 'aframe']
	},
	modules: [
		['nuxt-seo-module', {
			sitemap: [{
				routes: works.map(work => ({
					url: `/work/${work.slug}`,
					img: work.illustrations.map(illustration => ({
						url: illustration.url,
						caption: work.description,
						title: `${work.clientName} - ${work.projectName} - Une réalisation AYA <créative experience>`
					}))
				}))
			}],
			robots: true
		}],
		['@nuxtjs/pwa', { icon: false, manifest: false, onesignal: false }],
		['nuxt-cname-module', { generateCNAME: config.generateCNAME }]
	],
	plugins: [
		{ src: '~plugins/vue-touch', ssr: false },
		{ src: '~plugins/google-analytics.js', ssr: false },
		{ src: '~plugins/aframe.js', ssr: false }
	],
	env: {
		baseUrl: config.baseUrl
	}
};
