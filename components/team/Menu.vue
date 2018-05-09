<!--eslint-disable-->
<template>
	<a-entity id="menu" position="-0.642 0.363 0.371" rotation="0 -18.940 90" >
		<a-box @click="exit" material="transparent: true" src="#exit" position="0.5 0 0" scale="0 0.150 0.150"></a-box>
		<a-entity position="0.491 -0.016 0.169" rotation="0.050 87.750 2.240" scale="0.3 0.3 0.3" obj-model="obj: #arrow-obj; mtl: #arrow-mtl"/>
		<a-entity position="0.491 -0.016 -0.169" rotation="0.050 -100 2.240" scale="0.3 0.3 0.3" obj-model="obj: #arrow-obj; mtl: #arrow-mtl"/>
	</a-entity>
</template>

<script>
export default{
	methods: {
		exit() {
			this.$router.push('/');
		}
	}
};
</script>
