<template>
	<div align="center" class="work-container">
		<aya-back/>
		<a
			v-for="(work, index) in works"
			class="work-preview"
			v-bind:style="{
				'background-image' : `${gradient(index)}, url(${work.illustrations[0].url})`
			}"
		>
			<div class="work-title">
				<h1>{{work.client_name}}</h1>
				<h2>{{work.project_name}}</h2>
			</div>
		</a>
	</div>
</template>

<style scoped>
	div {
		color: white;
	}

	.work-container{
		overflow: hidden;
		position: absolute;
		display: flex;
		top:0;
		left:0;
		right:0;
		bottom:0;
	}

	a.work-preview .work-title {
		position: absolute;
		top: 50%;
		left: 50%;
		height: 30%;
		width: 50%;
		margin: -15% 0 0 -25%;
		text-transform: uppercase;
		padding: 7px;
		z-index: 1000;
		color:#ffffff;
		font-weight: 300;
		font-size: 13px;
		text-shadow: 0px 0px 8px black;
	}

	a.work-preview:hover .work-title {
		-webkit-transition: all 200ms ease-in;
		-webkit-transform: scale(1.5);
		transition: all 200ms ease-in;
		transform: scale(1.5);
	}

	a.work-preview {
		display: inline-block;
		border: 0;
		width: 20vw;
		height: 100vh;
		position: relative;
		-webkit-transition: all 200ms ease-in;
		-webkit-transform: scale(1);
		transition: all 200ms ease-in;
		transform: scale(1);
		background-size: cover;
	}
	a.work-preview:hover {
		flex-grow: 2;
		box-shadow: 0px 0px 150px #000000;
		z-index: 2;
		-webkit-transition: all 200ms ease-in;
		-webkit-transform: scale(1.5);
		transition: all 200ms ease-in;
		transform: scale(1.5);
	}
</style>

<script>
import works from '~/content/work.json'

import BackButton from '~/components/BackButton'

export default {
	components: {
		'aya-back': BackButton
	},
	data () {
		return {
			works,
			gradients: {
				even: 'linear-gradient(#000000E0, #000000C0, #400040C0)',
				odd: 'linear-gradient(#400040C0, #000000C0, #000000E0)'
			}
		}
	},
	methods: {
		gradient (index) {
			return index % 2 === 0 ? this.gradients.even : this.gradients.odd
		}
	}
}
</script>
