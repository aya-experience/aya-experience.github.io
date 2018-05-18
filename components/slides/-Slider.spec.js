import { shallow } from '@vue/test-utils';

import Slider from '~/components/slides/Slider';

describe('Slider component', () => {
	let cmp;
	const slidesProps = [
		'intro',
		'gui',
		'intent',
		'user',
		'concept',
		'creative',
		'craft',
		'tech',
		'workflow'
	];

	beforeEach(() => {
		cmp = shallow(Slider, {
			propsData: {
				path: '/vision',
				slides: slidesProps
			},
			mocks: {
				$route: {
					fullPath: '/vision/intro'
				},
				$router: { push: jest.fn() }
			}
		});
	});

	describe('HTML content', () => {
		it('has two svg and two link snippet on user path', () => {
			const guiSlide = shallow(Slider, {
				propsData: {
					path: '/vision',
					slides: slidesProps
				},
				mocks: {
					$route: {
						fullPath: '/vision/gui'
					},
					$router: { push: jest.fn() }
				}
			});
			expect(guiSlide.findAll('a').length).toBe(2);
			expect(guiSlide.findAll('a').at(0).classes()).toContain('link__layer--left');
			expect(guiSlide.findAll('a').at(1).classes()).toContain('link__layer--right');
			expect(guiSlide.findAll('svg').length).toBe(2);
		});
	});

	describe('Events', () => {
		it('call next methods when the right arrow is clicked', () => {
			const stub = jest.fn();
			cmp.setMethods({ next: stub });
			cmp.update();

			const arrow = cmp.find('a');
			arrow.trigger('click');
			expect(stub).toBeCalled();
		});

		it('call previous methods when the left arrow is clicked', () => {
			const guiSlide = shallow(Slider, {
				propsData: {
					path: '/vision',
					slides: slidesProps
				},
				mocks: {
					$route: {
						fullPath: '/vision/gui'
					},
					$router: { push: jest.fn() }
				}
			});

			const stub = jest.fn();
			guiSlide.setMethods({ previous: stub });
			guiSlide.update();

			const arrow = guiSlide.findAll('a').at(0);
			arrow.trigger('click');
			expect(stub).toBeCalled();
		});
	});
});
