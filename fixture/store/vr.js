import ayaMember from '~/fixture/ayaMembers.json';

export const VRstate = {
	vr: {
		sceneLoaded: false,
		legoLoaded: false,
		planetLoaded: false,
		ayaTeam: ayaMember
	}
};

export const VRmutations = {
	'vr/loadScene': jest.fn(),
	'vr/loadLego': jest.fn(),
	'vr/loadPlanet': jest.fn()
};
