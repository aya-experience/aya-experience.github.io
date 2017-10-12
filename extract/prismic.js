const path = require('path')
const fs = require('fs-extra')

const { getApi, Predicates } = require('prismic-javascript')

const prismicURL = 'https://app-aya.prismic.io/api/v2'

const workMapper = data => ({
	id: data.id,
	uid: data.uid,
	client_name: data.data.client_name[0].text,
	project_name: data.data.project_name[0].text,
	skills: data.data.skills.map(data => ({
		id: data.skill.id,
		uid: data.skill.uid
	})),
	illustrations: data.data.illustrations.map(data => ({
		url: data.illustration.url,
		dimensions: data.illustration.dimensions
	}))
})

async function work () {
	const api = await getApi(prismicURL)
	const response = await api.query(Predicates.at('document.type', 'references'))
	return response.results.map(workMapper)
}

module.exports = async function prismic (outputDir) {
	await fs.writeJson(path.join(outputDir, 'work.json'), await work())
}
