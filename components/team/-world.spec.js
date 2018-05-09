import { shallow } from '@vue/test-utils';

import World from '~/components/team/world';

import map from '~/fixture/world.json';

describe('Detail realisation component', () => {
	let cmp;

	beforeEach(() => {
		cmp = shallow(World, {
			propsData: {
				type: map
			}
		});
	});

	describe('HTML content', () => {
		it('has a a-entity with world id', () => {
			expect(cmp.find('#world').exists()).toBe(true);
		});
		it('has 5 a-entity', () => {
			expect(cmp.findAll('a-entity').length).toBe(5);
		});
		it('has the good gltf part for th 1st a-entity', () => {
			expect(cmp.findAll('a-entity').at(2).attributes()['gltf-part']).toContain('birch_tree_SC_green');
		});
		it('has the good gltf part for th 2st a-entity', () => {
			expect(cmp.findAll('a-entity').at(3).attributes()['gltf-part']).toContain('ground_block_green');
		});
		it('has the good gltf part for th 3st a-entity', () => {
			expect(cmp.findAll('a-entity').at(4).attributes()['gltf-part']).toContain('grass_top_green');
		});
	});
});
