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
	width: 100%;
	bottom: 5vh;
	left: 1vw;
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
	margin: 1vh 5vw;
	cursor: pointer;
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
@media (max-width: 600px) {
	nav {
		flex-direction: column;
		top: -73vh;
		left: 0;
		text-align: center;
		display: flex;
	}
	nav a {
		margin: 10px;
	}
	/* .loaded nav {
		display: flex;
	} */
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
				// { title: 'Méthode', path: '/method', image: '/photos/matrix.jpg' },
				{ title: 'CONTACT', path: '/contact', image: '/photos/matrix.jpg' },
				{ title: 'EQUIPE', path: '/team', image: '/photos/lune.jpg' }
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
