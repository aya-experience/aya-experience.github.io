<template>
	<div :style="{ backgroundColor: work.bgColor }" class="container">
		<aya-back page="/work"/>
		<work-detail :work="work"/>
		<!--<div class="other-company">
			<nuxt-link class="link" v-show="!prevButtonHide" :to="go(-1)">
				<img src="~/assets/icons/arrow.svg">
			</nuxt-link>
			<nuxt-link class="link" v-show="!nextButtonHide" :to="go(1)">
				<img src="~/assets/icons/arrow.svg" class="reversed-arrow">
			</nuxt-link>
		</div>-->
	</div>
</template>

<style scoped>

.link {
	min-height: 3vh;
	min-width: 3vh;
	margin-right: 2px;
}

.other-company {
	display: flex;
	justify-content: flex-end;
	align-items: flex-start;
	position: fixed;
	bottom: 2vh;
	right: 72vw;
}

.reversed-arrow {
	/* TODO: Check Prefixer */
	/* Rotate arrow */
    -ms-transform: rotateY(180deg); /* IE 9 */
    -webkit-transform: rotateY(180deg); /* Safari 3-8 */
	transform: rotateY(180deg);
}

normal {
	filter: invert(0%);
	cursor: pointer;
}

.inverted {
	filter: invert(100%);
	cursor: pointer;
}

.container {
	transition: all .6s cubic-bezier(.55,0,.1,1);
	min-height: 100vh;
}

/* Slide animation */
.slide-left-enter,
.slide-right-leave-active {
	opacity: 0;
	transform: translate(50px, 0);
}

.slide-left-leave-active,
.slide-right-enter {
	opacity: 0;
	transform: translate(-50px, 0);
}

@media all and (max-width: 800px){
	.other-company img {
		max-height: 16vh;
		width: auto;
	}
}
</style>

<script>
import works from '~/content/work.json';
import Detail from '~/components/work/Detail';
import BackButton from '~/components/BackButton.vue';

export default {
	// Transition can be slide right/left depending the direction
	transition(to, from) {
		if (!from || from.params.slug === undefined) {
			return '';
		}
		const toIndex = works.findIndex(item => {
			return item.slug === to.params.slug;
		});
		const fromIndex = works.findIndex(item => {
			return item.slug === from.params.slug;
		});
		return toIndex < fromIndex ? 'slide-right' : 'slide-left';
	},
	components: {
		'work-detail': Detail,
		'aya-back': BackButton
	},
	data() {
		return {
			prevButtonHide: false,
			nextButtonHide: false,
			showBgCompany: false
		};
	},
	computed: {
		work() {
			const currentWork = works.findIndex(item => item.slug === this.$route.params.slug);
			return works[currentWork];
		}
	},
	created() {
		const currentWork = works.findIndex(item => item.slug === this.$route.params.slug);
		this.nextButtonHide = currentWork === (works.length - 1);
		this.prevButtonHide = currentWork === 0;
	},
	methods: {
		go(direction) {
			if (this.prevButtonHide && direction < 0) {
				return '';
			}
			if (this.nextButtonHide && direction > 0) {
				return '';
			}
			const newWorkIndex = works.findIndex(item => item.slug === this.work.slug) + direction;
			const newWork = works[newWorkIndex];
			return `/work/${newWork.slug}`;
		}
	}
};
</script>
