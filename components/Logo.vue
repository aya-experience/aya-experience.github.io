<template>
	<h1>
		<svg xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 0 215 175" timelineBegin="onStart">
			<title>AYA - &lt;creative experience&gt;</title>
			<kanji/>
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
	</h1>
</template>

<style scoped>
h1 {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}

svg {
	height: 80vh;
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
	}
}
</script>
