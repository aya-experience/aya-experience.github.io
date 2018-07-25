<template>
	<a-entity id="menu" position="0.671 0.018 0.262" rotation="-0.324 7.608 92.471" >
		<a-box
			@click="exit"
			material="transparent: true"
			src="#exit"
			position="0.5 0 0"
			scale="0 0.150 0.150"/>
		<a-entity
			@click="changeMap()"
			position="0.491 -0.016 -0.169"
			rotation="0.050 -100 2.240"
			scale="0.3 0.3 0.3"
			obj-model="obj: #arrow-obj; mtl: #arrow-mtl"/>
	</a-entity>
</template>

<script>
export default{
	methods: {
		exit() {
			this.$router.push('/');
		},
		changeMap() {
			this.$emit('map');
		}
	}
};
</script>
