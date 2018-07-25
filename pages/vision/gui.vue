<template>
	<aya-bg image="/photos/gui.jpg">
		<aya-block>
			<p>Le monde numérique devient omniprésent</p>
			<p>
				Les <strong>interfaces</strong> entre les <strong>hommes</strong> et les <strong>machines</strong>
				<br>
				n'ont jamais eu un rôle aussi important
			</p>
		</aya-block>
		<mention-author name="Francisco Gomes" surname="@thepip"/>
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
import Copyright from '~/components/slides/Copyright';

export default {
	components: {
		'aya-bg': Background,
		'aya-block': TextBlock,
		'mention-author': Copyright
	},
	head() {
		return {
			link: [{ rel: 'prefetch', href: '/photos/cell.jpg' }]
		};
	}
};
</script>
