<template>
	<h1>
		<svg xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 0 215 175" timelineBegin="onStart">
			<title>AYA - &lt;Creative experience&gt;</title>
			<kanji>
				<animate id="kanji_appear_anim" attributeName="opacity" from="0" to="1" timelineBegin="onStart" dur="2s" repeatCount="1"/>
				<animate attributeName="opacity" from="1" to="0.5" dur="2s" begin="kanji_appear_anim.end" repeatCount="1"/>
			</kanji>
			<g transform="matrix(.5 0 0 .5 52 82)">
				<!-- / du premier A -->
				<path class="A11" d="M 38,0 0,90 2,90 40,0 Z">
					<animate attributeType="XML" attributeName="d" from="M 0,90 0,90 2,90 2,90 Z" to="M 0,90 0,90 2,90 2,90 Z" end="kanji_appear_anim.end" repeatCount="1"/>
					<animate id="a_bar_left_anim" attributeType="XML" attributeName="d" from="M 0,90 0,90 2,90 2,90 Z" to="M 38,0 0,90 2,90 40,0 Z" begin="kanji_appear_anim.end" dur="1s" repeatCount="1"/>
				</path>
				<!-- - du premier A -->
				<path class="A12" d="M 40,0 38,0 78,90 80,90 Z">
					<animate attributeType="XML" attributeName="d" from="M 40,0 40,0 40,0 40,0 Z" to="M 40,0 40,0 40,0 40,0 Z" end="a_bar_left_anim.end" repeatCount="1"/>
					<animate attributeType="XML" attributeName="d" from="M 40,0 38,0 38,0 40,0 Z" to="M 40,0 38,0 78,90 80,90 Z" dur="1s" begin="a_bar_left_anim.end" repeatCount="1"/>
				</path>
				<!-- \ du premier A -->
				<path class="A13" d="M 14,58 13,60 65,60 64,58 Z">
					<animate attributeType="XML" attributeName="d" from="M 14,60 14,60 14,60 14,60 Z" to="M 14,60 14,60 14,60 14,60 Z" end="a_bar_left_anim.begin+0.3s" repeatCount="1"/>
					<animate attributeType="XML" attributeName="d" from="M 14,58 13,60 14,60 13,58 Z" to="M 14,58 13,60 65,60 64,58 Z" dur="1.5s" begin="a_bar_left_anim.begin+0.3s" repeatCount="1"/>
				</path>
			</g>
			<g transform="matrix(.5 0 0 .5 52 82)">
				<!-- \ du Y -->
				<path d="M 73,0 75,0 107,50 105,50 Z">
					<animate attributeType="XML" attributeName="d" from="M 73,0 75,0 75,0 73,0 Z" to="M 73,0 75,0 75,0 73,0 Z" end="a_bar_left_anim.end" repeatCount="1"/>
					<animate id="y_bar_left_anim" attributeType="XML" attributeName="d" from="M 73,0 75,0 75,0 73,0 Z" to="M 73,0 75,0 107,50 105,50 Z" dur="0.5s" begin="a_bar_left_anim.end" repeatCount="1"/>
				</path>
				<!-- / du Y -->
				<path d="M 142,0 140,0 105,50 107,50 Z">
					<animate attributeType="XML" attributeName="d" from="M 142,0 140,0 140,0 142,0 Z" to="M 142,0 140,0 140,0 142,0 Z" end="a_bar_left_anim.end" repeatCount="1"/>
					<animate attributeType="XML" attributeName="d" from="M 142,0 140,0 140,0 142,0 Z" to="M 142,0 140,0 105,50 107,50 Z" dur="0.5s" begin="a_bar_left_anim.end" repeatCount="1"/>
				</path>
				<!-- | du Y -->
				<path d="M 105,50 107,50 107,100 105,100 Z">
					<animate attributeType="XML" attributeName="d" from="M 105,50 107,50 107,50 105,50 Z" to="M 105,50 107,50 107,50 105,50 Z" end="y_bar_left_anim.end" repeatCount="1"/>
					<animate id="y_bar_center_anim" attributeType="XML" attributeName="d" from="M 105,50 107,50 107,50 105,50 Z" to="M 105,50 107,50 107,100 105,100 Z" dur="0.5s" begin="y_bar_left_anim.end" repeatCount="1"/>
				</path>
			</g>
			<g transform="matrix(.5 0 0 .5 52 82)">
				<!-- / du second A -->
				<path d="M 176,0 139,90 141,90 178,0 Z">
					<animate attributeType="XML" attributeName="d" from="M 139,0 139,0 141,0 141,0 Z" to="M 139,0 139,0 141,0 141,0 Z" end="a2_bar_right_anim.end" repeatCount="1"/>
					<animate attributeType="XML" attributeName="d" from="M 176,0 176,00 178,00 178,0 Z" to="M 176,0 139,90 141,90 178,0 Z" dur="1s" begin="a2_bar_right_anim.end" repeatCount="1"/>
				</path>
				<!-- - du second A -->
				<path d="M 154,58 153,60 201,60 200,58 Z">
					<animate attributeType="XML" attributeName="d" from="M 200,58 201,60 201,60 200,58 Z" to="M 200,58 201,60 201,60 200,58 Z" end="a2_bar_right_anim.begin+0.3s" repeatCount="1"/>
					<animate attributeType="XML" attributeName="d" from="M 200,58 201,60 201,60 200,58 Z" to="M 154,58 153,60 201,60 200,58 Z" dur="1.5s" begin="a2_bar_right_anim.begin+0.3s" repeatCount="1"/>
				</path>
				<!-- \ du second A -->
				<path d="M 178,0 176,0 213,90 215,90 Z">
					<animate attributeType="XML" attributeName="d" from="M 215,90 213,90 213,90 215,90 Z" to="M 215,90 213,90 213,90 215,90 Z" end="kanji_appear_anim.end" repeatCount="1"/>
					<animate id="a2_bar_right_anim" attributeType="XML" attributeName="d" from="M 215,90 213,90 213,90 215,90 Z" to="M 178,0 176,0 213,90 215,90 Z" begin="kanji_appear_anim.end" dur="1s" repeatCount="1"/>
				</path>
			</g>
			<g>
				<text x="109" y="145" font-family="sans-serif" font-size="10" font-weight="100" text-anchor="middle">
					code & design
				</text>
				<animate attributeType="XML" attributeName="opacity" from="0" to="0" end="y_bar_center_anim.end" repeatCount="1"/>
				<animate attributeType="XML" attributeName="opacity" from="0" to="1" dur="1s" begin="y_bar_center_anim.end" repeatCount="1"/>
			</g>
			<!-- <g>
				<image xlink:href="/logo/creative.png" x="14" y="135" width="55" height="13.5"></image>
				<image xlink:href="/logo/perience.png" x="125" y="135" width="52.5" height="13.5"></image>
				<animate attributeName="opacity" from="0" to="0" dur="2s" repeatCount="1"></animate>
				<animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="2s" repeatCount="1"></animate>
			</g> -->
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
	fill: white;
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
