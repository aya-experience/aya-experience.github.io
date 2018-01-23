<template>
	<main :class="{
		dive: dive !== null,
		hover: hover !== null
	}">
		<div
			class="kanji-background"
			ref="bg"
			:style="{ backgroundImage: kanjiBackground }"
		>
		</div>
		<kanji/>
		<svg class="AYA" viewBox="0 0 215 175">
			<g transform="matrix(.5 0 0 .5 53 82)">
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
				<text x="112" y="135">
					code & design
				</text>
			</g>
		</svg>
	</main>
</template>

<style scoped>
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

.kanji-background {
	position: fixed;
	top: calc(10.5vh);
	left: calc(50vw - 39.5vh);
	height: calc(79vh);
	width: calc(79vh);
	background-color: white;
	background-size: cover;
	background-position: center;
	opacity: .5;
}

.loading .kanji-background {
	animation-name: appear;
	animation-duration: 3s;
	animation-timing-function: linear;
}

.hover .kanji-background {
	animation-name: kanji-image;
	animation-duration: 1s;
	animation-timing-function: ease;
	opacity: 1;
}

.dive .kanji-background {
	animation-name: kanji-background-dive;
	animation-duration: 2s;
	animation-timing-function: ease;
	animation-fill-mode: forwards;
}

>>> .kanji {
	position: fixed;
	top: 10vh;
	left: calc(50vw - 40vh);
	height: 80vh;
	width: 80vh;
	fill: black;
}

.dive >>> .kanji {
	animation-name: kanji-dive;
	animation-duration: 2s;
	animation-timing-function: ease;
}

.AYA {
	position: fixed;
	top: 10vh;
	left: calc(50vw - 40vh);
	height: 80vh;
	width: 80vh;
	fill: transparent;
	transition: opacity 1s ease;
}

.hover .AYA {
	opacity: 0.2;
}

.dive .AYA {
	opacity: 0;
}

.AYA text {
	fill: #EBB815;
	font-family: sans-serif;
	font-size: 18px;
	font-weight: 100;
	text-anchor: middle;
	animation-name: text;
	animation-duration: 3s;
	animation-timing-function: linear;
	animation-fill-mode: both;
}

.AYA .line {
	stroke: #EBB815;
	stroke-width: 2;
	stroke-linejoin: bevel;
	animation-duration: 3s;
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
	0% { opacity: 0; }
	50% { opacity: 1; }
	100% { opacity: 0.5; }
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

@keyframes kanji-image {
	0% {  background-image: none; opacity: 0.5 }
	30% { opacity: 0 }
	100% { opacity: 1 }
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
</style>

<script>
import animationComplete from '~/utils/animation-complete'
import loadImage from '~/utils/load-image'

import Kanji from '~/components/Kanji.vue'

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
		}
	},
	async mounted () {
		const current = new Date().getTime()
		const domLoading = performance.timing.domLoading
		if (current < domLoading + 4000) { // 5s animation - error margin
			await animationComplete(this.$refs.bg)
		}
		this.loaded = true
		this.$emit('loaded')
	},
	methods: {
		async loadImage (image) {
			if (this.imageLoaded[image]) {
				return Promise.resolve()
			}
			await loadImage(image)
			this.imageLoaded[image] = true
		}
	},
	watch: {
		async hover (newVal, oldVal) {
			if (newVal !== oldVal) {
				console.log('hover watch', newVal)
				if (newVal === null) {
					this.kanjiBackground = 'none'
				} else {
					await this.loadImage(newVal.image)
					this.kanjiBackground = `url("${newVal.image}")`
				}
			}
		},
		async dive (newVal, oldVal) {
			if (newVal !== oldVal && newVal !== null) {
				await animationComplete(this.$refs.bg)
				this.$router.push('work')
			}
		}
	}
}
</script>
