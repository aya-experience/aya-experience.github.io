import { shallow } from "vue-test-utils";

import Logo from '~/components/splash/Logo.vue';

import Kanji from '~/components/Logo.vue';

describe("Logo", () => {
	let cmp;
	beforeEach(() => {
		cmp = shallow(Logo);
	});

	describe("HTML Content", () => {
		it("should contain a Kanji component", () => {
			expect(cmp.contains(Kanji)).toBe(true);
		});

		it("should contain a div of splash-background class", () => {
			expect(cmp.find("div").classes()).toContain('splash-background');
		});
	});

	describe("Properties validation", () => {
		it("has a hover props of type Object", () => {
			const hover = cmp.vm.$options.props.hover;
			expect(hover.type).toBe(Object);
		});

		it("has a dive props of type Object", () => {
			const dive = cmp.vm.$options.props.dive;
			expect(dive.type).toBe(Object);
		});
	});
});