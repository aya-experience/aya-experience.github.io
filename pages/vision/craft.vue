<template>
	<aya-bg :rot="180" :darken="0.8" image="/photos/craft.jpg">
		<aya-block>
			<p>
				Nous développons avec la passion du travail <strong>bien fait</strong>
			</p>
		</aya-block>
		<mention-author name="Christopher Burns" surname="@christopher_burns"/>
	</aya-bg>
</template>

<style scoped>
>>> .slide-text-block {
	left: 100px;
	bottom: 50px;
}
</style>

<script>
import Background from '~/components/slides/Background';
import TextBlock from '~/components/slides/TextBlock';
import Copyright from '~/components/slides/Copyright';

export default {
	components: {
		'aya-bg': Background,
		'aya-block': TextBlock,
		'mention-author': Copyright
	}
};
</script>
