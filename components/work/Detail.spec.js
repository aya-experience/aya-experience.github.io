import { mount } from "vue-test-utils";

import Detail from "~/components/work/Detail";
import singleWork from "~/fixture/singleWork.json";

describe("Detail realisation component", () => {
	let cmp;

	beforeEach(() => {
		cmp = mount(Detail, {
			propsData: {
				work: singleWork
			}
		});
	});

	describe("HTML content", () => {
		it("has an h1 containing the project name", () => {
			expect(cmp.find("h1").text()).toBe("B4All");
		});

		it("has a p containing the description", () => {
			expect(cmp.find("p").text()).toBe(
				"Le projet B4All est en cours de réalisation par AYA, une description de cette réalisation sera disponible prochainement."
			);
		});

		it("has two image snippet", () => {
			expect(cmp.findAll("img").length).toBe(2);
		});

		it("has an ul for tags", () => {
			expect(cmp.find("ul")).toBeTruthy();
		});

		it("has 0 li for tags", () => {
			expect(cmp.findAll("li").length).toBe(0);
		});
	});

	describe("Properties validation rules", () => {
		it("has a required work props", () => {
			const work = cmp.vm.$options.props.work;
			expect(work.required).toBeTruthy();
		});

		it("has a work props of type Object", () => {
			const work = cmp.vm.$options.props.work;
			expect(work.type).toBe(Object);
		});
	});
});
