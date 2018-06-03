<template>
	<aya-bg :darken="0.6" image="/photos/innovation.jpg">
		<aya-block>
			<p>
				Nous apportons la <strong>démarche</strong>
				<br>
				et la <strong>créativité</strong> pour comprendre le besoin
				<br>
				et lui apporter la bonne réponse
			</p>
		</aya-block>
	</aya-bg>
</template>

<style scoped>
>>> .slide-text-block {
	right: 100px;
	top: 50px;
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
