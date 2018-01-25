<template>
	<div class="container">
		<p>Vous cherchez une écoute particulière pour vos projets numériques</p>
		<p>Les profils de notre agence : artisans du web</p>
		<p>
			Nous apportons la synergie des mondes du code et du design
			<br>
			pour apporter une réponse complète et aboutie.
		</p>
		<aya-kanji/>
	</div>
</template>

<style scoped>
div.container {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	padding: 60px auto;
}

p {
	text-align: center;
	font-size: 25px;
	font-weight: lighter;
	margin: 20px;
}

div >>> svg {
	height: 50vh;
	width: 50vh;
	fill: black;
	background-color: white;
}

@media (max-width: 600px) {
	p {
		font-size: 20px;
	}

	div >>> svg {
		height: 50vw;
		width: 50vw;
	}
}
</style>

<script>
import Kanji from '~/components/Kanji'

export default {
	components: {
		'aya-kanji': Kanji
	}
}
</script>
