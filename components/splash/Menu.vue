<template>
	<nav :class="animationStart ? 'animate-nav' : ''">
		<a
			v-for="(link, index) of links"
			:key="index"
			class="link"
			@mouseenter="enter(link)"
			@mouseout="leave"
			@click="go(link)">
			{{ link.title }}
		</a>
	</nav>
</template>

<style scoped>
nav {
	position: absolute;
	width: 100vw;
	bottom: 5vh;
	left: 0;
	z-index: 1;
	display: flex;
	flex-direction: row;
	justify-content: center;
	text-align: center;
	font-size: 2.5rem;
	font-weight: lighter;
}

.animate-nav {
	animation-name: menu-appear;
	animation-duration: 6.5s;
	animation-timing-function: linear;
}
.dive nav {
	opacity: 0;
}
a {
	color: white;
	letter-spacing: 4px;
	margin: 1vh 0;
	cursor: pointer;
	width: 20vw;
	text-align: center;
	transition: color 0.5s ease;
}
a:before {
  content:'<';
  position: relative;
  opacity: 0;
  left: -10px;
  transition: all 0.5s;
}
a:hover:before {
  opacity: 1;
  left: 5px;
}
a:after {
  content:'>';
  position: relative;
  opacity: 0;
  right: -10px;
  transition: all 0.5s;
}
a:hover:after {
  opacity: 1;
  right: 5px;
}

@media (max-width: 1150px) {
	nav a {
		font-size: 1.8rem;
	}
}

@media (max-width: 900px) {
	nav a {
		font-size: 1.4rem;
	}
}

@media (max-width: 670px) {
	nav {
		flex-direction: column;
		top: 5vh;
		left: 0;
		height: 30vh;
		text-align: center;
		align-items: center;
		justify-content: space-between;
	}
	nav a {
		width: 50vw;
	}
}
@keyframes menu-appear {
	0% { opacity: 0 }
	90% { opacity: 0 }
	100% { opacity: 1 }
}
</style>

<script>
export default {
	data() {
		return {
			links: [
				{ title: 'VISION', path: '/vision', image: '/photos/rails.jpg' },
				{ title: 'RÉALISATION', path: '/work', image: '/photos/mac.jpg' },
				{ title: 'AGENCE', path: '/agence', image: '/photos/mac.jpg' },
				{ title: 'EQUIPE', path: '/team', image: '/photos/lune.jpg' },
				{ title: 'CONTACT', path: '/contact', image: '/photos/matrix.jpg' }
			],
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
	},
	methods: {
		enter(link) {
			this.$emit('enter', link);
		},
		leave() {
			this.$emit('leave');
		},
		go(link) {
			this.$emit('go', link);
		}
	}
};
</script>
