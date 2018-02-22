<template>
	<aya-bg image="/photos/art.jpg">
		<aya-block>
			<p>
				Nous vous accompagnons
				<br>
				lors de la <strong>phase de conception</strong>
			</p>
		</aya-block>
	</aya-bg>
</template>

<style scoped>
>>> .slide-text-block {
	right: 100px;
	bottom: 50px;
}
</style>

<script>
import Background from '~/components/slides/Background';
import TextBlock from '~/components/slides/TextBlock';

export default {
	components: {
		'aya-bg': Background,
		'aya-block': TextBlock
	}
};
</script>
