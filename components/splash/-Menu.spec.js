import { shallow } from '@vue/test-utils';

import Menu from '~/components/splash/Menu.vue';

import links from '~/fixture/links.json';

describe('Logo', () => {
	let cmp;
	beforeEach(() => {
		cmp = shallow(Menu);
		cmp.setData({ links });
	});

	describe('HTML Content', () => {
		it('should contain a nav tag', () => {
			expect(cmp.contains('nav')).toBe(true);
		});

		it('should contain 3 a tag', () => {
			expect(cmp.findAll('a').length).toBe(3);
		});
	});

	describe('Events', () => {
		it('should call go method with the target link when click on the first link', () => {
			const stub = jest.fn();
			cmp.setMethods({ go: stub });
			cmp.update();

			const link = cmp.findAll('a').at(0);
			link.trigger('click');
			expect(stub).toBeCalledWith(links[0]);
		});
		it('should call leave method when mouse out is emit on the first link', () => {
			const stub = jest.fn();
			cmp.setMethods({ leave: stub });
			cmp.update();

			const link = cmp.findAll('a').at(0);
			link.trigger('mouseout');
			expect(stub).toBeCalled();
		});
		it('should call enter method with the target link when click on the first link', () => {
			const stub = jest.fn();
			cmp.setMethods({ enter: stub });
			cmp.update();

			const link = cmp.findAll('a').at(2);
			link.trigger('mouseenter');
			expect(stub).toBeCalledWith(links[2]);
		});
	});

	describe('Methods', () => {
		it('should emit go with the given link attribute', () => {
			const stub = jest.fn();
			cmp.vm.$on('go', stub);

			cmp.vm.go(links[0]);
			expect(stub).toBeCalledWith(links[0]);
		});
		it('should emit enter with the given link attribute', () => {
			const stub = jest.fn();
			cmp.vm.$on('enter', stub);

			cmp.vm.enter(links[2]);
			expect(stub).toBeCalledWith(links[2]);
		});
		it('should emit leave', () => {
			const stub = jest.fn();
			cmp.vm.$on('leave', stub);
			cmp.vm.leave();

			expect(stub).toBeCalled();
		});
	});
});
