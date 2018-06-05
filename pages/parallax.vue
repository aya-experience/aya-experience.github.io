<!--eslint-disable-->
<template>
	<div class="parallax">
		<div id="intro" :class="debug ? 'parallax__group__debug' : ''" class="parallax__group">
			<div class="intro parallax__layer parallax__layer--base">
				<img class="intro__line intro__line-left" src="/agence/line.svg">
				<p class="intro__text">Nous proposons une démarche complète pour <br> la réalisation de votre produit numérique</p>
				<img class="intro__line intro__line-rigth" src="/agence/line.svg">
			</div>
			<div :class="debug ? 'parallax__layer__debug' : ''" class="parallax__layer parallax__layer--nebu1">
				<img class="intro__img" src="/agence/nebuleuse1.png">
			</div>
			<div :class="debug ? 'parallax__layer__debug' : ''" class="parallax__layer parallax__layer--nebu2">
				<img class="intro__img" src="/agence/nebuleuse2.png">
			</div>
		</div>
		<div id="zenika" :class="debug ? 'parallax__group__debug' : ''" class="parallax__group">
			<div :class="debug ? 'parallax__layer__debug' : ''" class="zenika  parallax__layer parallax__layer--base">
				<img class="zenika__logo" src="/agence/logo_zenika.svg">
				<img class="cadre" src="/agence/cadre.svg">
				<p data-scroll="toggle(.fromTopIn, .fromTopOut) centerHorizontal" class="zenika__text">
					Une marque de Zenika, prénom féminin multiculturelle, en arabe: <br>
					miracle, en japonais : « une certaine forme d'art ». Nom court à <br>
					sonorité japonaise pour faire le lien avec Zenika, écrit en japonais<br>
					avec le kanji du logo, kanji est un caractère ascii
				</p>
			</div>
			<div :class="debug ? 'parallax__layer__debug' : ''" class="parallax__layer parallax__layer--earth">
				<img class="earth" src="/agence/terre.png">
			</div>
			<div :class="debug ? 'parallax__layer__debug' : ''" class="parallax__layer parallax__layer--moon">
				<img class="moon" src="/agence/lune.png">
			</div>
			<div :class="debug ? 'parallax__layer__debug' : ''" class="parallax__layer parallax__layer--stars">
				<img class="stars" src="/agence/stars.svg">
			</div>
		</div>
		<div id="aya" :class="debug ? 'parallax__group__debug' : ''" class="parallax__group">
			<div :class="debug ? 'parallax__layer__debug' : ''" class="aya parallax__layer parallax__layer--base">
				<img class="aya__logo" src="/agence/logo_aya.svg">
				<img class="cadre" src="/agence/cadre.svg">
				<p data-scroll="toggle(.fromTopIn, .fromTopOut) centerHorizontal" class="aya__text">Nous sommes une équipe dans la société, qui réunie la <br>
					spécialité autour de l'interface utilisateur. Il n’y a pas <br>
					de rupture entre les dev et les designers. Nous sommes <br>
					actuellement à lyon et à paris mais peut intervenir dans <br>
					toutes les agences
				</p>
			</div>
		</div>
	</div>
</template>

<style>
html {
	background-color: rgb(3, 0, 32) !important;
}

.parallax {
	perspective: 100px;
	height: 100vh;
	width: 300%;
	overflow-x: auto;
	overflow-y: hidden;
	display: flex;
	scroll-behavior: smooth;
}

.parallax__group {
  position: relative;
  height: 100vh;
  width: 100vw;
  transform-style: preserve-3d;
}

.parallax__group__debug {
	transform: translate3d(875px, 0, -800px) rotateX(50deg);
}

.parallax__layer {
	position: absolute;
	display: flex;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
}

.parallax__layer__debug {
	box-shadow: 0 0 0 2px #000;
    opacity: 0.7;
}
.parallax__layer--base {
	transform: translateZ(0);
}

.parallax__layer--earth {
	transform: translateZ(-90px) scale(1.9);
    height: 100vh;
}

.parallax__layer--moon {
	transform: translateZ(-75px) scale(1.75);
    height: 100vh;
}

.parallax__layer--nebu1 {
	transform: translateZ(-20px) scale(1.2);
    height: 100vh;
	left: -20vw;
}

.parallax__layer--nebu2 {
	transform: translateZ(-60px) scale(1.6);
    height: 100vh;
	left: -60vw;
}

.parallax__layer--stars {
	transform: translateZ(-400px) scale(5);
	height: 100vh;
	opacity: 0.8;
	width: 100vw;
	/* transform-origin: 90% center; */
}

.parallax__layer--deep {
	transform: translateZ(-50px) scale(1.5);
    height: 100vh;
	width: 100vw;
}

.parallax__layer--wrapper {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}

.stars {
	object-fit: cover;
	height: 100vh;
	width: 100vw;
}

.intro {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.intro__img {
	position: absolute;
	object-fit: cover;
	height: 100%;
	width: 80%;
	opacity: 0.33;
}

.intro__text {
	font-size: 2.7rem;
	text-align: center;
}

.intro__line-left {
	position: relative;
	left: -16vw;
	top: 1vh;
}

.intro__line-rigth {
	position: relative;
	left: 16vw;
	top: -1vh;
}

.zenika {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.cadre {
	position: relative;
	top: 4vh;
	height: 20vh;
	width: auto;
}

.zenika__text {
	position: relative;
	font-size: 1.8rem;
	font-weight: 100;
	letter-spacing: 2px;
	text-align: center;
	top: -12vh;
}

.aya {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.aya__text {
	position: relative;
	font-size: 1.6rem;
	font-weight: 300;
	letter-spacing: 2px;
	text-align: center;
	top: -12vh;
}

.earth {
	position: relative;
	height: 30vh;
	width: auto;
	left: 30%;
	top: 3vh;
}

.moon {
	position: relative;
	height: 15vh;
	width: auto;
	left: 50%;
	top: 3vh;
}

.hidden {
  transition: opacity 1s ease;
  opacity: 0.0;
}

.visible {
  transition: opacity 1s ease;
  opacity: 1.0;
}

.fromTopIn
{
	transition: transform 1.0s ease, opacity 1.0s ease;

	transform: translate(0,0);
	opacity: 1.0;
}

.fromTopOut
{
	transition: transform 1.0s ease, opacity 1.0s ease;

	transform: translate(0,-10px);
	opacity: 0.0;
}

@media all and (max-width: 800px){
	.intro__text {
		font-size: 1.75rem;
	}

	.intro__line {
		height: 0.4vh;
		width: auto;
	}

	.intro__line-left {
		left: -28vw;
	}

	.intro__line-rigth {
		left: 28vw;
	}

	.zenika__text {
		top: 0;
		font-size: 1.2rem;
		letter-spacing: 0.5px;
	}

	.aya__text {
		top: 0;
		font-size: 1.2rem;
		letter-spacing: 0.5px;
	}

	.cadre {
		top: 10vh;
		height: 11vh;
	}

	.intro__img {
		width: auto;
	}
}
</style>

<script>
import ScrollTrigger from 'scrolltrigger-classes';
export default {
	data() {
		return {
			debug: false
		};
	},
	mounted() {
		console.log(new ScrollTrigger());
		(() => new ScrollTrigger())();
		document.addEventListener('keydown', event => {
			if (event.key === 'd') {
				this.debug = !this.debug;
			}
		});
	}
};
</script>

