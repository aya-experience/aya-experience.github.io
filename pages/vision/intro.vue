<template>
	<div class="container">
		<img class="stars" src="/photos/stars.png">
		<section>
			<p class="head">
				Vous cherchez une écoute particulière
				<br>
				pour vos projets numériques
			</p>
			<section class="middle">
				<p class="middle--text">Les profils de notre agence :</p>
				<h1 class="middle--title">artisans du web</h1>
			</section>
			<p class="bottom">
				Nous apportons la synergie des mondes du code et du design
				<br>
				pour apporter une réponse complète et aboutie.
			</p>
		</section>
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
	margin: 20px 5px;
}

.head {
	font-size: 3rem;
}

.middle {
	display: flex;
	font-weight: 100;
	font-size: 3rem;
	align-items: center;
}

.middle--title {
	font-size: 3rem;
	font-weight: 100;
	text-align: center;
}

.bottom {
	font-weight: lighter;
	font-size: 2rem;
}

.stars {
	position: absolute;
	height: 150vh;
	width: 150vw;
	z-index: -1;
	object-fit: cover;
	animation: rotation 150s infinite linear;
}

@keyframes rotation {
	from {
		transform: rotate(0);
	}
	to {
		transform: rotate(359deg)
	}
}

@media (max-width: 600px) {
	.middle {
		display: initial;
	}
	p {
		font-size: 20px;
	}

	div >>> svg {
		height: 50vw;
		width: 50vw;
	}

	.stars {
		height: 50vh;
		width: 50vw;
	}
}
</style>

<script>
import Kanji from '~/components/Kanji';

import isMobile from '~/utils/test-mobile';

export default {
	components: {
		'aya-kanji': Kanji
	},
	methods: {
		isMobile
	}
};
</script>
