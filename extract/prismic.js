const path = require('path')
const fs = require('fs-extra')
const slug = require('slug')

const { getApi, Predicates } = require('prismic-javascript')

const prismicURL = 'https://app-aya.prismic.io/api/v2'

const workMapper = (data, index) => ({
	id: data.id,
	uid: data.uid,
	slug: slug(`${data.data.client_name[0].text} + - + ${data.data.project_name[0].text}`),
	client_name: data.data.client_name[0].text,
	project_name: data.data.project_name[0].text,
	// TODO: complete description in prismic.
	description: !data.data.description[0] || data.data.description[0].text === ''
		? `Le projet ${data.data.project_name[0].text} est en cours de réalisation par AYA, une description de cette réalisation sera disponible prochainement.`
		: data.data.description[0].text,
	// TODO: complete tags in prismic.
	tags: data.tags,
	titleColor: index % 2 === 0 ? '#FFF' : '#000',
	bgColor: index % 2 === 0 ? '#000' : '#FFF',
	arrowInvert: index % 2 === 0 ? 'normal' : 'inverted',
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
	return response.results.map((data, index) => {
		return workMapper(data, index)
	})
}

module.exports = async function prismic (outputDir) {
	await fs.writeJson(path.join(outputDir, 'work.json'), await work())
}
