const path = require('path')
const fs = require('fs-extra')

const { getApi, Predicates } = require('prismic-javascript')

const prismicURL = 'https://app-aya.prismic.io/api/v2'

const workMapper = data => ({
	id: data.id,
	uid: data.uid,
	client_name: data.data.client_name[0].text,
	project_name: data.data.project_name[0].text,
	logo: {
		url: data.data.logo.url,
		dimensions: data.data.logo.dimensions
	},
	skills: data.data.skills.map(data => ({
		id: data.skill.id,
		title: data.skill.data.title[0].text,
		icon: {
			url: data.skill.data.icon.url,
			dimensions: data.skill.data.icon.dimensions
		}
	})),
	menu_bg: {
		url: data.data.menu_bg.url,
		dimensions: data.data.menu_bg.dimensions
	},
	illustrations: data.data.illustrations.map(data => ({
		url: data.illustration.url,
		dimensions: data.illustration.dimensions
	}))
})

async function work () {
	const api = await getApi(prismicURL)
	const response = await api.query(
		Predicates.at('document.type', 'references'),
		{ 'fetchLinks': [ 'skills.title', 'skills.icon' ] }
	)
	console.log(JSON.stringify(response, null, 2))
	return response.results.map(workMapper)
}

module.exports = async function prismic (outputDir) {
	await fs.writeJson(path.join(outputDir, 'work.json'), await work())
}
