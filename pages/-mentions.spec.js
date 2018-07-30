import { shallow, createLocalVue } from '@vue/test-utils';

import Mentions from '~/pages/mentions.vue';

import Vuex from 'vuex';
import { animationMutations, animationState } from '~/fixture/store/animation';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Mentions page', () => {
	let store;

	beforeEach(() => {
		store = new Vuex.Store({
			state: animationState,
			mutations: animationMutations
		});

		shallow(Mentions, {
			store,
			localVue
		});
	});

	it('should commit disableSplashAnimation when mount the component', () => {
		expect(animationMutations['animation/disableSplashAnimation']).toHaveBeenCalled();
	});
});
