<template>
	<a-entity :position="position">
		<a-entity @mouseenter="activateHUD" @mouseleave="hideHUD" @mouseout="hideHUD">
			<a-entity :gltf-model="model" :rotation="rotation" scale="0.080 0.080 0.080"/>
		</a-entity>
		<a-entity :rotation="rotation" position="-0.15 0.3 0.2" :scale="friendScale" :obj-model="friend"/>
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
		model: {
			type: String,
			default: 'url(/vr/astronaute/Spationot.gltf)'
		},
		member: {
			type: Object,
			default: () => {}
		},
		friend: {
			type: String,
			default: 'obj: #perso-obj; mtl: #perso-mtl'
		},
		friendScale: {
			type: String,
			default: '0.03 0.03 0.03'
		}
	},
	data() {
		return {
			displayHUD: false
		};
	},
	methods: {
		activateHUD() {
			this.displayHUD = true;
		},
		hideHUD() {
			this.displayHUD = false;
		}
	}
};
</script>
