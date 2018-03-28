<template>
	<main
		:class="{
			dive: dive !== null,
			hover: hover !== null
	}">
		
		<div 
			class="kanji-background"
			ref="bg"
			:style="{ backgroundImage: kanjiBackground }"
		/>
		<kanji v-if="!load"/>
		<aya-kanji v-else class="kanji"/>
	
		<svg class="AYA" viewBox="28 48 155 115">
			<g transform="matrix(.5 0 0 .5 53 52)">
				<!-- /\ du premier A -->
				<path class="line a-main" d="M 0,90 38,0 76,90"/>
				<!-- - du premier A -->
				<path class="line a-bar" d="M 13,60 64,60"/>
				<!-- \ du Y -->
				<path class="line y-bar" d="M 73,0 105,50"/>
				<!-- / du Y -->
				<path class="line y-bar" d="M 137,0 105,50"/>
				<!-- | du Y -->
				<path class="line y-bar-center" d="M 105,50 105,100"/>
				<!-- /\ du premier A -->
				<path class="line a-main" d="M 209,90 172,0 135,90"/>
				<!-- - du second A -->
				<path class="line a-bar" d="M 197,60 148,60"/>
				<text x="25" y="148">
					&lt; CODE &nbsp;
				</text>
				<text x="118" y="148">
					&nbsp; DESIGN &gt;
				</text>
			</g>
		</svg>
	</main>
</template>

<style scoped>
main {
	height: 100vh;
	width: 100vw;
}

.splash-background {
	height: 100vh;
	width: 100vw;
	background-position: center;
	background-size: cover;
}
.loading .splash-background {
	animation-name: background-appear;
	animation-duration: 4s;
	animation-timing-function: ease;
}

.loading .kanji-background {
	animation-name: kanji-reduce;
	animation-duration: 4s;
	animation-timing-function: cubic-bezier(0.1, 0.5, 0.6, 0.1);
	width: calc(18vh);
	background-color: transparent;
}

.hover .kanji-background {
	animation-name: kanji-image;
	animation-duration: 1s;
	animation-timing-function: ease;
	opacity: 1;
}

.kanji-background {
	position: absolute;
	top: calc(49.5vh);
	left: calc(51vw - 9.5vh);
	height: calc(18vh);
	width: calc(16vh);
	background-color: white;
	background-size: cover;
	background-position: center;
	opacity: 1;
}

.dive .kanji-background {
	transition-property: top, left, height, width;
	transition-duration: 0.5s;
	transition-timing-function: ease;
}

.dive .kanji-background {
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
}

.dive .kanji-background {
	animation-name: kanji-background-dive;
	animation-duration: 2s;
	animation-timing-function: ease;
	animation-fill-mode: forwards;
}

.kanji {
	position: absolute;
	top: 49vh;
	left: calc(50vw - 40vh);
	height: 19vh;
	width: 80vh;
	fill: black;
}

.loading .kanji {
	animation-name: kanji-reduce;
	animation-duration: 4s;
	animation-timing-function: cubic-bezier(0.1, 0.5, 0.6, 0.1);
}

.dive .kanji {
	animation-name: kanji-dive;
	animation-duration: 2s;
	animation-timing-function: ease;
}

.AYA {
	position: absolute;
	top: 10vh;
	left: calc(50vw - 40vh);
	height: 80vh;
	width: 80vh;
	fill: transparent;
	transition: opacity 1s ease;
}

.dive .AYA {
	opacity: 0;
}

.AYA text {
	fill: white;
	font-size: 16px;
	font-weight: 100;
	letter-spacing: 1px;
	animation-name: text;
	animation-duration: 6s;
	animation-timing-function: linear;
	animation-fill-mode: both;
}

.AYA .line {
	stroke: white;
	stroke-width: 1.5;
	stroke-linejoin: bevel;
	animation-duration: 5s;
	animation-timing-function: linear;
	animation-fill-mode: both;
}

.a-main {
	animation-name: a-main;
	stroke-dasharray: 200px;
}
.a-bar {
	animation-name: a-bar;
	stroke-dasharray: 60px;
}
.y-bar {
	animation-name: y-bar;
	stroke-dasharray: 60px;
}
.y-bar-center {
	animation-name: y-bar-center;
	stroke-dasharray: 60px;
}

@keyframes appear {
	0% { 
		opacity: 0;
		transform: scale(3);
	}
	80% { 
		opacity: 1;
		transform: scale(3);
	}
	100% { 
		opacity: 1;
		transform: scale(0.7);
	}
}

@keyframes a-main {
	0% { stroke-dashoffset: 200px }
	50% { stroke-dashoffset: 200px }
	100% { stroke-dashoffset: 0px }
}

@keyframes a-bar {
	0% { stroke-dashoffset: 60px }
	57% { stroke-dashoffset: 60px }
	98% { stroke-dashoffset: 0px }
	100% { stroke-dashoffset: 0px }
}

@keyframes y-bar {
	0% { stroke-dashoffset: 60px }
	75% { stroke-dashoffset: 60px }
	90% { stroke-dashoffset: 0px }
	100% { stroke-dashoffset: 0px }
}

@keyframes y-bar-center {
	0% { stroke-dashoffset: 60px }
	90% { stroke-dashoffset: 60px }
	100% { stroke-dashoffset: 0px }
}

@keyframes text {
	0% { opacity: 0 }
	90% { opacity: 0 }
	100% { opacity: 1 }
}

@keyframes background-appear {
	0% { opacity: 0 }
	80% { opacity: 0 }
	100% { opacity: 1 }
}

@keyframes background-disappear {
	0% { opacity: 1 }
	20% { opacity: 1 }
	100% { opacity: 0 }
}

@keyframes kanji-reduce {
	0% {
		opacity: 0.1;
		transform: scale(3);
	}
	80% {
		opacity: 1;
		transform: scale(0.87);
	}
	100% {
		opacity: 1;
		transform: scale(0.87);
	}
}

@keyframes kanji-dive {
	0% {
		top: 10vh;
		left: calc(50vw - 40vh);
		height: 80vh;
		width: 80vh;
	}
	100% {
		top: -1000vh;
		left: calc(50vw - 4720vh);
		height: 10000vh;
		width: 10000vh;
	}
}
@keyframes kanji-image {
	0% {  background-image: none; opacity: 0.5 }
	30% { opacity: 0 }
	100% { opacity: 1 }
}

@keyframes kanji-background-dive {
	0% {
		top: calc(10.5vh);
		left: calc(50vw - 39.5vh);
		height: calc(79vh);
		width: calc(79vh);
		opacity: 1;
	}
	25% {
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		opacity: 1;
	}
	70% {
		opacity: 1;
	}
	100% {
		opacity: 0;
	}
}

@media (max-width: 600px) {
	.AYA {
		transform: scale(0.8);
	}

	.kanji {
		height: 19vh;
		width: 81vh;
	}

	.kanji-background{
		left: calc(51vw - 8.5vh);
	}
}
</style>

<script>
import animationComplete from '~/utils/animation-complete';
import loadImage from '~/utils/load-image';

import Kanji from '~/components/KanjiMask.vue';
import Aya from '~/components/Logo.vue';

export default {
	components: {
		Kanji,
		'aya-kanji': Aya,
	},
	props: {
		hover: {
			type: Object,
			default: null
		},
		dive: {
			type: Object,
			default: null
		}
	},
	data () {
		return {
			kanjiBackground: 'none',
			imageLoaded: {},
			load: true
		};
	},
	watch: {
		async hover (newVal, oldVal) {
			if (newVal !== oldVal && this.dive === null) {
				if (newVal === null) {
					this.kanjiBackground = 'none';
				} else {
					await this.loadImage(newVal.image);
					this.kanjiBackground = `url("${newVal.image}")`;
				}
			}
		},
		async dive (newVal, oldVal) {
			if (newVal !== oldVal && newVal !== null) {
				await animationComplete(this.$refs.bg);
				this.$emit('dive-done');
			}
		}
	},
	async mounted () {
		const current = new Date().getTime();
		const domLoading = performance.timing.domLoading;
		if (current < domLoading + 4000) { // 5s animation - error margin
			await animationComplete(this.$refs.bg);
		}
		this.loaded = true;
		this.load = false;
		this.$emit('loaded');
	},
	methods: {
		async loadImage (image) {
			if (this.imageLoaded[image]) {
				return Promise.resolve();
			}
			await loadImage(image);
			this.imageLoaded[image] = true;
		}
	}
};
</script>
