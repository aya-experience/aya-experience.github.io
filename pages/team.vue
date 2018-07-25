<template>
	<div class="container">
		<img :class="isLoaded ? '' : 'loading'" class="center" src="/photos/lune.jpg">
		<no-ssr>
			<a-scene>
				<a-assets>
					<a-asset-item id="arrow-obj" src="/vr/arrow/model.obj"/>
					<a-asset-item id="arrow-mtl" src="/vr/arrow/materials.mtl"/>

					<a-asset-item id="astro" src="/vr/astronaut-v2/casque.obj"/>
					<a-asset-item id="astro-mtl" src="/vr/astronaut-v2/casque.mtl"/>

					<a-asset-item id="astro-tete" src="/vr/astronaut-v2/tàte.obj"/>
					<a-asset-item id="astro-tete-mtl" src="/vr/astronaut-v2/tàte.mtl"/>

					<a-asset-item id="astro-bras-d" src="/vr/astronaut-v2/bras-d.obj"/>
					<a-asset-item id="astro-bras-d-mtl" src="/vr/astronaut-v2/bras-d.mtl"/>

					<a-asset-item id="astro-bras-g" src="/vr/astronaut-v2/bras-g.obj"/>
					<a-asset-item id="astro-bras-mtl" src="/vr/astronaut-v2/bras-g.mtl"/>

					<a-asset-item id="astro-main-d" src="/vr/astronaut-v2/main-d.obj"/>
					<a-asset-item id="astro-main-g" src="/vr/astronaut-v2/main-g.obj"/>

					<a-asset-item id="astro-jambe-d" src="/vr/astronaut-v2/jambe-d.obj"/>
					<a-asset-item id="astro-jambe-g" src="/vr/astronaut-v2/jambe-g.obj"/>

					<a-asset-item id="astro-buste" src="/vr/astronaut-v2/buste.obj"/>
					<a-asset-item id="astro-buste-mtl" src="/vr/astronaut-v2/buste.mtl"/>

					<a-asset-item id="astro-gas" src="/vr/astronaut-v2/gas.obj"/>
					<a-asset-item id="astro-hanche" src="/vr/astronaut-v2/hanche.obj"/>

					<a-asset-item id="planet" src="/vr/planet/planet-v2.7.obj"/>
					<a-asset-item id="planet-mtl" src="/vr/planet/planet-v2.7.mtl"/>

					<img id="hud" src="/vr/HUD/hudLine.png">
					<img id="sky" src="/vr/space.jpg">
					<img id="exit" src="/vr/menu/exit.png">
					<img id="aya" src="/material/logo-symbole-blanc.png">
				</a-assets>

				<my-camera/>
				<a-sky radius="10" src="#sky"/>
				<a-entity position="-1.8 0.768 0">
					<a-planet>
						<!-- ICE -->
						<a-lego
							:member="ayaTeam[0]"
							legl="-90 0 0"
							legr="-90 0 0"
							position="-0.650 3.835 0.115"
							rotation="4.071 -150.498 -10.967"/>
						<a-lego
							:member="ayaTeam[1]"
							color="blue"
							arml="18.729 -2.819 7.200"
							armr="-82.293 51.008 -53.242"
							legl="53.097 -1.572 1.001"
							legr="-47.551 -3.350 -2.562"
							head="-0.740 47.952 -0.841"
							position="0.092 3.993 -0.113"
							rotation="-3.949 -162.729 1.481"/>
						<a-lego
							:member="ayaTeam[2]"
							arml="-68.225 -19.314 18.334"
							armr="-48.012 168.870 -172.399"
							head="-0.919 -29.034 2.952"
							color="indigo"
							position="0.101 3.819 -0.734"
							rotation="2.507 -45.879 3.917"/>
						<a-lego
							:member="ayaTeam[3]"
							arml="0 0 0"
							armr="0 0 0"
							color="snow"
							position="-0.333 3.878 -0.425"
							rotation="14.777 -93.633 0.744"/>
						<a-lego
							:member="ayaTeam[4]"
							arml="-11.918 176.725 175.179"
							armr="-13.847 -179.546 -173.422"
							color="tomato"
							position="-0.373 4.012 -0.009"
							rotation="12.568 -121.483 -3.425"/>
						<!-- MOON -->
						<a-image position="2.448 2.886 -0.31" rotation="-44.494 -100.567 6" scale="0.050 0.080 0.100" src="#aya"/>
						<a-lego
							id="current"
							:member="ayaTeam[5]"
							color="pink"
							armr="-71.908 153.201 -154.785"
							head="-3.410 -54.175 -0.182"
							position="2.521 2.977 -0.162"
							rotation="39.323 159.037 38.253"/>
						<a-lego
							:member="ayaTeam[6]"
							color="orange"
							legl="-90 0 0"
							legr="-90 0 0"
							position="2.308 2.988 -1.145"
							rotation="34.859 73.134 -24.565"/>
						<a-lego
							:member="ayaTeam[7]"
							color="teal"
							arml="18.729 -2.819 7.200"
							armr="-82.293 51.008 -53.242"
							legl="53.097 -1.572 1.001"
							legr="-47.551 -3.350 -2.562"
							head="-0.740 47.952 -0.841"
							position="2.553 2.579 -1.510"
							rotation="14.280 43.051 -39.855"/>
						<a-lego
							:member="ayaTeam[8]"
							color="sienna"
							arml="-11.918 176.725 175.179"
							armr="-13.847 -179.546 -173.422"
							position="2.520 2.955 -0.741"
							rotation="28.303 60.936 -31.802"/>
						<a-lego
							:member="ayaTeam[9]"
							color="plum"
							position="2.809 2.450 -1.228"
							rotation="26.200 57.752 -33.485"/>
						<!-- GRASS -->
						<a-lego
							:member="ayaTeam[10]"
							color="black"
							arml="-11.918 176.725 175.179"
							armr="-13.847 -179.546 -173.422"
							position="1.759 2.012 -2.959"
							rotation="64.665 129.983 -26.445"/>
						<a-lego
							:member="ayaTeam[11]"
							color="yellow"
							legl="-90 0 0"
							legr="-90 0 0"
							position="1.790 1.103 -3.343"
							rotation="19.160 73.990 -66.752"/>
						<a-lego
							:member="ayaTeam[12]"
							color="salmon"
							legl="-90 0 0"
							legr="-90 0 0"
							head="-14.339 -36.655 1.065"
							position="1.382 1.523 -3.347"
							rotation="69.828 147.271 -2.488"/>
						<a-lego
							:member="ayaTeam[13]"
							color="slateblue"
							arml="18.729 -2.819 7.200"
							armr="-82.293 51.008 -53.242"
							legl="53.097 -1.572 1.001"
							legr="-47.551 -3.350 -2.562"
							head="-0.740 47.952 -0.841"
							position="2.254 1.602 -2.749"
							rotation="69.676 164.384 13.922"/>
						<a-lego
							:member="ayaTeam[14]"
							arml="18.729 -2.819 7.200"
							armr="-82.293 51.008 -53.242"
							legl="53.097 -1.572 1.001"
							legr="-47.551 -3.350 -2.562"
							head="-0.740 47.952 -0.841"
							color="slategrey"
							position="1.831 1.566 -3.114"
							rotation="50.212 91.359 -54.416"/>
						<!-- DESERT -->
						<a-lego
							:member="ayaTeam[15]"
							color="tan"
							position="-1.102 0.251 -3.770"
							rotation="-25.056 -67.449 82.651"/>
						<a-lego
							:member="ayaTeam[16]"
							color="purple"
							arml="18.729 -2.819 7.200"
							armr="-82.293 51.008 -53.242"
							legl="53.097 -1.572 1.001"
							legr="-47.551 -3.350 -2.562"
							head="-0.740 47.952 -0.841"
							position="-1.523 -0.371 -3.613"
							rotation="-26.696 -67.356 89.141"/>
						<a-lego
							:member="ayaTeam[17]"
							color="peru"
							legl="-90 0 0"
							legr="-90 0 0"
							head="-14.339 -36.655 1.065"
							position="-1.916 -0.202 -3.450"
							rotation="-46.108 105.935 -89.051"/>
					</a-planet>
				</a-entity>
			</a-scene>
		</no-ssr>
	</div>
</template>

<style scoped>
.center {
	height: 100vh;
	width: 100vw;
	object-fit: cover;
}

.loading{
	z-index: 1;
}

.container {
  transition: all .5s cubic-bezier(.55,0,.1,1);
}

.page-leave-active {
  transition: opacity .5s
}
.page-leave-active {
  opacity: 0
}

</style>

<script>
import Camera from '~/components/team/camera.vue';
import Planet from '~/components/team/planet.vue';
import Lego from '~/components/team/lego.vue';

export default {
	components: {
		'my-camera': Camera,
		'a-lego': Lego,
		'a-planet': Planet
	},
	data() {
		return {
			loaded: false
		};
	},
	computed: {
		isLoaded() {
			return this.$store.state.vr.sceneLoaded
				&& this.$store.state.vr.legoLoaded
				&& this.$store.state.vr.planetLoaded;
		},
		ayaTeam() {
			return this.$store.state.vr.ayaTeam;
		}
	},
	mounted() {
		setTimeout(() => {
			document.querySelector('a-scene').addEventListener('loaded', () => {
				setTimeout(() => {
					this.$store.commit('vr/loadScene');
				}, 2500);
			});
		}, 0);
	},
	head() {
		return {
			link: this.ayaTeam.map(member => {
				if (member.img !== '') {
					return { rel: 'prefetch', href: `/ayapics/${member.img}` };
				}
				return '';
			})
		};
	}
};
</script>
