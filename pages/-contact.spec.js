import { shallow, createLocalVue } from '@vue/test-utils';

import Contact from '~/pages/contact.vue';

import Vuex from 'vuex';
import { animationMutations, animationState } from '~/fixture/store/animation';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Contact page', () => {
	let store;

	beforeEach(() => {
		store = new Vuex.Store({
			state: animationState,
			mutations: animationMutations
		});

		shallow(Contact, {
			store,
			localVue
		});
	});

	it('should commit disableSplashAnimation when mount the component', () => {
		expect(animationMutations['animation/disableSplashAnimation']).toHaveBeenCalled();
	});
});
