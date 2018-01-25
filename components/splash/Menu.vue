<template>
	<nav>
		<a v-for="(link, index) of links" class="link"
			:style="{ marginLeft: curvMargin(index) }"
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
	bottom: 20vh;
	left: calc(50vw + 20vh);
	z-index: 1;

	display: flex;
	flex-direction: column;
	font-size: 20px;
	font-weight: lighter;

	transition: opacity .5s ease;
	opacity: 0;
}

.loaded nav {
	opacity: 1;
}

.dive nav {
	opacity: 0;
}

a {
	color: #EBB815;
	margin: 10px 5px;
	cursor: pointer;
	transition: color .5s ease;
}

a:hover {
	color: white;
}

@media (max-width: 600px) {
	nav {
		position: relative;
		top: 0;
		left: 0;
		text-align: center;
		display: none;
	}

	nav a {
		margin: 10px;
	}

	.loaded nav {
		display: flex;
	}
}
</style>

<script>
export default {
	data () {
		return {
			links: [
				{ title: 'Vision', path: '/vision', image: '/photos/rails.jpg' },
				// { title: 'Réalisations', path: '/work', image: '/photos/mac.jpg' },
				// { title: 'Méthode', path: '/method', image: '/photos/matrix.jpg' },
				{ title: 'Contact', path: '/contact', image: '/photos/matrix.jpg' }
			]
		}
	},
	methods: {
		curvMargin (index) {
			if (process.browser && window.screen.width > 600) {
				return `${Math.sqrt(this.links.length - index) * 10}vh`
			}
			return ''
		},
		enter (link) {
			this.$emit('enter', link)
		},
		leave () {
			this.$emit('leave')
		},
		go (link) {
			this.$emit('go', link)
		}
	}
}
</script>
