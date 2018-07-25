const path = require('path');
const request = require('request');
const fs = require('fs-extra');

const ayaDir = path.resolve(__dirname, '../static/ayapics');

exports.download = uri => {
	const splitUri = uri.split('/');
	const img = splitUri[splitUri.length - 1];
	const pathToSave = `${ayaDir}/${img}`;
    request(uri).pipe(fs.createWriteStream(pathToSave));
    return img;
};
