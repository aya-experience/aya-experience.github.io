<template>
	<div>
		<aya-back/>
		<mentions-link/>
		<aya-slider
			path="/vision"
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
		>
			<nuxt-child/>
		</aya-slider>
	</div>
</template>

<script>
import BackButton from '~/components/BackButton.vue'
import Slider from '~/components/slides/Slider.vue'
import MentionsButton from '~/components/MentionsButton.vue'

export default {
	components: {
		'aya-back': BackButton,
		'aya-slider': Slider,
		'mentions-link': MentionsButton
	}
}
</script>
