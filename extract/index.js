const path = require('path');
const fs = require('fs-extra');

const prismic = require('./prismic');
const aya = require('./ayaMember');

const outputDir = path.resolve(__dirname, '../content');

async function extract() {
	console.log('Extracting content data ...');
	await fs.remove(outputDir);
	await fs.ensureDir(outputDir);
	await prismic(outputDir);
	await aya(outputDir);
	console.log('... done!');
}

extract();
