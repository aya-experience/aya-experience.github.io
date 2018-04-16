import ayaMember from '~/content/ayaMembers.json';

export const state = () => ({
	sceneLoaded: false,
	legoLoaded: false,
	planetLoaded: false,
	ayaTeam: ayaMember
});

export const mutations = {
	loadScene(state) {
		state.sceneLoaded = true;
	},
	loadLego(state) {
		state.legoLoaded = true;
	},
	loadPlanet(state) {
		state.planetLoaded = true;
	}
};
