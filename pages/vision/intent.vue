<template>
	<aya-bg image="/photos/cell.jpg">
		<aya-block>
			<p>
				Notre intention : créer de nouvelles
				<br>
				interfaces <strong>belles</strong>, <strong>utiles</strong> et <strong>performantes</strong>
			</p>
		</aya-block>
		<mention-author name="Rodion Kutsaev" surname="@frostroomhead"/>
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
