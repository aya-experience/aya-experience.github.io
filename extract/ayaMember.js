const path = require('path');
const fs = require('fs-extra');
const members = require('./adapters/members');

const { getApi, Predicates } = require('prismic-javascript');

const prismicURL = 'https://app-aya.prismic.io/api/v2';
const ayaDir = path.resolve(__dirname, '../static/ayapics');

async function work() {
	await fs.remove(ayaDir);
	await fs.ensureDir(ayaDir);
	const api = await getApi(prismicURL);
	const response = await api.query(
		Predicates.at('document.type', 'ayamember')
	);
	return response.results.map(data => {
		return members.adapt(data);
	});
}

module.exports = async function (outputDir) {
	await fs.writeJson(path.join(outputDir, 'ayaMembers.json'), await work());
};
