const fs = require('fs-extra')
const path = require('path')

module.exports = function module (moduleOptions) {
	const options = {
		...this.options,
		...this.options.env,
		...moduleOptions,
		...process.env
	}

	// CNAME is written to static dir only in generate mode
	if ((this.options.generateCNAME) || this.options.dev || !this.options.generate) {
		return
	}

	const cnamePath = path.resolve(this.options.srcDir, path.join('static', 'CNAME'))
	return fs.remove(cnamePath)
		.then(() => fs.writeFile(cnamePath, options.baseUrl))
}
