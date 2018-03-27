import { shallow } from "vue-test-utils";

import index from "~/pages/work/index";
import BackButton from "~/components/BackButton";

import works from "~/fixture/work.json";

describe("Realisations menu page", () => {
	let cmp;

	beforeEach(() => {
		cmp = shallow(index, {
			attachToDocument: true
		});
		cmp.setData({ works });
	});
    
	describe("HTML content", () => {
		it("has 13 project in <a></a> tag", () => {
			expect(cmp.findAll("a").length).toBe(13);
		});
		it("has an h2 containing the project name", () => {
			expect(cmp.findAll("a").at(0).find("h1").text()).toBe("B4All");
		});
		it("has an input range", () => {
			expect(cmp.contains("input")).toBe(true);
		});
		it("has BackButton component", () => {
			expect(cmp.contains(BackButton)).toBe(true);
		});
	});

	describe("Events", () => {
		it("call go method when click on work", () => {
			const stub = jest.fn();
			cmp.setMethods({ go : stub });
			cmp.update();
	
			const work = cmp.findAll('a').at(0);
			work.trigger('click');
			expect(stub).toBeCalledWith(works[0]);
		});

		it("call enter method when mouseenter on work", () => {
			const stub = jest.fn();
			cmp.setMethods({ enter : stub });
			cmp.update();
	
			const work = cmp.findAll('a').at(0);
			work.trigger('mouseenter');
			expect(stub).toBeCalledWith(0);
		});

		it("call leave method when mouseleave on work", () => {
			const stub = jest.fn();
			cmp.setMethods({ leave : stub });
			cmp.update();
	
			const work = cmp.findAll('a').at(0);
			work.trigger('mouseleave');
			expect(stub).toBeCalled();
		});

		it("call onChangeRange method when input event is trigger on slider", () => {
			const stub = jest.fn();
			cmp.setMethods({ onChangeRange : stub });
			cmp.update();
	
			const slider = cmp.find('input');
			slider.trigger('input');
			expect(stub).toBeCalled();
		});
	});

	describe("Methods", () => {
		describe("onChangeRange", () => {
			it("hoverIndex should be 2", () => {
				cmp.vm.onChangeRange(2);
				expect(cmp.vm.hoverIndex).toBe(2);
			});
			it("hoverIndex should be 10", () => {
				cmp.vm.onChangeRange(10);
				expect(cmp.vm.hoverIndex).toBe(10);
			});
		});

		describe("workWidth", () => {
			it("should return 30vw when index is 0", () => {
				const value = cmp.vm.workWidth(0);
				expect(value).toBe('30vw');
			});
			it("should return 20vw when index is 1", () => {
				const value = cmp.vm.workWidth(1);
				expect(value).toBe('20vw');
			});
		});

		describe("handleKeyup", () => {
			it("should call smoothscroll function given right arrow", () => {
				const stub = jest.fn();
				cmp.setMethods({ smoothScroll: stub });
				cmp.update();

				const event = new Event('keyup');
				event.keyCode = 39;
				
				cmp.vm.handleKeyup(event);

				expect(stub).toBeCalledWith(1, 0, 2);
			});
			it("should call smoothscroll function given left arrow", () => {
				const stub = jest.fn();
				cmp.setMethods({ smoothScroll: stub });
				cmp.update();

				const event = new Event('keyup');
				event.keyCode = 37;
				
				cmp.vm.handleKeyup(event);

				expect(stub).toBeCalledWith(-1, 0, 2);
			});
			it("should call go function given enter keycode", () => {
				const stub = jest.fn();
				cmp.setMethods({ go: stub });
				cmp.setData({ works });
				cmp.update();

				const event = new Event('keyup');
				event.keyCode = 13;
				
				cmp.vm.handleKeyup(event);

				expect(stub).toBeCalledWith(works[0]);
			});
		});

		describe("handleWheel", () => {
			it("should change scrollLeft value by 300px", () => {
				cmp.vm.$refs.container.scrollLeft = 0;
				const event = new Event('mousewheel');
				event.deltaY = 300;

				cmp.vm.handleWheel(event);
				expect(cmp.vm.$refs.container.scrollLeft).toBe(300);
			});
			it("should change scrollLeft value by -300px", () => {
				cmp.vm.$refs.container.scrollLeft = 0;
				const event = new Event('mousewheel');
				event.deltaY = -300;

				cmp.vm.handleWheel(event);
				expect(cmp.vm.$refs.container.scrollLeft).toBe(-300);
			});
		});

		describe("onSwipe", () => {
			it("should call doScroll methods with 1 (positive direction)", () => {
				const stub = jest.fn();
				cmp.setMethods({ doScroll: stub });
				cmp.update();

				const event = new Event('swipe');
				event.direction = 2;
				
				cmp.vm.onSwipe(event);

				expect(stub).toBeCalledWith(1);
			});

			it("should call doScroll methods with -1 (positive direction)", () => {
				const stub = jest.fn();
				cmp.setMethods({ doScroll: stub });
				cmp.update();

				const event = new Event('swipe');
				event.direction = 1;
				
				cmp.vm.onSwipe(event);

				expect(stub).toBeCalledWith(-1);
			});
		});

		describe("enter", () => {
			it("should change hoverIndex to 4 given 4", () => {
				cmp.vm.enter(4);

				expect(cmp.vm.hoverIndex).toBe(4);
			});
		});

		describe("leave", () => {
			it("should change hoverIndex to null", () => {
				cmp.vm.leave();

				expect(cmp.vm.hoverIndex).toBe(null);
			});
		});

		describe("doScroll", () => {
			it ("should call enter and smoothScroll with positive direction", () => {
				const enterStub = jest.fn();
				const scrollStub = jest.fn();

				cmp.setMethods({ enter: enterStub });
				cmp.setMethods({ smoothScroll: scrollStub });
				cmp.setData({ hoverIndex: 3 });
				cmp.update();
				
				cmp.vm.doScroll(1);

				expect(enterStub).toBeCalledWith(4);
				expect(scrollStub).toBeCalledWith(1, 0, 1);
			});

			it ("should call enter and smoothScroll with negative direction", () => {
				const enterStub = jest.fn();
				const scrollStub = jest.fn();

				cmp.setMethods({ enter: enterStub });
				cmp.setMethods({ smoothScroll: scrollStub });
				cmp.setData({ hoverIndex: 3 });
				cmp.update();
				
				cmp.vm.doScroll(-1);

				expect(enterStub).toBeCalledWith(2);
				expect(scrollStub).toBeCalledWith(-1, 0, 1);
			});

			it ("should call enter and smoothScroll with negative direction", () => {
				const enterStub = jest.fn();
				const scrollStub = jest.fn();

				cmp.setMethods({ enter: enterStub });
				cmp.setMethods({ smoothScroll: scrollStub });
				cmp.setData({ hoverIndex: 3 });
				cmp.update();
				
				cmp.vm.doScroll(-1);

				expect(enterStub).toBeCalledWith(2);
				expect(scrollStub).toBeCalledWith(-1, 0, 1);
			});
		});

		describe("inactiveGradient", () => {
			it ("should return even gradient given 0", () => {
				const gradient = cmp.vm.inactiveGradient(0);
				
				expect(gradient).toBe("linear-gradient(#000000C0, #000000C0)");
			});

			it ("should return odd gradient given 3", () => {
				const gradient = cmp.vm.inactiveGradient(3);
				
				expect(gradient).toBe("linear-gradient(#000000E0, #000000E0)");
			});
		});

		describe("activeGradient", () => {
			it ("should return 1st gradient given 0", () => {
				const gradient = cmp.vm.activeGradient(0);
				
				expect(gradient).toBe("linear-gradient(150deg, #786CF0E0, #000000E0 70%)");
			});

			it ("should return 1st gradient given 3", () => {
				const gradient = cmp.vm.activeGradient(3);
				
				expect(gradient).toBe("linear-gradient(150deg, #786CF0E0, #000000E0 70%)");
			});

			it ("should return 2nd gradient given 4", () => {
				const gradient = cmp.vm.activeGradient(4);
				
				expect(gradient).toBe("linear-gradient(150deg, #C54E4EE0, #000000E0 70%)");
			});

			it ("should return last gradient given 5", () => {
				const gradient = cmp.vm.activeGradient(5);
				
				expect(gradient).toBe("linear-gradient(150deg, #5E9848F0, #000000E0 70%)");
			});
		});

		describe("background", () => {
			it ("should return the realisation's image given with the first gradient given an realisation and hoverIndex set to 0", () => {
				cmp.setData({ hoverIndex: 0 });
				const image = `url(${works[0].menuBg.url})`;
				const background = cmp.vm.background(works[0], 0);

				expect(background).toBe('linear-gradient(150deg, #786CF0E0, #000000E0 70%), ' + image);
			});
		});
	});

});