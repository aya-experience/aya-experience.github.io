import { shallow, createLocalVue } from '@vue/test-utils';

import * as dependency from '~/utils/test-mobile.js';

dependency.default = () => true;

import Agence from '~/pages/agence.vue';

import Vuex from 'vuex';
import { animationMutations, animationState } from '~/fixture/store/animation';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Agence page', () => {
	let cmp;
	let store;

	beforeEach(() => {
		store = new Vuex.Store({
			state: animationState,
			mutations: animationMutations
		});

		cmp = shallow(Agence, {
			store,
			localVue
		});
	});

	describe('Change props value to show aya & zenika div', () => {
        it('Insert visible class on zenika div when isZenikaVisible is true', () => {
            cmp.setData({ isZenikaVisible: true });

            const zenikaDiv = cmp.find('#zenika');
            expect(zenikaDiv.attributes().class).toBe('content fixe-content visible');
        });

		it('Insert visible class on aya div when isAyaVisible is true', () => {
			cmp.setData({ isAyaVisible: true });

			const ayaDiv = cmp.find('#aya');
            expect(ayaDiv.attributes().class).toBe('content fixe-content visible');
		});

		it('Insert invisible class on zenika div when isZenikaVisible is false', () => {
            cmp.setData({ isZenikaVisible: false });

            const zenikaDiv = cmp.find('#zenika');
            expect(zenikaDiv.attributes().class).toBe('content fixe-content invisible');
		});

		it('Insert invisible class on aya div when isAyaVisible is false', () => {
			cmp.setData({ isAyaVisible: false });

			const ayaDiv = cmp.find('#aya');
            expect(ayaDiv.attributes().class).toBe('content fixe-content invisible');
		});
	});

	describe('Methods', () => {
		it('handleWheel with event containing deltaX equal to 1 should update scrollDelta to 1', () => {
			const event = new Event('wheel');
			event.deltaX = 1;

			cmp.vm.handleWheel(event);
			expect(cmp.vm.scrollDelta).toBe(1);
		});

		it('showZenikaSlide should pass isZenikaVisible to true and isAyaVisible to false', () => {
			cmp.vm.showZenikaSlide();

			expect(cmp.vm.isZenikaVisible).toBe(true);
			expect(cmp.vm.isAyaVisible).toBe(false);
		});

		it('hideZenikaSlide should pass isZenikaVisible to false and isAyaVisible to false when scrollDelta is 0', () => {
			cmp.setData({ scrollDelta: 0 });
			cmp.vm.hideZenikaSlide();

			expect(cmp.vm.isZenikaVisible).toBe(false);
			expect(cmp.vm.isAyaVisible).toBe(false);
		});

		it('hideZenikaSlide should pass isZenikaVisible to false and isAyaVisible to true when scrollDelta is 1', () => {
			cmp.setData({ scrollDelta: 1 });
			cmp.vm.hideZenikaSlide();

			expect(cmp.vm.isZenikaVisible).toBe(false);
			expect(cmp.vm.isAyaVisible).toBe(true);
		});

		it('swipe with event containing pageX equal to 400 should update scrollDelta to 1', () => {
			const event = new Event('touchstart');
			event.changedTouches = [{ pageX: 400 }];

			cmp.vm.swipe(event);
			expect(cmp.vm.scrollDelta).toBe(1);
		});

		it('swipe with event containing pageX equal to 100 should update scrollDelta to -1', () => {
			const event = new Event('touchstart');
			event.changedTouches = [{ pageX: 100 }];

			cmp.vm.swipe(event);
			expect(cmp.vm.scrollDelta).toBe(-1);
		});
	});

	it('should commit disableSplashAnimation when mount the component', () => {
		expect(animationMutations['animation/disableSplashAnimation']).toHaveBeenCalled();
	});
});
