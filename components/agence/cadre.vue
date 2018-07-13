<template>
	<div class="container">
		<svg
			width="659px"
			height="144px"
			viewBox="0 0 659 144"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			style=""
			class="cadre cadre-top"
			:class="show ? 'start' : ''">
			<defs/>
			<g
				id="svgaya"
				stroke="none"
				stroke-width="1"
				fill="none"
				fill-rule="evenodd">
				<g id="L'agence---UI-v3" transform="translate(-1754.000000, -630.000000)" stroke="#FFFFFF">
					<g id="Encart-texte" transform="translate(1755.000000, 631.000000)">
						<path id="Path-28" d="M0,31L0,1.13686838e-13L65,1.13686838e-13" class="HeApKCWh_0"/>
					</g>
				</g>
			</g>
		</svg>
		<slot/>
		<svg
			width="659px"
			height="144px"
			viewBox="0 0 659 144"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			style=""
			class="cadre cadre-bot"
			:class="show ? 'start' : ''">
			<defs/>
			<g
				id="svgaya"
				stroke="none"
				stroke-width="1"
				fill="none"
				fill-rule="evenodd">
				<g id="L'agence---UI-v3" transform="translate(-1754.000000, -630.000000)" stroke="#FFFFFF">
					<g id="Encart-texte" transform="translate(1755.000000, 631.000000)">
						<path id="Path-28-Copy" transform="translate(624.500000, 126.500000) scale(-1, -1) translate(-624.500000, -126.500000) " d="M592,142L592,111L657,111" class="HeApKCWh_1"/>
					</g>
				</g>
			</g>
		</svg>
	</div>
</template>

<style scoped data-made-with="vivus-instant">.HeApKCWh_0{stroke-dasharray:96 98;stroke-dashoffset:97;}.start .HeApKCWh_0{animation:HeApKCWh_draw 1000ms ease-in 300ms forwards;}@keyframes HeApKCWh_draw{100%{stroke-dashoffset:0;}}@keyframes HeApKCWh_fade{0%{stroke-opacity:1;}92%{stroke-opacity:1;}100%{stroke-opacity:0;}}</style>
<style scoped data-made-with="vivus-instant">.HeApKCWh_1{stroke-dasharray:96 98;stroke-dashoffset:97;}.start .HeApKCWh_1{animation:HeApKCWh_draw 1000ms ease-in 300ms forwards;}@keyframes HeApKCWh_draw{100%{stroke-dashoffset:0;}}@keyframes HeApKCWh_fade{0%{stroke-opacity:1;}92%{stroke-opacity:1;}100%{stroke-opacity:0;}}</style>

<style scoped>
.container {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.cadre {
	position: relative;
	height: 25vh;
	width: auto;
}

.cadre-top {
	top: 12vh;
	left: 10vw;
}

.cadre-bot {
	top: -20vh;
	left: -10vw;
}

@media all and (max-width: 800px) {
	.cadre {
		height: 15vh;
		width: 100vw;
	}

	.cadre-top {
		left: 0;
		top: 0;
	}

	.cadre-bot {
		left: 0;
		top: -10vh;
	}
}
</style>

<script>
export default {
	props: {
		show: {
			type: Boolean,
			default: false
		}
	}
};
</script>

