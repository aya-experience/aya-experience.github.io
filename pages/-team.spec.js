import { shallow, createLocalVue } from '@vue/test-utils';

import Team from '~/pages/team.vue';

import Vuex from 'vuex';
import { animationMutations, animationState } from '~/fixture/store/animation';
import { VRmutations, VRstate } from '~/fixture/store/vr';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Team page', () => {
	let store;

	beforeEach(() => {
		store = new Vuex.Store({
			state: {
				...animationState,
				...VRstate
			},
			mutations: {
				...animationMutations,
				...VRmutations
			}
		});

		shallow(Team, {
			store,
			localVue
		});
	});

	it('should commit disableSplashAnimation when mount the component', () => {
		expect(animationMutations['animation/disableSplashAnimation']).toHaveBeenCalled();
	});
});
