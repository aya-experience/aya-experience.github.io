<template>
	<h1>
		<svg viewBox="0 0 215 175">
			<title>AYA - &lt;Creative experience&gt;</title>
			<g>
				<path d="M 38,0 0,90 2,90 40,0 Z">
					<animate id="a_bar_left_annim" attributeType="XML" attributeName="d" from="M 0,90 0,90 2,90 2,90 Z" to="M 38,0 0,90 2,90 40,0 Z" dur="1s" repeatCount="1"></animate>
				</path>
				<path d="M 40,0 38,0 78,90 80,90 Z">
					<animate attributeType="XML" attributeName="d" from="M 40,0 38,0 38,0 40,0 Z" to="M 40,0 38,0 78,90 80,90 Z" dur="1s" begin="a_bar_left_annim.end" repeatCount="1"></animate>
					<animate attributeType="XML" attributeName="d" from="M 40,0 40,0 40,0 40,0 Z" to="M 40,0 40,0 40,0 40,0 Z" dur="1s" repeatCount="1"></animate>
				</path>
				<path d="M 14,58 13,60 65,60 64,58 Z">
					<animate attributeType="XML" attributeName="d" from="M 14,58 13,60 14,60 13,58 Z" to="M 14,58 13,60 65,60 64,58 Z" dur="1.5s" begin="a_bar_left_annim.begin+0.3s" repeatCount="1"></animate>
					<animate attributeType="XML" attributeName="d" from="M 14,60 14,60 14,60 14,60 Z" to="M 14,60 14,60 14,60 14,60 Z" dur="0.3s" repeatCount="1"></animate>
				</path>
			</g>
			<g>
				<path d="M 73,0 75,0 107,50 105,50 Z">
					<animate id="y_bar_left_annim" attributeType="XML" attributeName="d" from="M 73,0 75,0 75,0 73,0 Z" to="M 73,0 75,0 107,50 105,50 Z" dur="0.5s" begin="a_bar_left_annim.end" repeatCount="1"></animate>
					<animate attributeType="XML" attributeName="d" from="M 73,0 75,0 75,0 73,0 Z" to="M 73,0 75,0 75,0 73,0 Z" dur="1s" repeatCount="1"></animate>
				</path>
				<path d="M 142,0 140,0 105,50 107,50 Z">
					<animate attributeType="XML" attributeName="d" from="M 142,0 140,0 140,0 142,0 Z" to="M 142,0 140,0 105,50 107,50 Z" dur="0.5s" begin="a_bar_left_annim.end" repeatCount="1"></animate>
					<animate attributeType="XML" attributeName="d" from="M 142,0 140,0 140,0 142,0 Z" to="M 142,0 140,0 140,0 142,0 Z" dur="1s" repeatCount="1"></animate>
				</path>
				<path d="M 105,50 107,50 107,100 105,100 Z">
					<animate attributeType="XML" attributeName="d" from="M 105,50 107,50 107,50 105,50 Z" to="M 105,50 107,50 107,100 105,100 Z" dur="0.5s" begin="y_bar_left_annim.end" repeatCount="1"></animate>
					<animate attributeType="XML" attributeName="d" from="M 105,50 107,50 107,50 105,50 Z" to="M 105,50 107,50 107,50 105,50 Z" dur="1.5s" repeatCount="1"></animate>
				</path>
			</g>
			<g>
				<path d="M 176,0 139,90 141,90 178,0 Z">
					<animate attributeType="XML" attributeName="d" from="M 176,0 176,00 178,00 178,0 Z" to="M 176,0 139,90 141,90 178,0 Z" dur="1s" begin="a2_bar_right_annim.end" repeatCount="1"></animate>
					<animate attributeType="XML" attributeName="d" from="M 139,0 139,0 141,0 141,0 Z" to="M 139,0 139,0 141,0 141,0 Z" dur="1s" repeatCount="1"></animate>
				</path>
				<path d="M 178,0 176,0 213,90 215,90 Z">
					<animate id="a2_bar_right_annim" attributeType="XML" attributeName="d" from="M 215,90 213,90 213,90 215,90 Z" to="M 178,0 176,0 213,90 215,90 Z" dur="1s" repeatCount="1"></animate>
				</path>
				<path d="M 154,58 153,60 201,60 200,58 Z">
					<animate attributeType="XML" attributeName="d" from="M 200,58 201,60 201,60 200,58 Z" to="M 154,58 153,60 201,60 200,58 Z" dur="1.5s" begin="a2_bar_right_annim.begin+0.3s" repeatCount="1"></animate>
					<animate attributeType="XML" attributeName="d" from="M 200,58 201,60 201,60 200,58 Z" to="M 200,58 201,60 201,60 200,58 Z" dur="0.3s" repeatCount="1"></animate>
				</path>
			</g>
			<g>
				<image xlink:href="/logo/creative.png" x="14" y="135" width="55" height="13.5"></image>
				<image xlink:href="/logo/x@2x.png" x="77" y="110" width="60" height="60"></image>
				<image xlink:href="/logo/perience.png" x="125" y="135" width="52.5" height="13.5"></image>
				<animate attributeName="opacity" from="0" to="0" dur="2s" repeatCount="1"></animate>
				<animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="2s" repeatCount="1"></animate>
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
	width: 50rem;
	fill: white;
}
</style>
