import { mutations, state } from './animation';

describe('animation store module', () => {
	describe('mutation disableSplashAnimation', () => {
		it('initial state of startAnimationSplash state to true', () => {
			expect(state().startAnimationSplash).toEqual(true);
		});
		it('should set startAnimationSplash state to false', () => {
			const s = state();
			s.startAnimationSplash = true;
			mutations.disableSplashAnimation(s);
			expect(s.startAnimationSplash).toEqual(false);
		});
	});
});
