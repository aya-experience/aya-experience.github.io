<!--eslint-disable-->
<template>
	<a-entity id="world">
		<a-entity :position="position" scale="0.002 0.002 0.002" :gltf-model="type"/>
		<a-entity @click="changeMap(true)" position="-0.536 1.007 0.437" rotation="0 45 0" scale="0.5 0.5 0.5" obj-model="obj: #arrow-obj; mtl: #arrow-mtl"/>
		<a-entity @click="changeMap(false)" position="-0.40 1.007 0.13" rotation="0 -110 0" scale="0.5 0.5 0.5" obj-model="obj: #arrow-obj; mtl: #arrow-mtl"/>
		<slot/>
	</a-entity>
</template>

<script>
export default {
	props: {
		type: {
			type: String,
			default: '/vr/island/scene.gltf'
		}
	},
	data() {
		return {
			position: '4.738 0.768 0.000',
			posX: 4.738
		};
	},
	methods: {
		changeMap(back) {
			this.posX = back ? this.posX - 10.938 : this.posX + 10.938;
			this.position = this.posX + ' 0.768 0.000';
		}
	}
};
</script>

