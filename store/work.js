export const state = () => ({
	works: []
})

export const mutations = {
	loaded (state, works) {
		state.works = works
	}
}
