<!--eslint-disable-->
<template>
	<a-entity id="world">
		<a-entity :position="position" scale="0.002 0.002 0.002" :gltf-model="type"/>
		
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
			position: '4.738 0.768 0.000'
		};
	}
};
</script>

