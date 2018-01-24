<template>
	<aya-bg image="/photos/cell2.jpg">
		<aya-block>
			<p>
				Nous mettons en oeuvre les <strong>dernières technologies</strong>
				<br>
				pour répondre aux enjeux d'aujourd'hui
			</p>
		</aya-block>
	</aya-bg>
</template>

<style scoped>
>>> .slide-text-block {
	left: 100px;
	top: 50px;
}
</style>

<script>
import Background from '~/components/slides/Background'
import TextBlock from '~/components/slides/TextBlock'

export default {
	components: {
		'aya-bg': Background,
		'aya-block': TextBlock
	}
}
</script>
