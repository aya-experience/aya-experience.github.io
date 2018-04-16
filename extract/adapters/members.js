const { download } = require('../utils');

exports.adapt = data => {
	return {
		name: data.data.name,
		role: data.data.role[0] ? data.data.role[0].text : '',
		img: data.data.picture && data.data.picture.url ? download(data.data.picture.url) : ''
	};
};
