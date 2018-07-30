import { shallow } from '@vue/test-utils';

import ByZenika from '~/components/splash/ByZenika.vue';

describe('ByZenika', () => {
	let cmp;
	beforeEach(() => {
		cmp = shallow(ByZenika);
	});

	describe('animation start or not', () => {
		it('should add a-main class to the first path of the logo svg', () => {
			cmp.setProps({ animationStart: true });
			expect(cmp.find('div').attributes().class).toContain('animate-div');
		});
	});
});
