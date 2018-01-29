<template>
	<div class="work-container" :style="{ width: `${works.length * 20}vw` }">
		<aya-back/>
		<a
			v-for="(work, index) in works"
			class="work-preview"
			@mouseenter="enter(index)"
			@mouseleave="leave(index)"
			:style="{ 'background-image' : background(work, index) }"
		>
			<div class="work-title">
				<img :src="work.logo.url">
				<!-- <h1>{{ work.client_name }}</h1> -->
				<h2>{{ work.project_name }}</h2>
			</div>
		</a>
	</div>
</template>

<style scoped>
.work-container {
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	display: flex;
	flex-direction: row;
	color: white;
}

a.work-preview {
	height: 100%;
	width: 20vw;
	transition: all .2s ease;
	background-position: center;
	background-size: auto 150%;
	display: flex;
	justify-content: center;
	align-items: center;
}

a.work-preview:hover {
	width: 30vw;
	background-size: auto 100%;
}

a.work-preview .work-title {
	text-transform: uppercase;
	padding: 7px;
	z-index: 1000;
	color: #ffffff;
	font-weight: 300;
	font-size: 13px;
	text-shadow: 0px 0px 8px black;
	transition: all .2s ease;
	text-align: center;
}

a.work-preview .work-title h1,
a.work-preview .work-title h2 {
	font-weight: normal;
	transition: all .2s ease;
}

a.work-preview:hover .work-title h1 {
	font-size: 50px;
}

a.work-preview:hover .work-title h2 {
	font-size: 30px;
}

a.work-preview .work-title img {
  display: block;
  max-width:15vh;
  max-height:15vh;
  width: auto;
  height: auto;
	margin: auto;
}

a.work-preview:hover .work-title img {
	max-width:30vh;
  max-height:30vh;
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
			works: [...works, ...works], // dev hack to have more works
			hoverIndex: null,
			gradients: {
				even: 'linear-gradient(#000000C0, #000000C0)',
				odd: 'linear-gradient(#000000E0, #000000E0)',
				hover: [
					'linear-gradient(150deg, #786CF0E0, #000000E0 60%)',
					'linear-gradient(150deg, #C54E4EE0, #000000E0 60%)',
					'linear-gradient(150deg, #5E9848F0, #000000E0 60%)'
				]
			}
		}
	},
	created () {
		if (process.browser) {
			document.querySelector('html').addEventListener('mousewheel', this.handleWheel)
		}
	},
	destroyed () {
		if (process.browser) {
			document.querySelector('html').removeEventListener('mousewheel', this.handleWheel)
		}
	},
	methods: {
		background (work, index) {
			const image = `url(${work.illustrations[0].url})`
			const gradient = this.hoverIndex === index
				? this.activeGradient(index) : this.inactiveGradient(index)
			return `${gradient}, ${image}`
		},
		inactiveGradient (index) {
			return index % 2 === 0 ? this.gradients.even : this.gradients.odd
		},
		activeGradient (index) {
			return this.gradients.hover[index % this.gradients.hover.length]
		},
		enter (index) {
			this.hoverIndex = index
		},
		leave (index) {
			this.hoverIndex = null
		},
		handleWheel (event, delta) {
			document.querySelector('html').scrollLeft += event.deltaY
			event.preventDefault()
		}
	}
}
</script>
