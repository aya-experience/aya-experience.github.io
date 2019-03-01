import { shallow } from '@vue/test-utils';

import Logo from '~/components/splash/Logo.vue';
import Aya from '~/components/Logo.vue';
import Kanji from '~/components/KanjiMask.vue';

xdescribe('Logo', () => {
	let cmp;
	beforeEach(() => {
		cmp = shallow(Logo);
	});

	describe('HTML Content', () => {
		it('should contain a Aya component', () => {
			cmp.setData({ loading: true });
			expect(cmp.contains(Aya)).toBe(true);
		});
		it('should not contain a Kanji component', () => {
			cmp.setData({ loading: true });
			expect(cmp.contains(Kanji)).toBe(false);
		});
		it('should display Kanji component when isLoading is false', () => {
			cmp.setData({ loading: false });
			expect(cmp.contains(Kanji)).toBe(true);
		});
		it('should not display Aya component when isLoading is false', () => {
			cmp.setData({ loading: false });
			expect(cmp.contains(Aya)).toBe(false);
		});
	});

	describe('Properties validation', () => {
		it('has a hover props of type Object', () => {
			const hover = cmp.vm.$options.props.hover;
			expect(hover.type).toBe(Object);
		});

		it('has a dive props of type Object', () => {
			const dive = cmp.vm.$options.props.dive;
			expect(dive.type).toBe(Object);
		});
	});

	describe('animation start or not', () => {
		it('should add a-main class to the first path of the logo svg', () => {
			cmp.setProps({ animationStart: true });
			expect(cmp.find('path').attributes().class).toContain('a-main');
		});
		it('should not add a-main class to the first path of the logo svg when animationStart is false', () => {
			cmp.setProps({ animationStart: false });
			expect(cmp.find('path').attributes().class).not.toContain('a-main');
		});
	});
});
