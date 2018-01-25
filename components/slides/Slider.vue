<template>
	<v-touch @swipeleft="next" @swiperight="previous">
		<a class="left" @click="previous" v-if="hasPrevious()">
			<div class="triangle"/>
		</a>
		<div class="content">
			<slot/>
		</div>
		<a class="right" @click="next" v-if="hasNext()">
			<div class="triangle"/>
		</a>
	</v-touch>
</template>

<style scoped>
a {
	position: fixed;
	top: 0;
	height: 100%;
	width: 10%;
	display: flex;
	align-items: center;
	cursor: pointer;
}

.left {
	left: 0;
}

.right {
	right: 0;
	justify-content: flex-end;
}

.triangle {
	border-top: 50px solid transparent;
	border-bottom: 50px solid transparent;
	transition: border-color .5s ease;
}

.left .triangle {
	margin-left: 30px;
	border-right: 50px solid #FFFFFF30;
}

.right .triangle {
	margin-right: 30px;
	border-left: 50px solid #FFFFFF30;
}

.left:hover .triangle {
	border-right: 50px solid #EBB815;
}

.right:hover .triangle {
	border-left: 50px solid #EBB815;
}
</style>

<script>
export default {
	props: {
		path: {
			type: String,
			required: true
		},
		slides: {
			type: Array,
			required: true
		}
	},
	mounted () {
		if (this.$route.fullPath === this.path) {
			this.$router.push(`${this.path}/${this.slides[0]}`)
		}
	},
	created () {
		if (process.browser) {
			window.addEventListener('keyup', this.handleKeyup)
		}
	},
	destroyed () {
		if (process.browser) {
			window.removeEventListener('keyup', this.handleKeyup)
		}
	},
	methods: {
		getIndex () {
			const relative = this.$route.fullPath.replace(`${this.path}/`, '')
			return this.slides.indexOf(relative)
		},
		hasNext () {
			return this.getIndex() < this.slides.length - 1
		},
		hasPrevious () {
			return this.getIndex() > 0
		},
		previous () {
			if (this.hasPrevious()) {
				this.$router.push(`${this.path}/${this.slides[this.getIndex() - 1]}`)
			}
		},
		next () {
			if (this.hasNext()) {
				this.$router.push(`${this.path}/${this.slides[this.getIndex() + 1]}`)
			}
		},
		handleKeyup (event) {
			if (event.keyCode === 39) {
				this.next()
			}
			if (event.keyCode === 37) {
				this.previous()
			}
		}
	}
}
</script>
