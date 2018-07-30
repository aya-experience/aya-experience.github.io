import { shallow, createLocalVue } from '@vue/test-utils';

import Vision from '~/pages/vision.vue';

import Vuex from 'vuex';
import { animationMutations, animationState } from '~/fixture/store/animation';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Vision page', () => {
	let store;

	beforeEach(() => {
		store = new Vuex.Store({
			state: animationState,
			mutations: animationMutations
		});

		shallow(Vision, {
			store,
			localVue
		});
	});

	it('should commit disableSplashAnimation when mount the component', () => {
		expect(animationMutations['animation/disableSplashAnimation']).toHaveBeenCalled();
	});
});
