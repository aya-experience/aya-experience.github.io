<template>
	<aya-bg image="/photos/innovation.jpg" :darken="0.8" :rot="15">
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
	top: 70px;
}
</style>

<script>
import Background from '~/components/slides/Background';
import TextBlock from '~/components/slides/TextBlock';

export default {
	components: {
		'aya-bg': Background,
		'aya-block': TextBlock
	},
	head() {
		return {
			link: [{ rel: 'prefetch', href: '/photos/craft.jpg' }]
		};
	}
};
</script>
