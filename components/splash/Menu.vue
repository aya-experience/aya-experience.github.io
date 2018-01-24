<template>
	<nav>
		<a v-for="(link, index) of links" class="link"
			:style="{ marginLeft: `${Math.sqrt(links.length - index) * 10}vh` }"
			@mouseenter="enter(link)"
			@mouseout="leave"
			@click="go(link)">
			{{ link.title }}
		</a>
	</nav>
</template>

<style scoped>
nav {
	position: fixed;
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
