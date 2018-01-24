<template>
	<section>
		<aya-back/>
		<div class="fixed-container">
			<h1>Contact <aya-kanji/> AYA</h1>
			<h2>Un besoin, une idée ? Parlons-en !</h2>
			<aya-social/>
			<h2>Zenika, c'est aussi :</h2>
			<aya-other/>
		</div>
	</section>
</template>

<style scoped>
.fixed-container {
	max-width: 1000px;
	text-align: center;
	margin: 150px auto;
}

h1 {
	margin-bottom: 20px;
	font-size: 80px;
	font-weight: lighter;
}

h1>>>svg {
	display: inline-block;
	height: 120px;
	width: 120px;
	background-color: white;
	fill: black;
	vertical-align: middle;
}

h2 {
	font-size: 30px;
	font-weight: lighter;
}
</style>

<script>
import BackButton from '~/components/BackButton.vue'
import Kanji from '~/components/Kanji.vue'
import Social from '~/components/contact/Social.vue'
import Other from '~/components/contact/Other.vue'

export default {
	components: {
		'aya-back': BackButton,
		'aya-kanji': Kanji,
		'aya-social': Social,
		'aya-other': Other
	}
}
</script>
