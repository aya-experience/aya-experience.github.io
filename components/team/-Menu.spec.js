import { shallow } from '@vue/test-utils';

import Menu from '~/components/team/Menu';

describe('Detail realisation component', () => {
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

	describe('Events', () => {
		it('call exit method when click on the box', () => {
			const stub = jest.fn();
			cmp.setMethods({ exit: stub });
			cmp.update();

			const box = cmp.find('a-box');
			box.trigger('click');
			expect(stub).toBeCalled();
		});

		it('call changeMap method with 1 when click on the first arrow', () => {
			const stub = jest.fn();
			cmp.setMethods({ changeMap: stub });
			cmp.update();

			const arrow = cmp.findAll('a-entity').at(1);
			arrow.trigger('click');
			expect(stub).toBeCalledWith(1);
		});

		it('call changeMap method with -1 when click on the second arrow', () => {
			const stub = jest.fn();
			cmp.setMethods({ changeMap: stub });
			cmp.update();

			const arrow = cmp.findAll('a-entity').at(2);
			arrow.trigger('click');
			expect(stub).toBeCalledWith(-1);
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

		it('should call emit map with 1 changeMap method given 1', () => {
			const spy = jest.spyOn(cmp.vm, '$emit');

			cmp.vm.changeMap(1);
			expect(spy).toHaveBeenCalledWith('map', 1);
			spy.mockReset();
			spy.mockRestore();
		});

		it('should call emit map with -1 changeMap method given -1', () => {
			const spy = jest.spyOn(cmp.vm, '$emit');

			cmp.vm.changeMap(-1);
			expect(spy).toHaveBeenCalledWith('map', -1);
			spy.mockReset();
			spy.mockRestore();
		});
	});
});
