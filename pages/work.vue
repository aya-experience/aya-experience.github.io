<template>
	<div>hello world {{works}}</div>
</template>

<script>
export default {
	computed: {
		works () {
			return this.$store.state.work.works
		}
	},
	async fetch ({ store }) {
		const work = await fetch('http://localhost:3000/api/work')
		store.commit('work/loaded', await work.json())
	}
}
</script>
