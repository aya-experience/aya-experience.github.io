import { shallow } from '@vue/test-utils';

import Lego from './lego.vue';
import HUD from './hud.vue';

describe('Lego component', () => {
	let cmp;

	beforeEach(() => {
		cmp = shallow(Lego);
	});

	describe('HUD display', () => {
		it('should not insert hud in the DOM', () => {
			cmp.setData({ displayHUD: false });
			expect(cmp.find(HUD).exists()).toBe(false);
		});
		it('should insert hud in the DOM', () => {
			cmp.setData({ displayHUD: true });
			expect(cmp.find(HUD).exists()).toBe(true);
		});
	});

	describe('Toggle HUD method', () => {
		it('should pass displayHUD to true given false', () => {
			cmp.setData({ displayHUD: false });
			cmp.vm.toggleHUD();
			expect(cmp.vm.displayHUD).toBe(true);
		});
		it('should pass displayHUD to false given true', () => {
			cmp.setData({ displayHUD: true });
			cmp.vm.toggleHUD();
			expect(cmp.vm.displayHUD).toBe(false);
		});
	});
});
