<template>
	<div>
		<aya-back/>
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

export default {
	components: {
		'aya-back': BackButton,
		'aya-slider': Slider
	}
}
</script>
