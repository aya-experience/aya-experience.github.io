<template>
	<a-entity id="world">
		<a-entity :position="position">
			<a-entity
				v-for="item in type"
				:key="item.part"
				position="0 0 0"
				scale="0.002 0.002 0.002"
				:gltf-part="`src: #map; part: ${item.part}`"/>
			<slot/>
		</a-entity>
	</a-entity>
</template>

<script>
export default {
	props: {
		type: {
			type: Array,
			default: () => []
		},
		position: {
			type: String,
			default: '0 0 0'
		}
	}
};
</script>

