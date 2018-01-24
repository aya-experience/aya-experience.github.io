<template>
	<aya-bg image="/photos/craft.jpg">
		<aya-block>
			<p>
				Nous développons avec la passion du travail <strong>bien fait</strong>
			</p>
		</aya-block>
	</aya-bg>
</template>

<style scoped>
>>> .slide-text-block {
	left: 100px;
	bottom: 50px;
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
