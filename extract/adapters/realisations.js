const slug = require('slug');

exports.adapt = (data, index) => {
	return {
		id: data.id,
		uid: data.uid,
		slug: slug(`${data.data.client_name[0].text}-${data.data.project_name[0].text}`),
		clientName: data.data.client_name[0].text,
		projectName: data.data.project_name[0].text,
		description: !data.data.description[0] || data.data.description[0].text === ''
			? `Le projet ${data.data.project_name[0].text} est en cours de réalisation par AYA, une description de cette réalisation sera disponible prochainement.`
			: data.data.description[0].text,
		tags: data.tags,
		titleColor: '#000',
		bgColor: '#FFF',
		arrowInvert: 'inverted',
		orientation: index % 2 === 0,
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
		menuBg: {
			url: data.data.menu_bg.url,
			dimensions: data.data.menu_bg.dimensions
		},
		detailBg: {
			url: data.data.detail_vue.url ? data.data.detail_vue.url : data.data.menu_bg.url
		},
		illustrations: data.data.illustrations.map(data => ({
			url: data.illustration.url,
			dimensions: data.illustration.dimensions
		})),
		gradient: data.data.gradient[0].text
	};
};
