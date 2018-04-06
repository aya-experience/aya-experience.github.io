<template>
	<div class="by-zenika" :class="animationStart ? 'animate-div' : ''">
		<p>by</p> &nbsp;
		<img src="/logos/zenika-name.png" alt="Zenika">
	</div>
</template>

<style scoped>
div.by-zenika {
	position: absolute;
	width: 100%;
	bottom: 28vh;
	z-index: 1;

	display: flex;
	flex-direction: row;
	justify-content: center;
	text-align: center;
	font-size: 3vh;
	font-weight: lighter;
	align-items: baseline;
}

.animate-div {
	animation-name: by-zenika-appear;
	animation-duration: 6.5s;
	animation-timing-function: linear;
}

div.by-zenika p {
	font-style: italic;
	opacity: .8;
}

.dive div.by-zenika {
	opacity: 0;
}

img {
	height: 4vh;
}

p {
	margin: 0;
}

@keyframes by-zenika-appear {
	0% { opacity: 0 }
	90% { opacity: 0 }
	100% { opacity: 1 }
}
</style>

<script>
export default {
	data() {
		return {
			animationStart: true
		};
	},
	mounted() {
		// TODO: change using VueX
		if (window.noAnimation) {
			this.animationStart = false;
		} else {
			this.animationStart = true;
		}
	}
};
</script>
