const path = require('path')
const fs = require('fs-extra')
const { RouteGetter } = require('./sitemap/getRoutes')
const { createSitemap } = require('./sitemap/createSitemap')

// Defaults
const defaults = {
	path: '/sitemap.xml',
	hostname: null,
	generate: false,
	exclude: [],
	routes: [],
	cacheTime: 1000 * 60 * 15
}

module.exports = function nuxtSitemap (moduleOptions) {
	const options = {
		...defaults,
		...this.options.sitemap,
		...moduleOptions
	}

	const nuxtInstance = this

	const routeGetter = new RouteGetter()

	// Add server middleware
	this.addServerMiddleware({
		path: options.path,
		handler (req, res, next) {
			routeGetter.get(nuxtInstance, options)
				.then(routes => createSitemap(options, routes, req).toXML())
				.then(xml => {
					res.setHeader('Content-Type', 'application/xml')
					res.end(xml)
				})
				.catch(err => next(err))
		}
	})

	return routeGetter.get(nuxtInstance, options)
		.then(routes => {
			// sitemap.xml is written to static dir on generate mode
			if (nuxtInstance.options.dev || !nuxtInstance.options.generate) {
				return
			}
			// Ensure no generated file exists
			const xmlGeneratePath = path.resolve(this.options.srcDir, path.join('static', options.path))
			return fs.remove(xmlGeneratePath)
				.then(() => createSitemap(options, routes))
				.then(sitemap => sitemap.toXML())
				.then(xml => fs.writeFile(xmlGeneratePath, xml))
		})
}
