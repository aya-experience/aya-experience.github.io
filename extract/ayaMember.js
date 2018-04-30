const path = require('path');
const fs = require('fs-extra');

const { getApi, Predicates } = require('prismic-javascript');

const prismicURL = 'https://app-aya.prismic.io/api/v2';

const memberMapper = data => ({
	name: data.data.name
});

async function work() {
	const api = await getApi(prismicURL);
	const response = await api.query(
		Predicates.at('document.type', 'ayamember')
	);
	return response.results.map(data => {
		return memberMapper(data);
	});
}

module.exports = async function (outputDir) {
	await fs.writeJson(path.join(outputDir, 'ayaMembers.json'), await work());
};
