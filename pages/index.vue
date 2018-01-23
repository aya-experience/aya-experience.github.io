<template>
	<section class="container" :class="{ loading: !isLoaded, loaded: isLoaded }">
		<aya-logo :hover="hover" :dive="dive" @loaded="loaded"/>
		<aya-menu @enter="enter" @leave="leave" @go="go"/>
	</section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Menu from '~/components/Menu.vue'

export default {
	data () {
		return {
			isLoaded: false,
			hover: null,
			dive: null
		}
	},
	components: {
		'aya-logo': Logo,
		'aya-menu': Menu
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
		go (link) {
			this.dive = link
		}
	}
}
</script>
