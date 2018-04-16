<template>
	<a-entity id="lego" :position="position" :rotation="rotation" scale="0.1 0.1 0.1">
		<a-entity @mouseenter="toggleHUD" @mouseleave="toggleHUD" @mouseout="toggleHUD">
			<a-entity id="tete" :rotation="head">
				<a-obj-model id="helmet" src="#astro" :material="material"/>
				<a-obj-model id="head" src="#astro-tete" mtl="#astro-tete-mtl"/>
			</a-entity>
			<a-entity id="arm-r" position="-0.483 -0.725 -0.004" :rotation="armr">
				<a-obj-model id="arm" src="#astro-bras-d" :material="material"/>
				<a-obj-model id="hand" position="-0.19 -0.5 -0.19" src="#astro-main-d" :material="material"/>
			</a-entity>
			<a-entity id="arm-l" position="0.472 -0.725 0.050" :rotation="arml">
				<a-obj-model id="arm" src="#astro-bras-g" :material="material"/>
				<a-obj-model id="hand" position="0.19 -0.5 -0.19" src="#astro-main-g" :material="material"/>
			</a-entity>
			<a-obj-model
				id="leg-l"
				position="-0.3 -1.75 0"
				:rotation="legl"
				src="#astro-jambe-g"
				:material="material"/>
			<a-obj-model
				id="leg-r"
				position="0.3 -1.75 0"
				:rotation="legr"
				src="#astro-jambe-d"
				:material="material"/>
			<a-obj-model id="chest" position="0 -0.93 0" src="#astro-buste" :material="material"/>
			<a-obj-model id="gas" position="0 -0.4 0" src="#astro-gas" :material="material"/>
			<a-obj-model id="hips" position="0 -0.93 0" src="#astro-hanche" :material="material"/>
			<a-image src="#aya" position="0.002 -0.873 0.311" scale="0.480 0.810 1"/>
		</a-entity>
		<hud :member="member" v-if="displayHUD"/>
	</a-entity>
</template>

<script>
import HUD from '~/components/team/hud.vue';

export default {
	components: {
		hud: HUD
	},
	props: {
		position: {
			type: String,
			default: '0 0 0'
		},
		rotation: {
			type: String,
			default: '0 0 0'
		},
		color: {
			type: String,
			default: 'red'
		},
		member: {
			type: Object,
			default: () => {}
		},
		armr: {
			type: String,
			default: '-76.528 63.972 -55.355'
		},
		arml: {
			type: String,
			default: '-81.989 -85.932 85.021'
		},
		legr: {
			type: String,
			default: '0 0 0'
		},
		legl: {
			type: String,
			default: '0 0 0'
		},
		head: {
			type: String,
			default: '0 0 0'
		}
	},
	data() {
		return {
			displayHUD: false
		};
	},
	computed: {
		material() {
			return `color: ${this.color}; metalness: 0.5`;
		}
	},
	mounted() {
		setTimeout(() => {
			document.querySelector('#lego').addEventListener('loaded', () => {
				this.$store.commit('vr/loadLego');
			});
		}, 0);
	},
	methods: {
		toggleHUD() {
			this.displayHUD = !this.displayHUD;
		}
	}
};
</script>
