import { shallow } from '@vue/test-utils';

import Menu from '~/components/team/Menu';

describe('Menu VR component', () => {
	let cmp;

	beforeEach(() => {
		const $router = {
			push: link => link
		};
		const $emit = () => {};
		cmp = shallow(Menu, {
			mocks: {
				$router,
				$emit
			}
		});
	});

	describe('HTML content', () => {
		it('has a a-entity with menu id', () => {
			expect(cmp.find('#menu').exists()).toBe(true);
		});
	});

	describe('Methods', () => {
		it('call exit method when click on the box', () => {
			const stub = jest.fn();
			cmp.setMethods({ exit: stub });
			cmp.update();

			const box = cmp.find('a-box');
			box.trigger('click');
			expect(stub).toBeCalled();
		});

		it('call changeMap method when click on the arrow', () => {
			const stub = jest.fn();
			cmp.setMethods({ changeMap: stub });
			cmp.update();

			const arrow = cmp.findAll('a-entity').at(1);
			arrow.trigger('click');
			expect(stub).toBeCalled();
		});
	});

	describe('Events', () => {
		it('should call router push on exit method', () => {
			const spy = jest.spyOn(cmp.vm.$router, 'push');

			cmp.vm.exit();
			expect(spy).toHaveBeenCalled();
			spy.mockReset();
			spy.mockRestore();
		});

		it('should call emit map on changeMap', () => {
			const spy = jest.spyOn(cmp.vm, '$emit');

			cmp.vm.changeMap();
			expect(spy).toHaveBeenCalledWith('map');
			spy.mockReset();
			spy.mockRestore();
		});
	});
});
