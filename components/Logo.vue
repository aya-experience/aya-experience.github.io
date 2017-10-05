<template>
	<main>
		<nav v-show="loaded">
			<a class="link vision" @mouseenter="enter('vision')" @mouseout="leave">Vision</a>
			<a class="link real" @mouseenter="enter('real')" @mouseout="leave">Réalisations</a>
			<a class="link method" @mouseenter="enter('method')" @mouseout="leave">Méthode</a>
		</nav>
		<div class="kanji-background" :class="kanjiClass"></div>
		<kanji/>
		<svg viewBox="0 0 215 175">
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
.link {
	color: white;
	font-size: 3rem;
	font-weight: 100;
	display: inline-block;
	position: fixed;
	cursor: pointer;
}

.link:hover {
	transition: all .5s ease;
	font-size: 4rem;
}

.link.vision {
	top: 90vh;
	left: 45vw;
	width: 10vw;
	text-align: center;
}

.link.real {
	top: 50vh;
	left: 5vw;
}

.link.method {
	top: 50vh;
	right: 5vw;
}

.kanji-background {
	position: fixed;
	top: 10.5vh;
	left: calc(50vw - 39.5vh);
	height: 79vh;
	width: 79vh;
	background-color: white;
	animation-name: appear;
	animation-duration: 5s;
	animation-timing-function: linear;
	background-size: cover;
	background-position: center;
	transition: all 3s ease;
	opacity: .5;
}

.kanji-background.method {
	background-image: url('/photos/rails.jpg');
	opacity: 1;
}

.kanji-background.real {
	background-image: url('/photos/mac.jpg');
	opacity: 1;
}

.kanji-background.vision {
	background-image: url('/photos/matrix.jpg');
	opacity: 1;
}

svg {
	position: fixed;
	top: 10vh;
	left: calc(50vw - 40vh);
	height: 80vh;
	width: 80vh;
	fill: transparent;
}

text {
	fill: white;
	font-family: sans-serif;
	font-size: 18px;
	font-weight: 100;
	text-anchor: middle;
	animation-name: text;
	animation-duration: 5s;
	animation-timing-function: linear;
	animation-fill-mode: both;
}

.line {
	stroke: white;
	stroke-width: 2;
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
</style>

<script>
import Kanji from '~/components/Kanji.vue'

export default {
	components: {
		Kanji
	},
	data () {
		return {
			loaded: false,
			kanjiClass: 'white'
		}
	},
	beforeMount () {
		this.loaded = true
	},
	methods: {
		enter (name) {
			this.kanjiClass = name
		},
		leave () {
			this.kanjiClass = 'white'
		}
	}
}
</script>
