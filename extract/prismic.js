const path = require('path');
const fs = require('fs-extra');
const realisations = require('./adapters/realisations');

const { getApi, Predicates } = require('prismic-javascript');

const prismicURL = 'https://app-aya.prismic.io/api/v2';

async function work() {
	const api = await getApi(prismicURL);
	const response = await api.query(
		Predicates.at('document.type', 'references'),
		{ fetchLinks: ['skills.title', 'skills.icon'] }
	);
	return response.results.map((data, index) => {
		return realisations.adapt(data, index);
	});
}

module.exports = async function (outputDir) {
	await fs.writeJson(path.join(outputDir, 'work.json'), await work());
};
