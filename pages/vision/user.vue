<template>
	<aya-bg :rot="160" :darken="1" image="/photos/woman.jpg">
		<aya-block>
			<section>
				<p>
					Tous les acteurs d'un projet
					<br>
					sont <strong>ensemble</strong> au service de l'<strong>utilisateur</strong>
				</p>
				<h1>
					Client & Designer & Développeur
				</h1>
			</section>
		</aya-block>
		<mention-author name="Ari He" surname="@talescrow"/>
	</aya-bg>
</template>

<style scoped>
>>> .slide-text-block {
	width: 700px;
	left: calc(50% - 350px);
	bottom: 50px;
}

h1 {
	text-align: center;
	font-size: 3rem;
	font-weight: lighter;
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
