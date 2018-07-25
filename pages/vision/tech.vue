<template>
	<aya-bg :darken="0.8" image="/photos/tech.jpg">
		<aya-block>
			<p>
				Nous mettons en oeuvre les <strong>dernières technologies</strong>
				<br>
				pour répondre aux enjeux d'aujourd'hui
			</p>
		</aya-block>
		<mention-author name="Asoggetti" surname="@asoggetti"/>
	</aya-bg>
</template>

<style scoped>
>>> .slide-text-block {
	width: 700px;
	left: calc(50% - 350px);
	top: 70px;
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
