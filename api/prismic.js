const { Router } = require('express')
const { getApi, Predicates } = require('prismic-javascript')

const prismicURL = 'https://app-aya.prismic.io/api/v2'

const router = Router()

const json = (response, data, status = 200) => {
	response.statusCode = status
	response.setHeader('Content-Type', 'application/json; charset=utf8')
	response.end(JSON.stringify(data), 'utf8')
}

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

router.get('/work', async (req, res) => {
	const api = await getApi(prismicURL)
	try {
		const response = await api.query(Predicates.at('document.type', 'references'))
		json(res, response.results.map(workMapper))
	} catch (err) {
		json(res, err, 500)
	}
})

module.exports = router
