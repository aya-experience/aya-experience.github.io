<template>
	<section
		class="container"
		:class="{
			loading: !isLoaded,
			loaded: isLoaded,
			dive: dive !== null
		}"
	>
		<aya-logo :hover="hover" :dive="dive" @loaded="loaded" @dive-done="diveEnd"/>
		<aya-menu @enter="enter" @leave="leave" @go="diveStart"/>
		<aya-znk/>
		<mentions-link/>
	</section>
</template>

<style>
section.container {
	position: relative;
	height: 100vh;
	width: 100vw;
	overflow-x: hidden;
}
</style>

<script>
import Logo from '~/components/splash/Logo.vue'
import Menu from '~/components/splash/Menu.vue'
import ByZenika from '~/components/splash/ByZenika.vue'
import MentionsButton from '~/components/MentionsButton.vue'

import isMobile from '~/utils/test-mobile'

export default {
	components: {
		'aya-logo': Logo,
		'aya-menu': Menu,
		'aya-znk': ByZenika,
		'mentions-link': MentionsButton
	},
	data () {
		return {
			isLoaded: false,
			hover: null,
			dive: null
		}
	},
	methods: {
		loaded () {
			this.isLoaded = true
		},
		enter (link) {
			this.hover = link
		},
		leave () {
			this.hover = null
		},
		diveStart (link) {
			if (isMobile()) {
				this.$router.push(link.path)
				return
			}

			this.dive = link
		},
		diveEnd () {
			this.$router.push(this.dive.path)
		}
	}
}
</script>
