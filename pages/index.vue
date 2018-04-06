<template>
	<section
		class="container"
		:class="{
			loading: !isLoaded,
			loaded: isLoaded,
			dive: dive !== null
		}"
	>
		<div class="splash-overflow">
			<aya-logo
				:hover="hover"
				:loaded="isLoaded"
				:dive="dive"
				@loaded="loaded"
				@dive-done="diveEnd"/>
		</div>
		<aya-menu @enter="enter" @leave="leave" @go="diveStart"/>
		<aya-znk/>
		<canvas v-if="dive === null" ref="canvas"/>
		<mentions-link v-if="isLoaded"/>
	</section>

</template>

<style>
section .splash-overflow {
	position: fixed;
	width: 100%;
	height: 100%;
	top:0;
	left:0;
	overflow-x: hidden;
	overflow-y: hidden;
}
section.container {
	position: relative;
	height: 100vh;
	width: 100vw;
	overflow-x: hidden;
}
</style>

<script>
import Logo from '~/components/splash/Logo.vue';
import Menu from '~/components/splash/Menu.vue';
import ByZenika from '~/components/splash/ByZenika.vue';
import animate from '~/utils/animation.js';
import isMobile from '~/utils/test-mobile.js';
import MentionsButton from '~/components/MentionsButton';

export default {
	components: {
		'aya-logo': Logo,
		'aya-menu': Menu,
		'aya-znk': ByZenika,
		'mentions-link': MentionsButton
	},
	data() {
		return {
			isLoaded: false,
			hover: null,
			dive: null,
			animationTime: 6000
		};
	},
	async mounted() {
		// TODO: Change with VueX
		if (window.noAnimation) {
			this.animationTime = 50;
		} else {
			window.noAnimation = true;
		}
		await animate.call(this);
	},
	methods: {
		loaded() {
			this.isLoaded = true;
		},
		enter(link) {
			this.hover = link;
		},
		leave() {
			this.hover = null;
		},
		diveStart(link) {
			if (isMobile()) {
				this.$router.push(link.path);
				return;
			}
			this.dive = link;
		},
		diveEnd() {
			this.$router.push(this.dive.path);
		}
	}
};
</script>
