import { shallow } from "vue-test-utils";

import * as dependency from '~/utils/animation.js';
import Index from "~/pages/index";

import Logo from '~/components/splash/Logo.vue';
import Menu from '~/components/splash/Menu.vue';
import ByZenika from '~/components/splash/ByZenika.vue';


describe("Detail realisation component", () => {
	let cmp;
	const $router = {
		push: (link) => link
	};

	beforeEach(() => {
		dependency.default = jest.fn();
		cmp = shallow(Index, {
			mocks: {
				$router
			}
		});
	});

	describe("HTML content", () => {
		it ("has a section of container class", () => {
			expect(cmp.find("section").classes()).toContain('container');
		});
        
		it ("has a canvas in order to display animation", () => {
			expect(cmp.find("canvas").exists()).toBe(true);
		});
        
		it ("has a div of splash overflow class", () => {
			expect(cmp.find("div").classes()).toContain('splash-overflow');
		});
        
		it ("has a Logo component", () => {
			expect(cmp.find(Logo).exists()).toBe(true);
		});
        
		it ("has a Menu component", () => {
			expect(cmp.find(Menu).exists()).toBe(true);
		});
        
		it ("has a ByZenika component", () => {
			expect(cmp.find(ByZenika).exists()).toBe(true);
		});
	});
    
	describe("Data", () => {
		it ("should set isLoaded to false", () => {
			expect(cmp.vm.isLoaded).toBe(false);
		});
		it ("should set hover to null", () => {
			expect(cmp.vm.hover).toBe(null);
		});
		it ("should set dive to null", () => {
			expect(cmp.vm.dive).toBe(null);
		});
	});
	describe("Methods", () => {
		describe("loaded", () => {
			it("should set isLoaded data to true", () => {
				cmp.vm.loaded();
				expect(cmp.vm.isLoaded).toBe(true);
			});
		});
        
		describe("enter", () => {
			it("should set hover data to given link", () => {
				const link = { path : "/vision" };
				cmp.vm.enter(link);
				expect(cmp.vm.hover).toEqual(link);
			});
		});
        
		describe("leave", () => {
			it("should set hover data to null", () => {
				cmp.vm.leave();
				expect(cmp.vm.hover).toBe(null);
			});
		});

		describe("diveEnd", () => {
			it("should call push method of router with dive path", () => {
				const spy = jest.spyOn(cmp.vm.$router, 'push');
				cmp.setData({ dive: { path: "/vision" } });
				cmp.vm.diveEnd();
				
				expect(spy).toHaveBeenCalledWith("/vision");
				spy.mockReset();
				spy.mockRestore();
			});
		});
	});
});
