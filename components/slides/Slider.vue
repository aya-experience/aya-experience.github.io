<template>
	<v-touch @swipeleft="next" @swiperight="previous">
		<a class="link__layer link__layer--left" @click="previous" v-if="hasPrevious()">
			<svg
				class="arrow"
				version="1.1"
				id="f6261eb3-a4d3-4517-b10d-168a1b6a1672"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				x="0px"
				y="0px"
				viewBox="0 0 18.5 30"
				style="enable-background:new 0 0 18.5 30;"
				xml:space="preserve">
				<title>arrow</title>
				<polygon class="st0 arrow" points="0.8,15 9.8,29.2 17.3,29.2 4.6,9 "/>
				<path
					class="st1"
					d="M18.4,29.4L5.1,8.3l4.7-7.5h7.5l-6.4,10c-0.1,0.2-0.1,0.4,0,0.6c0,0,0,0,0.1,0c0.2,0.1,0.4,0.1,0.5-0.1
					l6.9-10.7V0.2C18.3,0,18.2,0,18,0H9.6C9.4,0,9.3,0,9.2,0.2L0,14.7v0.2l0,0v0.2l9.2,14.7C9.3,29.9,9.4,30,9.6,30H18l0.4-0.2
					L18.4,29.4z M9.8,29.2L0.8,15l3.8-6l12.7,20.2H9.8z"/>
			</svg>
		</a>
		<div class="content">
			<slot/>
		</div>
		<a class="link__layer link__layer--right" @click="next" v-if="hasNext()">
			<svg
				class="arrow reversed-arrow"
				version="1.1"
				id="f6261eb3-a4d3-4517-b10d-168a1b6a1672"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				x="0px"
				y="0px"
				viewBox="0 0 18.5 30"
				style="enable-background:new 0 0 18.5 30;"
				xml:space="preserve">
				<title>arrow</title>
				<polygon class="st0 arrow" points="0.8,15 9.8,29.2 17.3,29.2 4.6,9 "/>
				<path
					class="st1"
					d="M18.4,29.4L5.1,8.3l4.7-7.5h7.5l-6.4,10c-0.1,0.2-0.1,0.4,0,0.6c0,0,0,0,0.1,0c0.2,0.1,0.4,0.1,0.5-0.1
					l6.9-10.7V0.2C18.3,0,18.2,0,18,0H9.6C9.4,0,9.3,0,9.2,0.2L0,14.7v0.2l0,0v0.2l9.2,14.7C9.3,29.9,9.4,30,9.6,30H18l0.4-0.2
					L18.4,29.4z M9.8,29.2L0.8,15l3.8-6l12.7,20.2H9.8z"/>
			</svg>
		</a>
	</v-touch>
</template>

<style scoped>
.link__layer {
  position: fixed;
  top: 0;
  height: 100%;
  width: 10%;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.link__layer--left {
  left: 0;
}

.link__layer--right {
  right: 0;
  justify-content: flex-end;
}

.arrow {
  width: 10vw;
  height: 10vh;
  fill: rgba(255, 255, 255, 0.58824);
}

.link__layer--right:hover .arrow {
  fill: #F5F5F5;
}

.link__layer--left:hover .arrow {
  fill: #F5F5F5;
}

.reversed-arrow {
	transform: rotateY(180deg);
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
	mounted() {
		if (this.$route.fullPath === this.path) {
			this.$router.push(`${this.path}/${this.slides[0]}`);
		}
	},
	created() {
		if (process.browser) {
			window.addEventListener('keyup', this.handleKeyup);
		}
	},
	destroyed() {
		if (process.browser) {
			window.removeEventListener('keyup', this.handleKeyup);
		}
	},
	methods: {
		getIndex() {
			const relative = this.$route.fullPath.replace(`${this.path}/`, '');

			return this.slides.indexOf(relative);
		},
		hasNext() {
			return this.getIndex() < this.slides.length - 1;
		},
		hasPrevious() {
			return this.getIndex() > 0;
		},
		previous() {
			if (this.hasPrevious()) {
				this.$router.push(`${this.path}/${this.slides[this.getIndex() - 1]}`);
			}
		},
		next() {
			if (this.hasNext()) {
				this.$router.push(`${this.path}/${this.slides[this.getIndex() + 1]}`);
			}
		},
		handleKeyup(event) {
			if (event.keyCode === 39) {
				this.next();
			}
			if (event.keyCode === 37) {
				this.previous();
			}
		}
	}
};
</script>
