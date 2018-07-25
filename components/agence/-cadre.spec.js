import { shallow } from '@vue/test-utils';

import Cadre from '~/components/agence/cadre.vue';

describe('Svg visibility', () => {
	it('Turn svg visible when show is true', () => {
		const cmp = shallow(Cadre, {
			propsData: {
				show: true
			}
		});

		const svgTop = cmp.findAll('svg').at(0);
		const svgBot = cmp.findAll('svg').at(1);

		expect(svgTop.attributes().class).toContain('start');
		expect(svgBot.attributes().class).toContain('start');
	});

	it('Turn svg hidden when show is false', () => {
		const cmp = shallow(Cadre);

		const svgTop = cmp.findAll('svg').at(0);
		const svgBot = cmp.findAll('svg').at(1);

		expect(svgTop.attributes().class).not.toContain('start');
		expect(svgBot.attributes().class).not.toContain('start');
	});
});
