<template>
	<div>
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
div {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
}

p {
	text-align: center;
	font-size: 25px;
	font-weight: lighter;
}

div >>> svg {
	height: 50vh;
	width: 50vh;
	fill: black;
	background-color: white;
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
