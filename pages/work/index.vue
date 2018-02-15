<template>
	<div class="container" ref="container">
		<aya-back/>
		<div class="work-container" :style="{ width: containerWidth }">
			<a
				v-for="(work, index) in works"
				class="work-preview"
				@mouseenter="enter(index)"
				@mouseleave="leave(index)"
				@click="go(work)"
				:style="{
					'background-image' : background(work, index),
					'width': workWidth(index)
				}"
			>
				<div class="work-title">
					<div class="client-logo-container">
						<img :src="work.logo.url">
					</div>
					<h2>{{ work.project_name }}</h2>
					<div class="skills-container">
						<ul>
							<li v-for="skill in work.skills">
								<img :src="skill.icon.url">
								{{ skill.title }}
							</li>
						</ul>
					</div>
				</div>
			</a>
		</div>
	</div>
</template>

<style scoped>
.container {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	overflow-x: auto;
}

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
	transition: all 0.2s ease;
	background-position: center;
	background-size: auto 150%;
	display: flex;
	justify-content: center;
	align-items: center;
}

a.work-preview:hover {
	background-size: auto 100%;
}

a.work-preview .work-title {
	text-transform: uppercase;
	width: 100%;
	padding: 7px;
	z-index: 1000;
	color: #ffffff;
	font-weight: 300;
	font-size: 13px;
	text-shadow: 0px 0px 8px black;
	transition: all 0.2s ease;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
}

a.work-preview .work-title h1,
a.work-preview .work-title h2 {
	font-weight: normal;
	transition: all 0.2s ease;
}

a.work-preview:hover .work-title h1 {
	font-size: 50px;
}

a.work-preview:hover .work-title h2 {
	font-size: 30px;
}

div.client-logo-container {
	width: 15vh;
	height: 15vh;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.2s ease;
}

a.work-preview .client-logo-container img {
	display: block;
	max-width: 15vh;
	max-height: 15vh;
	width: auto;
	height: auto;
	margin: auto;
	transition: all 0.2s ease;
}

a.work-preview:hover div.client-logo-container {
	width: 30vh;
	height: 30vh;
}

a.work-preview:hover .client-logo-container img {
	max-width: 30vh;
	max-height: 30vh;
}

div.skills-container {
	height: 15vh;
	text-align: left;
	position: relative;
}

div.skills-container ul {
	list-style-type: none;
	margin: 0;
	padding: 0;
	position: relative;
	top: 100px;
	opacity: 0;
	transition: all 0.5s ease;
}

a.work-preview:hover div.skills-container ul {
	top: 0;
	opacity: 1;
}

a.work-preview div.skills-container img {
	height: 25px;
	vertical-align: middle;
	margin: 3px;
}
</style>

<script>
import works from '~/content/work.json'

import BackButton from '~/components/BackButton'

import isMobile from '~/utils/test-mobile'

export default {
	components: {
		'aya-back': BackButton
	},
	data () {
		return {
			works,
			hoverIndex: null,
			gradients: {
				even: 'linear-gradient(#000000C0, #000000C0)',
				odd: 'linear-gradient(#000000E0, #000000E0)',
				hover: [
					'linear-gradient(150deg, #786CF0E0, #000000E0 60%)',
					'linear-gradient(150deg, #C54E4EE0, #000000E0 60%)',
					'linear-gradient(150deg, #5E9848F0, #000000E0 60%)'
				]
			},
			link: { title: 'Detail', path: '/detail' }
		}
	},
	mounted () {
		this.$refs.container.addEventListener('mousewheel', this.handleWheel)
	},
	beforeDestroy () {
		this.$refs.container.removeEventListener('mousewheel', this.handleWheel)
	},
	computed: {
		containerWidth () {
			const width = isMobile() ? 50 : 20
			return `${this.works.length * width}vw`
		}
	},
	methods: {
		workWidth (index) {
			const width = isMobile()
				? this.hoverIndex === index ? 70 : 50
				: this.hoverIndex === index ? 30 : 20
			return `${width}vw`
		},
		background (work, index) {
			const image = `url(${work.menu_bg.url})`
			const gradient =
				this.hoverIndex === index
					? this.activeGradient(index)
					: this.inactiveGradient(index)
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
			this.$refs.container.scrollLeft += event.deltaY
			event.preventDefault()
		},
		go (selectedWork) {
			this.$router.push({ path: `/work/${selectedWork.slug}`, props: true })
		}
	}
}
</script>
