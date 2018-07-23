<template>
	<div ref="container" class="container">
		<aya-back/>
		<div id="zenika" class="content fixe-content" :class="isZenikaVisible ? 'visible' : 'invisible'">
			<zenika-logo/>
			<cadre :show="isZenikaVisible">
				<p class="content__text">
					AYA est une équipe de Zenika. Nous apportons notre expertise
					de la création d’interface au sein d’un groupe. Nous adressons
					toutes les problématiques de l’informatique moderne :
					Big Data, Conseil, DevOps, IA, méthodes agiles...
					AYA, c’est la synergie du code et du design pour assurer
					une expertise complète dans la création d’interfaces.
				</p>
			</cadre>
		</div>
		<div id="aya" class="content fixe-content" :class="isAyaVisible ? 'visible' : 'invisible'">
			<img class="content__img-aya" src="/agence/logo_aya.svg">
			<cadre :show="isAyaVisible">
				<p class="content__text">
					AYA est la digital agency de Zenika. Aya est un prénom
					féminin issu de cultures différentes : en arabe, il signifie «miracle»,
					en japonais, il représente une certaine forme d’art.
					Nom court inspiré du japonais pour faire le lien avec Zenika,
					il suffit d’un seul kanji pour l’écrire, c’est notre logo.
				</p>
			</cadre>
		</div>
		<div id="slides" class="slides">
			<div class="slide" id="slide-1">
				<div class="slide__bg"/>
				<div class="slide__content">
					<div class="slide__text content">
						<img class="intro__line intro__line-left" src="/agence/line.svg">
						<p class="intro__text">Nous proposons une démarche complète pour la réalisation de votre produit numérique</p>
						<img class="intro__line intro__line-rigth" src="/agence/line.svg">
					</div>
					<div class="slide__nebu1">
						<img class="intro__img" src="/agence/nebuleuse1.png">
					</div>
					<div class="slide__nebu2">
						<img class="intro__img" src="/agence/nebuleuse2.png">
					</div>
				</div>
			</div>
			<div class="slide" id="slide-2">
				<div class="slide__bg slide__bg-rotate"/>
				<div class="slide__content">
					<div class="parallax__layer--earth">
						<img id="earth" class="earth" src="/agence/terre.png">
					</div>
					<div class="parallax__layer--moon">
						<img id="moon" class="moon" src="/agence/lune.png">
					</div>
					<div class="anchor anchor__zenika" data-scroll="toggle(.visible, .invisible) centerHorizontal" data-scroll-showCallback="showZenikaSlide" data-scroll-hideCallback="hideZenikaSlide"/>
				</div>
			</div>

			<div class="slide-aya" id="slide-3">
				<div class="slide__bg slide__bg-1"/>
				<div class="anchor" :data-scroll="ayaAnchorOffset" data-scroll-showCallback="hideZenikaSlide" data-scroll-hideCallback="showZenikaSlide"/>
			</div>
		</div>
	</div>
</template>

<style>
	html, body {
		height: 100%;
		overflow: hidden;
	}

	body {
		scroll-behavior: smooth;
		overflow-y: hidden;
		background-color: rgb(3, 0, 32) !important;
		transform: translateZ(0); /* Fix paint issues in Edge && Safari H/W acceleration */
	}
</style>

<style scoped>

	/* slide layout
	--------------------------------------------- */

	.slide {
		position: relative;
		padding: 8% 0;
		width: 100%;
		height: 100%;
		display: inline-block;
		vertical-align: middle;
		white-space: normal;
	}
	.slide-aya {
		position: relative;
		padding: 8% 0;
		width: 30%;
		height: 100%;
		display: inline-block;
		vertical-align: middle;
		white-space: normal;
	}
	.slide__content {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
	}
	.slides {
		white-space: nowrap;
		height: 100%;
	}
	.slide__bg {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: -1;

		background-image: url('/agence/stars.svg');
	}
	.slide__bg-rotate {
		transform: rotate(180deg) !important;
	}

	/* parallax
	--------------------------------------------- */

	.slides {
		position: absolute;
		overflow-x: auto;
		overflow-y: hidden;
		perspective: 300px;
		scroll-behavior: smooth;
		width: 100%;
	}
	.slide, .slide__content {
		transform-style: preserve-3d;
	}
	.slide__nebu1 {
		transform: translateZ(160px) scale(.5);

		position: absolute;
		height: 100vh;
		width: 100vw;
	}
	.slide__nebu2 {
		transform: translateZ(90px) scale(.7);

		position: absolute;
		height: 100vh;
		width: 100vw;
	}
	.parallax__layer--earth {
		transform: translateZ(60px) scale(0.8);

		height: 100vh;
	}
	.parallax__layer--moon {
		transform: translateZ(100px) scale(0.8);

		height: 100vh;
	}
	.slide__text {
		transform: translateZ(180px) scale(.4);

		height: 100vh;
		font-size: 2rem;
		text-align: center;
	}

	/* content
	--------------------------------------------- */

	.intro__img {
		position: absolute;
		object-fit: cover;
		height: 100%;
		width: 100%;
		opacity: 0.33;
	}
	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.fixe-content {
		position: fixed;
		height: 100%;
		margin-top: 10vh;
		width: 100%;
		z-index: -1;
		opacity: 0;
	}
	.content__text {
		position: relative;
		font-size: 1.8rem;
		font-weight: 100;
		letter-spacing: 2px;
		text-align: center;
		margin-top: -60px;
		max-width: 40vw;
	}
	.content__img-aya {
		height: 20vh;
		width: auto;
	}
	.earth {
		position: relative;
		height: 30vh;
		width: auto;
		top: 3vh;
		opacity: 1;
	}
	.moon {
		position: relative;
		height: 15vh;
		width: auto;
		top: 10vh;
		left: -6vw;
		opacity: 1;
	}
	.intro__line {
		height: 0.4vh;
		width: auto;
	}
	.intro__line-left {
		position: relative;
		left: -16vw;
	}
	.intro__line-rigth {
		position: relative;
		top: 5px;
		left: 16vw;
	}
	.anchor::before {
		content: ".";
	}
	.anchor__zenika {
		position: relative;
		left: -50vw;
	}
	.intro__text {
		margin: 10px 5px;
		text-align: center;
		font-size: 3rem;
		max-width: 35vw;
	}

	/* Animations
	--------------------------------------------- */

	.visible {
		transition: opacity 3s;
		opacity: 1;
	}
	.invisible {
		transition: opacity 1.2s;
		opacity: 0;
	}

	/* responsive
	--------------------------------------------- */

	@media all and (max-width: 800px) {
		.content__text {
			align-self: center;
			max-width: 80vw;
		}
		.intro__text {
			max-width: 100vw;
			font-size: 2rem;
		}
		.aya__text {
			top: 0;
			font-size: 1.2rem;
			letter-spacing: 0.5px;
		}
		.slide__text {
			font-size: 2rem;
		}
		.intro__line-left {
			left: 0;
			top: 0;
		}
		.intro__line-rigth {
			left: 0;
			top: 0;
		}
		.intro__img {
			width: auto;
			transform: translate(-30%, 0);
		}
		.zenika {
			transform: scale(0.75);
		}
	}

	@media all and (min-width: 1800px) {
		.content__text {
			font-size: 2.8rem;
		}
	}

</style>

<script>
import ScrollTrigger from 'scrolltrigger-classes';
import Cadre from '~/components/agence/cadre.vue';
import BackButton from '~/components/BackButton.vue';
import logoZenika from '~/components/agence/logoZenika.vue';

export default {
	components: {
		Cadre,
		'aya-back': BackButton,
		'zenika-logo': logoZenika
	},
	data() {
		return {
			isZenikaVisible: false,
			isAyaVisible: false,
			trigger: null,
			scrollDelta: 0
		};
	},
	computed: {
		ayaAnchorOffset() {
			if (process.browser) {
				const offset = 'centerHorizontal';
				return `toggle(.visible, .invisible) ${offset}`;
			}
			return '';
		}
	},
	mounted() {
		this.trigger = new ScrollTrigger({}, document.querySelector('#slides'), document.querySelector('#slides'));
		const scope = {};

		this.trigger.callScope = scope;
		scope.showZenikaSlide = () => this.showZenikaSlide();
		scope.hideZenikaSlide = () => this.hideZenikaSlide();

		this.$refs.container.addEventListener('wheel', this.handleWheel);
		this.$refs.container.addEventListener('touchstart', this.swipe);
	},
	beforeDestroy() {
		this.$refs.container.removeEventListener('wheel', this.handleWheel);
		this.$refs.container.removeEventListener('touchstart', this.swipe);

		this.trigger.destroyAll();
	},
	methods: {
		handleWheel(event) {
			this.scrollDelta = event.deltaX;
		},
		showZenikaSlide() {
			this.isZenikaVisible = true;
			this.isAyaVisible = false;
		},
		hideZenikaSlide() {
			if (this.scrollDelta > 0) {
				this.isAyaVisible = true;
			} else {
				this.isAyaVisible = false;
			}

			this.isZenikaVisible = false;
		},
		swipe(event) {
			this.scrollDelta = event.changedTouches[0].pageX > 200 ? 1 : -1;
		}
	}
};
</script>
