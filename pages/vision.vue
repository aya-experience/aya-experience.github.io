<template>
	<div>
		<aya-back/>
		<mentions-link/>
		<aya-slider
			:slides="[
				'intro',
				'gui',
				'intent',
				'user',
				'concept',
				'creative',
				'craft',
				'tech',
				'workflow'
			]"
			path="/vision"
		>
			<nuxt-child/>
		</aya-slider>
	</div>
</template>

<style scoped>
.page-enter-active, .page-leave-active {
  transition: opacity .5s
}
.page-enter, .page-leave-active {
  opacity: 0
}
</style>

<script>
import BackButton from '~/components/BackButton.vue';
import Slider from '~/components/slides/Slider.vue';
import MentionsButton from '~/components/MentionsButton.vue';

export default {
	components: {
		'aya-back': BackButton,
		'aya-slider': Slider,
		'mentions-link': MentionsButton
	}
};
</script>
