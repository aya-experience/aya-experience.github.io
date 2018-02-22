<template>
	<main
		:class="{
			dive: dive !== null,
			hover: hover !== null
	}">
		<div
			class="splash-background"
			:style="{
				backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/photos/nasa-89125.jpg')`
			}"
		>
			<slot/>
		</div>
		
		<Kanji class="kanji" ref="bg"/>
	
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

.dive main {
	animation-name: zoomin;
	animation-duration: 2s;
	animation-timing-function: ease-in;
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

.dive .splash-background {
	animation-name: background-disappear;
	animation-duration: 2s;
	animation-timing-function: ease;
}

.kanji {
	position: absolute;
	top: calc(45vh);
	left: calc(50% - (28vh / 2));
	height: calc(30vh);
	width: calc(30vh);
	transform: scale(0.60);
	z-index: 1;
}

.loading .kanji {
	animation-name: kanji-reduce;
	animation-duration: 4s;
	animation-timing-function: cubic-bezier(0.1, 0.5, 0.6, 0.1);
}

.dive .kanji {
	animation-name: kanji-dive;
	animation-duration: 2s;
	animation-timing-function: ease-in;
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

@keyframes zoomin {
  0% {
		transform: scale(1);
	}
  100% {
		transform: scale(100);
	}
}

@keyframes kanji-reduce {
	0% {
		opacity: 0.1;
		transform: scale(3);
	}
	80% {
		opacity: 1;
		transform: scale(0.50);
	}
	100% {
		opacity: 1;
		transform: scale(0.50);
	}
}

@keyframes kanji-dive {
	0% {
		top: calc(44vh);
		left: calc(50% - (28.2vh / 2));
		height: calc(30vh);
		width: calc(30vh);
		transform: scale(0.60);
	}
	100% {
		top: calc(950vh);
		left: calc(295vh);
		height: calc(30vh);
		width: calc(30vh);
		transform: scale(90);
	}
}
</style>

<script>
import animationComplete from '~/utils/animation-complete';
import loadImage from '~/utils/load-image';

import Kanji from '~/components/Logo.vue';

export default {
	components: {
		Kanji
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
			imageLoaded: {}
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
