<template>
	<section
		:class="{
			loading: !isLoaded,
			loaded: isLoaded,
			dive: dive !== null
		}"
		class="container"
	>

		<div class="splash-overflow">
			<aya-logo
				:animation-start="$store.state.animation.startAnimationSplash"
				:hover="hover"
				:loaded="isLoaded"
				:dive="dive"
				@loaded="loaded"
				@dive-done="diveEnd"/>
			<aya-znk :animation-start="$store.state.animation.startAnimationSplash"/>
		</div>
		<canvas v-if="dive === null" ref="canvas"/>
		<mentions-link v-if="isLoaded && dive === null"/>
	</section>

</template>

<style>
.splash-overflow {
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

@media (max-width: 670px) {
	.splash-overflow {
		top: 20vh;
	}
}
</style>

<script>
import Logo from '~/components/splash/Logo.vue';
import Menu from '~/components/splash/Menu.vue';
import ByZenika from '~/components/splash/ByZenika.vue';
import { animate } from '~/utils/animation.js';
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
		if (!this.$store.state.animation.startAnimationSplash) {
			this.animationTime = 150;
		}
		await animate.call(this);
	},
	beforeDestroy() {
		this.$store.commit('animation/disableSplashAnimation');
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
