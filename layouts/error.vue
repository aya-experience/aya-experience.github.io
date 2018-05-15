<template>
	<div class="container">
		<div class="wrapper" id="scene">
			<div class="astro-container" data-depth="0.6">
				<img class="astro" src="/404/ayastronaut.svg">
			</div>
			<div data-depth="0.3" class="block-text">
				<h1 class="block-text__title">404</h1>
				<img class="block-text__img" src="/404/line.png">
				<p class="block-text__text">Désolé, vous avez été propulsé <br> au mauvais endroit...</p>
			</div>
		</div>
	</div>
</template>

<style scoped>
.container {
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	height: 100%;
	width: 100%;
	background-image: url("/404/fond.png");
	background-color: #242021;
}

.wrapper {
	height: 80vh;
	width: 80vw;
	display: flex;
	justify-content: center;
	align-items: center;
}

.block-text {
	display: flex;
	flex-direction: column;
	position: relative !important;
	top: -100px !important;
	left: 110px !important;
}

@font-face {
    font-family: 'Press Start 2P';
	font-style: normal;
	font-weight: 1000;
    src:  url(https://fonts.gstatic.com/s/pressstart2p/v6/e3t4euO8T-267oIAQAu6jDQyK3nVivNm4I81.woff2) format('woff2');
}

.block-text__title {
	font-family: 'Press Start 2P';
	font-size: 6rem;
    margin-bottom: 4px;
    margin-top: 0;
}

.block-text__text {
	font-family: 'Courier New', Courier, monospace;
	font-size: 3rem;
    margin-top: -45px;
    margin-bottom: 0;
}

.block-text__img {
	height: 70px;
	width: auto;
	left: -110px;
	position: relative;
}

.astro {
    height: 45vh;
    width: auto;
}

.astro-container {
	top: 100px !important;
}

@media all and (max-width: 800px){
	.wrapper {
		flex-direction: column-reverse;
		justify-content: space-around;
	}

	.block-text {
		top: 0 !important;
		left: 0 !important;
	}

	.block-text__img {
		display: none;
	}

	.block-text__title {
		margin: auto;
	}

	.block-text__text{
		margin: auto;
	}

	.astro-container {
		top: 0 !important;
	}
}
</style>

<script>
import Parallax from 'parallax-js';

export default {
	mounted() {
		const scene = document.getElementById('scene');
		(() => new Parallax(scene))();
	}
};
</script>
