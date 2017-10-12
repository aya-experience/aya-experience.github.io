<template>
	<div>hello world {{works}}</div>
</template>

<style scoped>
	div {
		color: white;
	}
</style>

<script>
import work from '~/content/work.json'

export default {
	computed: {
		works () {
			return this.$store.state.work.works
		}
	},
	fetch ({ store }) {
		store.commit('work/loaded', work)
	}
}
</script>
