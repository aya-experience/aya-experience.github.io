<template>
	<div class="container" :style="{ backgroundColor: work.bgColor }">
		<work-bg v-show="showBgCompany"
			@hideWork="hideWork"
			:menuBg="work.menu_bg.url"
			:projectName="work.project_name">
		</work-bg>
		
		<div v-show="!showBgCompany">
			<work-detail @clickImage="displayWork" :work="work" :titleColor="work.titleColor" ></work-detail>
			<div class="other-company">
				<img v-show="!prevButtonHide" src="~/assets/icons/arrow.svg"
					class="reversed-arrow"
					@click="go(-1)"
					:class="work.arrowInvert"
				>
				<p :style="{ color: work.titleColor }">OTHER COMPANY</p>
				<img v-show="!nextButtonHide"
					src="~/assets/icons/arrow.svg"
				 	@click="go(1)"
					:class="work.arrowInvert"
				>
			</div>
		</div>
    </div>
</template>

<style scoped>

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
	margin-right: 3px;
}

normal {
	filter: invert(0%);
}

.inverted {
	filter: invert(100%);
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
import works from '~/content/work.json'
import Detail from '~/components/work/Detail'
import DetailBackground from '~/components/work/DetailBackground'

export default {
	// Transition can be slide right/left depending the direction
	transition (to, from) {
		if (!from) return 'slide-left'
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
	methods: {
		go (direction) {
			const newWorkIndex = works.findIndex((item) => { return item.slug === this.work.slug }) + direction
			const newWork = works[newWorkIndex]
			this.$router.push({ path: `/work/${newWork.slug}` })
		},
		displayWork () {
			this.showBgCompany = true
		},

		hideWork () {
			this.showBgCompany = false
		}
	},
	computed: {
		work () {
			const currentWork = works.findIndex((item) => { return item.slug === this.$route.params.slug })
			this.nextButtonHide = currentWork === (works.length - 1)
			this.prevButtonHide = currentWork === 0
			return works[currentWork]
		}
	}
}
</script>