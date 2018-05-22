<template>
	<div>
		<img id="stars" class="stars" src="/agence/stars.svg">
		<div id="container" class="container">
			<div id="intro" class="intro">
				<img class="intro__img" src="/agence/nebuleuse.png">
				<img class="intro__line intro__line-left" src="/agence/line.svg">
				<p class="intro__text">Nous proposons une démarche complète pour <br> la réalisation de votre produit numérique</p>
				<img class="intro__line intro__line-rigth" src="/agence/line.svg">
			</div>
			<div id="zenika" class="zenika">
				<div id="moon" class=" parallax moon">
					<div class="parallax__group">
						<img class="parallax__layer parallax__layer--back" src="/agence/terre.png">
						<img class="parallax__layer parallax__layer--base zenika_moon" src="/agence/lune.png">
					</div>
				</div>
				<img class="zenika__logo" src="/agence/logo_zenika.svg">
				<img class="cadre" src="/agence/cadre.svg">
				<p class="zenika__text">Une marque de Zenika, prénom féminin multiculturelle, en arabe: <br>
					miracle, en japonais : « une certaine forme d'art ». Nom court à <br>
					sonorité japonaise pour faire le lien avec Zenika, écrit en japonais<br>
					avec le kanji du logo, kanji est un caractère ascii
				</p>
			</div>
			<div id="aya" class="aya">
				<img class="aya__logo" src="/agence/logo_aya.svg">
				<img class="cadre" src="/agence/cadre.svg">
				<p class="aya__text">Nous sommes une équipe dans la société, qui réunie la <br>
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
	background-color: #00082C !important;
}

.stars {
	position: absolute;
	height: 100%;
	width: 300%;
	object-fit: cover;
	left: 0 !important;
}

.moon {
	display: flex;
	position: relative;
	width: 30%;
	left: 50vw;
	border: 3px solid red;
}

.moon img {
	position: absolute;
}

.zenika_moon {
	object-fit: contain;
	align-self: flex-start;
	position: relative;
	left: 190px;
}

.earth {
	position: relative;
	left: 30%;
}

.container {
	height: 100vh;
	width: 300%;
	display: flex;
	/* border: 2px solid green; */
}
.intro {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100%;
	/* border: 2px solid red; */
}

.intro__img {
	position: absolute;
	object-fit: cover;
	height: 100%;
	width: 100%;
}

.intro__text {
	z-index: 1;
	font-size: 2.75rem;
	text-align: center;
}

.intro__line-left {
	z-index: 1;
	position: relative;
	left: -16vw;
	top: 1vh;
}

.intro__line-rigth {
	z-index: 1;
	position: relative;
	left: 16vw;
	top: -1vh;
}

.zenika {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100%;
	/* border: 2px solid yellow; */
}

.cadre {
	position: relative;
	top: 4vh;
	height: 20vh;
	width: auto;
}

.zenika__text {
	position: relative;
	font-size: 1.6rem;
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
	height: 100%;
	width: 100%;
	/* border: 2px solid purple; */
}

.aya__text {
	position: relative;
	font-size: 1.6rem;
	font-weight: 300;
	letter-spacing: 2px;
	text-align: center;
	top: -12vh;
}

.parallax {
  perspective: 1px;
  height: 100vh;
  overflow-x: auto;
  overflow-y: hidden;
}

.parallax__group {
  position: relative;
  height: 100vh;
  transform-style: preserve-3d;
}

.parallax__layer {
  position: absolute;
  padding: 0 100vw;
  display: flex;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.parallax__layer--base {
  transform: translateZ(-1px);
  display: flex;
  justify-content: center;
  align-items: center;
  top: -150px;
}
.parallax__layer--back {
  transform: translateZ(-3px) scale(2);
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
</script>
