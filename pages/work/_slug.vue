<template>
	<div class="container" :style="{ backgroundColor: work.bgColor }">
		<work-bg 
			v-show="showBgCompany"
			@hideWork="hideWork"
			:menuBg="work.menuBg.url"
			:projectName="work.projectName"
			:bgColor="work.bgColor"
		/>
		
		<div v-show="!showBgCompany">
			<work-detail @clickImage="displayWork" :work="work" :titleColor="work.titleColor" />
			<div class="other-company">
				<nuxt-link class="link" v-show="!prevButtonHide" :to="go(-1)">
					<img src="~/assets/icons/arrow.svg" class="reversed-arrow" :class="work.arrowInvert">
				</nuxt-link>
				<p :style="{ color: work.titleColor }">OTHER COMPANY</p>
				<nuxt-link class="link" v-show="!nextButtonHide" :to="go(1)">
					<img src="~/assets/icons/arrow.svg" :class="work.arrowInvert">
				</nuxt-link>
			</div>
		</div>
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
	margin-right: 9vh;
	margin-top: 2vh;
	justify-content: flex-end;
	font-size: 1.5rem;
	align-items: flex-start;
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
	min-height: 140vh;
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
import works from '~/content/work.json'
import Detail from '~/components/work/Detail'
import DetailBackground from '~/components/work/DetailBackground'

export default {
	// Transition can be slide right/left depending the direction
	transition (to, from) {
		if (!from || from.params.slug === undefined) return ''
		const toIndex = works.findIndex((item) => { return item.slug === to.params.slug })
		const fromIndex = works.findIndex((item) => { return item.slug === from.params.slug })
		return toIndex < fromIndex ? 'slide-right' : 'slide-left'
	},
	components: {
		'work-detail': Detail,
		'work-bg': DetailBackground
	},
	data () {
		return {
			prevButtonHide: false,
			nextButtonHide: false,
			showBgCompany: false
		}
	},
	computed: {
		work () {
			const currentWork = works.findIndex((item) => { return item.slug === this.$route.params.slug })
			return works[currentWork]
		}
	},
	created () {
		const currentWork = works.findIndex((item) => { return item.slug === this.$route.params.slug })
		this.nextButtonHide = currentWork === (works.length - 1)
		this.prevButtonHide = currentWork === 0
	},
	methods: {
		go (direction) {
			if (this.prevButtonHide && direction < 0) { return '' }
			if (this.nextButtonHide && direction > 0) { return '' }
			const newWorkIndex = works.findIndex((item) => { return item.slug === this.work.slug }) + direction
			const newWork = works[newWorkIndex]
			return `/work/${newWork.slug}`
		},
		displayWork () {
			this.showBgCompany = true
		},

		hideWork () {
			this.showBgCompany = false
		}
	}
}
</script>