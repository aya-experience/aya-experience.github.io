<template>
	<div class="container" ref="container">
		<aya-back/>
		<mentions-link/>
		<div class="work-container" :style="{ width: containerWidth }">
			<no-ssr>
				<v-touch class="work-container" :style="{ width: containerWidth }" @swipe="onSwipe">
					<a
						v-for="(work, index) in works"
						:key="index"
						class="work-preview"
						@click="go(work)"
						@mouseenter="enter(index)"
						@mouseleave="leave()"
						@keyup.left.prevent="handleKeyup"
						:style="{
							'background-image' : background(work, index),
							'width': workWidth(index)
						}"
					>
						<div class="work-title">
							<div class="client-logo-container">
								<img :src="work.logo.url">
								<h1>{{ work.projectName }}</h1>
							</div>
							<div class="skills-container">
								<ul>
									<li v-for="(skill, index) in work.skills" :key="index">
										{{ skill.title }}
									</li>
								</ul>
							</div>
						</div>
					</a>
				</v-touch>
			</no-ssr>
		</div>
		<div class="slider">
			<input
				type="range"
				min="0"
				:max="(works.length - 1)"
				:value="hoverIndex"
				@input="onChangeRange($event.target.value)"
				onkeydown="return false;"
			>
		</div>
	</div>
</template>

<style scoped>

.slider {
	display: flex;
	justify-content: space-around;
}

input[type=range] {
	text-align: center;
	position: fixed;
	top: 90vh;
	width: 15%;
	height: 0.1vh;
	cursor: pointer;
	z-index: 3;
	margin: 0 auto;
	-webkit-appearance: none;
	border-radius: 1px;
	opacity: 0.8;
	border: 20px solid transparent;
	background-color: transparent;
}

input[type=range]:focus {
  outline: none;
}

input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 0.8vh;
  cursor: pointer;
  box-shadow: 0px 0px 0px #000000;
  background: #FFFFFF;
  border-radius: 50px;
  border: 0px solid #000000;
}

input[type=range]::-webkit-slider-thumb {
  box-shadow: 0px 0px 0px #000000;
  border: 1px solid #FFFFFF;
  height: 1.7vh;
  width: 1.5vw;
  border-radius: 4px;
  background: #FFFFFF;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -4px;
}

input[type=range]:focus::-webkit-slider-runnable-track {
  background: #FFFFFF;
}

input[type=range]::-moz-range-track {
  width: 100%;
  height: 1vh;
  cursor: pointer;
  box-shadow: 0px 0px 0px #000000;
  background: #FFFFFF;
  border-radius: 50px;
  border: 0px solid #000000;
}

input[type=range]::-moz-range-thumb {
  box-shadow: 0px 0px 0px #000000;
  border: 1px solid #FFFFFF;
  height: 1.2vh;
  width: 10%;
  border-radius: 4px;
  background: #FFFFFF;
  cursor: pointer;
}

input[type=range]::-ms-track {
  width: 100%;
  height: 3px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}

input[type=range]::-ms-fill-lower {
  background: #FFFFFF;
  border: 0px solid #000000;
  border-radius: 100px;
  box-shadow: 0px 0px 0px #000000;
}

input[type=range]::-ms-fill-upper {
  background: #FFFFFF;
  border: 0px solid #000000;
  border-radius: 100px;
  box-shadow: 0px 0px 0px #000000;
}

input[type=range]::-ms-thumb {
  margin-top: 1px;
  box-shadow: 0px 0px 0px #000000;
  border: 1px solid #FFFFFF;
  height: 2vh;
  width: 3vw;
  border-radius: 4px;
  background: #FFFFFF;
  cursor: pointer;
}

input[type=range]:focus::-ms-fill-lower {
  background: #FFFFFF;
}

input[type=range]:focus::-ms-fill-upper {
  background: #FFFFFF;
}

.container {
	position: fixed;
	top: 0;
	bottom: 0;
	width: 100%;
	left: 0;
	right: 0;
	overflow-x: auto;
	text-align: center;
}

.work-container {
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	display: flex;
	flex-direction: row;
	color: white;
	cursor: pointer;
}

a.work-preview {
	height: 100%;
	transition: all 0.4s ease;
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

a.work-preview .work-title h1{
	font-weight: normal;
	transition: all 0.2s ease;
	font-size: 2rem;
}

a.work-preview .work-title:hover h1 {
	font-size: 3rem;
}

div.client-logo-container {
	width: 15vh;
	height: 15vh;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.2s ease;
	flex-direction: column;
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
	margin-top: 5vh;
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

@media all and (max-width: 800px) {
	input[type=range] {
		width: auto;
	}

	input[type=range]::-webkit-slider-thumb {
		width: 6vw;
		height: 2vh;
	}
}
</style>

<script>
import works from '~/content/work.json';

import BackButton from '~/components/BackButton';
import MentionsButton from '~/components/MentionsButton';


import isMobile from '~/utils/test-mobile';

const ENTER = 13;
const LEFT_PAD = 37;
const RIGHT_PAD = 39;

export default {
	components: {
		'aya-back': BackButton,
		'mentions-link': MentionsButton,
	},
	data () {
		return {
			works,
			scrollValue: 0,
			scrollDelta: 0,
			hoverIndex: 0,
			gradients: {
				custom: 'linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1))',
				even: 'linear-gradient(#000000C0, #000000C0)',
				odd: 'linear-gradient(#000000E0, #000000E0)',
				hover: [
					'linear-gradient(150deg, #786CF0E0, #000000E0 70%)',
					'linear-gradient(150deg, #C54E4EE0, #000000E0 70%)',
					'linear-gradient(150deg, #5E9848F0, #000000E0 70%)'
				]
			},
			link: { title: 'Detail', path: '/detail' }
		};
	},
	computed: {
		containerWidth () {
			const width = isMobile() ? 100 : 20;
			
			return `${this.works.length * width}vw`;
		},
		workWidthPx () {
			return parseFloat(this.workWidth().slice(0, -2)) * (this.$refs.container.clientWidth / 100);
		},
		mouseEvent () {
			// Check if its Firefox , change to scroll and override it to determine delta !
			return (/Firefox/i.test(navigator.userAgent))? 'DOMMouseScroll' : 'mousewheel';
		},
		isMobile() {
			return isMobile();
		}
	},
	created () {
		if (process.browser) {
			window.addEventListener('keyup', this.handleKeyup);
		}
	},
	mounted () {
		this.$refs.container.addEventListener(this.mouseEvent, this.handleWheel);
	},
	beforeDestroy () {
		this.$refs.container.removeEventListener(this.mouseEvent, this.handleWheel);
	},
	destroyed () {
		if (process.browser) {
			window.removeEventListener('keyup', this.handleKeyup);
		}
	},
	methods: {
		workWidth (index) {
			const width = this.isMobile
				? 100
				: this.hoverIndex === index ? 30 : 20;

			return `${width}vw`;
		},
		background (work, index) {
			const image = `url(${work.menuBg.url})`;

			if (this.isMobile) { return `${this.activeGradient(index)}, ${image}`; };
			const gradient =
				this.hoverIndex === index
					? this.activeGradient(index)
					: this.inactiveGradient(index);
			return `${gradient}, ${image}`;
		},
		inactiveGradient (index) {
			return index % 2 === 0 ? this.gradients.even : this.gradients.odd;
		},
		activeGradient (index) {
			return this.gradients.hover[index % this.gradients.hover.length];
		},
		smoothScroll (orientation, width, repeat) {
			const i = 10;
			const w = width || 0;
			const r = repeat || 1;
			
			if (w < this.workWidthPx * r) {
				setTimeout(() => {
					this.$refs.container.scrollLeft += (i * orientation);
					// ScrollValue is updated so that if we scroll with other methods and come back to scroll, it works
					this.scrollValue += (i * orientation);
					this.smoothScroll(orientation, w + 10, r);
				}, 10/r);
			}
		},
		handleWheel (event) {
			event.preventDefault();
			this.$refs.container.scrollLeft += event.deltaY;
		},
		handleKeyup (event) {
			event.preventDefault();
			
			const orientation = event.keyCode === RIGHT_PAD ? 1 : (event.keyCode === LEFT_PAD ? -1 : null);

			if (orientation) {
				this.smoothScroll(orientation, 0, 2);
			}

			if (event.keyCode === ENTER) {
				this.go(this.works[this.hoverIndex]);
			}
		},
		onSwipe (event) {
			const orientation = event.direction === 2 ? 1 : -1;
			this.doScroll(orientation);
		},
		doScroll(orientation) {
			this.enter(Math.max(0, Math.min(this.works.length - 1, this.hoverIndex + orientation)));
			this.smoothScroll(orientation, 0, 1);
		},
		onChangeRange (value) {
			const v = parseInt(value, 10);
			const repeat = Math.abs(v - this.hoverIndex);
			const orientation = v > this.hoverIndex ? 1 : -1;

			this.enter(v);
			this.smoothScroll(orientation, 0, repeat);
		},
		go (selectedWork) {
			this.$router.push({ path: `/work/${selectedWork.slug}`, props: true });
		},
		enter (index) {
			this.hoverIndex = index;
		},
		leave () {
			this.hoverIndex = null;
		},
	}
};
</script>