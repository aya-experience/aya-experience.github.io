export const state = () => ({
	startAnimationSplash: true
});

export const mutations = {
	disableSplashAnimation: state => {
		state.startAnimationSplash = false;
	}
};
