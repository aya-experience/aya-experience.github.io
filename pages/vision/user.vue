<template>
	<aya-bg image="/photos/woman.jpg">
		<aya-block>
			<p>
				Tous les acteurs d'un projet
				<br>
				sont <strong>ensemble</strong> au service de l'<strong>utilisateur</strong>
			</p>
			<p>
				Client & Designer & Développeur
			</p>
		</aya-block>
	</aya-bg>
</template>

<style scoped>
>>> .slide-text-block {
	width: 700px;
	left: calc(50% - 350px);
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
