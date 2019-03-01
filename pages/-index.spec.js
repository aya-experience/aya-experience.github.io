import { shallow, createLocalVue } from '@vue/test-utils';

import Index from '~/pages/index';

import Logo from '~/components/splash/Logo.vue';
// import Menu from '~/components/splash/Menu.vue';
import ByZenika from '~/components/splash/ByZenika.vue';

import Vuex from 'vuex';
import { animationMutations, animationState } from '~/fixture/store/animation';

const localVue = createLocalVue();
localVue.use(Vuex);

import { animate } from '~/utils/animation.js';
jest.mock('~/utils/animation.js', () => {
	return {
		animate: jest.fn()
	};
});

describe('Index page', () => {
	let cmp;
	let store;

	const $router = {
		push: link => link
	};

	beforeEach(() => {
		jest.resetModules();

		store = new Vuex.Store({
			state: animationState,
			mutations: animationMutations
		});

		cmp = shallow(Index, {
			mocks: {
				$router
			},
			store,
			localVue
		});
	});

	describe('HTML content', () => {
		it('has a section of container class', () => {
			expect(cmp.find('section').classes()).toContain('container');
		});

		it('has a canvas in order to display animation', () => {
			expect(cmp.find('canvas').exists()).toBe(true);
		});

		it('has a div of splash overflow class', () => {
			expect(cmp.find('div').classes()).toContain('splash-overflow');
		});

		it('has a Logo component', () => {
			expect(cmp.find(Logo).exists()).toBe(true);
		});

		it('has a ByZenika component', () => {
			expect(cmp.find(ByZenika).exists()).toBe(true);
		});
	});

	describe('Data', () => {
		it('should set isLoaded to false', () => {
			expect(cmp.vm.isLoaded).toBe(false);
		});
		it('should set hover to null', () => {
			expect(cmp.vm.hover).toBe(null);
		});
		it('should set dive to null', () => {
			expect(cmp.vm.dive).toBe(null);
		});
	});
	describe('Methods', () => {
		describe('loaded', () => {
			it('should set isLoaded data to true', () => {
				cmp.vm.loaded();
				expect(cmp.vm.isLoaded).toBe(true);
			});
		});

		describe('enter', () => {
			it('should set hover data to given link', () => {
				const link = { path: '/vision' };
				cmp.vm.enter(link);
				expect(cmp.vm.hover).toEqual(link);
			});
		});

		describe('leave', () => {
			it('should set hover data to null', () => {
				cmp.vm.leave();
				expect(cmp.vm.hover).toBe(null);
			});
		});

		describe('diveEnd', () => {
			it('should call push method of router with dive path', () => {
				const spy = jest.spyOn(cmp.vm.$router, 'push');
				cmp.setData({ dive: { path: '/vision' } });
				cmp.vm.diveEnd();

				expect(spy).toHaveBeenCalledWith('/vision');
				spy.mockReset();
				spy.mockRestore();
			});
		});
	});

	describe('Animation splash', () => {
		it('should launch animation on first visit to home page', () => {
			expect(animate).toHaveBeenCalled();
			expect(cmp.vm.animationTime).toEqual(6000);
		});

		it('should not launch animation when startAnimationSplash is false', () => {
			store.state.animation.startAnimationSplash = false;
			cmp = shallow(Index, {
				mocks: {
					$router
				},
				store,
				localVue
			});
			expect(animate).toHaveBeenCalled();
			expect(cmp.vm.animationTime).toEqual(150);
		});

		it('should commit disableSplashAnimation when mount the component', () => {
			expect(animationMutations['animation/disableSplashAnimation']).not.toHaveBeenCalled();
			cmp.destroy();
			expect(animationMutations['animation/disableSplashAnimation']).toHaveBeenCalled();
		});
	});
});
